# Playbook Maintainer Workflow

Use this workflow when the agent is editing this playbook repository.

The playbook maintainer's responsibility is to improve the instructions that other agents will consume later. It should not behave as if it is inside one of those future product repositories.

This repository does not need multiple maintainer agents. Use one maintainer workflow and keep specialist role definitions inside the consumer-facing governance files for future projects.

## Goal

Maintain a reusable governance package for AI-built software projects.

This includes:

- Values and operating principles.
- Orchestrator workflow rules.
- Specialist agent role definitions.
- Project bootstrap guidance.
- Audit guidance.
- Handoff guidance that future project agents can use.

## Non-Goals

Do not use this repository to:

- Build an application.
- Choose a tech stack for a specific product.
- Store product-specific requirements.
- Store one project's private architecture decisions.
- Force every future project to copy the same files verbatim.

## Maintainer Flow

For each requested change:

1. Identify whether the request affects maintainer guidance, external-agent handoff guidance, or reusable governance rules.
2. Resolve the user's intent and the documentation outcome they are trying to achieve.
3. Read the affected files before editing.
4. Decide whether the change is a source rule, handoff guidance, or an example.
5. Improve the documentation within the user's goal, choosing the smallest set of files that keeps the repository consistent.
6. Ask focused questions before editing if the intent is unclear enough that the change would be guesswork.
7. Check for duplicate or conflicting wording.
8. If a source governance rule changes, consider whether `handoff/EXTERNAL_AGENT_HANDOFF.md` or `governance/GOVERNANCE_AUDIT.md` also needs an update.
9. Report what changed and which audience it affects.

## Repository Layers

### Maintainer Layer

Files for the agent editing this repository:

- `AGENTS.md`
- `PLAYBOOK_MAINTAINER_WORKFLOW.md`

These files should explain how to maintain the playbook itself with a single maintainer workflow.

### Governance Source Layer

Files consumed by future project orchestrators:

- `governance/VALUES.md`
- `governance/ORCHESTRATOR_WORKFLOW.md`
- `governance/AGENT_ROLES.md`
- `governance/PROJECT_BOOTSTRAP.md`
- `governance/GOVERNANCE_AUDIT.md`

These files should describe reusable standards for AI-assisted projects.

### External-Agent Handoff Layer

Files read by agents that consume this playbook from another project:

- `handoff/EXTERNAL_AGENT_HANDOFF.md`

This file should tell external agents how to read the playbook and adapt its best practices into their own project.

## Writing Rules

- Be explicit about the intended reader.
- Use "this repository" only for the playbook repository.
- Use "the project" or "future project" for consumer software projects.
- Avoid instructions that make a future project agent think it should edit this playbook.
- Avoid instructions that make a playbook maintainer think it should build product code.
- Keep examples short and clearly marked as examples.
