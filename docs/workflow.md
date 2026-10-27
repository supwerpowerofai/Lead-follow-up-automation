# Proposed Lead Follow-Up Workflow

## Objective
Make it easy for a small service business to see which enquiries need action today. The initial version is manual-assisted; automation is a later step after the process is validated.

## Lead record fields
| Field | Purpose | Example |
|---|---|---|
| Lead ID | Non-sensitive reference | DEMO-001 |
| Date received | When enquiry arrived | 2026-10-01 |
| Customer name | Customer's preferred name; keep private in live data | Demo Customer |
| Contact channel | Where enquiry arrived | Website |
| Service requested | What they asked about | AC service |
| Status | Current pipeline stage | New |
| Last contact date | Most recent follow-up | 2026-10-01 |
| Next follow-up date | Next planned action | 2026-10-02 |
| Owner | Team member responsible | Demo Owner |
| Outcome / notes | Brief next-step note; avoid sensitive details | Asked for availability |

## Daily operating loop
1. **Capture:** enter each new enquiry once.
2. **Assign:** choose an owner and initial status.
3. **Prioritise:** review new leads and leads whose next follow-up date is today or earlier.
4. **Contact:** use an approved template and the customer's preferred channel.
5. **Record:** update last contact date, status, next follow-up date, and outcome.
6. **Close:** mark won/lost only when the outcome is known.
7. **Review:** at the end of the day, check for open leads without a next action.

## Follow-up guardrails
- Contact only people who have enquired or otherwise consented to contact.
- Follow business hours and applicable platform rules.
- Stop when the person opts out or asks not to be contacted.
- Do not promise prices, availability, or outcomes unless confirmed by the business.
- Use a sensible limit agreed with the business; avoid chasing people indefinitely.

## Future automation (not yet implemented)
A later Make/n8n/Zapier workflow could trigger when a lead is added or a due date arrives, prepare a reminder for the assigned owner, and log the result. Sending customer messages should remain approval-based until the client has authorised the channel, message content, and safeguards.

## Success measures for a pilot
Agree a baseline and target with the business. Possible measures:
- Percentage of open leads with a next action date.
- Number of overdue follow-ups at start and end of each day.
- Median time from enquiry to first response, where timestamps are available.
- Follow-up completion rate.
- Bookings or sales attributed to follow-up, without assuming causation.
