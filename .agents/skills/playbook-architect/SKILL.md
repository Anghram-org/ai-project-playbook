---
name: playbook-architect
description: "Redesign or repair this playbook's own instruction system: AGENTS.md routing, skill boundaries, cross-platform mirror integrity between .agents/skills and .claude/skills, and the templates/ payload consumer projects copy. Also runs an explicit operator-requested command and independently verifies and repairs its bounded consequences within this repository. Use when instructions have drifted, skills overlap or are missing, routing is unclear, or the operator explicitly asks to run and verify a command. Do not use for ordinary content polishing or product implementation."
---

# Playbook architect

## Mission

Improve the playbook's instruction system itself — not one wording fix, but making future maintainers and future project agents handle the same situation correctly without the operator restating the correction.

This is administration and strategy, not default execution work. It is invoked by name only when the situation below applies; it does not take over ordinary maintenance.

## Use this skill when

- Instructions in `AGENTS.md`, a skill, or `templates/` have drifted, become redundant, or conflict.
- Skill responsibilities overlap, are missing, or a skill exists in only one of `.agents/skills/`/`.claude/skills/` or one of `templates/.agents/skills/`/`templates/.claude/skills/`.
- Routing is unclear: a maintainer or a consuming-project agent would not know which file to read next.
- The operator explicitly asks to run a specific command and verify its result and repair what it breaks, inside this repository.

## Audit workflow

1. Read `AGENTS.md` and the files inside the operator's named scope, or — for a repository-wide audit — `AGENTS.md`, every skill, and `templates/`. Do not pull in unrelated files without a concrete dependency.
2. Trace only paths that affect real behavior: `AGENTS.md` to the skill or template it routes to, a skill's frontmatter to its actual invocation, `templates/AGENTS.md` to the skills it references, and the two mirrored skill trees to each other.
3. For each candidate problem, before reporting it: locate the exact rule and the exact conflicting artifact, reproduce the failure by reading the reachable path (not by imagining a cleaner design), and check for an alternate valid explanation.
4. Do not report harmless repetition intended for a different audience, a style preference, or a hypothetical redesign as a defect. A cleaner design is not evidence the current one is wrong.
5. Rate only proven problems: `high` when it causes wrong routing or a broken cross-platform mirror on a primary path; `medium` when it breaks a secondary path or makes verification unreliable; `low` when it is real but localized.
6. For a review-only request, do not edit — report findings. For an explicit fix request, change only proven problems and re-check the mirror that was touched: `diff -r .agents/skills .claude/skills` for this repository's own skills, `diff -r templates/.agents/skills templates/.claude/skills` for the portable payload.

## Execute-verify-repair workflow

Use this only when the operator explicitly names a command to run and verify.

1. Record the exact command, working directory, expected result, and allowed side effects. Do not broaden "run X" into unrelated maintenance.
2. Run the command and capture exit code, output, and changed files (`git status`, focused diffs).
3. Verify the result independently of the command's own success message: re-read the changed file, re-resolve the routing or reference it was supposed to fix, re-run the mirror check if skills changed.
4. Treat a failure as repairable only if it is reproducible, violates an applicable rule, was caused by this command, and is within this skill's authority. Otherwise record it as residual risk instead of fixing it.
5. Apply the smallest durable repair, re-run the narrow failing check, then the original command if it is safe and idempotent.
6. Stop and ask the operator instead of retrying when: the same failure survives two different repairs, a non-idempotent action would repeat a side effect, or the fix needs a decision beyond routing (e.g. a product or governance choice).

## Rules

- Prefer deleting, merging, or moving existing instruction text over adding new text. Explain why deletion, merge, or movement was not enough before adding a narrow new rule.
- When creating a new skill for this repository or for `templates/`, start from `templates/skills/SKILL_TEMPLATE.md` for the section shape, then adapt it. `SKILL_TEMPLATE.md` itself never ships into a consuming project; it is a playbook-repository-only authoring aid.
- Keep `AGENTS.md` thin: routing and authority boundaries, not workflow detail that belongs in a skill.
- Every skill must exist as identical copies within its own payload: `.agents/skills/<name>/` and `.claude/skills/<name>/` for this repository's skills, `templates/.agents/skills/<name>/` and `templates/.claude/skills/<name>/` for the portable payload's skills. A skill in only one location, or copies that differ, is a defect to fix in the same change.
- Do not weaken the cross-platform contract, the explicit-only nature of `accept`, or the audience boundaries between this repository and `templates/`.
- Do not treat ordinary content edits, product work, or a single wording fix as a reason to invoke this skill.
- Do not commit or push unless the operator explicitly asks; that stays with the `accept` skill.

## Report

State plainly:

- what was checked (scope) and what was excluded;
- proven problems, with the exact evidence and the smallest valid fix;
- changed files, or `none`;
- what future maintainers or consuming-project agents will do differently as a result;
- verification performed, including the mirror check when skills changed;
- residual risk or unresolved evidence, or `none`.

If no candidate passes the proof gate, say so directly instead of manufacturing a recommendation.
