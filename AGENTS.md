# AGENTS.md

This repository is the playbook source. It is not an application project.

## Local Agents

Codex agent definitions live in `.codex/agents/`.

- Use `agent_orchestrator` for ordinary non-trivial playbook maintenance work.
- Use `agent_super_agent` only for instruction-system, role-system, memory-routing, governance, or recurring workflow failures.
- Use `agent_custom_agent_blueprint` when designing a new project-specific executor agent.

## External Agent Route

Use this route if you are working in another project and this playbook was provided as reference material.

- Read only `handoff/EXTERNAL_AGENT_HANDOFF.md`.

## Playbook Maintainer Route

Use this route if you are editing this repository.

- Read only `PLAYBOOK_MAINTAINER_WORKFLOW.md`.
