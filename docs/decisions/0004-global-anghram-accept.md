# 0004 Step closing uses the global `anghram-accept`, not a local `accept`

- Status: Accepted
- Date: 2026-11-03 (operator)

## Decision
The local `accept` skill is removed from this repository and from `templates/` (all four copies). Committing and pushing at the end of a step goes through the global `anghram-accept` skill, which is outside the repository and not part of the payload. Amends [0001](0001-docs-memory-scheme.md), which added the five-stage `accept`.

## Why
One closing workflow for every project, maintained in one place; a per-repository copy drifts from it. The explicit-only rule stays: only the operator's explicit request invokes it.
