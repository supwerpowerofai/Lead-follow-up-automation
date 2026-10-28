# Architecture and Data Flow

## Overview

Lead Follow-Up Tracker is a static, browser-only prototype. It uses a single `index.html` file with inline CSS and JavaScript. It does not require a server, package installation, API key, or build step.

## Components

- **User interface:** HTML forms, lead table, search/filter controls, summary counters, and CSV actions.
- **Application state:** An in-memory JavaScript array named `leads`.
- **Persistence:** Browser `localStorage`, using the key `operonix-lead-tracker-v1`.
- **Import/export:** A CSV parser and CSV export routine implemented in the browser.
- **Automated checks:** Node.js built-in test runner with a lightweight browser harness in `tests/smoke.test.mjs`.
- **CI:** GitHub Actions runs automated smoke tests on pushes and pull requests.

## Data flow

1. A user adds or edits a lead in the form.
2. The app validates that the lead has a name and creates or updates a record in memory.
3. The app attempts to persist the record in local storage and re-renders the summary and table.
4. CSV import parses rows, validates required names and date formats, skips duplicate supplied IDs, and asks for confirmation before appending records.
5. CSV export serializes the current in-browser records into a downloadable file.

## Data model

A lead record may include:

| Field | Purpose |
| --- | --- |
| `id` | Local record identifier |
| `name` | Lead or customer name |
| `dateReceived` | Date the enquiry arrived |
| `owner` | Person responsible for the next action |
| `lastContactDate` | Most recent contact date |
| `channel` | Enquiry channel |
| `service` | Requested service |
| `status` | New, Contacted, Pending, Booked, Closed-Won, or Closed-Lost |
| `nextDate` | Planned follow-up date |
| `notes` | Brief outcome or next step |
| `createdAt`, `updatedAt` | Local timestamps |

## Trust boundaries and limitations

- Data stays in the browser profile unless a user exports it. There is no cloud backup or multi-user synchronization.
- Local storage is not encrypted by this app. Anyone with access to the same browser profile may be able to view records.
- Exported CSV files are unencrypted and may be opened by spreadsheet software. Treat them as sensitive business data.
- There is no authentication, authorization, server-side validation, audit log, or automated message delivery.
- This prototype is not a substitute for a production CRM or a privacy/security review.
- Automated smoke tests do not prove complete browser compatibility or production readiness.

## Next architecture milestones

1. Add a real-browser test suite for form, import/export, keyboard accessibility, and responsive layout.
2. Define a versioned schema and migration strategy before changing stored records.
3. Add a deliberate backup/restore flow and clearer storage-failure recovery.
4. Only consider a backend or messaging integration after requirements, consent handling, authentication, logging, and security controls are specified.
