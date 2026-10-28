# Manual QA Checklist

Run these checks in a current desktop browser and at least one mobile-sized viewport. Use fictional data only.

## Core workflow

- [ ] Load demo data and verify summary counts.
- [ ] Add a lead with a name, channel, status, and next action.
- [ ] Edit the lead and confirm the updated values render.
- [ ] Delete a test lead and confirm it disappears.
- [ ] Search by name, service, channel, and notes.
- [ ] Filter by each status.
- [ ] Check due-today, overdue, and missing-next-action filters.
- [ ] Confirm closed leads are not counted as open or overdue.

## Persistence and export

- [ ] Refresh the page and confirm records persist in the same browser profile.
- [ ] Export CSV and open it in a spreadsheet editor.
- [ ] Verify commas, quotes, Unicode text, blank fields, and dates are preserved.
- [ ] Confirm exports are treated as sensitive if populated with real data.

## Import validation

- [ ] Import `sample-leads.csv`.
- [ ] Import the same sample again and verify duplicate IDs are skipped.
- [ ] Try an empty CSV, missing name header, missing lead name, malformed quoting, and invalid date.
- [ ] Confirm the user receives a useful error and invalid data is not silently accepted.
- [ ] Cancel the import confirmation and verify no rows are added.

## Accessibility and responsive layout

- [ ] Complete the main workflow using only the keyboard.
- [ ] Verify visible focus indicators and logical tab order.
- [ ] Verify form labels, accessible names, and live status messages.
- [ ] Check that content remains usable at narrow widths and browser zoom.
- [ ] Check contrast and do not rely on color alone for status.

## Failure handling

- [ ] Test with browser storage disabled or full.
- [ ] Confirm a storage error is understandable and does not crash the page.
- [ ] Confirm the app remains honest about the difference between in-memory changes and saved data.

Record browser/version, date, expected result, actual result, and any defect. Do not mark this checklist complete without running the tests.
