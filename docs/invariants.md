# Invariants

Rules that must hold everywhere in this repository. Changing one needs an explicit operator decision, recorded as an ADR that references the invariant. Every item says how to check it.

## INV-01 One docs-check script, two copies
`scripts/docs-check.mjs` and `templates/scripts/docs-check.mjs` are identical, so the checker the maintainer runs is the one consumers receive ([ADR 0001](decisions/0001-docs-memory-scheme.md)).
Check: `diff scripts/docs-check.mjs templates/scripts/docs-check.mjs` prints nothing.

## INV-02 Shared skills do not name a repository-specific skill
`accept` and `docs-keeper` are identical in this repository and in `templates/`, so they refer to the instruction-system skill through `AGENTS.md`'s Instruction authority section, never by the name `playbook-architect` or `project-architect`.
Check: `diff .agents/skills/accept/SKILL.md templates/.agents/skills/accept/SKILL.md` and the same for `docs-keeper` print nothing.

## INV-03 One `.gitattributes`, two copies
`.gitattributes` and `templates/.gitattributes` are identical ([ADR 0002](decisions/0002-gitattributes-lf.md)).
Check: `diff .gitattributes templates/.gitattributes` prints nothing.
