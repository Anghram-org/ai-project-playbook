# Adopting This Playbook

Use this file if you are an agent working in another project and this playbook was provided as reference material. You are not maintaining this repository — read [`AGENTS.md`](../AGENTS.md) in that case instead.

Do not copy this playbook verbatim. Build a local instruction system that fits the project, using the shape below.

## Principles this playbook carries into every project

- One operator contract: `AGENTS.md`, plus a one-line `CLAUDE.md` stub (`@AGENTS.md`) so Claude Code follows the same rules Codex reads directly. No separate architecture, product-spec, or design-system files — that context lives inside `AGENTS.md`'s `Project context` section, or in a skill when it is workflow-specific rather than descriptive.
- Specialized or recurring work is a skill, callable by name or inferred from plain language — not a persistent named agent identity that announces itself or takes over by default.
- Every skill exists as two identical copies: `.agents/skills/<name>/` for Codex and `.claude/skills/<name>/` for Claude Code. Neither copy links to the other.
- Only an explicit `accept`-style invocation commits or pushes; ordinary work never does.
- Instruction-system changes — routing, skill boundaries, mirror integrity — go through a `project-architect`-style skill invoked by name, not through ordinary work or a standing "admin" role.
- Ask the operator only for decisions that affect product behavior, scope, data, security, cost, or reversibility.
- Keep instructions thin: put a rule in the narrowest file where the reader actually needs it, and remove duplication when scope changes.

## New project

1. Confirm the target project root.
2. Ask the operator to describe the project in their own words — open-ended, not a checklist. Do not ask them to fill in stack, commands, or gates as separate questions; many projects have no stack at all (a knowledge base, a support workflow, an ops process), and forcing those questions produces empty or fabricated answers.
3. Read the description and decide what `AGENTS.md` actually needs. Ask a follow-up question only for a piece that is genuinely missing and needed to make the file usable now — for example, if the operator describes something that clearly runs code but never mentions how to test it. Do not interrogate section by section; one or two targeted follow-ups are normal, a fixed questionnaire is not.
4. Copy `templates/AGENTS.md` and `templates/CLAUDE.md` into the project root.
5. Copy `templates/.agents/` and `templates/.claude/` into the project root as `.agents/` and `.claude/` — this brings the `accept` and `project-architect` skills in as already-mirrored pairs.
6. Fill each section from what the operator actually said. Remove a section entirely (for example `Commands`) when it does not apply, rather than leaving it with `ADAPT` text or guessed values. Never leave an `ADAPT` marker in the final file.
7. Add a project-specific skill only when a recurring responsibility clearly needs one now — see `templates/skills/SKILL_TEMPLATE.md` (an authoring guide, not a skill to deploy as-is). Do not create speculative skills for hypothetical future work.
8. Do not write application code until `AGENTS.md` is usable and the `accept` and `project-architect` skills are in place.

## Existing project

1. Confirm the target project root and inspect the current `AGENTS.md`/`CLAUDE.md`, any agent or skill definitions, commands, and source layout.
2. Ask the operator whether they approve instruction changes. If not, do a read-only audit and report drift instead of editing.
3. Compare the project against `templates/AGENTS.md`, `templates/.agents/skills/`, and `templates/.claude/skills/`.
4. Merge missing or corrected pieces without overwriting useful local context: preserve project-specific commands, constraints, and skills that still work. Replace or remove only text that conflicts with this playbook, duplicates a narrower rule, or claims an agent/skill exists without a usable mechanism in this project's harness.
5. If the project carries legacy multi-file project memory (a separate architecture doc, product spec, or design-system file), fold the still-useful facts into `AGENTS.md`'s `Project context` section, or into a skill when the content is workflow-specific. Do not keep new content split across additional mandatory files.
6. If the project has a standalone `.codex/agents/*.toml` or `.claude/agents/*.md` custom agent doing recurring work a skill could describe instead, migrate it to a mirrored skill and remove the platform-specific file.
7. If the project is missing `project-architect` or has its own equivalent scattered across ad hoc instructions, add or consolidate it from `templates/.agents/skills/project-architect/` and `templates/.claude/skills/project-architect/`.
8. Report changed files, preserved content, and what a future agent should read first.

## Auditing an adopted project

When the operator asks whether a project still follows this playbook, or after this playbook itself changes:

- Read the project's `AGENTS.md`, `CLAUDE.md`, and skills; compare against `templates/AGENTS.md` and `templates/.agents/skills/`.
- Check that `.agents/skills/` and `.claude/skills/` are mirrored and complete — a skill in only one location is a defect.
- Check that `AGENTS.md` stays a thin, current contract instead of a growing prompt dump, and that no separate mandatory architecture/spec/design file has crept back in.
- Check that `project-architect` (or the project's equivalent instruction-system skill) is present and mirrored, rather than instruction-system authority being implicit or missing.
- Report alignment, drift, risk, and recommended updates. Do not edit until the operator says which changes are mechanical and which need their decision.
