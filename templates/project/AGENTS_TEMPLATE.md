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
- Agent mechanism: [native callable agents, AGENTS.md sections/phases, or other explicitly supported mechanism]

## Universal Rules

- Communicate with the operator in Russian. Write documentation and code in English unless the operator explicitly requests another language for a specific artifact.
- Use role-based agent names and start active agent responses with an H1 heading containing the agent name.
- Check the working tree before editing. If there are unrelated uncommitted changes, stop and warn the operator instead of mixing them into the current task.
- Do not create commits or push branches unless the operator explicitly asks for that git action.
- Resolve user intent before implementation and ask only for real product, security, cost, scope, or reversibility decisions.
- Do not make speculative product, architecture, process, or instruction changes outside the operator's goal.
- Only the Super Agent may change agent instructions, governance rules, role definitions, workflow rules, or memory routing.

## Core Agents

### Super Agent

[Paste the canonical text from `templates/core/SUPER_AGENT.md` and adapt only local links, commands, and constraints.]

### Orchestrator

[Paste the canonical text from `templates/core/ORCHESTRATOR.md` and adapt only local links, commands, and constraints.]

## Executor Agents

[Add only project-useful executor agents. Each one must define trigger, responsibilities, boundaries, required inputs, expected output, handoffs, and checks.]

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
