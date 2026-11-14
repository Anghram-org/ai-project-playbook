# State

Updated: 2026-11-14

Overwrite this file at the end of every step; it must let a fresh session continue without reading anything else first. Keep it at 60 lines or fewer; history goes to [LOG.md](LOG.md).

## Where we are

- The docs-memory scheme taken from the hyperframes project is in place for this repository and for the `templates/` payload ([ADR 0001](decisions/0001-docs-memory-scheme.md)): `docs/`, `scripts/docs-check.mjs`, and the `docs-keeper` skill, in both skill trees and both mirrors. Step closing is the global `anghram-accept`; there is no local `accept` ([ADR 0004](decisions/0004-global-anghram-accept.md)).
- `node scripts/docs-check.mjs` passes. The template docs under `templates/docs/` carry `ADAPT` and `YYYY-MM-DD` markers by design and are not checked here.
- Line endings are pinned to LF by `.gitattributes`, and common binary types are marked `binary` ([ADR 0002](decisions/0002-gitattributes-lf.md), [ADR 0005](decisions/0005-gitattributes-binary.md)).
- Tasks live in the central backlog tool, project `ai-project-playbook` (`anghram-backlog` skill), for this repository and the `templates/` payload ([ADR 0003](decisions/0003-central-backlog.md)); `BACKLOG.md` is gone from both.

## Next step (start here)

1. Run `list` through `anghram-backlog`. If no task is open, ask the operator for the next one.

## Blockers and waiting on the operator

- None.
