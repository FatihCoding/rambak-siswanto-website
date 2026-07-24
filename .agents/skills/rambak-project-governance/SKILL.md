---
name: rambak-project-governance
description: Govern Rambak Siswanto repository changes, evidence status, PR safety, and release gates.
---

# Rambak Project Governance

## Trigger

Use for repository changes, planning, audits, evidence reconciliation, pull requests, deployments, or release decisions in this project.

Do not use for casual questions that neither change nor assess project state.

## Inputs

- Current GitHub branch, HEAD, PR, preview, and production state
- `AGENTS.md`, `docs/PROJECT_TRUTH.md`, `docs/DECISION_LOG.md`, and `docs/QUALITY_GATES.md`
- Relevant evidence and owner decisions

## Workflow

1. Confirm GitHub, PR, deployment, and local-worktree state.
2. Read project instructions and current truth documents.
3. Classify every material claim and asset using the six project evidence statuses.
4. Apply the decision precedence in `docs/QUALITY_GATES.md`.
5. Choose the smallest change that satisfies the approved objective.
6. Run applicable verifier, browser, privacy, and release checks.
7. Update the decision log and evidence documents.
8. Commit to the existing branch and report actual results.

## Outputs

- Evidence-backed decision
- Focused changes and verification record
- Explicit blockers, owner approvals, preview state, and rollback point

## Stop and escalate

Stop publication or release for any unresolved P0/P1, conflicting owner identity, missing consent scope, private-data exposure, uncertain legal claim, wrong branch, or inability to identify the tested commit. Escalate decisions that require owner, lecturer, or production approval.


