---
name: accept
description: Commit and push the current task's reviewed changes when the operator explicitly invokes $accept.
---

# Accept Changes

Create one atomic commit for the current task and push the current branch. If the previous `$accept` attempt for the same current task created that commit but its push failed or delivery could not be confirmed, a new explicit invocation may instead use the recovery path below. Each explicit invocation authorizes only review and checks, one refresh of the configured upstream remote, scoped staging, at most one new commit, and one push of that commit or the valid recovery commit. It does not authorize amend, reset, rebase, upstream or Git configuration changes, or unrelated Git mutations.

## Review and scope

1. Inspect `git status --short --untracked-files=all`, unstaged and staged diffs, and the latest five commit subjects. Include untracked files in the review, and inspect the contents of every in-scope untracked file; its status entry alone is insufficient.
2. Determine which changed files belong to the current task. Stop and ask the operator if any changed file is unrelated or the scope cannot be determined. Do not silently bundle it into the commit.
3. Review the intended patch for credentials, private keys, tokens, personal data, or generated local artifacts that should not be committed. Stop and warn if any are found.
4. Identify the relevant checks from project instructions, configuration, and the affected code, then run them. If no relevant check exists, say so in the final report. Stop on a failed check unless the operator explicitly directs otherwise.

## Refresh, branch state, and recovery

1. Verify that `HEAD` is on a current branch with one unambiguous configured upstream. Before evaluating branch state, run one `git fetch --no-tags <configured-upstream-remote>` using that remote's configured fetch mapping so the configured upstream tracking ref is refreshed; do not use a branch-only fetch that may update only `FETCH_HEAD`. Do not configure or change an upstream. If the refresh fails, stop before any commit or push.
2. Use the normal path only when the refreshed local branch is exactly synchronized with its configured upstream: zero commits ahead and zero behind.
3. Use recovery only when the operator explicitly re-invokes `$accept` after the previous attempt for the same current task created exactly one commit and its push failed or delivery could not be confirmed. Require a clean worktree and index and no ambiguity about the previous attempt or task scope. After the refresh:
   - If the failed or unknown local `HEAD` commit is equal to or an ancestor of the configured upstream, treat delivery as confirmed. Do not push; run `git status` and report the commit hash, branch, configured upstream, checks run, and any checks not run.
   - If the branch is exactly one commit ahead and zero behind, apply the review and check requirements above to the complete ahead commit, then push only that reviewed commit to the configured upstream. Do not create another commit. After a successful push, run `git status` and report the same standard fields.
   - Otherwise, stop and ask.

## Normal commit and push

1. After the normal branch-state check passes, stage only explicit reviewed paths or hunks. If a file contains both in-scope and unrelated changes, stage only the reviewed in-scope hunks; stop and ask the operator if they cannot be separated safely. Never use `git add -A`, `git add .`, or a broad `git add -u`.
2. Recheck the staged patch, ensure it is non-empty, and repeat the task-scope and sensitive or generated-artifact review on the complete staged diff.
3. Write a concise commit subject that matches the repository's recent convention and describes the change. Do not add a co-author trailer unless the operator requests one.
4. Commit without `--amend` and without bypassing Git hooks.
5. Push only to the configured upstream. If it is absent or ambiguous, stop and ask; do not configure or change an upstream.
6. Run `git status` after the push and report the commit hash, branch, configured upstream, checks run, and any checks not run.

## Stop conditions

Before committing, stop without committing or pushing when there are unrelated or ambiguous changes, suspected sensitive material, an empty staged patch, a failed required check, a Git conflict, a failed upstream refresh, any nonzero ahead or behind state outside the valid recovery path, or an absent or ambiguous push target.

If any authorized push command fails or delivery cannot be confirmed, do not amend, reset, or push elsewhere. Report the local commit hash, branch, configured upstream, checks, and whether the outcome is a confirmed failure or unknown; classify it as confirmed failure only when Git definitively reports no delivery. A later explicit `$accept` may retry either outcome only through the recovery path.
