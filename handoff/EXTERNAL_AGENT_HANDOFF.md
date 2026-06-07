# External Agent Handoff

Use this file when you are an agent working in another software project and this playbook was provided as reference material.

You are not maintaining this playbook repository. Your task is to read the governance rules here, extract the relevant best practices, and adapt them into project-local instructions.

Do not copy this playbook verbatim. Build a local agent system that fits the project.

## What To Read

Read only the governance files needed for your current task:

- Standard workflow or operating rules: `governance/ORCHESTRATOR_WORKFLOW.md`
- Values and principles: `governance/VALUES.md`
- Agent role model: `governance/AGENT_ROLES.md`
- New project setup: `governance/PROJECT_BOOTSTRAP.md`
- Governance drift review: `governance/GOVERNANCE_AUDIT.md`

Do not read unrelated governance files just because they exist.

## What To Do In Your Project

Create or update project-local memory files as needed:

- `AGENTS.md`
- `PROJECT_SPEC.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DESIGN_SYSTEM.md` for UI projects
- `CHANGELOG.md` when useful

The local `AGENTS.md` should contain the operating rules that agents in your project must follow. It should reference this playbook as governance context, but it should also include project-specific rules, commands, risks, and ask-the-user gates.

At minimum, define:

- The default Orchestrator workflow from `governance/ORCHESTRATOR_WORKFLOW.md`.
- The manually invoked Super Agent model from `governance/AGENT_ROLES.md`.
- Any optional executor agents that are useful for the project.
- Universal agent rules and agent-specific boundaries.

## How To Adapt The Playbook

Do:

- Translate the playbook's general principles into project-specific rules.
- Require local agents to solve for the user's intended outcome, not only the literal tactic requested.
- Add guidance for converting vague or tactical requests into acceptance criteria and root-cause checks.
- Keep default orchestration, manually invoked Super Agent work, implementation, review, QA, and security responsibilities distinct.
- Adapt the Super Agent authority, executor boundaries, naming rules, H1 heading rule, dirty working tree rule, and commit restrictions from `governance/AGENT_ROLES.md`.
- Add local build, test, lint, typecheck, and verification commands.
- Record project-specific architecture, product scope, and decisions in local files.
- Ask the user only for real product, security, cost, scope, or reversibility decisions.

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

## Expected Result

After using this playbook, your project should have clear local agent instructions and project memory.

The result should not be a clone of this repository. It should be a project-specific adaptation of the best practices found here.
