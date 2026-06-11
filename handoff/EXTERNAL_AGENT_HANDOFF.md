# External Agent Handoff

Use this file when you are an agent working in another software project and this playbook was provided as reference material.

You are not maintaining this playbook repository. Your task is to read the governance rules here, extract the relevant best practices, and adapt them into project-local instructions.

Do not copy this playbook verbatim. Build a local agent system that fits the project.

## First Decision

Classify your situation before reading further:

- New project bootstrap: no local project memory exists yet. Read `governance/PROJECT_BOOTSTRAP.md`, then read the governance files it requires.
- Existing project retrofit: local project files exist, but agent instructions are missing, weak, or not aligned with this playbook. Read `governance/PROJECT_RETROFIT.md`, then read the governance files it requires.
- Governance audit: the operator asks whether a project still follows this playbook. Read `governance/GOVERNANCE_AUDIT.md` and its listed inputs.
- Ordinary product or code work: first follow the project's local `AGENTS.md`. If no adequate local `AGENTS.md` exists, stop ordinary implementation and bootstrap or retrofit project-local instructions first.

## What To Read

Read only the governance files needed for your current task:

- Standard workflow or operating rules: `governance/ORCHESTRATOR_WORKFLOW.md`
- Values and principles: `governance/VALUES.md`
- Agent role model: `governance/AGENT_ROLES.md`
- New project setup: `governance/PROJECT_BOOTSTRAP.md`
- Existing project adaptation: `governance/PROJECT_RETROFIT.md`
- Governance drift review: `governance/GOVERNANCE_AUDIT.md`

Do not read unrelated governance files just because they exist.

## What To Do In Your Project

Create or update project-local memory files as needed:

- `AGENTS.md`
- `PROJECT_SPEC.md`
- `ARCHITECTURE.md`
- `DESIGN_SYSTEM.md` for UI projects

For new project bootstrap or existing project retrofit, creating or repairing local project memory is the task. Do not proceed to application code until the local agent system and minimum project context are usable.

Do not create changelog files or decision catalogs by default. Add project memory only when it gives future agents current context they would otherwise have to rediscover.

The local `AGENTS.md` should contain the operating rules that agents in your project must follow. It should reference this playbook as governance context, but it should also include project-specific rules, commands, risks, and ask-the-user gates.

At minimum, define:

- The default Orchestrator workflow through the local Orchestrator agent definition.
- The canonical Super Agent and Orchestrator role text in the local agent mechanism.
- Any optional executor agents that are useful for the project.
- Universal rules, instruction authority, and agent-specific boundaries.
- How agents are represented in the local toolchain: `.codex/agents/*.toml` for Codex projects, other platform-native agent definitions when available, or named sections/phases in `AGENTS.md` only when no callable agent mechanism exists.

## How To Adapt The Playbook

Do:

- Translate the playbook's general principles into project-specific rules.
- Require local agents to solve for the user's intended outcome, not only the literal tactic requested.
- Add guidance for converting vague or tactical requests into acceptance criteria and root-cause checks.
- Keep default orchestration, manually invoked Super Agent work, implementation, review, QA, and security responsibilities distinct.
- Adapt the Super Agent authority, executor boundaries, naming rules, H1 heading rule, dirty working tree rule, and commit restrictions from `governance/AGENT_ROLES.md`.
- For new projects, follow `templates/PROJECT_SKELETON_USAGE.md`: copy `templates/project_skeleton/` and adapt it after the operator answers the bootstrap questions.
- For existing projects, follow `templates/PROJECT_SKELETON_USAGE.md`: compare `templates/project_skeleton/` with the current structure and merge only the missing or corrected pieces.
- Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for project-specific executor agents.
- For Codex projects, use `templates/project_skeleton/.codex/agents/` to create separate `.codex/agents/*.toml` files and keep `AGENTS.md` as a thin router.
- Add local build, test, lint, typecheck, and verification commands.
- Record project-specific architecture, product scope, commands, constraints, and other current context in local files when that context helps future agents.
- Ask the user only for real product, security, cost, scope, or reversibility decisions.
- Make the result immediately usable by the next agent that opens the project.

Do not:

- Copy every playbook file verbatim into the project.
- Treat this playbook as application code.
- Import maintainer-only instructions from this repository into your project.
- Let project agents use "deeper intent" as an excuse for speculative features, unrelated refactors, or overriding explicit user decisions.
- Add speculative processes, roles, or documents that do not help the current project.
- Lock the project into only the roles listed in this playbook when a new executor role would make recurring work clearer.
- Treat optional executor agents as required in every project.
- Let the Orchestrator or executor agents edit instructions directly.
- Skip local project context because the playbook contains generic guidance.
- Create standalone agent `.md` files and claim they are callable agents unless the local platform explicitly loads that format.
- Leave agent definitions as abstract advice when the project has a native agent configuration format.
- Paste full agent prompts into `AGENTS.md` when a native callable agent mechanism is available.

## Expected Result

After using this playbook, your project should have clear local agent instructions, project memory, and a working route for future agents to follow.

The result should not be a clone of this repository. It should be a project-specific adaptation of the best practices found here.
