# Playbook Maintainer Workflow

Use this workflow only when editing this playbook repository.

The maintainer's job is to improve the reusable instructions that other agents will consume later. Do not behave as if this repository is one of those future product repositories.

This repository needs one maintainer workflow. Keep specialist role definitions in the consumer-facing governance files.

## Goal

Maintain a reusable governance package for AI-built software projects:

- Values and operating principles.
- Orchestrator workflow rules.
- Specialist agent role definitions.
- Project bootstrap guidance.
- Audit guidance.
- External-agent handoff guidance.

## Non-Goals

Do not use this repository for:

- Building an application.
- Choosing a tech stack for a specific product.
- Storing product-specific requirements.
- Storing one project's private architecture decisions.
- Requiring every future project to copy the same files verbatim.

## Change Flow

1. Identify whether the request affects maintainer guidance, external-agent handoff guidance, or reusable governance rules.
2. Resolve the user's intent and the documentation outcome they are trying to achieve.
3. Identify the stronger reusable rule behind the request, including any consequences the user may not have spelled out.
4. Read the affected files before editing.
5. Classify the change as maintainer rule, source governance rule, handoff guidance, audit criterion, or example.
6. Ask focused questions before editing if the intent is unclear enough that the change would be guesswork.
7. Edit the smallest set of files that keeps the repository consistent.
8. Check for duplicate or conflicting wording along the affected read path.
9. When source governance changes, consider whether `handoff/EXTERNAL_AGENT_HANDOFF.md` or `governance/GOVERNANCE_AUDIT.md` also needs an update.
10. Report what changed, what was checked, and which audience is affected.

## Instruction Hygiene

Do not clutter instruction files with duplicate, upstream, premature, or task-irrelevant rules. Thin routing and absence of duplicate instructions are required for the playbook to stay usable.

Before adding or changing instructions:

- Identify the required-reading path, audience, and task that need the rule.
- Put the rule in the narrowest appropriate file on that path, where the reader has the context to apply it.
- Split instructions by task so agents do not read rules for work they are not doing.
- Do not repeat, summarize, or cross-reference a downstream rule from an upstream file unless the upstream file must change the reader's routing decision.
- Keep handoff files focused on routing and adaptation; do not restate governance rules there.
- Use audit files for verification questions, not as another source of operating rules.
- Treat unnecessary instruction text as a defect, even when the text is technically correct.
- After editing, trace each affected read path and remove anything the same reader would read twice or without task need.

## Git Discipline

- Check the working tree before editing. If it contains changes unrelated to the current request, stop and warn the operator instead of mixing work.
- Do not commit or push unless the operator explicitly asks for that git action.
- When the operator asks for commits, keep each commit scoped to one task. Do not bundle unrelated documentation changes together.

## Repository Layers

### Maintainer Layer

Read by agents editing this repository:

- `AGENTS.md`
- `PLAYBOOK_MAINTAINER_WORKFLOW.md`

These files explain how to maintain the playbook itself.

### Governance Source Layer

Read by future project agents:

- `governance/VALUES.md`
- `governance/ORCHESTRATOR_WORKFLOW.md`
- `governance/AGENT_ROLES.md`
- `governance/PROJECT_BOOTSTRAP.md`
- `governance/GOVERNANCE_AUDIT.md`

These files describe reusable standards for AI-assisted projects.

### External-Agent Handoff Layer

Read by agents consuming this playbook from another project:

- `handoff/EXTERNAL_AGENT_HANDOFF.md`

This file tells external agents how to read the playbook and adapt its best practices into their own project.

## Writing Rules

- Be explicit about the intended reader.
- Communicate with the operator in Russian. Write documentation and code in English unless the operator explicitly requests another language for a specific artifact.
- Use "this repository" only for the playbook repository.
- Use "the project" or "future project" for consumer software projects.
- Avoid instructions that make a future project agent think it should edit this playbook.
- Avoid instructions that make a playbook maintainer think it should build product code.
- Keep examples short and clearly marked as examples.
