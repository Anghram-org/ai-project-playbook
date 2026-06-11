# New Project Bootstrap Prompt

Use the attached governance repository as the source of truth for AI development workflow.

My project idea:
[describe the project]

Bootstrap this as a new AI-assisted software project.

First, read `handoff/EXTERNAL_AGENT_HANDOFF.md`, then read the governance files required for new project bootstrap.

Then:

- Inspect the target project root before writing files.
- Before creating or updating project memory files or local agent definitions, ask me for the product, users, MVP, non-goals, stack, UI, data, security, integrations, constraints, recurring work, and agent-support details that cannot be discovered locally.
- If I did not provide a project idea or equivalent product context, stop after asking those questions unless I explicitly request scaffold-with-unknowns.
- After I answer or explicitly defer the questionnaire, follow `templates/PROJECT_SKELETON_USAGE.md`: copy `templates/project_skeleton/` into the target project and adapt the copied files to this project.
- Remove `DESIGN_SYSTEM.md` if this project has no UI.
- For Codex projects, keep `.codex/agents/agent_super_agent.toml` and `.codex/agents/agent_orchestrator.toml` from `templates/project_skeleton/.codex/agents/`.
- Keep `AGENTS.md` as a thin router to local memory and agent definitions.
- Recommend optional executor agents based on the project and create only the ones that are useful now.
- Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for any project-specific executor agent.
- Do not create standalone agent `.md` files unless the local platform explicitly loads that path and format as agent definitions.
- Propagate the values from `governance/VALUES.md` into local operating rules.
- Do not use placeholder-only bootstrap files as a substitute for the questionnaire. Use `Unknown` or `Needs operator decision` only after asking, or if I explicitly request scaffold-with-unknowns.
- Replace or resolve all `ADAPT` markers before finishing.
- Do not create changelog files or decision catalogs unless I explicitly ask for them.
- Do not write application code until the initial project memory is created and the MVP scope is clear.
