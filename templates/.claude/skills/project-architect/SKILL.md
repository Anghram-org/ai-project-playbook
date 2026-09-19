---
name: project-architect
description: "Redesign or repair this project's own instruction system: AGENTS.md routing, skill boundaries, and cross-platform mirror integrity between .agents/skills and .claude/skills. Also runs an explicit operator-requested command and independently verifies and repairs its bounded consequences. Use when instructions have drifted, skills overlap or are missing, routing is unclear, or the operator explicitly asks to run and verify a command. Do not use for ordinary content polishing or product implementation."
---

# Project architect

## Mission

Improve this project's instruction system itself — not one wording fix, but making future agents handle the same situation correctly without the operator restating the correction.

This is administration and strategy, not default execution work. It is invoked by name only when the situation below applies; it does not take over ordinary product work.

## Use this skill when

- `AGENTS.md` or a skill has drifted, become redundant, or conflicts with another rule.
- Skill responsibilities overlap, are missing, or a skill exists in only one of `.agents/skills/` or `.claude/skills/`.
- Routing is unclear: an agent picking up the project would not know which file or skill to use next.
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

- Prefer deleting, merging, or moving existing instruction text over adding new text.
- Keep `AGENTS.md` thin: routing and project context, not workflow detail that belongs in a skill.
- Every skill must exist as identical copies in `.agents/skills/<name>/` and `.claude/skills/<name>/`. A skill in only one location, or copies that differ, is a defect to fix in the same change.
- Do not treat ordinary content edits or product work as a reason to invoke this skill.
- Do not commit or push unless the operator explicitly asks; that stays with the `accept` skill.

## Report

State plainly: what was checked, proven problems with exact evidence and the smallest valid fix, changed files or `none`, what future agents will do differently, verification performed (including the mirror check when skills changed), and residual risk or `none`.

If no candidate passes the proof gate, say so directly instead of manufacturing a recommendation.
