# AGENTS.md

## Purpose

ADAPT: one or two sentences describing what this project is and who it is for.

## Cross-platform contract

This project's instructions work identically under Codex and Claude Code:

- `AGENTS.md` is the single operator contract.
- `CLAUDE.md` is a one-line stub that loads it (`@AGENTS.md`), so both harnesses follow the same rules.
- Specialized or recurring work is a skill, not a platform-specific custom agent. Each skill exists as two identical copies: `.agents/skills/<name>/` for Codex and `.claude/skills/<name>/` for Claude Code. `.agents/skills/` is the canonical copy — edit there first, then copy the directory verbatim into `.claude/skills/<name>/`. Confirm the copies match with `diff -r .agents/skills .claude/skills` before finishing a skill change.

## Operator contract

Treat every request as an expression of intent, not a narrow command to perform the most literal edit possible.

- Determine the underlying goal before implementing; convert vague or tactical requests into explicit acceptance criteria.
- Prefer the smallest change that fully satisfies the intent. Avoid speculative architecture, unrelated refactors, and unnecessary dependencies.
- Before changing shared components, APIs, schemas, configuration, auth, permissions, or design tokens, check downstream impact first.
- Ask the operator only when a decision affects product behavior, user experience, scope, data, security, cost, or reversibility. Do not burden the operator with technical ceremony otherwise.
- A task is not done just because code was written. Review the diff, run suitable checks, and state what was verified and what was not.

## Project context

ADAPT: stack, main modules, data flow, external services, and constraints future agents must know. Remove a subsection with nothing useful to write yet. Omit undecided details instead of leaving placeholder text.

## Commands

ADAPT: install, build, test, lint, typecheck — only the ones that actually apply. Remove this whole section for a project with no code stack (a knowledge base, a support workflow, an ops process).

## Skills

Specialized or recurring work belongs in a skill, not a persistent named role. Infer the smallest applicable skill from plain language. Do not announce which skill was loaded and do not answer in the voice of a named role — the operator sees the work, not the routing.

- `accept` — explicit-only commit-and-push workflow. Invoke only when the operator explicitly asks to commit or push.
- `project-architect` — audits and repairs this project's own instruction system: `AGENTS.md` routing, skill boundaries, and cross-platform mirror integrity. Use for instruction-system, routing, or skill-boundary problems, not for ordinary product work.
- ADAPT: add a project-specific skill only when a recurring responsibility needs a stable, verifiable home — a repeated review checklist, a domain-specific workflow. A skill is a directory with `SKILL.md`: `name` and a routing `description` in the frontmatter, then mission, triggers, rules, boundaries, required inputs, and expected output. Keep `.agents/skills/<name>/` and `.claude/skills/<name>/` identical. Remove this line once real project-specific skills are listed here.

## Git discipline

- Check the working tree before editing. If it has unrelated uncommitted changes, stop and warn the operator instead of mixing them into the current task.
- Do not create commits or push branches unless the operator explicitly asks for that git action; use the `accept` skill for that.
- Do not commit secrets, credentials, private tokens, or sensitive user data.

## Ask-the-user gates

ADAPT: known gates for decisions that affect product behavior, scope, data, security, cost, reversibility, external services, or global design. Remove this section if none are known yet.
