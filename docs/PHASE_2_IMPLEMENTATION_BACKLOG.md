# Phase 2 Implementation Backlog

Last ordered: 24 July 2026

Do not begin public content or asset implementation until its evidence dependency is satisfied. P0/P1 truth, consent, privacy, and correctness items override visual work.

## P0

No P0 is open. If private evidence, credentials, destructive release, or an unusable primary journey appears, stop all release work and handle it first.

## Ordered backlog

| Order | Priority | Work item and business value | Affected files | Dependency and evidence required | Acceptance criteria | Risk |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | P1 | Conduct owner validation for identity, brand, WhatsApp, location, marketplace ownership, all 12 products, B2B claims, and publication scope. Creates the legal/credibility basis for real use. | `docs/BUSINESS_FACTS_REGISTER.md`, `PRODUCT_PUBLICATION_MATRIX.md`, `OWNER_REVIEW_CHECKLIST.md` | Dated owner decision, primary account/product evidence, scoped permission | Every item is approve/revise/withhold; conflicts resolved; evidence reference registered without raw private files | Medium: meeting availability and evidence gaps |
| 2 | P1 | Reconcile current production claims and prepare a controlled release delta. Prevents old owner spelling, Gumpang, and "resmi" language from remaining indefinitely. | Public pages, metadata, release report | Item 1 plus exact production comparison | No unsupported phrase in candidate; main untouched until explicit approval; rollback commit identified | High: production truth and consent |
| 3 | P1 | Keep marketplace identity out of structured data until ownership is verified. Protects search correctness. | `public/index.html`, `scripts/verify-site.mjs` | Account-control evidence and owner publication approval | `sameAs` absent while unverified; verifier fails on premature reintroduction; later addition matches approved accounts | Low |
| 4 | P1 | Preserve WCAG AA contrast on dark surfaces. Keeps the final contact action readable. | `public/brand.css`, `scripts/verify-site.mjs` | None; Phase 1 correction exists | Normal text ratios at least 4.5:1; visible hover/focus; verifier and browser checks pass | Low |
| 5 | P2 | Fix WhatsApp FAB overlap with footer links from 768-1280 px. Restores reliable privacy navigation. | `public/screenshot.css`, `public/brand.css`, relevant subpage CSS | Browser reproduction F-05 | Zero FAB/footer intersection at 768, 820, 900, 1024, 1280; pointer center and keyboard both reach Privacy | Low |
| 6 | P2 | Remove product-card whole-body hover affordance or define one accessible card action. Reduces click confusion. | `public/catalog.css`, possibly `public/produk.html` | UX decision preserving nested marketplace/WA choices | Blank card body does not visually promise a click, or one explicit action has correct semantics; nested actions remain usable | Medium |
| 7 | P2 | Validate Mitra positioning and operational boundaries. Avoids attracting unsupported requests. | `public/mitra.html`, homepage reseller strip, WA copy, facts register | Owner decisions on audiences, products, MOQ, capacity, lead time, service area, policies | Every sentence traceable; unsupported segments removed or page renamed to Pesanan Besar; WA template retained | Medium |
| 8 | P2 | Add an owner-approved company story and authentic context. Improves mental availability and partner trust. | `public/profil.html`, homepage story, metadata | Owner interview plus approved facts | Origin, people/role, Kartasura connection, and product/process context are specific and approved; no invented heritage | Medium |
| 9 | P2 | Integrate only approved authentic hero, product, and context photography. Makes the company profile credible. | `public/images/verified/`, public HTML/CSS, photo manifest | Asset provenance, current packaging, subject consent, edit history, placement approval | Correct image-product mapping, alt/width/height/srcset, optimized size, no CLS, no misleading edits | High |
| 10 | P2 | Correct HTML/ARIA findings and repeat accessibility QA. | Four neutral visual containers, verifier | Semantic decision for decorative/informative containers | W3C Nu has no relevant errors; keyboard, focus, labels, contrast, reduced motion, and touch targets pass | Low |
| 11 | P2 | Add lightweight CI and release/rollback runbook. Improves repeatability without framework migration. | `.github/workflows/`, docs, existing verifier | Owner-truth changes stable; GitHub policy decision | CI runs verifier, syntax, secret/privacy scan, HTML checks, and route smoke; human approval required; tested rollback procedure recorded | Medium |
| 12 | P2 | Complete cross-browser release matrix. Reduces engine-specific risk. | QA artifacts and release report | Stable candidate preview | Chrome/Edge, Firefox, and Safari manual passes at priority sizes; Samsung Internet checked or limitation accepted explicitly | Medium |
| 13 | P2 | Decide and implement privacy-minimal analytics architecture. Establishes a real baseline. | Cloudflare configuration, privacy copy, decision log | Owner/lecturer approval, privacy review, account access, event taxonomy | Start with Cloudflare Web Analytics; optional Zaraz events send no PII/search/message text; CSP and rollback tested | Medium |
| 14 | P3 | Reduce static proof/trust tile control resemblance. Improves perceived clickability. | Homepage/product styles | Items 5-9 complete | Static information reads as information; no new focusable fake controls | Low |
| 15 | P3 | Establish 30-60 day measurement and content-review cadence. Makes future targets evidence-based. | Analytics report and owner admin plan | Item 13 plus production approval | Baseline visits/outbound events reported; no invented targets; owner can request corrections | Low |

## Recommended sequence

1. Owner interview and evidence registration.
2. Apply only approved truth/product/contact corrections.
3. Integrate approved authentic photos.
4. Fix FAB, card affordance, ARIA, and any content-created layout issues.
5. Add lightweight CI, cross-browser coverage, and rollback drill.
6. Return final preview for owner sign-off.
7. Install approved minimal analytics only in a dedicated, privacy-reviewed change.
8. Request explicit permission before marking PR ready or releasing.


