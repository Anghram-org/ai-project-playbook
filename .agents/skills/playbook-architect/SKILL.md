---
name: playbook-architect
description: "Redesign or repair this playbook's own instruction system: AGENTS.md routing, skill boundaries, cross-platform mirror integrity between .agents/skills and .claude/skills, and the templates/ payload consumer projects copy. Also runs an explicit operator-requested command and independently verifies and repairs its bounded consequences within this repository. Use for every edit to a file that instructs an agent, whatever its size, and when instructions have drifted, skills overlap or are missing, routing is unclear, or the operator explicitly asks to run and verify a command. Do not use for anything that instructs no agent."
---

# Playbook architect

## Mission

Own the playbook's instruction text: carry out each edit to it, and improve the system those instructions form, so future maintainers and future project agents handle the same situation correctly without the operator restating the correction.

It is invoked by name and covers instructions alone; it does not take over work on files that instruct no agent.

## Use this skill when

- Any file that instructs an agent is to be changed, whatever the size of the change.
- Instructions need repair although no edit was requested: they have drifted, become redundant, conflict, leave a reader unsure which file to read next, or a skill's mirrored copies are missing or differ.
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

- The reader of instruction text is an agent, not a human. Optimize for unambiguous execution over reading comfort, and cut what only helps a human skim; keep a rationale when it decides a borderline case.
- Prefer deleting, merging, or moving existing instruction text over adding new text. Add only what the operator asked for or what a proven failure requires — an anticipated future need is not evidence — and explain why reusing existing text was not enough.
- Write each rule at the widest wording that still decides the case correctly, instead of naming the case that prompted it. Name a concrete case only when the general wording would mislead a reader, and mark it as an example.
- Do not enumerate or count items unless the reader's decision depends on the exact set; a list kept for illustration ages into a defect.
- When creating a new skill for this repository or for `templates/`, start from `templates/skills/SKILL_TEMPLATE.md` for the section shape, then adapt it. `SKILL_TEMPLATE.md` itself never ships into a consuming project; it is a playbook-repository-only authoring aid.
- Keep `AGENTS.md` thin: routing and authority boundaries, not workflow detail that belongs in a skill.
- Every skill must exist as identical copies within its own payload: `.agents/skills/<name>/` and `.claude/skills/<name>/` for this repository's skills, `templates/.agents/skills/<name>/` and `templates/.claude/skills/<name>/` for the portable payload's skills. A skill in only one location, or copies that differ, is a defect to fix in the same change.
- Do not weaken the cross-platform contract, the explicit-only nature of `anghram-accept`, or the audience boundaries between this repository and `templates/`.
- A single wording fix is in scope when the file instructs an agent, and out of scope when it does not.
- Do not commit or push unless the operator explicitly asks; that stays with the global `anghram-accept` skill.

## Report

State plainly:

- what was checked (scope) and what was excluded;
- the findings, delivered as described below;
- changed files, or `none`;
- what future maintainers or consuming-project agents will do differently as a result;
- verification performed, including the mirror check when skills changed;
- residual risk or unresolved evidence, or `none`.

Deliver the findings one at a time. Each one is three labelled paragraphs — the context a reader needs, the problem with its evidence, and the smallest proposed fix — and cites every file as `path:line`. Stop after it and ask whether to continue only while another finding is still queued, without naming, counting or previewing it. When none is left, go straight on to the rest of the report.

A true observation is not a finding: report it only when leaving it would make an agent act wrongly. `Nothing to fix` is a complete answer — say it directly instead of manufacturing a recommendation.
