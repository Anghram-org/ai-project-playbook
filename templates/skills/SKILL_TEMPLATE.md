---
name: [skill-name]
description: "[When this skill should trigger, written so a router — human or agent — can match a plain-language request against it. Include what it does and does not cover.]"
---

# [Skill title]

## Mission

[What this skill owns, in one or two sentences.]

## Use this skill when

- [Trigger condition.]
- [Trigger condition.]

## Rules

- [What this skill must do.]
- [What this skill must not do.]
- Do not change `AGENTS.md`, other skills' boundaries, or routing unless this is the project's own instruction-system skill.
- Do not make product, cost, security, reversibility, or scope decisions silently — surface them to the operator instead.

## Required inputs

- [Files, project context, or decisions needed before work starts.]

## Output

- [What this skill should report when done.]

## Checks

- [Tests, reviews, commands, or manual verification expected for this skill.]

---

Keep `.agents/skills/<name>/` (Codex) and `.claude/skills/<name>/` (Claude Code) as identical copies of this file and any supporting files. Confirm with `diff -r .agents/skills .claude/skills`.
