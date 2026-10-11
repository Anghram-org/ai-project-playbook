# 0001 Project memory is `docs/`, taken from the hyperframes scheme

- Status: Accepted
- Date: 2026-10-11 (operator)

## Context
The hyperframes project keeps state across reset sessions in `docs/` (state, backlog, log, ADRs, invariants), maintained by a `docs-keeper` skill, verified by a script, and closed by a five-stage `accept`. The playbook previously forbade additional mandatory memory files and kept everything in `AGENTS.md`.

## Decision
- `docs/` is the standard project memory, for this repository and for every project adopting the playbook. `AGENTS.md` holds rules; skills hold method; `docs/` holds facts.
- The universal core is `README.md` (map), `STATE.md`, `BACKLOG.md`, `LOG.md`, `decisions/` and `invariants.md`. Domain documents (product brief, pipeline overview, inputs) are not part of the core; a project adds its own and registers them in its map.
- The mechanical check is a dependency-free Node script, `scripts/docs-check.mjs`, so it runs the same on Windows and macOS.
- `accept` has five stages (session, documents, instructions, defects, commit) and the `docs-keeper` skill is added. Both exist in both skill trees of this repository and of `templates/`.

## Why
Operators reset sessions between steps; memory that lives only in a growing `AGENTS.md` mixes rules with state and cannot be checked mechanically. Writing at the moment of change, with `accept` as a safety net, is the practice hyperframes arrived at. This replaces the earlier principle against additional mandatory memory files; see [INV-01](../invariants.md) and INV-02 for what keeps the shared pieces from diverging.
