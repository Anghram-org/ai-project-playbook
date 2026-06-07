# AGENTS.md

This repository is the playbook source. It is not an application project.

## Guest Gate

If you are an agent using this playbook from another project, do not continue through this file.

Read `handoff/EXTERNAL_AGENT_HANDOFF.md` instead. It tells you which best-practice files to read and how to adapt them into your own project.

The rest of this file is only for the agent maintaining this playbook repository.

A single agent working in this repository acts as the playbook maintainer. Its job is to improve the reusable governance instructions that will later be given to agents in other projects.

## Audience Separation

Keep these audiences separate:

- Playbook maintainer: the agent editing this repository.
- Project agents: agents working in future software projects that consume this repository.

Do not treat project-agent workflow rules as direct instructions to build product code in this repository. This repository should contain reusable standards and handoff guidance.

Do not create or simulate multiple specialist agents for routine playbook maintenance. Specialist roles are documented for future software projects, not for editing this repository.

## Files To Read First

Before changing this repository, read:

- `PLAYBOOK_MAINTAINER_WORKFLOW.md`
- The specific `governance/` or `handoff/` file being edited

Read `handoff/EXTERNAL_AGENT_HANDOFF.md` when changing the instructions for external agents that consume this playbook.

## Operating Rules

- Preserve the distinction between maintainer instructions, external-agent handoff instructions, and reusable governance rules.
- Keep reusable governance rules general enough to apply across projects.
- Put project-specific examples in handoff guidance or examples, not in global values.
- Avoid duplicating the same rule in many files.
- When changing governance behavior, update `handoff/EXTERNAL_AGENT_HANDOFF.md` or audit guidance if they would otherwise drift.
- Do not add application code, framework setup, or product-specific architecture to this repository.
- Prefer small documentation changes with clear scope.
- After editing, check for contradictory instructions across maintainer docs, governance docs, and external-agent handoff docs.

## Output Expectations

When reporting changes, distinguish between:

- Maintainer-facing changes: how this playbook repo should be edited.
- External-agent changes: what future project agents will read and adapt.
