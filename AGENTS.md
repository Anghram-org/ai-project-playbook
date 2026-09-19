# AGENTS.md

This repository is the playbook source: reusable governance for AI-built software projects. It is not an application.

Read this file when maintaining the playbook itself. If you are an agent working in another project that received this playbook as reference material, read [`templates/ADOPTION.md`](templates/ADOPTION.md) instead and stop reading here.

## Cross-platform contract

This playbook, and every project it produces, is designed to work identically under Codex and Claude Code:

- `AGENTS.md` is the single operator contract. Codex reads it directly.
- `CLAUDE.md` is a one-line stub that loads `AGENTS.md` (`@AGENTS.md`), so Claude Code follows the same rules without a second copy of the text.
- Specialized or recurring work is a skill, not a platform-specific custom agent. Each skill exists as two identical copies: `.agents/skills/<name>/` for Codex and `.claude/skills/<name>/` for Claude Code. `.agents/skills/` is the canonical copy — edit there first, then copy the directory verbatim into `.claude/skills/<name>/`. Confirm the copies match with `diff -r .agents/skills .claude/skills` before finishing a skill change.
- Do not add a platform-specific instruction unless the two harnesses genuinely diverge; when they do, state the difference explicitly instead of hiding it in one copy.
- Do not create standalone agent definition files (`.codex/agents/*.toml`, `.claude/agents/*.md`, or similar) for work a skill can describe. A skill is callable by both harnesses without per-platform prompts.

## Maintainer goal

Maintain a reusable governance package for AI-built software projects:

- The cross-platform operator contract this repository itself follows (below).
- The portable payload under `templates/` that other projects copy and adapt.

Non-goals: building an application, choosing a tech stack for a specific product, storing product-specific requirements, or requiring every future project to copy this repository verbatim.

## Change flow

1. Resolve the operator's intent and the documentation outcome they are trying to achieve.
2. Read the affected files before editing.
3. Classify the change as maintainer contract, portable template, or skill.
4. Ask a focused question before editing if the intent is unclear enough that the change would be guesswork.
5. Edit the smallest set of files that keeps the repository consistent, and keep `.agents/skills/` and `.claude/skills/` mirrored.
6. Check for duplicate or conflicting wording along the affected read path.
7. Report what changed, what was checked, and which audience is affected.

## Instruction hygiene

Do not clutter this file or `templates/` with duplicate, upstream, premature, or task-irrelevant rules.

- Put a rule in the narrowest file where the reader actually needs it: this file for maintaining the playbook, `templates/AGENTS.md` for what consumer projects inherit, a skill for a specific recurring workflow.
- Do not repeat a rule from a skill here just because the skill exists; route to it instead.
- Treat unnecessary instruction text as a defect, even when it is technically correct.

## Instruction authority

- Ordinary maintenance — fixing wording, updating a stale reference, adjusting a skill's own rules — is not privileged; make the smallest correct edit directly.
- Restructuring the instruction system itself — routing, skill boundaries, cross-platform mirror integrity, or recurring workflow failures — goes through the `playbook-architect` skill. Invoke it by name; it is not active by default.

## Skills

- `accept` — explicit-only commit-and-push workflow. Invoke only when the operator explicitly asks to commit or push.
- `playbook-architect` — audits and repairs this repository's own instruction system: routing, skill boundaries, hygiene, and cross-platform mirror integrity. Use for instruction-system, routing, skill-boundary, or recurring workflow-failure problems, not for ordinary content edits.

## Git discipline

- Check the working tree before editing. If it contains changes unrelated to the current request, stop and warn the operator instead of mixing work.
- Do not commit or push unless the operator explicitly asks for that git action; use the `accept` skill for that.
- When commits are requested, keep each commit scoped to one task.

## Repository layout

- `AGENTS.md`, `CLAUDE.md` — this contract.
- `.agents/skills/`, `.claude/skills/` — mirrored skill definitions used while maintaining this repository.
- `templates/` — the portable payload that consuming projects copy and adapt; see [`templates/ADOPTION.md`](templates/ADOPTION.md) for what it contains and how to use it.
- `README.md` — short public-facing overview.
- `TODO.md` — the operator's own running notes; not instructions.

## Writing rules

- Communicate with the operator in Russian. Write documentation and code in English unless the operator explicitly requests another language for a specific artifact.
- Use "this repository" only for the playbook repository; use "the project" or "future project" for consumer software projects.
- Avoid instructions that make a future project agent think it should edit this playbook, or that make a playbook maintainer think it should build product code.
- Keep examples short and clearly marked as examples.
