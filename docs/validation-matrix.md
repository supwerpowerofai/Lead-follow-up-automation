# Manual Validation Matrix

Use fictional data until the workflow has been reviewed for the intended business. Record the browser, operating system, date, tester, and observed result for every run. Do not mark a test passed without executing it.

## Core workflows

| ID | Scenario | Steps | Expected result | Status |
| --- | --- | --- | --- | --- |
| UI-01 | Add a lead | Add a fictional lead with a name and save | Lead appears once; counters and list update | Not run here |
| UI-02 | Reject blank name | Submit the form without a name | Browser validation prevents saving | Not run here |
| UI-03 | Edit a lead | Change status and next date | Existing record is updated, not duplicated | Not run here |
| UI-04 | Delete a lead | Delete a fictional record and confirm | Record disappears from the list | Not run here |
| UI-05 | Search and filter | Search by name/service; apply status and due filters | Only matching records are displayed | Not run here |
| DATA-01 | Persistence | Save a lead, reload the page in the same browser | Record remains available in that browser profile | Not run here |
| DATA-02 | Storage failure | Simulate full or blocked local storage | User receives a clear warning; no false persistence claim | Automated smoke test exists; manual browser test not run here |
| CSV-01 | Import sample | Import `sample-leads.csv` | Preview/confirmation appears and fictional rows import | Not run here |
| CSV-02 | Duplicate import | Import the same sample again | Duplicate supplied IDs are skipped | Automated smoke test exists; manual browser test not run here |
| CSV-03 | Invalid date | Import a row with an impossible date | Import is rejected with a useful error | Automated parser test exists; manual browser test not run here |
| CSV-04 | Malformed quoting | Import CSV with an unclosed quote | Import fails safely with a clear error | Automated parser test exists; manual browser test not run here |
| CSV-05 | Export round-trip | Export, then import into a clean test profile | Supported fields and commas/quotes survive the round-trip | Not run here |
| A11Y-01 | Keyboard use | Navigate controls using keyboard only | Controls remain reachable and focus is visible | Not run here |
| A11Y-02 | Screen-reader labels | Inspect form controls and status announcements | Controls have meaningful labels and feedback is announced | Not run here |
| RESPONSIVE-01 | Narrow viewport | Test at a 320px-wide viewport | No critical controls are unreachable; table can be accessed | Not run here |
| PRIV-01 | Demo safety | Load demo data and inspect all names/notes | Only fictional sample data is present | Not run here |
| PRIV-02 | Data handling | Export a sample CSV and review storage behavior | No network upload occurs; exported file is treated as sensitive | Not run here |

## Release gate

Do not describe the prototype as production-ready until:

- The automated suite passes in CI.
- Core workflows have been tested in at least one current desktop browser and one mobile-sized viewport.
- Import/export edge cases and storage failure behavior have been exercised.
- Keyboard and basic accessibility checks are complete.
- Privacy, consent, retention, backup, and access requirements are documented for the actual use case.
- All public claims accurately describe what has been tested and what remains unsupported.

## Results log

Append a dated entry for each real test session:

- Date and tester:
- Commit tested:
- Browser / OS / viewport:
- Tests executed:
- Passed:
- Failed:
- Evidence (screenshots/logs, with no customer data):
- Follow-up issues:
