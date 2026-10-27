# Roadmap

This roadmap describes intended work, not completed features. Priorities may change based on user feedback.

## P0 — Make the prototype trustworthy
- [x] Publish a dependency-free, browser-only lead tracker.
- [x] Document local-only storage and the lack of live messaging integrations.
- [x] Add CSV import/export support.
- [ ] Verify sample CSV import and export in a real browser.
- [ ] Test desktop and mobile layouts, keyboard use, and browser storage failure behavior.
- [ ] Collect first-time-user feedback and fix reproducible defects.

## P1 — Improve everyday usability
- [ ] Add duplicate detection and an explicit import preview.
- [ ] Add clear handling for unavailable or full browser storage.
- [ ] Add a visible backup/reminder workflow and clearer empty states.
- [x] Add automated regression checks for CSV parsing, sample import, duplicate IDs, export, and storage failures.

## P2 — Validate before automation
- [ ] Test the workflow with fictional records and an agreed pilot checklist.
- [ ] Validate the process with a service-business owner before building integrations.
- [ ] Only then evaluate optional reminders through Make or n8n.
- [ ] Keep customer-facing sending approval-based and document permissions, opt-outs, retry behavior, and audit logging before any integration.

## Out of scope until separately designed
- Cloud sync or hosted customer database.
- Automatic WhatsApp, email, or SMS sending.
- CRM integrations or AI-generated customer messages.
- Claims about revenue, conversion lift, or production readiness without measured evidence.
