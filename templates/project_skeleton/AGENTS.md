# AGENTS.md

## First Read

- Read this file before project work.
- Read `PROJECT_SPEC.md` for product scope.
- Read `ARCHITECTURE.md` before code changes.
- Read `DESIGN_SYSTEM.md` before UI changes, if present.

## Local Project Context

- Governance source: ADAPT: path or URL to the playbook source.
- Project type: ADAPT.
- Primary stack: ADAPT: include only when known.
- Agent mechanism: Codex native callable agents in `.codex/agents/*.toml`.
- Non-Codex projects: ADAPT this file to the local native agent mechanism, or use `AGENTS.md` sections only when no callable mechanism exists.

## Universal Rules

- Communicate with the operator in Russian. Write documentation and code in English unless the operator explicitly requests another language for a specific artifact.
- Every spawned or selected agent must start operator-facing responses with an H1 heading that matches its selected `nickname_candidates` display name.
- Check the working tree before editing. If there are unrelated uncommitted changes, stop and warn the operator instead of mixing them into the current task.
- Do not create commits or push branches unless the operator explicitly asks for that git action.
- Do not commit secrets, credentials, private tokens, or sensitive user data.

## Instruction Authority

- Only the Super Agent may create, edit, reorganize, or delete agent instructions, workflow rules, role definitions, governance rules, memory-routing rules, or other instructions that control future agent behavior.
- Ordinary project files may be changed by the Orchestrator or executor agents within their assigned task boundaries.

## Core Agents

- Orchestrator agent name: `agent_orchestrator`; definition file: `.codex/agents/agent_orchestrator.toml`
- Super Agent agent name: `agent_super_agent`; definition file: `.codex/agents/agent_super_agent.toml`

## Executor Agents

No optional executor agents are defined yet.

Add executor agents only when a recurring responsibility has a clear trigger, boundaries, required inputs, expected output, handoff, and checks.

## Commands

- Install: ADAPT.
- Build: ADAPT.
- Test: ADAPT.
- Lint: ADAPT.
- Typecheck: ADAPT.

Remove commands that are not known yet.

## Ask-The-User Gates

ADAPT: include only known gates for decisions that affect product behavior, scope, data, security, cost, reversibility, external services, or global design. Remove this section if no gates are known yet.

## Routing

- Ordinary non-trivial work starts with the Orchestrator.
- Instruction, governance, role, workflow, memory-routing, or recurring agent-system problems require explicit routing to `agent_super_agent`.
- Executor agents are used only when specialist work is useful; in Codex subagent workflows, spawn them by agent name.
