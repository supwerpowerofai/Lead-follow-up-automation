# Engineering Quality Bar

This document defines how changes to Lead Follow-Up Tracker should be proposed and evaluated. It is a project checklist, not a claim that every item has already passed.

## Before changing code

1. State the user problem and expected observable result.
2. Identify data-handling, accessibility, and backward-compatibility risks.
3. Prefer the smallest change that solves the problem.
4. Add or update a regression test for reproducible defects where practical.

## Required verification

- Run `node --test tests/smoke.test.mjs` with Node.js 20 or newer.
- Record the actual command and outcome in the pull request.
- Manually verify browser-only interactions that the automated harness cannot exercise.
- Check CSV values containing commas, quotes, and line breaks when import/export code changes.
- Check keyboard operation, labels, focus visibility, and narrow viewport behaviour when UI code changes.

## Privacy and security

- Do not add network calls, analytics, third-party scripts, remote storage, or customer messaging without an explicit design review.
- Never commit credentials, tokens, real customer records, or private information.
- Treat local storage and exported CSV files as accessible to anyone with access to the user's browser profile or files.
- Document new permissions, dependencies, data flows, and failure modes before shipping.

## Definition of done

A change is ready to merge when:

- The intended behaviour is described and reviewable.
- Relevant automated tests pass, or an honest explanation records why they could not be run.
- Manual checks are listed for behaviour not covered by automated tests.
- Documentation and roadmap status match the implementation.
- Known limitations are explicit; no unverified production, security, or business outcome claims are made.
