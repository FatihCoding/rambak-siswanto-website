# Decision Log

Last updated: 24 July 2026

| ID | Decision | Evidence and rationale | Rejected alternative | Reversible |
| --- | --- | --- | --- | --- |
| D-001 | Keep `public/` as the Cloudflare source and retain the static architecture. | Current deployment, verifier, no-checkout scope, and low maintenance burden support it. | Framework migration without a proven requirement. | Yes, with an approved architecture decision and migration plan. |
| D-002 | Continue work on `agent/business-ready-site-pass` through draft PR #2. | Main production must remain stable while owner truth is unresolved. | Editing `main`, creating another repository, or opening a duplicate PR. | Yes. |
| D-003 | Separate retail discovery from large-order discussion. | Marketplace is appropriate for retail; WhatsApp supports open-ended B2B clarification without collecting data on-site. | Direct checkout, website form, database, or CRM. | Yes. |
| D-004 | Keep the catalogue functional without JavaScript. | Progressive enhancement protects weaker devices and network conditions. | Client-rendered catalogue as the only content path. | Yes. |
| D-005 | Withhold all candidate photographs until provenance, current packaging, subject, edit history, and asset-specific owner permission are registered. | Connected Drive had visual candidates but no traceable approval record. | Treating apparent authenticity or general oral trust as photo permission. | Yes, asset by asset. |
| D-006 | Do not use synthetic product, packaging, owner, facility, legal, or operational imagery. | It would create false business evidence and weaken trust. | AI-generated stakeholder visuals in public pages. | No while the site represents the real business. |
| D-007 | Avoid "official," legal badges, exact owner identity, full address, and unsupported operational promises. | Ownership, legal scope, identity spelling, and operating details are not verified. | Publishing likely facts and correcting later. | Yes after evidence and owner approval. |
| D-008 | Preserve the current red, cream, dark-text, and WhatsApp-green system and the five-link navigation during Phase 1. | These are accepted, functioning parts of PR #2; Phase 1 is an audit and governance pass. | Another visual redesign. | Yes in a separately approved design phase. |
| D-009 | Register oral permission as `USER_ASSERTED`, not as absent and not as blanket verified consent. | The project lead explicitly reports permission, but granter, date, categories, and publication scope are not registered. | Writing "no permission exists" or treating trust as complete production consent. | Yes when evidence is registered. |
| D-010 | Treat the owner-name spellings "Iwan Saswianto" and "Iwan Siswanto" as a conflict. | Material sources disagree and no primary source currently resolves them. | Selecting the most common spelling. | Yes after primary confirmation. |
| D-011 | Remove `Organization.sameAs` for marketplace accounts and add a verifier guard. | Structured data asserted organization identity while the facts register marks account ownership unverified. This is a reproduced P1 correctness issue. | Leaving it because the preview is noindex or because links return HTTP 200. | Yes after ownership and publication approval. |
| D-012 | Use four independent audit roles with one lead arbitrator and a maximum concurrency of four. | Separates business truth, browser UX, brand/content, and technical release review while keeping one write owner. | Majority voting or overlapping editors. | Yes. |
| D-013 | Recommend Cloudflare Web Analytics first, with Zaraz custom outbound events only after approval; do not install analytics in Phase 1. | Fits the current host and maturity while minimizing maintenance and privacy scope. GA4 adds more configuration and governance than the present need. | Production analytics now, GA4 by default, or collecting WhatsApp/search text. | Yes after a dedicated decision. |
| D-014 | Keep raw evidence private and create only a sanitized, portable audit package. | The repository is public and Drive may contain sensitive material. | Committing recordings, raw legal documents, or unapproved photos. | No for already-public exposure; prevention is mandatory. |
| D-015 | Do not move the active repository during Phase 1. | Migration is operational work that should follow a clean push, verified clone, tests, Cloudflare check, and backup. | Moving files before source and deployment verification. | Yes. |

## Decision precedence

When findings conflict, decide by: primary evidence; business truth and owner consent; security, privacy, and correctness; usability and accessibility; business objective; performance; visual and interaction quality; subjective preference.


