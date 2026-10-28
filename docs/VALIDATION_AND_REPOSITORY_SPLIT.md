# Validation & Repository Separation Status

Last checked: 2026-10-29

## Current source of truth

Until the standalone repositories are created and verified, the canonical source remains:
https://github.com/supwerpowerofai/Lead-follow-up-automation

Do not delete or rename existing files as part of the split. Copy first, verify destination contents and history, then decide whether any source folders should remain as pointers.

## Validation completed

### Automated checks

- [x] Existing lead-tracker Node smoke-test workflow passed after the date-helper fix: https://github.com/supwerpowerofai/Lead-follow-up-automation/actions/runs/40755332983
- [x] PowerOfAI browser-prototype tests and the combined JavaScript smoke-test workflow passed: https://github.com/supwerpowerofai/Lead-follow-up-automation/actions/runs/40755232200
- [x] Agent Nexus Python unit-test workflow passed: https://github.com/supwerpowerofai/Lead-follow-up-automation/actions/runs/40753451922
- [x] Brand, go-to-market, content, and sales documents were fetched back from GitHub after publication.

### Fix applied

The lead tracker previously relied on `toLocaleDateString('en-CA')` to produce an ISO-style date string. The app now constructs a local YYYY-MM-DD date explicitly, avoiding browser/locale-dependent formatting for due-date comparisons.

## Current capability boundaries

### powerof-ai

- Browser-only form builds a structured implementation brief.
- No AI model call, network request, API key, server, persistence, or workflow execution.
- Automated checks cover script parsing, required fields, local brief output, and the stated no-network boundary.
- Manual browser testing, accessibility review, and mobile layout review remain open.

### leadstorm-ai / lead tracker

- Current source is the root `index.html`, `sample-leads.csv`, `ROADMAP.md`, and `tests/smoke.test.mjs`.
- Records are stored in local browser storage; CSV import/export is supported.
- No cloud sync, CRM connection, or automatic customer messaging.
- Automated smoke tests cover script parsing, UI elements, CSV parsing/aliases, sample import, duplicate IDs, export metadata, and storage failure reporting.
- Manual browser testing and real-user workflow validation remain open.

### agent-nexus

- Deterministic Python tool orchestrator with explicit allowlist, bounded steps, and execution trace.
- No LLM integration, network access, shell tools, or filesystem tools enabled by default.
- Unit-test workflow passed.
- Additional schema validation, adversarial tests, and a threat model remain open before any broader integrations.

## Standalone repository migration manifest

### 1. powerof-ai

Copy from current repository:
- `powerof-ai/README.md`
- `powerof-ai/index.html`

Add or adapt before first release:
- A repository-root `README.md` (use the existing README content, adapted for root).
- `LICENSE` only after confirming the intended license.
- A project-specific test workflow that runs the PowerOfAI test file from the new root.

### 2. leadstorm-ai

The prototype currently lives at the repository root. Copy these files into the new repository root:
- `index.html`
- `sample-leads.csv`
- `ROADMAP.md`
- `README.md`
- `LICENSE`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `tests/smoke.test.mjs`
- `tests/powerof-ai.test.mjs` only if it is moved to the PowerOfAI repository; do not keep it in Leadstorm if its relative paths would break.
- `.github/workflows/test.yml`

The current workflow runs all `tests/*.test.mjs`, so split the PowerOfAI-specific test into the PowerOfAI repo and ensure Leadstorm's test workflow runs only its own tests.

### 3. agent-nexus

Copy:
- `agent-nexus/README.md` as new repository-root `README.md`
- `agent-nexus/agent_nexus.py`
- `agent-nexus/test_agent_nexus.py`
- `.github/workflows/agent-nexus-tests.yml`, adapted to run from repository root (e.g. `python -m unittest -v`).

### Shared documentation

Keep these in the SUPERPOWER AI portfolio/source repository unless a dedicated documentation repository is intentionally created:
- `docs/SUPERPOWER_AI_REPOSITORY_STANDARD.md`
- `docs/SUPERPOWER_AI_BRAND_GUIDE.md`
- `docs/SUPERPOWER_AI_GO_TO_MARKET.md`
- `docs/SUPERPOWER_AI_CONTENT_PLAYBOOK.md`
- `docs/SUPERPOWER_AI_SALES_KIT.md`
- `SUPERPOWER_AI_UNIVERSE.md`

## Safe migration sequence

1. Create the three empty repositories under the intended GitHub owner with the intended visibility.
2. Copy each project's exact files; preserve commit history if possible, otherwise preserve the source commit links in the new README.
3. Adapt project-specific paths and CI workflows.
4. Verify each destination file by fetching it from GitHub.
5. Run each destination repository's CI and confirm a green result.
6. Check README links, sample data, license intent, security notes, and project boundaries.
7. Only after all checks pass, update the universe map with destination URLs.
8. Keep the original repository and its files intact until the new repositories are confirmed complete.

## Blocker

The connected GitHub actions available in this session support repository file reads/writes, branches, commits, and pull requests, but no repository-creation operation is currently exposed in the available tool list. The three new repositories have therefore **not** been created. This manifest preserves the migration plan and identifies exactly what must be copied when repository creation is available.

## Manual QA still required

Automated CI is not a substitute for opening the pages in a real browser. Before calling these production-ready, test desktop and mobile behavior, keyboard access, browser storage failure, CSV import/export in a real browser, and first-time-user comprehension. Use fictional records until privacy, access, backup, and retention requirements are agreed.
