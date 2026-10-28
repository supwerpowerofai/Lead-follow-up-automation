# Lead Follow-Up Tracker

A privacy-first, dependency-free lead follow-up tracker for small service businesses. Capture enquiries, assign ownership, record the next action, and review due or overdue follow-ups from a single browser-based interface.

**Maintainer:** [@supwerpowerofai](https://github.com/supwerpowerofai)  
**Project:** OPERONIX AI  
**Status:** Prototype / portfolio project — not yet production-certified  
**License:** MIT

[Open the repository](https://github.com/supwerpowerofai/Lead-follow-up-automation) · [Review the roadmap](ROADMAP.md) · [Read the workflow guide](docs/workflow.md)

## Why this exists

Small teams can lose track of enquiries when lead details live across inboxes, calls, spreadsheets, and chat apps. This project demonstrates a simple operational baseline: every enquiry should have a status, an owner where appropriate, and a clear next action.

It is intentionally conservative: it does not message customers automatically, claim to increase conversion, or transmit records to a server.

## Current capabilities

- Create, edit, and delete lead records.
- Track enquiry channel, requested service, status, owner, dates, and brief notes.
- Search records and filter by status, due today, overdue, or missing next action.
- View open, due-today, overdue, and booked counts.
- Import and export CSV, with header aliases and duplicate-ID handling.
- Load fictional demonstration records.
- Store data locally in the current browser profile.
- Run Node.js smoke tests through GitHub Actions.

## Quick start

No package manager or build step is required.

1. Clone or download this repository.
2. Open `index.html` in a current browser.
3. Choose **Load demo data** to explore fictional records.
4. Try search, status and due-date filters, then export a CSV backup.
5. Test import using `sample-leads.csv`.

For development checks, use Node.js 20 or newer:

```bash
node --test tests/smoke.test.mjs
```

Automated smoke tests are useful, but they are not a substitute for manual testing in current desktop and mobile browsers.

## Data and privacy model

- Records stay in the browser's local storage; there is no application server or cloud sync.
- Data does not move between devices or browser profiles.
- Anyone with access to the same browser profile may be able to access the records.
- CSV exports are not encrypted. Store them securely and delete them when no longer needed.
- Use fictional data for demos and tests. Obtain permission before entering real customer data.
- Do not store passwords, payment details, sensitive personal information, or secrets in lead notes.

See [Privacy and Security Notes](docs/privacy-security.md) and [Manual QA Checklist](docs/manual-qa-checklist.md).

## What this project does not do

This prototype does not include user accounts, role-based access, a backend database, CRM integrations, AI message generation, automated WhatsApp/SMS/email, or delivery guarantees. Those are separate future projects, not existing features.

## Architecture

The application is a single static HTML file containing its interface and client-side logic. Browser local storage is the persistence layer. CSV import/export is the data exchange mechanism. The test suite checks JavaScript syntax, required UI elements, CSV parsing and validation, sample-data compatibility, duplicate handling, export metadata, and storage failure messaging.

See [Architecture Notes](docs/architecture.md) for constraints and future production requirements.

## Roadmap

The roadmap separates implemented behaviour from future work. Planned features should not be interpreted as shipped or tested functionality.

- [x] Basic lead tracking and status filters
- [x] Local browser persistence
- [x] CSV import/export
- [x] Fictional sample data
- [x] Automated smoke-test workflow
- [ ] Manual browser QA across desktop and mobile
- [ ] Accessibility audit with keyboard and screen-reader checks
- [ ] User research with a small service-business pilot
- [ ] Production architecture review before adding accounts or cloud storage

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md), and [Security Policy](SECURITY.md). Keep changes focused, testable, accessible, and honest about limitations.

## Disclaimer

This is an early-stage demonstration and portfolio project. Do not use it as the sole system of record for critical customer operations until it has been reviewed, tested, and adapted to the relevant business and privacy requirements.
