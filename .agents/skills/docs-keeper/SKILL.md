---
name: docs-keeper
description: "Keep the project's documentation in docs/ complete and consistent: start-of-session reading, end-of-step update of state, log, backlog, decisions and invariants, and the docs-check run. Use at the start and at the end of every working step, and whenever the operator reports a remark, makes a decision or asks to reset the session."
---

# Docs keeper

## Mission

`docs/` is the project's memory; the operator resets sessions between steps, so anything not written there is lost. This skill carries out the protocol that `AGENTS.md` makes mandatory. The map of the folder and the one-fact-one-place table are in `docs/README.md`.

## Use this skill when

- A working step starts or ends.
- The operator reports a remark, makes a decision, states an always/never rule, or asks to reset the session.

## Start of a session or step

1. Read `docs/README.md`, `docs/STATE.md` and `docs/invariants.md`. Then run `list` of the `anghram-backlog` skill for open tasks, and read only what the next step needs (the relevant ADRs). Search `docs/LOG.md`; do not read it whole.
2. Trust `STATE.md` over memory and over older chat. If it contradicts a file or a result you can see, resolve that before building on it and record the correction.
3. Check the working tree before editing (`AGENTS.md`, git discipline).

## During a step

Write at the moment it happens, not at the end of the step and not at `/anghram-accept` (which only verifies and repairs gaps; documentation reconstructed from memory loses dates, reasons and operator attribution):

- A fact that stops being true is corrected at its owner at once, so no stale statement survives into the next action.
- A correction of agent behavior goes into `AGENTS.md` or a skill at once, through the instruction-system skill named in `AGENTS.md`; do not leave it in the chat or in `docs/`.
- An operator remark or a problem you find becomes a backlog task through the `anghram-backlog` skill immediately.
- An operator decision, or a choice between real alternatives, becomes an ADR (below) before the work that depends on it continues.
- A new always/never rule becomes an invariant.

## End of every step

The step is not finished before all of this is done:

1. `STATE.md`: overwrite. What is true now, what the next step is (concrete enough to start without questions), what waits on the operator, and the `Updated:` date. At most 60 lines; move history to the log.
2. `LOG.md`: append a `## YYYY-MM-DD: title` entry at the end: what was done, what was verified, what was not. Never edit old entries.
3. Backlog (the `anghram-backlog` skill; tasks do not live in `docs/`): start, finish or add tasks so their state matches the step, with a pointer to the ADR or the log entry in the task note.
4. Decisions: every decision made in this step exists as an ADR and in the `docs/decisions/README.md` index. If it replaces an older one, mark the old file `Superseded by [NNNN](file)` and update its index row; do not rewrite its text.
5. Facts: if a fact changed, edit the one file that owns it (see the table in `docs/README.md`) and make sure no other file, skill included, restates it; replace a restatement with a link.
6. Run `node scripts/docs-check.mjs` and fix every failure. Report its result.
7. In the reply to the operator, say which docs changed.

## Templates

ADR file `docs/decisions/NNNN-slug.md`, next free number, lowercase slug:

```
# NNNN Title

- Status: Accepted
- Date: YYYY-MM-DD (operator, if it was their decision)

## Context
(only if not obvious)

## Decision
## Why
(or Consequences; link the invariants and ADRs it touches)
```

Index row: `| [NNNN](file.md) | Title | Accepted |`.

Invariant in `docs/invariants.md`:

```
## INV-NN Short name
The rule, with the ADR that justifies it.
Check: how to verify it mechanically or by inspection.
```

## Rules

- One fact, one place. Skills hold method; facts, numbers, file names and choices that belong to this project live in `docs/`.
- ADR numbers and item IDs are never reused or renumbered.
- Record facts that were measured or confirmed, and mark what was not verified as unverified.
- Documentation is written in English; identifiers, paths and quoted source text keep their original spelling.
- A session-reset test closes a large restructuring: read only `docs/README.md` and `docs/STATE.md` and confirm the next step can start without asking anything.

## Output

Which `docs/` files changed and the `docs-check` result.
