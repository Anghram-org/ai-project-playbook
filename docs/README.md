# Documentation map

Maintainer memory of the playbook repository: state, backlog, history, decisions and invariants. It is not part of the payload that consuming projects copy; their counterpart is `templates/docs/`.

This folder is tracked in Git. A new session knows nothing except what is written here.

## Read order at the start of a session

1. This file.
2. [STATE.md](STATE.md): where we stopped and the next step.
3. [invariants.md](invariants.md): rules that must not be broken.
4. Only what the next step needs: [BACKLOG.md](BACKLOG.md), the relevant ADRs in [decisions/](decisions/README.md).

Do not read [LOG.md](LOG.md) as a whole; search it when the history of something is needed.

## Where each fact lives (one fact, one place)

| File | Holds | Changes |
| --- | --- | --- |
| [STATE.md](STATE.md) | current state and next step; at most 60 lines | overwritten at the end of every step |
| [BACKLOG.md](BACKLOG.md) | plan items (P-xx) and open issues (I-xx) with status | when work or a remark appears or closes |
| [LOG.md](LOG.md) | dated record of what was done and verified | append only |
| [decisions/](decisions/README.md) | one ADR per decision, with status | new file per decision; old ones are never rewritten, only marked `Superseded by` |
| [invariants.md](invariants.md) | numbered rules with a way to check each | when a new always/never rule appears |

Skills hold method only; `AGENTS.md` holds agent rules; neither restates a fact that lives here.

## Maintenance protocol

Defined in `AGENTS.md` and carried out with the `docs-keeper` skill; its mechanical part is `scripts/docs-check.mjs`. Documentation language is English.
