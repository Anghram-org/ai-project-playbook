# AI Project Playbook

Reusable governance for software projects built mostly or entirely by AI agents, designed to work identically under **Codex** and **Claude Code**.

## For External Agents

If you are an agent working in another project and this playbook was provided as reference material, start with [`templates/ADOPTION.md`](templates/ADOPTION.md). That file explains how to adopt, retrofit, or audit a project against this playbook.

## For Playbook Maintainers

If you are editing this repository, start with [`AGENTS.md`](AGENTS.md).

## Structure

- `AGENTS.md` / `CLAUDE.md` — this repository's own operator contract.
- `.agents/skills/` / `.claude/skills/` — mirrored skill definitions used to maintain this repository.
- `docs/` / `scripts/docs-check.mjs` — this repository's own memory (state, log, decisions, invariants; tasks are in the central backlog tool) and its consistency check.
- `templates/` — the portable payload: `AGENTS.md`, `CLAUDE.md`, mirrored `.agents/skills/` and `.claude/skills/` (including `docs-keeper` and `project-architect`), a `docs/` skeleton and `scripts/docs-check.mjs` for consuming projects to copy and adapt, plus `ADOPTION.md` explaining how.

There is no separate role-catalog or architecture document. Every project this playbook produces — including this one — is one `AGENTS.md` contract, mirrored skills for recurring work, and `docs/` as the memory that survives session resets.
