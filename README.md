# Lead Follow-Up System for Local Service Businesses

A lightweight, low-cost system to help local service businesses track enquiries, follow up consistently, and reduce the chance of leads being forgotten.

**Built by OPERONIX AI**  
*Automate the Work. Accelerate the Growth.*

> **Project status:** Documentation and sample assets. This repository does not yet contain a deployed or live automation. The sample data is fictional. Any live workflow must be configured and tested with the business before being represented as operational.

## The problem

Enquiries arrive through calls, website forms, WhatsApp, social media, and referrals. When follow-up depends on memory, opportunities can be missed.

## The proposed solution

1. Record each enquiry in one simple lead tracker.
2. Assign a clear status and next follow-up date.
3. Use reusable, respectful follow-up messages.
4. Review overdue and pending leads daily.
5. Track outcomes so the owner can see what needs attention.

The initial version is intentionally human-in-the-loop. It does not send messages automatically or connect to customer accounts.

## Repository contents

- [docs/workflow.md](docs/workflow.md) — proposed operating workflow and data fields.
- [docs/follow-up-templates.md](docs/follow-up-templates.md) — editable message templates.
- [docs/test-cases.md](docs/test-cases.md) — checks to complete before a pilot.
- [docs/pilot-offer.md](docs/pilot-offer.md) — clear scope for a small paid pilot.
- [sample-leads.csv](sample-leads.csv) — fictional sample records for testing.

## Quick start

1. Copy the sample CSV into a spreadsheet.
2. Replace the fictional rows with authorised business data only when the owner approves.
3. Add a next-action date for each open lead.
4. Review the sheet daily and record each follow-up outcome.
5. Run the test cases before using the workflow with real enquiries.

## Suggested lead statuses

- **New** — enquiry received; not yet contacted.
- **Contacted** — first response made; awaiting reply or next step.
- **Booked** — appointment or service booked.
- **Pending** — follow-up or customer decision is still due.
- **Closed-Won** — business confirmed the sale or job.
- **Closed-Lost** — lead did not proceed; record a reason if appropriate.

## Privacy and safety

- Do not commit API keys, passwords, access tokens, or private customer information.
- Use fictional records in this public repository.
- Get the business owner's permission before processing customer data.
- Follow applicable privacy rules and each messaging platform's policies.
- Respect opt-outs and do not send repeated or misleading messages.
- Keep human approval in the loop until automation is explicitly configured and tested.

## What is not claimed

This repository is a documented prototype, not proof of a deployed integration. No live Make, n8n, Zapier, WhatsApp, email, or CRM connection is claimed here. Implementation and results must be verified with a specific business.

## Service concept

OPERONIX AI proposes small, fixed-scope lead follow-up pilots for local service businesses. The pilot scope, price, data access, and success criteria should be agreed in writing before work begins.
