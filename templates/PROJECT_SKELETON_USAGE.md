# Project Skeleton Usage

Use this instruction when bootstrapping a new project or retrofitting an existing project with this playbook.

The transferable skeleton is `templates/project_skeleton/`. Treat it as the desired project-local shape, not as prose to reinterpret.

## New Project

1. Confirm the target project root.
2. Inspect the target root before writing files.
3. Ask the operator for a short project description before copying files, unless the current request already provides enough context.
4. Copy the contents of `templates/project_skeleton/` into the target project root, including hidden paths such as `.codex/agents/` and `.agents/skills/`.
5. Adapt every `ADAPT` marker to known project context.
6. Remove unused placeholders and omit undecided details from final project files.
7. Remove `DESIGN_SYSTEM.md` when the project has no UI.
8. Do not write application code until project memory, routing, and core agent definitions are usable.

## Existing Project

1. Confirm the target project root.
2. Inspect existing project memory, instruction files, agent definitions, commands, and source layout.
3. Ask whether the operator approves changes to roles, instruction files, workflow rules, and memory routing.
4. If approval is not granted, stop at a read-only audit and report recommended changes.
5. Compare the existing project with `templates/project_skeleton/`, including hidden paths such as `.codex/agents/` and `.agents/skills/`.
6. Merge missing or corrected pieces without overwriting useful local context.
7. Preserve valid project-specific roles, commands, constraints, architecture facts, and ask-the-user gates.
8. Remove or rewrite only conflicting, duplicate, stale, overloaded, or disconnected instruction text.
9. Do not write application code as part of retrofit unless the operator explicitly asks for it separately.

## Skeleton Contract

- `AGENTS.md` is a thin router and authority boundary, not a role prompt dump.
- For Codex projects, `.codex/agents/` contains the required native Super Agent and Orchestrator definitions.
- For Codex projects, `.agents/skills/` contains the required `$audit-project-system` and `$execute-verify-repair` workflows used by Super Agent.
- For non-Codex projects, transfer the core roles and both workflow capabilities into the platform's native agent and workflow mechanisms. If no skill mechanism exists, preserve the essential gates inside the Super Agent definition without claiming callable skills exist.
- Do not leave copied `.codex/` or `.agents/skills/` paths in a project whose runtime does not load them. Adapt their behavior first, then remove the inert platform-specific copies.
- `PROJECT_SPEC.md`, `ARCHITECTURE.md`, and optional `DESIGN_SYSTEM.md` hold current project memory.
- Optional executor agents are not part of the base skeleton. Add them only when a recurring responsibility has a clear trigger, boundaries, inputs, output, handoff, and checks.
- Only the Super Agent may edit instructions, workflow rules, role definitions, governance rules, or memory-routing rules.
- Orchestrator and executor agents may edit ordinary project files within their task boundaries.
