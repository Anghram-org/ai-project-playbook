# Log

Append only; one `## YYYY-MM-DD: title` entry per working step, oldest first. Each entry says what was done, what was verified and what was not. Do not edit old entries; correct them with a new entry. Search this file for history; do not read it whole.

## 2026-10-11: docs-memory scheme introduced
- Studied the hyperframes project (`AGENTS.md` documentation protocol, `docs/`, `docs-keeper`, `docs-check.ps1`, five-stage `accept`) and ported it: [ADR 0001](decisions/0001-docs-memory-scheme.md).
- Added `docs/` and `scripts/docs-check.mjs` here; `templates/docs/`, `templates/scripts/docs-check.mjs`, `docs-keeper` and the five-stage `accept` for consuming projects; rewrote the affected parts of `AGENTS.md`, `templates/AGENTS.md`, `templates/ADOPTION.md`.
- Verified: both skill-tree mirrors identical, the two `docs-check.mjs` copies identical, `node scripts/docs-check.mjs` passes. Not verified: adoption on a real project (P-01); the script was not run on macOS.

## 2026-10-11: review of the scheme
- Trimmed the documentation protocol in both `AGENTS.md` files to routing and rules (steps stay in `docs-keeper`), removed a restated maintenance paragraph from both `docs/README.md` files and a redundant mirror remark from `templates/AGENTS.md`.
- Checked for leftovers from the hyperframes source (domain names, `.ps1`, `pipeline/`, `product/`): none. `node scripts/docs-check.mjs` passes; mirrors identical.

## 2026-10-11: second review
- Fixed `docs-check.mjs` parsing the example `## INV-NN` heading as an invariant (now only `## INV-<digit>` headings count); both script copies updated. Added `docs/` to the persistence principle in `templates/ADOPTION.md`.
- Verified: fresh template copy passes without git and after a commit; editing only `docs/BACKLOG.md` fails as intended; invariant parsing counts 0 sections in the empty template. `node scripts/docs-check.mjs` passes, mirrors and both script copies identical.

## 2026-10-11: line endings fixed by .gitattributes
- Operator decision ([ADR 0002](decisions/0002-gitattributes-lf.md)): added `.gitattributes` (`* text=auto eol=lf`) to the repository and to `templates/`, and the adoption steps in `templates/ADOPTION.md`; the global Git configuration was not changed.
- Verified: `node scripts/docs-check.mjs`, both `.gitattributes` copies identical, `git status` shows no new CRLF warning for the new files. Not done by design: renormalizing existing files.

## 2026-10-11: third review
- Wording only: simplified the existing-project `.gitattributes` step in `templates/ADOPTION.md`; removed a restated sentence and an inaccurate "instruction-bearing" label for `templates/docs/` and `templates/scripts/` from the protocol section of `AGENTS.md`.
- Verified: `node scripts/docs-check.mjs` passes; mirrors and the shared copies identical.

## 2026-10-11: review cleanup
- Converted the four working-copy files that still had CRLF (`AGENTS.md`, `README.md`, `templates/AGENTS.md`, `templates/ADOPTION.md`) to LF; content unchanged. Deleted the stray `.DS_Store` files (root and `templates/`) and added a `.gitignore` for them; the deletion is left unstaged.
- Verified: `git ls-files --eol` shows w/lf for the four files; `node scripts/docs-check.mjs` run after this entry.

## 2026-11-03: central backlog
- Operator decision ([ADR 0003](decisions/0003-central-backlog.md)): tasks live in the central backlog tool. Linked project `ai-project-playbook`, moved P-01 to T-001, removed `docs/BACKLOG.md` and `templates/docs/BACKLOG.md`, dropped it from both `docs-check.mjs`, rewrote the backlog wording in `docs-keeper`, `accept` (all four copies), both `AGENTS.md`, both `docs/README.md`, `templates/ADOPTION.md` and `README.md`.
- Verified: `node scripts/docs-check.mjs`, mirror and shared-copy diffs. Not verified: adoption of the new wording in a real consuming project (T-001).
- Follow-up: `templates/ADOPTION.md` now states how the tool is introduced: the skill is global and outside the payload, new projects create no task file (the first `add` links the project), existing projects move tasks by the skill's `Adopting a project` rule, and a missing skill is reported to the operator instead of recreating a table.

## 2026-11-03: drop local accept (T-002)
- Operator decision ([ADR 0004](decisions/0004-global-anghram-accept.md)): deleted the `accept` skill from `.agents/`, `.claude/`, `templates/.agents/` and `templates/.claude/`; both `AGENTS.md`, `docs-keeper`, `playbook-architect`, `project-architect`, `templates/ADOPTION.md`, `README.md` now point to the global `anghram-accept`; removed the `accept`/`playbook-architect` routing line; INV-02 narrowed to `docs-keeper`.
- Verified: `node scripts/docs-check.mjs`, both mirror diffs, grep for leftover `accept` references. Historic LOG entries and ADR 0001 text keep the old name by design.

## 2026-11-14: binary files in .gitattributes
- Operator decision ([ADR 0005](decisions/0005-gitattributes-binary.md)): `.gitattributes` and `templates/.gitattributes` now mark common binary types (images, audio, video, fonts, 3D models, WebAssembly, PDF, archives) as `binary`. ADR 0002 marked as amended.
- Verified: both copies identical (INV-03); `git check-attr` shows `binary` set for `*.png` and `text=auto eol=lf` for `*.md`. `node scripts/docs-check.mjs` passes.

## 2026-11-14: adoption confirmed
- Operator: the playbook has been adopted in real projects many times and works. The "not verified on a real project" notes in earlier entries are superseded; removed the open item and the T-001 next step from `STATE.md`. T-001 itself had already been closed and archived by the operator; `STATE.md` had not been updated then.
- Verified: the backlog `list` for `ai-project-playbook` shows no open tasks; `node scripts/docs-check.mjs` passes.

## 2026-11-14: no git state in docs/
- Operator rule: `docs/` does not record state git already shows. Added to the "One fact, one place" rule of `docs-keeper`, all four copies. Removed the stale `.DS_Store` git-state line from `STATE.md`.
- Verified: `diff -r` of both skill-tree mirrors and of the repository copy against the `templates/` copy shows no difference; `node scripts/docs-check.mjs` passes.
