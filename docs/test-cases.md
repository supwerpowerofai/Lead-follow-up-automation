# Pilot Validation Checklist

**Status:** Test plan only. These checks have not been executed against a live client system.

## Data and workflow checks
- [ ] A new enquiry can be recorded with a unique lead ID.
- [ ] Every open lead has a status, owner, and next-action date.
- [ ] A lead due today appears in the daily review.
- [ ] An overdue lead is clearly visible.
- [ ] Updating a lead's status preserves its history or notes as agreed.
- [ ] Closed-Won and Closed-Lost leads no longer appear in the open follow-up queue.
- [ ] Duplicate enquiries can be identified without accidentally creating repeated outreach.
- [ ] The workflow works on the client's chosen device and spreadsheet tool.

## Message safety checks
- [ ] Templates contain no unresolved placeholders before use.
- [ ] Price, availability, and booking details are confirmed by the business.
- [ ] An opt-out is recorded and no further follow-up is sent.
- [ ] Follow-up frequency and business hours are agreed.
- [ ] A human reviews messages before sending.

## Automation checks (only if later implemented)
- [ ] A test lead triggers the expected reminder exactly once.
- [ ] Missing or malformed fields fail safely and are visible to the operator.
- [ ] Retries do not create duplicate messages or records.
- [ ] Credentials are stored in the automation platform's secret/credential manager, not in this repository.
- [ ] Logs avoid unnecessary customer personal information.
- [ ] The client approves a test before any real customer messages are sent.

## Pilot acceptance
Before the pilot begins, document:
- The workflow and channels included.
- The client's authorised data and access permissions.
- Baseline measurements and agreed success criteria.
- What is excluded.
- Who approves customer-facing messages.
- How data is returned or deleted at the end of the pilot.
