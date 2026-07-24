# Audit Baseline Phase 1

Audit date: 24 July 2026  
Baseline branch: `agent/business-ready-site-pass`  
Baseline commit: `c89ea931a75837a714a56dfd49c0a636cb59d3f1`  
Preview: `https://agent-business-ready-site-pass-rambak-siswanto-website.fawwazfatih2810.workers.dev/`

## Verdict

No P0 was found. Phase 1 identified three production-veto conditions: owner approval is incomplete for public business identifiers and products; marketplace ownership was asserted in JSON-LD despite conflicting evidence status; and two homepage dark-surface treatments failed WCAG AA contrast. The JSON-LD and contrast defects received minimal source corrections with verifier regressions in Phase 1. Owner evidence remains a P1 release blocker.

PR #2 must remain draft. Main and production must remain unchanged.

## Evidence and method

- GitHub PR metadata, commits, comparison, comments, and Cloudflare deployment comment were inspected.
- Connected Drive was inventoried directly: 27 PNG and one MP4, with no owner decision, structured product record, business profile, or legal source document.
- Browser DOM and interactions were inspected with the in-app Browser. Its screenshot operation timed out, so a local Playwright 1.60 harness using installed Chrome generated the repeatable screenshot matrix.
- Computer Use visually smoke-tested the installed Opera GX. Automated smoke tests also exercised installed Opera GX and Edge at 390x844.
- Four independent read-only audit roles covered business truth, browser UX, brand/content, and technical release. The lead removed duplicates and reproduced material findings.
- Static source, verifier output, JavaScript syntax, HTTP responses, headers, console, network, layout, interaction, no-JavaScript, reduced motion, and lab performance were inspected.

## Browser coverage

| Coverage | Actual result |
| --- | --- |
| Chrome/Chromium | 18 responsive route cases, 27 screenshots, full interaction checks; passed except separately documented tablet FAB overlap and false affordance |
| Edge | Mobile smoke: 200, menu/focus/filter passed, no overflow or runtime errors |
| Opera GX | Visual primary-CTA smoke plus automated mobile menu/focus/filter; passed |
| Firefox | Installed, but Playwright could not launch the stock binary; not claimed as passed |
| Safari / iPhone Safari | Not available on Windows; not tested |
| Samsung Internet | Not available; Chromium behavior is only an approximation |
| Viewports | Homepage at 1440x900, 1366x768, 768x1024, 360x800, 390x844, 412x915; all other public pages at desktop and mobile |

The baseline harness reported: no horizontal overflow; no broken images; no console/page errors or failed first-party requests; one H1 per audited page; zero duplicate IDs; valid JSON-LD syntax; and CLS 0 in the observed runs. Homepage desktop lab observation was LCP/FCP about 2.04 seconds, six resources, and about 33 KB transferred. These are synthetic observations, not field Core Web Vitals.

All tested public routes returned 200; the unknown route returned 404. The preview sent `X-Robots-Tag: noindex`, CSP, and security headers. Production returned 200, had no preview `noindex` header, and served different content.

No-JavaScript retained the homepage and all 12 catalogue cards. Reduced-motion matched, exposed all reveal content, removed meaningful movement, and had no overflow.

## Prioritized findings

| ID | Severity and status | Finding | Evidence and reproduction | Decision |
| --- | --- | --- | --- | --- |
| F-01 | P1 CONFLICT | `Organization.sameAs` claimed both marketplace accounts while BF-005/BF-006 did not verify ownership. | Inspect baseline `public/index.html`; compare facts register. HTTP 200 does not prove account ownership. | Corrected in Phase 1: remove `sameAs`; verifier now rejects it until evidence is registered. |
| F-02 | P1 VERIFIED | Homepage dark labels and final contact CTA failed normal-text contrast. | Computed baseline ratios: red label on `#171211` = 2.48:1; dark-red button text on `#171211` = 1.76:1. | Corrected in Phase 1 with 10.63:1 on-dark accent and 10.14:1 filled CTA treatment; verifier added. |
| F-03 | P1 REQUIRES_VERIFICATION | Brand, phone, marketplace ownership, location wording, 12 products, B2B claims, and publication scope lack owner decisions. | Facts register, product matrix, and checklist remain owner-gated. General oral permission is only `USER_ASSERTED`. | Production veto; complete owner validation or withhold each item. |
| F-04 | P1 VERIFIED | Current production still contains the older owner spelling, Gumpang wording, and "resmi" claims. | Production HTML response on 24 July; production differs from branch preview. | Production remains unchanged in Phase 1. Resolve evidence before any controlled PR release. |
| F-05 | P2 VERIFIED | At 768x1024 the fixed WhatsApp FAB intercepts the center of the footer Privacy link. | Scroll footer link into view; intersection = 2,103 px2; `elementFromPoint` at link center returns `.wa-fab`. Keyboard activation still reaches `/privasi`. | Phase 2 layout fix and regression test across 768-1280 px. |
| F-06 | P2 VERIFIED | Desktop catalogue cards lift 6 px on hover, but the card body has no action. | Hover first card: transform changes from none to `translateY(-6px)`; click blank body leaves URL unchanged. Nested links work. | Remove whole-card hover cue or provide one unambiguous accessible action. |
| F-07 | P2 INFERRED | The Cerita page is structurally polished but not yet a persuasive company profile. | It can only state location, categories, and channels; owner origin, people, and process are absent. | Add only owner-approved story and authentic context. |
| F-08 | P2 REQUIRES_VERIFICATION | "Mitra" implies reseller, shop, restaurant, event, and recurring-order fit without operational evidence. | BF-010/BF-011 remain unverified. | Validate each segment or narrow to "Pesanan Besar." |
| F-09 | P2 WITHHELD | No approved authentic product, packaging, owner, process, or location photo is publishable. | Photo manifest; no Drive asset has complete provenance and scoped permission. | Obtain asset-specific evidence; do not fabricate or reuse mismatched photos. |
| F-10 | P2 VERIFIED | Release automation, cross-browser evidence, and rollback practice are incomplete. | No repository CI/check status; Firefox/Safari/Samsung untested; rollback drill/version owner not recorded. | Add lightweight CI, manual browser policy, and rollback runbook after owner truth is settled. |
| F-11 | P3 VERIFIED | Four generic `<div>` elements use `aria-label`, which is not conveyed as intended. | Homepage and catalogue neutral visual containers; W3C Nu finding reproduced from markup. | Remove labels or give appropriate semantic structure in Phase 2. |
| F-12 | P3 INFERRED | Some static proof/trust tiles and decorative product media resemble controls. | They are non-focusable and have no pointer cursor/handler; direct click does nothing. | Reduce control-like styling after higher-priority truth and clickability work. |

## Clickability conclusion

Header links, mobile navigation, hero CTAs, product links, WhatsApp links, FAQ, search, filters, empty state, Escape, focus return, menu close-on-select, and browser back/forward worked in the tested preview. The general report "some controls look clickable but do not respond" was not a single broken-link defect:

1. The tablet footer Privacy link has a real overlay interception from the FAB.
2. Product-card hover is a false affordance; only nested links are intended actions.
3. Static trust/proof tiles are visually card-like but are not interactive.
4. Tokopedia behavior can be restricted by network/external security; successful HTTP response alone does not verify a listing.

## Twenty-lens scorecard

Scores are baseline measurements from 0 to 10. `Fact` is observable evidence; `judgment` is the lead's interpretation.

| # | Lens | Score | Fact and judgment | Most valuable improvement |
| ---: | --- | ---: | --- | --- |
| 1 | Product and business strategy | 7.0 | Fact: retail and large-order routes are separated. Judgment: owner truth is the missing strategic constraint. | Complete owner decision record. |
| 2 | Company-profile positioning | 5.0 | Fact: profile content lacks owner-approved origin and people. Judgment: it reads more as a channel guide than a company profile. | Add verified business story. |
| 3 | Stakeholder and partnership fit | 6.5 | Fact: a Mitra route and structured WA message exist. Judgment: segment fit is plausible but unproven. | Validate audiences and terms. |
| 4 | UMKM authenticity | 4.5 | Fact: no authentic public photo or approved owner story. Judgment: restraint is honest but generic. | Approve real context assets. |
| 5 | Javanese narrative authenticity | 3.5 | Fact: only Kartasura/Sukoharjo is stated. Judgment: no evidence-backed cultural narrative yet. | Record owner language and values. |
| 6 | Information architecture | 8.0 | Fact: five-link navigation and supporting routes are consistent. | Preserve while validating labels. |
| 7 | UX and task clarity | 7.5 | Fact: retail, B2B, contact, and FAQ paths are clear. | Correct tablet footer interception. |
| 8 | Mobile UX | 7.0 | Fact: menus and catalogue pass; mobile visuals are intentionally hidden under 600 px. Judgment: efficient but visually thin. | Reassess after authentic media exists. |
| 9 | Conversion and CTA clarity | 7.5 | Fact: primary routes are visible and prefilled WA messages work. | Validate destinations and identifiers. |
| 10 | UI design | 7.5 | Fact: coherent red/cream/dark system; baseline had dark-surface contrast defects. | Keep corrected contrast and test AA. |
| 11 | Visual hierarchy | 8.0 | Fact: headings, sections, cards, and CTA hierarchy are scannable. | Add authentic evidence without crowding. |
| 12 | Interaction and motion | 7.0 | Fact: reduced motion passes; card hover implies an unavailable action. | Remove the false hover cue. |
| 13 | Indonesian copywriting | 6.5 | Fact: language is direct and readable. Judgment: some Mitra/company copy is generic. | Replace with owner-approved specifics. |
| 14 | Content credibility | 5.0 | Fact: legal claims and photos are withheld, but public identifiers/products await approval. | Reconcile every public sentence. |
| 15 | Front-end architecture | 8.0 | Fact: dependency-free static architecture and progressive enhancement work. | Add only lightweight gates. |
| 16 | Performance and Core Web Vitals | 8.0 | Fact: small transfer, zero observed CLS, no public photos. | Re-test after authentic media. |
| 17 | Browser compatibility | 6.5 | Fact: Chrome, Edge, and Opera passed tested flows; other engines are incomplete. | Firefox and Safari manual matrix. |
| 18 | Accessibility and QA | 6.0 | Fact: keyboard/reduced-motion/no-JS pass; baseline contrast, FAB overlay, and ARIA issues remain relevant. | Close AA and semantic findings. |
| 19 | Security, privacy, and SEO | 6.5 | Fact: strong headers and no data collection; structured identity and public-consent gaps existed. | Owner approval plus claim-safe schema. |
| 20 | Analytics and release governance | 4.5 | Fact: no tracking, CI, field baseline, or rollback drill. | Approve minimal measurement and release runbook. |

## Eight lead disciplines

| Discipline | Weight | Score | Weighted contribution |
| --- | ---: | ---: | ---: |
| A. Business strategy and positioning | 15% | 6.2 | 0.93 |
| B. Authenticity and storytelling | 15% | 4.0 | 0.60 |
| C. UX and information architecture | 15% | 7.5 | 1.13 |
| D. UI, interaction, and visual craft | 15% | 7.5 | 1.13 |
| E. Copy and content credibility | 10% | 5.8 | 0.58 |
| F. Front-end, performance, and compatibility | 15% | 7.5 | 1.13 |
| G. Accessibility and QA | 10% | 6.0 | 0.60 |
| H. Security, privacy, SEO, analytics, release | 5% | 5.5 | 0.28 |
| **Overall** | **100%** | **6.4** | **6.38 before rounding** |

The score does not override the owner-consent and correctness P1 vetoes. Future release target: no P0/P1, no discipline below 8.0, overall at least 8.5, approved claims/assets, full browser gates, and rollback readiness.

## Analytics recommendation

| Option | Fit now | Privacy and maintenance | Decision |
| --- | --- | --- | --- |
| No analytics | Lowest complexity; no baseline or outbound insight | Lowest data scope | Acceptable only until owner decides measurement. |
| Cloudflare Web Analytics | Best fit for current host and simple page-view baseline | Low maintenance; confirm current privacy/cookie implications before enablement | Recommended first step after approval. |
| Cloudflare Web Analytics + Zaraz events | Adds useful outbound and Mitra interaction events | More configuration and governance; still minimize payloads | Recommended second step after baseline. |
| GA4 | Powerful reporting, but excessive for current maturity | Highest setup, consent, account, and maintenance burden of these options | Defer unless business reporting needs justify it. |

Proposed event taxonomy: `marketplace_outbound` with `channel` and `route`; `whatsapp_outbound` with `intent` and `route`; `mitra_cta` with `route`; and `catalog_filter` with category. Do not send phone numbers, message text, search query text, product-freeform input, names, or personal data. No production analytics was installed in Phase 1.

## Screenshot inventory

The sanitized artifact contains 29 PNG files: 27 desktop/mobile page and state captures plus evidence of the 768 px FAB/footer overlap and catalogue-card hover affordance. It covers public pages, 768/360/390/412 homepage states, mobile menu, catalogue states, footer, no-JavaScript, reduced motion, and 404. Raw Drive material is excluded.

## Limitations

- Marketplace ownership, current listing, product accuracy, and transaction flow were not proven by destination responses.
- Firefox automation could not launch the installed stock binary. Safari and Samsung Internet were unavailable.
- Screenshots are Chromium evidence; Opera GX and Edge received focused smoke tests rather than full matrices.
- Lab performance is not real-user monitoring.
- The local export had no `.git`; GitHub connector data was authoritative for history, branch, and PR state.

