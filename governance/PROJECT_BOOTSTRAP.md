# Project Bootstrap

Use this process when starting a new AI-assisted software project.

The bootstrap task is complete only when a future agent can open the project, read thin local routing instructions, find real agent definitions, understand the product context, and know how to route ordinary work without rereading this playbook.

## Inputs

The agent performing bootstrap should read:

1. This file, `governance/VALUES.md`, `governance/ORCHESTRATOR_WORKFLOW.md`, and `governance/AGENT_ROLES.md`.
2. `templates/PROJECT_SKELETON_USAGE.md` and `templates/project_skeleton/`, plus `templates/executors/` only when a project-specific executor is needed.
3. The user's project idea.
4. Any existing project files.

## Minimal Description Gate

Before creating or updating `AGENTS.md`, `PROJECT_SPEC.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, or local agent definitions, the agent performing bootstrap must ensure there is a short project description unless the current request already provides enough project context.

The pre-write gate should be lightweight. Ask for one short project description that can be written into `PROJECT_SPEC.md`. The operator is not expected to know MVP scope, stack, UI, security, integrations, recurring work, or agent-support needs at bootstrap time.

Do not use placeholder-only bootstrap files as a substitute for the short description. In final project files, write only known facts and useful current context. Omit undecided details instead of adding placeholder notes or speculative questions.

If no project idea or equivalent product context was provided, stop after asking for the short description unless the operator explicitly requests an empty scaffold.

## Bootstrap Sequence

1. Confirm the target project root.
2. Inspect existing files before writing new memory.
3. Identify the local agent mechanism supported by the project or toolchain using the Agent Creation Procedure in `governance/AGENT_ROLES.md`.
4. Ask the operator for a short project description only if it was not already provided.
5. After the short description is available or explicitly deferred by the operator, follow `templates/PROJECT_SKELETON_USAGE.md`: copy `templates/project_skeleton/` into the project root and adapt the copied files to the known context.
6. Preserve the copied canonical Super Agent and Orchestrator in the local agent mechanism.
7. Recommend optional executor agents only when the short description and repository inspection show a clear recurring need now.
8. Add project-specific commands, risks, first-read files, and ask-the-user gates that are already known.
9. Stop before application implementation if the initial project memory or agent routing is still unclear.
10. Report what was created, which executor agents should be used, and which file future agents should read first.

## Create Project Memory

Create minimal project-specific files:

- `AGENTS.md` as a thin router
- `PROJECT_SPEC.md`
- `ARCHITECTURE.md`
- `DESIGN_SYSTEM.md` for UI projects

Do not copy the governance repository verbatim into the project. Adapt it.
Do not create changelog files or decision catalogs during bootstrap unless the operator explicitly asks for them.
Do not leave bracket placeholders in final files. After the Minimal Description Gate has been satisfied, remove unused placeholders and omit undecided details until agents discover them during project work.
Use `templates/project_skeleton/` as the concrete starting structure, not prose descriptions as a substitute for real files.
Remove `DESIGN_SYSTEM.md` when the project has no UI.

## Local Agent Mechanism

Agent definitions must be usable by future agents in the local project.

- If the platform has a native callable agent format, create or update agents in that format.
- In Codex projects, create `.codex/agents/agent_super_agent.toml` and `.codex/agents/agent_orchestrator.toml` from `templates/project_skeleton/.codex/agents/`.
- If no native callable agent format exists, define agents as named sections or phases inside the project `AGENTS.md`.
- Do not create standalone agent `.md` files unless the local platform explicitly loads that path and format as agent definitions.
- Do not treat this playbook's markdown templates as callable agents. They are source text for the local mechanism.
- Do not claim an executor agent exists unless the local instructions explain how it is used for routing, how it is spawned or selected by name, what it may do, what it must not do, and what it reports back.
- Keep the Super Agent and Orchestrator required. Add executor agents only when they are useful for the project.
- Keep `AGENTS.md` thin when native agent files exist. It should route to agent definitions, not contain their full prompts.

## Operator Input

Ask only for a concise project description unless the operator has already provided one. Use it to seed `PROJECT_SPEC.md`.

Example prompt:

> Briefly describe what this project should become and who it is for. One or two sentences are enough; we will develop the details iteratively.

## Initial `PROJECT_SPEC.md`

Should include:

- Short project description.
- Current known scope or context, if any.

Use `templates/project_skeleton/PROJECT_SPEC.md` as the starting point.

## Initial `AGENTS.md`

Should include:

- Link or reference to the governance repository.
- True universal rules.
- Instruction authority boundary.
- Paths to required Super Agent and Orchestrator definitions.
- Optional executor agent roles used for the project.
- Required checks.
- Files that agents must read first.
- Ask-the-user gates specific to the project.

Use `templates/project_skeleton/AGENTS.md` as the starting point.

For Codex projects, create:

- `.codex/agents/agent_super_agent.toml` from `templates/project_skeleton/.codex/agents/agent_super_agent.toml`
- `.codex/agents/agent_orchestrator.toml` from `templates/project_skeleton/.codex/agents/agent_orchestrator.toml`

For non-Codex native mechanisms, adapt the core role text from `templates/project_skeleton/.codex/agents/` into that mechanism.

Adapt only local links, commands, file names, and project-specific constraints. Do not weaken the Super Agent's instruction authority or the Orchestrator's ordinary-work accountability.

## Initial `ARCHITECTURE.md`

Should include:

- Tech stack.
- Main modules.
- Data flow.
- External services.
- Build and test commands.

Use `templates/project_skeleton/ARCHITECTURE.md` as the starting point.

## Initial `DESIGN_SYSTEM.md`

Create this file only for UI projects.

Should include:

- Visual direction.
- Component conventions.
- Layout and responsive rules.
- Design tokens or styling system.
- Accessibility requirements.
- Visual verification expectations.

Use `templates/project_skeleton/DESIGN_SYSTEM.md` as the starting point.

## Executor Agent Recommendation

Recommend executor agents after the short project description and repository inspection.

Use the optional executor catalog in `governance/AGENT_ROLES.md` as a starter set, not a fixed list. Use `templates/executors/CUSTOM_AGENT_TEMPLATE.md` for any project-specific executor agent.

Create an executor only when it has:

- A recurring trigger.
- Clear responsibilities and boundaries.
- Required inputs.
- Expected output.
- Handoffs back to Orchestrator or Super Agent.
- Checks or verification expectations.

## Bootstrap Definition Of Done

Before application code starts:

- `AGENTS.md` exists as a thin router and points to the default Orchestrator and explicitly requested `agent_super_agent`.
- The canonical Super Agent and Orchestrator were created as real local agent definitions in the native mechanism when available.
- Agent definitions are represented in a locally usable mechanism.
- Optional executor agents are used only when useful and have clear boundaries.
- `PROJECT_SPEC.md` captures the short project description and any currently known scope details.
- `ARCHITECTURE.md` captures the stack, modules, data flow, external services, and commands as far as they are known.
- `DESIGN_SYSTEM.md` exists for UI projects, or its absence is intentional.
- Governance values are present in local operating rules without copying this repository verbatim.
- Undecided product or architecture details are omitted instead of silently guessed.
- Future agents know which files to read first and which commands to run.

## Bootstrap Prompt

Use `templates/prompts/NEW_PROJECT_BOOTSTRAP_PROMPT.md` when starting a new project.
