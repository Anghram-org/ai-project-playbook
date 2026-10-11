# Decisions

One file per decision (ADR, short form), numbered `NNNN-slug.md`.

Rules:
- Each file has a line `- Status: <value>` and a line `- Date: YYYY-MM-DD`. The value is one of `Proposed`, `Accepted`, `Rejected`, `Deprecated` or `Superseded by` followed by a markdown link to the new ADR. After `Accepted`, add a parenthesized "amended by" note with a link when a later ADR changes part of it.
- Never rewrite an accepted decision. A change is a new ADR; the old one gets `Superseded by` and keeps its text, so the history stays readable.
- Every decision that came from the operator says so and gives the date. Every file says why, not only what.
- Add the new file to the index below in the same step. `scripts/docs-check.mjs` verifies that the index and the files agree.
- Template: Status, Date, Context (if not obvious), Decision, Why or Consequences. Start from the newest file, or from the template in the `docs-keeper` skill.

## Index

| ADR | Decision | Status |
| --- | --- | --- |
