---
name: project-architect
description: "Redesign or repair this project's own instruction system: AGENTS.md routing, skill boundaries, and cross-platform mirror integrity between .agents/skills and .claude/skills. Also runs an explicit operator-requested command and independently verifies and repairs its bounded consequences. Use for every edit to a file that instructs an agent, whatever its size, and when instructions have drifted, skills overlap or are missing, routing is unclear, or the operator explicitly asks to run and verify a command. Do not use for anything that instructs no agent."
---

# Project architect

## Mission

Own this project's instruction text: carry out each edit to it, and improve the system those instructions form, so future agents handle the same situation correctly without the operator restating the correction.

It is invoked by name and covers instructions alone; it does not take over product work.

## Use this skill when

- Any file that instructs an agent is to be changed, whatever the size of the change.
- Instructions need repair although no edit was requested: they have drifted, become redundant, conflict, leave a reader unsure which file or skill to use next, or a skill's mirrored copies are missing or differ.
- The operator explicitly asks to run a specific command and verify its result and repair what it breaks.

## Audit workflow

1. Read `AGENTS.md` and the skills inside the operator's named scope, or — for a project-wide audit — `AGENTS.md` and every skill. Do not pull in unrelated files without a concrete dependency.
2. Trace only paths that affect real behavior: `AGENTS.md`'s routing to the skill it names, a skill's frontmatter to how it actually gets invoked, and the two mirrored skill trees to each other.
3. For each candidate problem, before reporting it: locate the exact rule and the exact conflicting artifact, reproduce the failure by reading the reachable path, and check for an alternate valid explanation.
4. Do not report harmless repetition for a different audience, a style preference, or a hypothetical redesign as a defect. A cleaner design is not evidence the current one is wrong.
5. For a review-only request, do not edit — report findings. For an explicit fix request, change only proven problems and re-check the mirror with `diff -r .agents/skills .claude/skills`.

## Execute-verify-repair workflow

Use this only when the operator explicitly names a command to run and verify.

1. Record the exact command, working directory, expected result, and allowed side effects. Do not broaden "run X" into unrelated maintenance.
2. Run the command and capture exit code, output, and changed files (`git status`, focused diffs).
3. Verify the result independently of the command's own success message.
4. Treat a failure as repairable only if it is reproducible, violates an applicable rule, was caused by this command, and is within this skill's authority. Otherwise record it as residual risk instead of fixing it.
5. Apply the smallest durable repair, re-run the narrow failing check, then the original command if it is safe and idempotent.
6. Stop and ask the operator instead of retrying when: the same failure survives two different repairs, a non-idempotent action would repeat a side effect, or the fix needs a product or scope decision beyond routing.

## Rules

- Prefer deleting, merging, or moving existing instruction text over adding new text. Add only what the operator asked for or what a proven failure requires; an anticipated future need is not evidence.
- Write each rule at the widest wording that still decides the case correctly, instead of naming the case that prompted it. Name a concrete case only when the general wording would mislead a reader, and mark it as an example.
- Do not enumerate or count items unless the reader's decision depends on the exact set; a list kept for illustration ages into a defect.
- Keep `AGENTS.md` thin: routing and project context, not workflow detail that belongs in a skill.
- Every skill must exist as identical copies in `.agents/skills/<name>/` and `.claude/skills/<name>/`. A skill in only one location, or copies that differ, is a defect to fix in the same change.
- A single wording fix is in scope when the file instructs an agent, and out of scope when it does not.
- Do not commit or push unless the operator explicitly asks; that stays with the `accept` skill.

## Report

State plainly: what was checked, the findings, changed files or `none`, what future agents will do differently, verification performed (including the mirror check when skills changed), and residual risk or `none`.

Deliver the findings one at a time. Each one is three paragraphs — the context a reader needs, the problem with its evidence, and the smallest proposed fix — and cites every file as `path:line`. Then stop and ask whether to continue: do not name, count, or preview what is still queued, and finish the rest of the report only once the findings are done.

A true observation is not a finding: report it only when leaving it would make an agent act wrongly. `Nothing to fix` is a complete answer — say it directly instead of manufacturing a recommendation.
