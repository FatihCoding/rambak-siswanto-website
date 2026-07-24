# Rambak Siswanto Project Instructions

## Source of truth

- GitHub repository `FatihCoding/rambak-siswanto-website` is the source of truth.
- Work through a branch and pull request. Never edit `main`, merge, mark ready, or deploy production without explicit approval.
- `public/` is the Cloudflare site source unless an architecture change is approved and recorded.
- Preserve newer or unrelated work. Do not rewrite history.

## Business truth and privacy

- Classify material facts and assets as `VERIFIED`, `USER_ASSERTED`, `INFERRED`, `REQUIRES_VERIFICATION`, `CONFLICT`, or `WITHHELD`.
- Never upgrade a classification without traceable evidence. Record material decisions in `docs/DECISION_LOG.md`.
- The owner approves identity, facts, contact details, products, operating terms, legal claims, and every authentic photo before production publication.
- Oral permission reported by the project lead is `USER_ASSERTED` until its granter, date, scope, and publication categories are registered.
- Never fabricate business history, products, packaging, people, facilities, capacity, permits, certifications, reviews, prices, stock, or operating terms.
- Synthetic visuals must never be presented as authentic business evidence. No synthetic product or packaging visuals are permitted.
- Do not commit private recordings, conversations, identity documents, legal source files, customer or transaction data, private addresses, credentials, or unapproved photos.

## Engineering and quality

- Prefer the existing static HTML, CSS, and JavaScript architecture. Add a dependency only for material value, after documenting cost and rollback.
- Keep secrets out of source and client code. Use platform-managed secrets only when a future feature genuinely requires them.
- Run `node scripts/verify-site.mjs` and JavaScript syntax checks after relevant changes.
- Test changed public flows in the deployed branch preview at desktop, tablet, and mobile sizes. Include keyboard, focus, reduced motion, no-JavaScript, 404, and external destinations when relevant.
- Treat security, privacy, consent, and correctness P0/P1 findings as release vetoes.
- Do not add production analytics without an approved event taxonomy, privacy review, owner decision, and rollback plan. Never collect message text, search terms, phone numbers, or other personal data.

## Release and rollback

- Production gates are defined in `docs/QUALITY_GATES.md`; all must pass before a production recommendation.
- Every release proposal must identify the tested commit, preview URL, remaining owner approvals, deployment steps, and rollback commit.
- Production smoke testing and rollback readiness are mandatory. Production remains unchanged during an audit-only phase.
- Update truth, evidence, owner-review, audit, and release documents when their underlying state changes.
- Report only material findings, actual command results, limitations, changed files, and the next decision. Keep internal debate out of user-facing reports.


