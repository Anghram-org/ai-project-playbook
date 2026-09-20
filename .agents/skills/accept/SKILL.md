---
name: accept
description: Commit and push the current task's reviewed changes when the operator explicitly invokes $accept.
---

# Accept Changes

Create one atomic commit for the current task and push the current branch. Each explicit invocation authorizes only review and checks, one refresh of the configured upstream remote, scoped staging, at most one new commit, and one push of the current branch, which delivers every local commit not yet upstream. It does not authorize amend, reset, rebase, upstream or Git configuration changes, or unrelated Git mutations. It applies only to the repository that contains the current working directory; committing or pushing in any other repository requires the operator's explicit authorization naming that repository.

## Review and scope

1. Inspect `git status --short --untracked-files=all`, unstaged and staged diffs, and the latest five commit subjects. Include untracked files in the review, and inspect the contents of every in-scope untracked file; its status entry alone is insufficient.
2. Determine which changed files belong to the current task. Stop and ask the operator if any changed file is unrelated or the scope cannot be determined. Do not silently bundle it into the commit.
3. Review the intended patch for credentials, private keys, tokens, personal data, or generated local artifacts that should not be committed. Stop and warn if any are found.
4. Identify the relevant checks from project instructions, configuration, and the affected code, then run them. If no relevant check exists, say so in the final report. Stop on a failed check unless the operator explicitly directs otherwise.

## Refresh and branch state

1. Verify that `HEAD` is on a current branch with one unambiguous configured upstream. Before evaluating branch state, run one `git fetch --no-tags <configured-upstream-remote>` using that remote's configured fetch mapping so the configured upstream tracking ref is refreshed; do not use a branch-only fetch that may update only `FETCH_HEAD`. Do not configure or change an upstream. If the refresh fails, stop before any commit or push.
2. Stop if the refreshed branch is behind its configured upstream: a commit would sit on stale state and the push would be rejected anyway. Being ahead is not a stop — commits may be held locally and delivered later.
3. When the task leaves nothing in scope to commit and the branch is ahead, create no commit: apply the review and check requirements above to the undelivered commits and go straight to the push step. This is how a re-invocation completes delivery after a push that failed or could not be confirmed.

## Normal commit and push

1. After the branch-state check passes, stage only explicit reviewed paths or hunks. If a file contains both in-scope and unrelated changes, stage only the reviewed in-scope hunks; stop and ask the operator if they cannot be separated safely. Never use `git add -A`, `git add .`, or a broad `git add -u`.
2. Recheck the staged patch, ensure it is non-empty, and repeat the task-scope and sensitive or generated-artifact review on the complete staged diff.
3. Compose a commit message whose subject is concise, matches the repository's recent convention, and describes the change; do not add a co-author trailer unless the operator requests one. Write it with the file-writing tool to the path `git rev-parse --absolute-git-dir` reports, named `COMMIT_EDITMSG`, and commit with `git commit --file=<path>`, without `--amend` and without bypassing Git hooks. Never pass message text through the shell — not with `-m`, `--file=-`, `echo`, a heredoc, or a here-string: a quote form or delimiter the current shell parses differently is absorbed into the message instead of failing.
4. Before pushing, print `git log -1 --format=%B` and confirm the message is exactly the intended text: the intended subject on the first line, no stray quoting or delimiter characters, nothing blank or truncated. If it is not, stop and report; a pushed message is permanent in shared history. Then list what delivery will cover with `git log --oneline <upstream>..HEAD` and report it — a push sends every local commit not yet upstream, not only the one just made.
5. Push only to the configured upstream, with `GIT_TERMINAL_PROMPT=0` set so a missing credential fails instead of waiting on a terminal prompt nobody can answer; a configured credential helper can still raise its own dialog. If the upstream is absent or ambiguous, stop and ask; do not configure or change an upstream.
6. Run `git status` after the push and report the commit hash, branch, configured upstream, checks run, and any checks not run.

## Stop conditions

Before committing, stop without committing or pushing when there are unrelated or ambiguous changes, suspected sensitive material, an empty staged patch with no undelivered commits either, a failed required check, a Git conflict, a failed upstream refresh, a branch behind its configured upstream, or an absent or ambiguous push target.

If any authorized push command fails or delivery cannot be confirmed, do not amend, reset, or push elsewhere. Report the local commit hash, branch, configured upstream, checks, and whether the outcome is a confirmed failure or unknown; classify it as confirmed failure only when Git definitively reports no delivery. A later explicit `$accept` retries delivery through the branch-state step above, creating no further commit.
