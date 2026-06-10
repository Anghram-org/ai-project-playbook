# New Project Bootstrap Prompt

Use the attached governance repository as the source of truth for AI development workflow.

My project idea:
[describe the project]

Bootstrap this as a new AI-assisted software project.

First, read `handoff/EXTERNAL_AGENT_HANDOFF.md`, then read the governance files required for new project bootstrap.

Then:

- Inspect the target project root before writing files.
- Ask me for the product, stack, constraints, and recurring work details that cannot be discovered locally.
- Create project-specific `AGENTS.md`, `PROJECT_SPEC.md`, `ARCHITECTURE.md`, and `DESIGN_SYSTEM.md` when this is a UI project.
- For Codex projects, create `.codex/agents/agent_super_agent.toml` and `.codex/agents/agent_orchestrator.toml` from `templates/codex_agents/`.
- Keep `AGENTS.md` as a thin router to local memory and agent definitions.
- Recommend optional executor agents based on the project and create only the ones that are useful now.
- Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for any project-specific executor agent.
- Do not create standalone agent `.md` files unless the local platform explicitly loads that path and format as agent definitions.
- Propagate the values from `governance/VALUES.md` into local operating rules.
- Do not create changelog files or decision catalogs unless I explicitly ask for them.
- Do not write application code until the initial project memory is created and the MVP scope is clear.
