# Privacy and Security Notes

This project is a local browser prototype, not a certified secure customer database.

## Data handled

Lead name, enquiry channel, requested service, status, owner, dates, and free-text notes may be stored in browser local storage and exported to CSV.

## Safe-use rules

- Use fictional records in demos, screenshots, tests, and public issue reports.
- Obtain appropriate permission before processing real customer data.
- Do not enter passwords, payment-card details, government identifiers, authentication tokens, or sensitive personal information.
- Keep notes concise and relevant to the service enquiry.
- Respect consent, opt-outs, business hours, and the communication channel the person expects.
- Restrict access to the browser profile and securely store exported CSV files.
- Export a backup before clearing site/browser data; delete exports when no longer needed.
- Never commit customer records, credentials, API keys, tokens, or private exports to Git.

## Threats and limitations

- Someone with access to the same browser profile may access locally stored leads.
- Browser storage can be cleared, corrupted, or unavailable.
- CSV files may be forwarded or uploaded unintentionally.
- Client-side controls do not replace server-side authorization for a future hosted version.
- This prototype has no authentication, multi-user permissions, server-side audit trail, or cloud backup.

## Reporting a vulnerability

Please do not publish personal data or secrets in a public issue. Follow the repository's [SECURITY.md](../SECURITY.md) policy. Provide a minimal reproduction using fictional data where possible.

## Not a compliance claim

These notes do not certify compliance with any particular privacy law or security standard. The operator is responsible for assessing the applicable requirements before using real customer data.
