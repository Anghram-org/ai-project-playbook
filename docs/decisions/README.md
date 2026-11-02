# Decisions

One file per decision (ADR, short form), numbered `NNNN-slug.md`.

Rules:
- Each file has a line `- Status: <value>` and a line `- Date: YYYY-MM-DD`. The value is one of `Proposed`, `Accepted`, `Rejected`, `Deprecated` or `Superseded by` followed by a markdown link to the new ADR. After `Accepted`, add a parenthesized "amended by" note with a link when a later ADR changes part of it.
- Never rewrite an accepted decision. A change is a new ADR; the old one gets `Superseded by` and keeps its text.
- Every decision that came from the operator says so and gives the date. Every file says why, not only what.
- Add the new file to the index below in the same step. `scripts/docs-check.mjs` verifies that the index and the files agree.

## Index

| ADR | Decision | Status |
| --- | --- | --- |
| [0001](0001-docs-memory-scheme.md) | Project memory is `docs/`, taken from the hyperframes scheme | Accepted (amended by 0003, 0004) |
| [0002](0002-gitattributes-lf.md) | Line endings are fixed by `.gitattributes`, not by machine settings | Accepted |
| [0003](0003-central-backlog.md) | Tasks live in the central backlog tool, not in `docs/` | Accepted |
| [0004](0004-global-anghram-accept.md) | Step closing uses the global `anghram-accept`, not a local `accept` | Accepted |
