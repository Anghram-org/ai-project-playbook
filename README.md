# AI Project Playbook

This repository contains reusable governance for software projects built mostly or entirely by AI agents.

It has two separate instruction audiences:

- The agent maintaining this playbook repository.
- Agents working in future projects that consume this playbook.

## For External Agents

If you are an agent working in another project and this playbook was provided as reference material, start here:

- `handoff/EXTERNAL_AGENT_HANDOFF.md`

That file explains which best-practice files to read and how to adapt them into your own project.

## Governance

These files are the reusable best practices for future AI-built projects:

- `governance/VALUES.md`
- `governance/ORCHESTRATOR_WORKFLOW.md`
- `governance/AGENT_ROLES.md`
- `governance/PROJECT_BOOTSTRAP.md`
- `governance/PROJECT_RETROFIT.md`
- `governance/GOVERNANCE_AUDIT.md`
- `templates/`

They are not working rules for maintaining this repository. They are the playbook content that external agents adapt into their own projects.

`templates/` contains portable source templates for core agents, project memory, prompts, and custom executor agents.

## Maintainer Instructions

Use these when editing this repository:

- `AGENTS.md`
- `PLAYBOOK_MAINTAINER_WORKFLOW.md`

These files define how to maintain the playbook without confusing it with an application project.

## Consumer Instructions

Use these in future AI-built software projects:

- the `governance/` files listed above
- `handoff/EXTERNAL_AGENT_HANDOFF.md`
- `templates/` when creating or retrofitting project-local instructions

These files define how project agents should plan, implement, review, and verify product work.
