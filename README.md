# Lead Follow-Up Tracker

A lightweight, browser-only lead tracker for small service businesses. Record enquiries, set a next action, and review due or overdue follow-ups without installing dependencies or sending customer messages automatically.

**Project:** OPERONIX AI  
**Status:** Early prototype — use fictional data until you have tested the app and reviewed your privacy requirements.

## What it does today

- Add, edit, and delete lead records.
- Track lead status, enquiry channel, service, owner, date received, last contact, next follow-up, and notes.
- Search leads and filter by status, due today, overdue, or missing next action.
- See open, due-today, overdue, and booked counts.
- Import and export CSV files.
- Keep records in the current browser profile using local storage.

## What it does not do

- No server, accounts, cloud sync, or multi-device access.
- No automatic WhatsApp, SMS, email, or CRM integrations.
- No AI-generated or automatically sent customer messages.
- No guarantee that a lead converts or that a follow-up improves revenue.

## Quick start

1. Open [index.html](index.html) in a current desktop or mobile browser.
2. Select **Load demo data** to explore with fictional records, or add a test lead manually.
3. To import the included examples, select **Import CSV** and choose [sample-leads.csv](sample-leads.csv). Review the import confirmation before proceeding.
4. Add a next follow-up date to open leads and use the due-date filters for a daily review.
5. Select **Export CSV** to save a backup before clearing browser data or changing devices.

No package manager, build step, API key, or third-party service is required. The app has no network backend. Data is stored only in that browser profile and is not synced. Exported CSV files are unencrypted; store them carefully.

## CSV format

The importer accepts common field names such as `name` or `customer_name`, `channel` or `contact_channel`, `service` or `service_requested`, `nextDate` or `next_follow_up_date`, and `notes` or `outcome_notes`. Dates should use `YYYY-MM-DD`. The sample file uses fictional rows.

If a CSV contains malformed quoting, missing names, or invalid dates, the app should display an import error instead of importing those rows.

## Suggested daily workflow

1. Capture each genuine enquiry once and assign an owner.
2. Confirm the status and next action.
3. Review due-today and overdue leads at the start of the day.
4. Contact only people who have enquired or otherwise consented, using the business-approved channel and message.
5. Record the outcome and next action; stop if someone opts out.
6. Close a lead only when the outcome is known.

See [the workflow guide](docs/workflow.md), [follow-up templates](docs/follow-up-templates.md), and [pilot validation checklist](docs/test-cases.md).

## Development and checks

The app is a single static HTML file. Automated smoke tests use Node.js 20 or newer:

```bash
node --test tests/smoke.test.mjs
```

GitHub Actions runs these checks on pushes and pull requests. A passing automated smoke test does **not** replace manual browser testing. The prototype still needs a real-browser check of import/export, local storage, keyboard use, and mobile layouts before being relied on for live operations.

## Project status and roadmap

See [ROADMAP.md](ROADMAP.md) for intended priorities and [docs/launch-checklist.md](docs/launch-checklist.md) for the release gate. Planned items are not promises or completed features.

## Privacy and security

- Do not commit real customer records, credentials, API keys, or tokens.
- Get permission before handling business or customer data.
- Avoid sensitive information in notes.
- Remember that anyone with access to the same browser profile may be able to access locally stored records.
- Respect consent, opt-outs, business hours, and platform rules.
- Review [SECURITY.md](SECURITY.md) before reporting a security concern.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). This project is released under the [MIT License](LICENSE).
