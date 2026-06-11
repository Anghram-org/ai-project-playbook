# New Project Bootstrap Prompt

Use the attached governance repository as the source of truth for AI development workflow.

My project idea:
[describe the project]

Bootstrap this as a new AI-assisted software project.

First, read `handoff/EXTERNAL_AGENT_HANDOFF.md`, then read the governance files required for new project bootstrap.

Then:

- Inspect the target project root before writing files.
- Before creating or updating project memory files or local agent definitions, ask me only for a short project description if I did not already provide one. One or two sentences are enough.
- If I did not provide a project idea or equivalent product context, stop after asking for that short description unless I explicitly request an empty scaffold.
- After the short description is available or explicitly deferred, follow `templates/PROJECT_SKELETON_USAGE.md`: copy `templates/project_skeleton/` into the target project and adapt the copied files to the known context.
- Remove `DESIGN_SYSTEM.md` if this project has no UI.
- For Codex projects, keep `.codex/agents/agent_super_agent.toml` and `.codex/agents/agent_orchestrator.toml` from `templates/project_skeleton/.codex/agents/`.
- Keep `AGENTS.md` as a thin router to local memory and agent definitions.
- Recommend optional executor agents based on the project and create only the ones that are useful now.
- Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for any project-specific executor agent.
- Do not create standalone agent `.md` files unless the local platform explicitly loads that path and format as agent definitions.
- Propagate the values from `governance/VALUES.md` into local operating rules.
- Do not use placeholder-only bootstrap files as a substitute for the short description. In final project files, write only known facts and useful current context; omit undecided details until agents discover them during project work.
- Replace or resolve all `ADAPT` markers before finishing.
- Do not create changelog files or decision catalogs unless I explicitly ask for them.
- Do not write application code until the initial project memory and agent routing are clear.
