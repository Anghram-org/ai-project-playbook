# Documentation map

ADAPT: one or two sentences on what the project is. Do not restate rules from `AGENTS.md`.

This folder is the project's memory. It is tracked in Git. A new session knows nothing except what is written here.

## Read order at the start of a session

1. This file.
2. [STATE.md](STATE.md): where we stopped and the next step.
3. [invariants.md](invariants.md): rules that must not be broken.
4. Only what the next step needs: the relevant ADRs in [decisions/](decisions/README.md). Open tasks come from the backlog tool (below).

Do not read [LOG.md](LOG.md) as a whole; search it when the history of something is needed.

## Where each fact lives (one fact, one place)

| File | Holds | Changes |
| --- | --- | --- |
| [STATE.md](STATE.md) | current state and next step; at most 60 lines | overwritten at the end of every step |
| backlog tool (`anghram-backlog` skill), outside the repository | tasks with status, priority and category | when work or a remark appears or closes |
| [LOG.md](LOG.md) | dated record of what was done and verified | append only |
| [decisions/](decisions/README.md) | one ADR per decision, with status | new file per decision; old ones are never rewritten, only marked `Superseded by` |
| [invariants.md](invariants.md) | numbered rules with a way to check each | when a new always/never rule appears |

ADAPT: add a row for each further document the project genuinely needs (for example a domain brief or an inputs registry), and remove this line. Add a file only when a fact has no home here.

Skills (`.agents/skills`, `.claude/skills`) hold method only: how to do a kind of work. They must not restate decisions or numbers; they point to ADRs and invariants. `AGENTS.md` holds agent rules and does not hold project facts.

## Maintenance protocol

Defined in `AGENTS.md` and carried out with the `docs-keeper` skill; its mechanical part is `scripts/docs-check.mjs`. Documentation language is English.
