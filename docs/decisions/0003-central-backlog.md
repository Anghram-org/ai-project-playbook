# 0003 Tasks live in the central backlog tool, not in `docs/`

- Status: Accepted
- Date: 2026-11-03 (operator)

## Decision
This repository and the `templates/` payload keep tasks in the shared backlog tool, reached through the `anghram-backlog` skill. `docs/BACKLOG.md` is removed from both; `docs-check` no longer requires it. The one open item (P-01) became task T-001 in project `ai-project-playbook`.

## Why
The operator tracks every project in one viewer. A per-repository table is a second source of truth the tool cannot see. Amends [0001](0001-docs-memory-scheme.md), which listed `BACKLOG.md` in the universal core.
