# AGENTS.md

## First Read

- Read this file before ordinary work.
- Read `PROJECT_SPEC.md` for product scope.
- Read `ARCHITECTURE.md` before code changes.
- Read `DESIGN_SYSTEM.md` before UI changes, if present.

## Local Project Context

- Governance source: [path or link to this playbook]
- Project type: [application, library, service, tool, etc.]
- Primary stack: [known stack or "Unknown"]
- Agent mechanism: [`.codex/agents/*.toml`, another native callable mechanism, or AGENTS.md sections/phases only when no native mechanism exists]

## Universal Rules

- Communicate with the operator in Russian. Write documentation and code in English unless the operator explicitly requests another language for a specific artifact.
- Use role-based agent names. Start every operator-facing agent response with an H1 heading that exactly matches the selected display name from `nickname_candidates` or the project's equivalent display-name field.
- Check the working tree before editing. If there are unrelated uncommitted changes, stop and warn the operator instead of mixing them into the current task.
- Do not create commits or push branches unless the operator explicitly asks for that git action.
- Resolve user intent before implementation and ask only for real product, security, cost, scope, or reversibility decisions.
- Do not make speculative product, architecture, process, or instruction changes outside the operator's goal.
- Only the Super Agent may change agent instructions, governance rules, role definitions, workflow rules, or memory routing.

## Core Agents

- Super Agent: [path to native agent definition, such as `.codex/agents/agent_super_agent.toml`, or section anchor if no native mechanism exists]
- Orchestrator: [path to native agent definition, such as `.codex/agents/agent_orchestrator.toml`, or section anchor if no native mechanism exists]

## Executor Agents

[List only project-useful executor agents and their native definition paths. Each one must define trigger, responsibilities, boundaries, required inputs, expected output, handoffs, and checks.]

## Commands

- Install: [command or "Unknown"]
- Build: [command or "Unknown"]
- Test: [command or "Unknown"]
- Lint: [command or "Unknown"]
- Typecheck: [command or "Unknown"]

## Ask-The-User Gates

- [Project-specific decisions that require the operator.]

## Routing Notes

- Ordinary non-trivial work starts with the Orchestrator.
- Instruction, governance, role, workflow, memory-routing, or recurring agent-system problems require explicit Super Agent invocation.
- Executor agents are selected by the Orchestrator or Super Agent only when specialist work is useful.
- Keep this file thin. Do not paste full agent prompts here when native agent definition files exist.
