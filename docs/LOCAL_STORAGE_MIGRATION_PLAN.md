# Local Storage Migration Plan

Target structure:

```text
D:\Projects\RambakSiswanto\
  website\
  private-evidence\
  approved-assets\
  owner-review-packages\
  backups\
```

This plan is not executed in Phase 1. GitHub remains the code source of truth; private evidence must never enter the public repository.

## Preparation

1. Finish all intended changes on `agent/business-ready-site-pass`.
2. Run the repository verifier, syntax checks, secret/privacy scan, and branch-preview QA.
3. Push a clean commit and record the branch HEAD, remote URL, PR number, preview URL, and rollback commit.
4. Confirm no uncommitted or untracked work remains in the real Git worktree. A source export without `.git` is not sufficient.
5. Back up private evidence separately with access control. Do not place it under `website/`.

## Safe clone to D:

1. Create the target directories with least-privilege access appropriate to the machine.
2. Clone `https://github.com/FatihCoding/rambak-siswanto-website.git` into `D:\Projects\RambakSiswanto\website`.
3. Fetch all branches and check out `agent/business-ready-site-pass`.
4. Confirm `origin`, upstream tracking, exact HEAD, and comparison against `origin/main`.
5. Confirm `.git` exists and that the worktree is clean.
6. Run:

```powershell
node scripts/verify-site.mjs
node --check public/site.js
node --check public/catalog.js
```

7. Compare a repository tree/hash inventory with the pushed commit where practical.
8. Open the new `website` folder as the Codex project and confirm repository instructions and Skills are detected.

## Evidence and asset separation

- `private-evidence/`: recordings, private notes, raw owner approvals, identity/legal source documents, private addresses, and unapproved photos. Keep outside Git and use encrypted/access-controlled backup.
- `approved-assets/`: working copies of assets that have passed provenance and publication approval. Public optimized derivatives enter Git only when their approval record is complete.
- `owner-review-packages/`: sanitized preview packages sent to the owner; exclude raw evidence.
- `backups/`: dated encrypted backups and restore instructions. A file on D: alone is not a backup.

## Deployment validation

1. Confirm Cloudflare is still connected to the same GitHub repository and expected branches.
2. Push a harmless documentation-only change only in a separately approved test if deployment connection needs proof.
3. Verify the branch preview serves the tested commit, has `X-Robots-Tag: noindex`, and differs from production.
4. Do not modify production settings during storage migration.

## Cutover and archive

1. Work from D: for at least one verified change cycle: edit, test, commit, push, preview deployment, and PR inspection.
2. Confirm backups can be listed and a small non-sensitive sample can be restored.
3. Only then make the old C: worktree read-only or archive it with its last HEAD recorded.
4. Do not delete the old C: copy until the project lead confirms the D: clone, remote, Codex, Cloudflare, and backups all work.
5. Never archive raw private evidence inside the public repository or a public artifact package.

## Rollback

If any remote, branch, test, Codex, Cloudflare, or backup check fails, stop using the D: clone, keep the C: copy intact, correct the failed step, and repeat verification. Repository history must not be rewritten to complete the move.


