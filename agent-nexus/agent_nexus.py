"""Small, deterministic tool orchestrator for the Agent Nexus starter.

This module deliberately does not invoke an LLM or provide network, shell, or
filesystem tools. Callers must register each tool explicitly.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Callable, Mapping, Sequence


Tool = Callable[[Mapping[str, Any]], "ToolResult"]


@dataclass(frozen=True)
class ToolResult:
    ok: bool
    output: Any = None
    error: str | None = None


@dataclass(frozen=True)
class TraceEntry:
    step: int
    tool: str
    status: str
    output: Any = None
    error: str | None = None
    timestamp: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


@dataclass(frozen=True)
class RunResult:
    ok: bool
    final_output: Any
    trace: tuple[TraceEntry, ...]
    error: str | None = None


class AgentNexus:
    """Run a supplied sequence of explicit tool calls under a bounded policy."""

    def __init__(
        self,
        *,
        tools: Mapping[str, Tool],
        allowed_tools: set[str] | frozenset[str],
        max_steps: int = 5,
    ) -> None:
        if max_steps < 1:
            raise ValueError("max_steps must be at least 1")
        unknown = set(allowed_tools) - set(tools)
        if unknown:
            raise ValueError(f"Allowed tools are not registered: {sorted(unknown)}")
        self._tools = dict(tools)
        self._allowed = frozenset(allowed_tools)
        self._max_steps = max_steps

    def run(self, plan: Sequence[Mapping[str, Any]]) -> RunResult:
        """Execute plan steps in order; stop on policy violations or tool errors."""
        trace: list[TraceEntry] = []
        if len(plan) > self._max_steps:
            return RunResult(
                ok=False,
                final_output=None,
                trace=(),
                error=f"Plan has {len(plan)} steps; limit is {self._max_steps}.",
            )

        last_output: Any = None
        for index, step in enumerate(plan, start=1):
            tool_name = step.get("tool")
            args = step.get("args", {})
            if not isinstance(tool_name, str) or not tool_name:
                return self._failure(trace, index, str(tool_name), "Tool name must be a non-empty string.")
            if not isinstance(args, Mapping):
                return self._failure(trace, index, tool_name, "Tool args must be a mapping.")
            if tool_name not in self._allowed:
                return self._failure(trace, index, tool_name, "Tool is not in the allowlist.")
            tool = self._tools.get(tool_name)
            if tool is None:
                return self._failure(trace, index, tool_name, "Tool is not registered.")

            try:
                result = tool(dict(args))
                if not isinstance(result, ToolResult):
                    return self._failure(
                        trace, index, tool_name,
                        "Tool must return a ToolResult instance."
                    )
            except Exception as exc:  # Keep exception details in the trace for local debugging.
                return self._failure(trace, index, tool_name, f"{type(exc).__name__}: {exc}")

            if not result.ok:
                entry = TraceEntry(
                    step=index, tool=tool_name, status="error",
                    output=result.output, error=result.error or "Tool reported failure."
                )
                trace.append(entry)
                return RunResult(False, result.output, tuple(trace), entry.error)

            last_output = result.output
            trace.append(TraceEntry(
                step=index, tool=tool_name, status="ok", output=result.output
            ))

        return RunResult(True, last_output, tuple(trace))

    @staticmethod
    def _failure(
        trace: list[TraceEntry], step: int, tool: str, message: str
    ) -> RunResult:
        trace.append(TraceEntry(
            step=step, tool=tool, status="blocked", error=message
        ))
        return RunResult(False, None, tuple(trace), message)
