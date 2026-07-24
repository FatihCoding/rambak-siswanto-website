# Quality Gates

Last updated: 24 July 2026

## Severity

| Level | Definition | Required action |
| --- | --- | --- |
| P0 | Active harm, private-data or credential exposure, destructive release, or unusable primary journey. | Stop work or release immediately; contain and verify the correction. |
| P1 | Material consent, business-truth, legal, security, accessibility, or primary-action failure. | Release veto; correct or obtain evidence before production. |
| P2 | Important credibility, usability, content, compatibility, or maintainability weakness. | Prioritize for Phase 2; owner decision may be a dependency. |
| P3 | Bounded polish or optimization with low risk and no current journey failure. | Schedule only after higher-value work. |

Any unresolved P0/P1 in security, privacy, consent, or correctness overrides the weighted audit score.

## Evidence hierarchy

1. Owner confirmation or traceable primary business/legal source
2. Authentic asset with provenance and scoped publication permission
3. Official account-control evidence or current owner-approved product record
4. Repository, deployed response, browser reproduction, and automated test
5. Project-lead assertion
6. Inference
7. Subjective preference

HTTP 200, visible packaging text, general trust, and prior publication do not independently prove ownership, validity, consent scope, or current accuracy.

## Release gates

| Gate | Pass condition | Evidence |
| --- | --- | --- |
| Business | Every public fact and product is approved, corrected, or withheld; conflicts are resolved. | Facts register, product matrix, owner decision record |
| Consent | Contact details, identity, claims, recordings, and each authentic asset have explicit publication scope. | Dated owner approval and photo manifest |
| Visual | No fabricated evidence, distorted media, hidden critical content, overlap, or horizontal overflow. | Browser matrix and screenshot inventory |
| Browser | Primary flows pass at required desktop, tablet, and mobile sizes; limitations are named; Opera smoke test is complete. | Click matrix and deployed-preview run |
| Accessibility | Landmarks, one H1, heading order, skip link, focus, keyboard, menu semantics, labels, status announcements, touch targets, contrast, and reduced motion pass. | Verifier plus manual/browser checks |
| Performance | No preventable layout shift, blocking media mistake, broken asset, or unjustified production dependency; lab context is recorded honestly. | Network/resource audit and performance evidence |
| Privacy | No secrets, private evidence, customer-level data, recordings, legal source files, or unnecessary tracking enter public files or artifacts. | Secret/privacy scans and artifact manifest |
| SEO | Titles, descriptions, canonical URLs, sitemap, robots, Open Graph, favicon, and structured data are accurate and claim-safe. | Verifier, response checks, source inspection |
| Analytics | No production tracking without owner decision, privacy review, data minimization, documented events, and rollback. | Decision log and approved implementation record |
| Release | Exact commit is tested; PR review is approved; branch preview passes; production plan names smoke tests and rollback. | PR, QA report, deployment record |
| Rollback | Last known good commit and Cloudflare rollback/redeploy steps are known and access is confirmed. | Release report and repository history |

## Browser minimum

- Homepage: 1440x900, 1366x768, 768x1024, 360x800, 390x844, 412x915.
- Every other public page: at least desktop and mobile.
- Exercise navigation, mobile menu, primary and secondary CTAs, marketplace and WhatsApp links, FAQ, search, filters, empty state, keyboard, Escape, focus return, history, 404, no-JavaScript, and reduced motion.
- A link destination is accurate only after content and account ownership are checked; a successful response alone is insufficient.
- Do not claim Safari, Firefox, Edge, Samsung Internet, or Opera passed unless directly tested. Record the nearest-engine test separately.

## Production stop condition

Stop and keep the PR draft when any P0/P1 remains, the exact deployed commit cannot be identified, owner identity or consent is conflicting, legal claims lack primary evidence, authentic assets lack scoped permission, required checks fail, private data appears, or rollback is not ready. `READY FOR PRODUCTION` is never a Phase 1 verdict.


