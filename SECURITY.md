# Security Policy

## Current status

This is an early, browser-only prototype. It has not been independently security-audited and should not be treated as a production customer-data system.

## Reporting a vulnerability

Please do not publish credentials, private customer information, or an exploitable vulnerability in a public issue. Use GitHub's private vulnerability reporting for this repository if it is enabled. If that option is unavailable, contact the repository maintainer privately through their GitHub profile and share only the minimum details needed to reproduce the issue.

## Data-handling guidance

- Do not commit API keys, tokens, passwords, or real customer records.
- The current app stores records in the browser's local storage on the current device; anyone with access to that browser profile may be able to access them.
- Exported CSV files are not encrypted by this app. Store backups carefully.
- No server, cloud sync, or automatic messaging is included in the current prototype.
- Report suspected exposure promptly and avoid sharing sensitive details in public.
