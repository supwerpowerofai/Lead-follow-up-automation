# Public Launch Checklist

Use this checklist before calling the project a stable release. Do not mark a check complete without evidence.

## Product and quality
- [ ] GitHub Actions smoke tests pass on the default branch.
- [ ] Open index.html in a real browser and add, edit, filter, and delete fictional leads.
- [ ] Import sample-leads.csv and verify all five fictional rows and mapped fields.
- [ ] Export the imported records and re-import the export; compare names, statuses, dates, owners, and notes.
- [ ] Test CSV values containing commas, double quotes, empty cells, CRLF line endings, and malformed quoting.
- [ ] Confirm closed leads are not counted as open, due, or overdue.
- [ ] Test keyboard focus, labels, narrow mobile viewport, and at least two modern browsers.
- [ ] Test behavior when local storage is unavailable or full.
- [ ] Confirm no real customer information, secrets, or credentials are committed.

## Repository
- [ ] README quick start and all links are accurate.
- [ ] LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, and ROADMAP.md are present.
- [ ] Issue templates are usable and do not ask users to post sensitive data.
- [ ] Repository description and topics clearly describe a browser-only prototype.
- [ ] Enable available GitHub security features, including secret scanning and push protection.
- [ ] Review open issues and CI results before tagging a release.

## Release and announcement
- [ ] Choose a version only after the product checks above pass.
- [ ] Publish a short changelog/release note describing exactly what is included and excluded.
- [ ] Use screenshots or a short GIF captured from the real app; do not use mockups as proof.
- [ ] Announce first to relevant communities whose rules allow project sharing.
- [ ] Ask for specific feedback, respond to issues, and fix reproducible bugs.
- [ ] Do not buy stars, use star exchanges, or claim adoption/results that have not been measured.

## Current gate

**Not yet launch-certified.** Automated checks have been added, but their result must be checked in GitHub Actions and the browser-level checklist above still needs a real manual run. Until then, describe this as an early prototype, not a production-ready tool.
