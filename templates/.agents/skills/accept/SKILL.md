---
name: accept
description: Close a working step when the operator explicitly invokes $accept: check the session, make sure everything important is in docs/, check the instructions and the change for defects, leftovers and duplicates, repair what is found, then commit and push.
---

# Accept Changes

Close the current step: verify and repair it, confirm that ending the session loses nothing, then create one atomic commit for the task and push the current branch. Each explicit invocation authorizes only review, checks and independent verification, repair of what they find, one refresh of the configured upstream remote, scoped staging, at most one new commit, and one push of the current branch, which delivers every local commit not yet upstream. It does not authorize amend, reset, rebase, upstream or Git configuration changes, or unrelated Git mutations. It applies only to the repository that contains the current working directory; committing or pushing in any other repository requires the operator's explicit authorization naming that repository.

Documentation and instructions are written at the moment of each change (AGENTS.md, documentation protocol); this flow is the safety net that finds what was missed, not the place to write it from memory. Expect to find little. Whatever it has to reconstruct from the session, state that it was reconstructed and mark what cannot be confirmed.

The flow has five stages in order: session, documents, instructions, defects, then the commit. Each later stage can be changed by a repair in an earlier one, so any repair restarts the flow from stage 1: every step taken before it is stale. Stop and report when a repair is impossible, or when the same problem survives two distinct repairs.

## 1. Session

Reconstruct what this session settled: decisions (including the operator's), remarks and problems reported, work deferred, rules stated, facts measured, results produced, and what changed in how the project works. This list is the input of the next two stages. If part of the session is no longer available to you (for example after context compaction), stop and say so, and ask the operator for the missing part; do not report an unexamined part as captured.

## 2. Documents

Everything from stage 1 must exist in its one home in `docs/` (map and ownership table: `docs/README.md`), written in this change. Follow the end-of-step part of the `docs-keeper` skill:

- `docs/STATE.md` describes the situation now and a next step that can start without questions; `Updated:` is today.
- `docs/LOG.md` has an entry for this step, including what was verified and what was not.
- Every operator remark and every deferral is a backlog task (`anghram-backlog` skill); every decision is an ADR with its index row, and a replaced decision is marked `Superseded by`; every new always/never rule is an invariant with a `Check:`.
- A document the change left stale has not been written: facts that changed are edited at their owner.
- Write only what the session actually settled. Mark a date or an attribution you cannot confirm instead of inventing it.

Run `node scripts/docs-check.mjs` and repair every failure.

## 3. Instructions

Re-read every instruction file that this change touches, and check the instruction system against what the session taught:

- A correction the operator gave about how an agent must behave belongs in `AGENTS.md` or a skill; if it is only in the chat or in `docs/`, write it where an agent will read it. Do this through the instruction-system skill named in `AGENTS.md`'s Instruction authority section, in its explicit-fix path: repair the proven problems and put the findings in this flow's report, instead of delivering them one at a time with questions that would stop the flow.
- No instruction contradicts a changed fact or an ADR; skills hold method, not project facts; `AGENTS.md` stays routing and rules.
- Skill copies in `.agents/skills/` and `.claude/skills/` are identical (`diff -r .agents/skills .claude/skills`), and every skill exists in both; `docs-check` verifies this too.

## 4. Defects, leftovers and duplicates

1. Inspect `git status --short --untracked-files=all`, the unstaged and staged diffs, and the latest five commit subjects. Include untracked files in the review and read the contents of every in-scope untracked file; a status entry alone is insufficient.
2. Determine which changed files belong to the current task. Stop and ask the operator if any changed file is unrelated or the scope cannot be determined. Do not silently bundle it into the commit.
3. Read each in-scope hunk against the task's intent rather than against itself, and try to falsify it: something the task promised that the change does not do, a path it leaves broken, a result contradicting an invariant in `docs/invariants.md` or an ADR. Verify results that can be verified instead of trusting the session's report of them.
4. Look for what a finished change does not have: debug output, commented-out code, a file or a reference nothing uses, an edit begun and not finished, the same fact written in two places, a stale pointer after a rename or move. Repair what makes the change wrong or leaves it incomplete; report what does neither, rather than churning the change over it.
5. Review the intended patch for credentials, private keys, tokens, personal data, or generated local artifacts that should not be committed. Stop and warn if any are found.
6. Identify the relevant checks from project instructions, configuration and the affected code, then run them. If no relevant check exists, say so in the final report. Repair a check that fails and run it again.

## 5. Refresh, commit and push

### Refresh and branch state

1. Verify that `HEAD` is on a current branch with one unambiguous configured upstream. Before evaluating branch state, run one `git fetch --no-tags <configured-upstream-remote>` using that remote's configured fetch mapping so the configured upstream tracking ref is refreshed; do not use a branch-only fetch that may update only `FETCH_HEAD`. Do not configure or change an upstream. If the refresh fails, stop before any commit or push.
2. Stop if the refreshed branch is behind its configured upstream: a commit would sit on stale state and the push would be rejected anyway. Being ahead is not a stop — commits may be held locally and delivered later.
3. When the task leaves nothing in scope to commit and the branch is ahead, create no commit: apply stages 1 to 4 to the undelivered commits and go straight to the push step. This is how a re-invocation completes delivery after a push that failed or could not be confirmed.

### Commit and push

1. After the branch-state check passes, stage only explicit reviewed paths or hunks. If a file contains both in-scope and unrelated changes, stage only the reviewed in-scope hunks; stop and ask the operator if they cannot be separated safely. Never use `git add -A`, `git add .`, or a broad `git add -u`.
2. Recheck the staged patch, ensure it is non-empty, and repeat the task-scope and sensitive or generated-artifact review on the complete staged diff.
3. Compose a commit message whose subject is concise, matches the repository's recent convention, and describes the change; do not add a co-author trailer unless the operator requests one. Write it with the file-writing tool to the path `git rev-parse --absolute-git-dir` reports, named `COMMIT_EDITMSG`, and commit with `git commit --file=<path>`, without `--amend` and without bypassing Git hooks. Never pass message text through the shell — not with `-m`, `--file=-`, `echo`, a heredoc, or a here-string: a quote form or delimiter the current shell parses differently is absorbed into the message instead of failing.
4. Before pushing, print `git log -1 --format=%B` and confirm the message is exactly the intended text: the intended subject on the first line, no stray quoting or delimiter characters, nothing blank or truncated. If it is not, stop and report; a pushed message is permanent in shared history. Then list what delivery will cover with `git log --oneline <upstream>..HEAD` and report it — a push sends every local commit not yet upstream, not only the one just made.
5. Push only to the configured upstream, with `GIT_TERMINAL_PROMPT=0` set so a missing credential fails instead of waiting on a terminal prompt nobody can answer; a configured credential helper can still raise its own dialog. If the upstream is absent or ambiguous, stop and ask; do not configure or change an upstream.
6. Run `git status` after the push and report the commit hash, branch, configured upstream, checks run, any checks not run, and each repair the stages made, or that nothing needed repair.
7. End the report with the verdict, in the operator's language and plain words: whether every stage passed and whether the operator can close the session, and, when not, the one thing that stopped it. One or two sentences; no hashes, no table, no paths.

## Stop conditions

Before committing, stop without committing or pushing when there are unrelated or ambiguous changes, suspected sensitive material, an empty staged patch with no undelivered commits, a failed check, defect, leftover or undocumented decision that repair has not resolved, a session part no longer available to the agent, a failing `docs-check`, a Git conflict, a failed upstream refresh, a branch behind its configured upstream, or an absent or ambiguous push target.

If any authorized push command fails or delivery cannot be confirmed, do not amend, reset, or push elsewhere. Report the local commit hash, branch, configured upstream, checks, and whether the outcome is a confirmed failure or unknown; classify it as confirmed failure only when Git definitively reports no delivery. A later explicit `$accept` retries delivery through the branch-state step above, creating no further commit.
