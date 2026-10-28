import unittest

from agent_nexus import AgentNexus, ToolResult


def add(args):
    return ToolResult(ok=True, output=args["a"] + args["b"])


class AgentNexusTests(unittest.TestCase):
    def make_agent(self, *, max_steps=3):
        return AgentNexus(
            tools={"add": add},
            allowed_tools={"add"},
            max_steps=max_steps,
        )

    def test_runs_registered_allowed_tool(self):
        result = self.make_agent().run([
            {"tool": "add", "args": {"a": 2, "b": 3}}
        ])
        self.assertTrue(result.ok)
        self.assertEqual(result.final_output, 5)
        self.assertEqual(result.trace[0].status, "ok")

    def test_blocks_tool_not_on_allowlist(self):
        agent = AgentNexus(
            tools={"add": add, "danger": add},
            allowed_tools={"add"},
        )
        result = agent.run([{"tool": "danger", "args": {}}])
        self.assertFalse(result.ok)
        self.assertEqual(result.trace[0].status, "blocked")
        self.assertIn("allowlist", result.error)

    def test_rejects_plan_over_step_limit(self):
        result = self.make_agent(max_steps=1).run([
            {"tool": "add", "args": {"a": 1, "b": 2}},
            {"tool": "add", "args": {"a": 3, "b": 4}},
        ])
        self.assertFalse(result.ok)
        self.assertEqual(result.trace, ())
        self.assertIn("limit", result.error)

    def test_stops_when_tool_raises(self):
        def broken(_args):
            raise RuntimeError("demo failure")
        agent = AgentNexus(tools={"broken": broken}, allowed_tools={"broken"})
        result = agent.run([{"tool": "broken", "args": {}}])
        self.assertFalse(result.ok)
        self.assertEqual(result.trace[0].status, "blocked")
        self.assertIn("RuntimeError", result.error)

    def test_rejects_non_mapping_args(self):
        result = self.make_agent().run([{"tool": "add", "args": "bad"}])
        self.assertFalse(result.ok)
        self.assertIn("mapping", result.error)


if __name__ == "__main__":
    unittest.main()
