---
name: rambak-browser-release-audit
description: Audit the deployed Rambak Siswanto preview across routes, viewports, interactions, accessibility, and release controls.
---

# Rambak Browser Release Audit

## Trigger

Use before owner review, PR readiness, release recommendation, or after changes to public pages, styles, scripts, routing, metadata, or headers.

Do not use static source inspection as a substitute for this skill.

## Inputs

- Exact branch commit and deployed preview URL
- Public route inventory and priority interactions
- Required viewport and browser matrix
- Current quality gates and known user reports

## Workflow

1. Confirm the preview serves the expected commit when observable.
2. Run the repository verifier first.
3. Exercise every public route at required desktop, tablet, and mobile sizes.
4. Test navigation, CTAs, search, filters, empty state, FAQ, keyboard, Escape, focus return, history, 404, no-JavaScript, and reduced motion.
5. Inspect console, failed requests, overflow, overlap, hit testing, link destinations, metadata, headers, and layout stability.
6. Distinguish broken controls from false affordances, external restrictions, and user misunderstanding.
7. Save only non-confidential screenshots and a click matrix.
8. Report reproduction steps, evidence, limitations, and severity.

## Outputs

- Viewport and interaction matrix
- Screenshot inventory
- Actual pass/fail results and browser limitations
- Release-gate recommendation tied to a commit

## Stop and escalate

Stop a release for blocked primary actions, hidden required content, keyboard traps, private-data exposure, wrong deployment, critical console/network errors, or any untested P0/P1 fix. Never claim an untested browser passed.


