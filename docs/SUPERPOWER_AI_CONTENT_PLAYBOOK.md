# SUPERPOWER AI — Content & Launch Playbook

## Content pillars

### 1. Build in public
Show a real commit, a real bug, a design decision, or a feature working. Explain what changed and why.

### 2. Useful mini-demonstrations
Short clips or GIFs: input → action → output. Use fictional or authorized data.

### 3. Problem-first education
Explain one costly workflow friction and a practical way to diagnose it. Avoid unsubstantiated cost statistics.

### 4. Engineering credibility
Publish architecture notes, tests, failure cases, security boundaries, and reproducible setup instructions.

### 5. Customer discovery
Share lessons from conversations only in anonymized form and with appropriate permission. Never invent quotes or customer outcomes.

## Reusable post template

Hook: [specific question or outcome]

Problem: [a recognizable situation]

Demonstration: [what the tool does, with real output]

What I learned: [a real observation or limitation]

Try it: [direct link to the repository or demo]

Next step: [one useful action: run the demo, open an issue, or request a scoped walkthrough]

## Launch post A — PowerOfAI

A vague business problem is a weak starting point for an AI build.

I built a small browser-based tool that turns a problem, target user, desired outcome, available tools, and constraints into a structured implementation brief.

It doesn't call an AI model or pretend to solve the business problem for you. It helps make the next build step clearer.

Try the prototype: https://github.com/supwerpowerofai/Lead-follow-up-automation/tree/main/powerof-ai

I'm looking for feedback on whether the resulting brief is useful enough to take into a real implementation.

## Launch post B — Lead follow-up

A lead tracker is only useful if the next action is obvious.

The existing prototype supports local lead tracking, search, status and due-date filters, and CSV import/export. The data stays in the browser in the current design.

The next step is to validate whether this workflow helps a real service business manage enquiries more reliably.

Explore the repository: https://github.com/supwerpowerofai/Lead-follow-up-automation

## Launch post C — Agent Nexus

An agent framework needs boundaries—not just a clever prompt.

Agent Nexus starts with explicit local tools, an allowlist, a step budget, and an execution trace. It is deterministic at this stage; it does not yet call an LLM.

That makes the current behavior inspectable before adding more complex integrations.

Review the code and tests: https://github.com/supwerpowerofai/Lead-follow-up-automation/tree/main/agent-nexus

## Launch checklist

- [ ] Verify each link and default branch.
- [ ] Capture genuine screenshots from the current version.
- [ ] Run the quick start from a clean environment.
- [ ] Run tests and publish actual results.
- [ ] Clearly label prototype versus stable status.
- [ ] Remove secrets, private customer data, and unsupported claims.
- [ ] Add a real contact route only if it is monitored.
- [ ] Invite specific feedback with a clear question.
- [ ] Track replies and useful feedback, not vanity metrics alone.

## Ethical persuasion rules

- Curiosity: demonstrate a surprising capability, not a bait-and-switch.
- Aspiration: show a skill or workflow the user can learn.
- FOMO: discuss real changes in tools or workflows, not threats or shame.
- Scarcity: state only genuine availability constraints.
- Social proof: use verifiable evidence and permissioned testimonials only.
- Financial desire: describe plausible value as a testable hypothesis, never guaranteed income.

## Suggested content cadence

Start with two or three genuinely useful posts per week rather than automated low-quality volume. Every post should contain a distinct insight, demonstration, or lesson. Do not imply posts have been published unless they actually have.
