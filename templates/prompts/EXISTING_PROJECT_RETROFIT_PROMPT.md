# Existing Project Retrofit Prompt

Use the attached governance repository as the source of truth for AI development workflow.

Retrofit this existing project to follow the playbook.

First, read `handoff/EXTERNAL_AGENT_HANDOFF.md`, then read the governance files required for existing project retrofit.

Then:

- Inspect existing project memory, instruction files, agent definitions, commands, and source layout before proposing changes.
- Ask whether I approve changes to roles, instruction files, workflow rules, and memory routing.
- If approved, follow `templates/PROJECT_SKELETON_USAGE.md`: compare the existing project to `templates/project_skeleton/` and merge only the missing or corrected pieces without destroying useful project-specific context.
- For Codex projects, create or update `.codex/agents/agent_super_agent.toml` and `.codex/agents/agent_orchestrator.toml` from `templates/project_skeleton/.codex/agents/`.
- Keep `AGENTS.md` as a thin router to local memory and agent definitions.
- Do not create standalone agent `.md` files unless the local platform explicitly loads that path and format as agent definitions.
- Ask me about current project goals, recurring workflows, known agent failures, and roles that must be preserved.
- Recommend missing executor agents and create only the ones that are useful now.
- Update project memory and instructions so they reflect current architecture, commands, risks, and governance values.
- Audit routing and keep it thin: route readers to the narrowest file that has the rule they need.
- Remove or rewrite duplicate, stale, or conflicting instruction text only when it is clearly part of the governance retrofit.
- Do not write application code as part of this retrofit unless I explicitly ask for it separately.
