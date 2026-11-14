# 0005 `.gitattributes` marks common binary files

- Status: Accepted
- Date: 2026-11-14 (operator)

## Context
[ADR 0002](0002-gitattributes-lf.md) pinned line endings with `* text=auto eol=lf` only, leaving binary files to Git's content detection; the operator asked to mark them explicitly.

## Decision
`.gitattributes` and `templates/.gitattributes` keep `* text=auto eol=lf` and add `binary` for common binary types: images, audio, video, fonts, 3D models, WebAssembly, PDF and archives. A project adds its own types to its copy.

## Why
`text=auto` relies on Git's content heuristic to tell text from binary; it is right for most files, but a misdetected binary would have its bytes rewritten as line endings. An explicit `binary` rule removes the guess and also stops Git from showing text diffs and attempting text merges of these files. Amends ADR 0002; INV-03 (two identical copies) is unchanged.
