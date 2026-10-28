# SUPERPOWER AI — Flagship Build Map

> Three practical projects. One recognizable identity. Evidence before hype.

This file records the current implementation plan for the flagship sequence. The folders in this repository are staging areas until dedicated repositories are created; do not imply that separate GitHub repositories exist yet.

## 1. powerof-ai — Flagship brand and practical AI showcase

**Staging path:** `powerof-ai/`

Current prototype: a browser-only AI implementation brief builder. It structures a user's business problem, target user, desired outcome, available tools, constraints, and proof plan into a copyable brief.

- [x] Static interactive demo
- [x] No API key or backend required
- [x] Clear disclosure that it does not call an AI model
- [x] README with quick-start and limitations
- [ ] Manual browser QA on desktop and mobile
- [ ] Add practical templates based on user feedback

## 2. leadstorm-ai — Customer-facing lead follow-up

**Current repository:** `Lead-follow-up-automation`

The existing browser application is a privacy-first lead tracker with local browser storage, search, status and due-date filters, CSV import/export, and fictional demo data.

- [x] Existing runnable browser prototype
- [x] Local-only data model documented
- [x] CSV import/export and smoke tests documented
- [ ] Manual browser QA and accessibility review
- [ ] Validate the workflow with a service-business owner before adding integrations
- [ ] Keep outbound messages approval-based if messaging is added

## 3. agent-nexus — Engineering-focused agent framework

**Staging path:** `agent-nexus/`

Current prototype: a dependency-free Python orchestration skeleton that executes explicitly registered local tools under an allowlist and step budget, with structured traces and unit tests.

- [x] Explicit tool registry and allowlist
- [x] Maximum plan-step budget
- [x] Structured run trace
- [x] Unit tests for normal and blocked execution
- [ ] Run tests in a supported Python environment
- [ ] Add typed tool schemas and approval gates
- [ ] Design a threat model before model-provider or network integrations

## Shared publication standard

Each flagship must include a clear hook, defined problem, honest promise, reproducible proof, quick start, real upgrade path, and only genuine urgency. See [the repository standard](docs/SUPERPOWER_AI_REPOSITORY_STANDARD.md).

## Important status

The new staging files are being published inside the existing `Lead-follow-up-automation` repository because the connected GitHub tools can write files but do not expose repository creation. Create dedicated repositories before presenting these as three separate GitHub repositories. Existing files are not being overwritten by this staging work.
