# Project Retrofit

Use this process when an existing software project needs to adopt this playbook, repair weak local agent instructions, or update after this playbook changes.

The retrofit task is complete only when the project keeps its useful local context while gaining a reachable default workflow, a real Super Agent definition, current project memory, thin routing, and alignment with current governance values.

## Inputs

Read:

1. This file, `governance/VALUES.md`, `governance/ORCHESTRATION_WORKFLOW.md`, and `governance/AGENT_ROLES.md`.
2. `governance/GOVERNANCE_AUDIT.md` when the project already has local agent instructions.
3. `templates/PROJECT_SKELETON_USAGE.md` and `templates/project_skeleton/` as the target structure to compare against.
4. Existing project memory, instruction files, agent definitions, commands, and source layout.

## Operator Consent Gate

Before changing roles, instruction files, workflow rules, or memory routing, ask whether the operator approves those changes.

If the operator does not approve instruction changes, perform only a read-only audit and report recommended updates.

## Retrofit Sequence

1. Confirm the target project root.
2. Inspect existing local instructions, memory files, agent definitions, commands, and source layout.
3. Identify the local agent mechanism supported by the project or toolchain using the Agent Creation Procedure in `governance/AGENT_ROLES.md`.
4. Ask the operator about current project goals, recurring workflows, known agent failures, and roles or processes that must be preserved.
5. Audit current instructions against `governance/GOVERNANCE_AUDIT.md`.
6. Follow `templates/PROJECT_SKELETON_USAGE.md`: compare the existing project to `templates/project_skeleton/` and merge the missing or corrected structure without overwriting useful local context.
7. Merge the default root-agent workflow, canonical Super Agent and its required workflow capabilities, and the explicit-only `$accept` Git workflow into the local mechanisms, using `templates/project_skeleton/WORKFLOW.md`, `.codex/agents/`, and `.agents/skills/` for Codex projects.
8. Preserve useful local executor roles, but repair their triggers, responsibilities, boundaries, required inputs, expected output, handoffs, and checks.
9. Recommend missing executor agents based on the project and create only the ones useful now.
10. Update project instructions and memory so `AGENTS.md`, `WORKFLOW.md`, `PROJECT_SPEC.md`, `ARCHITECTURE.md`, and `DESIGN_SYSTEM.md` when present reflect current project truth.
11. Make routing thin by removing duplicate, stale, or conflicting instruction text along each read path.
12. Report changed files, preserved roles, removed or rewritten conflicts, and future first-read instructions.

## Merge Policy

Use careful merge by default:

- Preserve project-specific roles, commands, constraints, architecture facts, and ask-the-user gates that are still valid.
- Use `templates/project_skeleton/` as a comparison target, not as a reason to replace the project wholesale.
- Replace or rewrite only instruction text that conflicts with this playbook, duplicates a narrower rule, routes readers to the wrong place, or claims agents exist without a usable mechanism.
- Do not fully replace the project's role model unless the operator explicitly asks for replacement.
- Do not leave bracket placeholders in final files. Remove unused placeholders and omit undecided details until agents discover them during project work.

## Workflow And System-Role Injection

Every retrofitted project must include:

- A local default workflow used by the runtime's root or equivalent primary agent, without duplicating that agent as an Orchestrator role.
- A real local Super Agent definition in the native mechanism when one exists.
- For Codex projects, `WORKFLOW.md` and `.codex/agents/agent_super_agent.toml` from `templates/project_skeleton/`.
- For Codex projects, `.agents/skills/audit-project-system/` and `.agents/skills/execute-verify-repair/` from `templates/project_skeleton/.agents/skills/`, wired from `agent_super_agent`.
- For Codex projects, the explicit-only `.agents/skills/accept/` workflow from `templates/project_skeleton/.agents/skills/`, available to the root agent and not wired from `agent_super_agent`.
- For projects without a native callable mechanism, preserve the default workflow and represent Super Agent as a section or phase in the project instructions.
- For platforms without a native skill mechanism, equivalent proof, consequence, convergence, and blocker gates inside the Super Agent workflow without claiming callable skills exist.

Adapt only local links, commands, file names, and project-specific constraints. Do not weaken the Super Agent's instruction authority or the root agent's ordinary-work accountability.

Do not turn the workflow or Super Agent role into standalone agent `.md` files unless the local platform explicitly loads that path and format as an agent definition. If no native callable agent mechanism exists, preserve them as sections or phases in the project instructions.

## Executor Agent Recommendation

Recommend executor agents after reading the project and asking the operator about recurring work.

Use the optional executor catalog in `governance/AGENT_ROLES.md` as a starter set, not a fixed list. Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for any project-specific executor agent.

Create an executor only when it has:

- A recurring trigger.
- Clear responsibilities and boundaries.
- Required inputs.
- Expected output.
- Handoffs back to the root agent or Super Agent.
- Checks or verification expectations.

## Retrofit Definition Of Done

- The operator approved instruction changes, or the output is explicitly audit-only.
- `AGENTS.md` is thin and routes the root agent to the default workflow and explicit system work to `agent_super_agent`.
- The default workflow is reachable, and a native Super Agent definition exists when the platform supports it.
- Required Super Agent audit and execute-verify-repair capabilities exist in the local workflow mechanism and are reachable through their canonical triggers.
- In Codex projects, the explicit-only `$accept` Git workflow is available to the root agent.
- Agent definitions are represented in a locally usable mechanism.
- Existing useful roles are preserved or migrated.
- Conflicting, duplicate, stale, and overloaded routing is removed or reported.
- Project memory reflects current project scope, architecture, commands, risks, and constraints.
- Governance values are present in local operating rules without copying this repository verbatim.
- Future agents know which files to read first and which commands to run.

## Retrofit Prompt

Use `templates/prompts/EXISTING_PROJECT_RETROFIT_PROMPT.md` when adapting an existing project.
