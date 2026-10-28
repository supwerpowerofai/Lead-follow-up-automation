# agent-nexus — Explicit, Testable Agent Orchestration

> Give an agent a task, a bounded set of tools, and a trace you can inspect.

**SUPERPOWER AI** · Engineering flagship · Starter prototype

Agent Nexus is a small, dependency-free Python starter for deterministic tool orchestration. It demonstrates explicit tool allowlists, a maximum step budget, structured results, and an execution trace.

## Important scope note

This starter is **not an autonomous LLM agent** and does not call external services. A caller supplies a plan and registers local Python functions as tools. This makes the safety and orchestration boundary inspectable before any model or network integration is added.

## Requirements

- Python 3.10+
- No third-party dependencies

## Quick start

From this directory:

```bash
python -m unittest -v
```

Example:

```python
from agent_nexus import AgentNexus, ToolResult

def add_numbers(args):
    return ToolResult(ok=True, output={"sum": args["a"] + args["b"]})

agent = AgentNexus(
    tools={"add_numbers": add_numbers},
    allowed_tools={"add_numbers"},
    max_steps=3,
)
result = agent.run([
    {"tool": "add_numbers", "args": {"a": 2, "b": 3}},
])
print(result.final_output)
print(result.trace)
```

## Guardrails demonstrated

- Unknown or disallowed tools are rejected.
- Plans are bounded by a maximum step count.
- Tool results and errors are captured in a trace.
- Tools are explicit local callables; no shell, network, or filesystem tools are enabled by default.
- A failed step stops the run rather than silently continuing.

## Not included

No LLM provider, tool discovery, credentials, network access, persistent memory, parallel execution, or production isolation. Add these only with a threat model, explicit permissions, and tests.

## Roadmap

- [x] Minimal deterministic orchestration
- [x] Tool allowlist and step budget
- [x] Structured trace and unit tests
- [ ] Add typed tool schemas
- [ ] Add model-provider adapter behind a separate interface
- [ ] Add approval gates for side-effecting tools
- [ ] Evaluate sandboxing before allowing untrusted code

Prototype; not production-certified.
