# Project Bootstrap

Use this process when starting a new AI-assisted software project.

## Inputs

The Orchestrator should read:

1. This governance repository.
2. The user's project idea.
3. Any existing project files.

## Create Project Memory

Create minimal project-specific files:

- `AGENTS.md`
- `PROJECT_SPEC.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DESIGN_SYSTEM.md` for UI projects

Do not copy the governance repository verbatim into the project. Adapt it.

## Initial `PROJECT_SPEC.md`

Should include:

- Project purpose.
- Target users.
- MVP scope.
- Non-goals.
- Key user flows.
- Known constraints.

## Initial `AGENTS.md`

Should include:

- Link or reference to the governance repository.
- Local project rules.
- Required Orchestrator, Super Agent, and executor agent roles.
- Universal agent rules, including role-based names, H1 agent headings, dirty working tree discipline, and commit restrictions.
- Required checks.
- Files that agents must read first.
- Ask-the-user gates specific to the project.

## Initial `ARCHITECTURE.md`

Should include:

- Tech stack.
- Main modules.
- Data flow.
- External services.
- Build and test commands.

## Initial `DECISIONS.md`

Should record:

- Date.
- Decision.
- Reason.
- Alternatives considered when relevant.

## Bootstrap Prompt

Use this prompt when starting a new project:

```text
Use the attached governance repository as the source of truth for AI development workflow.

My project idea:
[describe the project]

First, read the governance files.
Then create project-specific `AGENTS.md`, `PROJECT_SPEC.md`, `ARCHITECTURE.md`, and any other needed memory files.
Define the default Orchestrator, a manually invoked Super Agent, baseline executor agents, and room for project-specific executor agents.
Do not write application code until the initial project memory is created and the MVP scope is clear.
```
