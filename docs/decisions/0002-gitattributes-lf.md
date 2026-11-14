# 0002 Line endings are fixed by `.gitattributes`, not by machine settings

- Status: Accepted (amended by [0005](0005-gitattributes-binary.md))
- Date: 2026-10-11 (operator)

## Context
The operator's Git for Windows has `core.autocrlf=true` in its system config. It lives on the computer, applies to every repository there and does not travel with a repository. The playbook is meant to be copied to other projects and may be opened on other systems.

## Decision
- This repository and `templates/` carry a `.gitattributes` with `* text=auto eol=lf`. Adopted projects receive it from `templates/.gitattributes`.
- The operator's global Git configuration is not changed.
- Adoption never runs `git add --renormalize` or any other Git mutation; it tells the operator that CRLF files may show as modified once.

## Why
A repository-level rule beats the machine setting for these files and behaves the same everywhere. Changing the global `autocrlf` would affect the operator's unrelated projects.
