# Governance Audit

Use this process when the governance repository changes or when an existing project may have drifted from the shared standards.

## Audit Goal

Determine whether the current project's agent instructions, workflow, and project memory still align with the governance repository.

## Audit Inputs

Read:

- Governance `VALUES.md`
- Governance `ORCHESTRATOR_WORKFLOW.md`
- Governance `AGENT_ROLES.md`
- Project `AGENTS.md`
- Project `PROJECT_SPEC.md`
- Project `ARCHITECTURE.md`
- Project `DESIGN_SYSTEM.md` when present
- Project `DECISIONS.md`

## Audit Questions

Check:

- Do instructions require agents to resolve user intent before implementation?
- Do agents improve solutions within the user's goal without adding speculative scope?
- Do instructions require agents to distinguish root problems from requested tactics or visible symptoms?
- Do agents define acceptance criteria for vague or tactical requests before implementation?
- Does the project require orchestration before implementation?
- Are impact analysis rules present for shared components, APIs, data, auth, permissions, and config?
- Are ask-the-user gates clear?
- Are review and QA mandatory phases?
- Are security-sensitive changes escalated?
- Are project memory files current?
- Do local project rules conflict with governance values?
- Are agents overloaded with too many responsibilities?

## Output Format

Report:

```text
Aligned:
- ...

Drift:
- ...

Risks:
- ...

Recommended updates:
- ...

Can be updated automatically:
- yes/no
```

## Audit Prompt

Use this prompt:

```text
The governance repository has changed.
Audit this project against it.

Compare project instructions and workflow with the governance values.
Report alignment, drift, risks, and recommended updates.
Do not edit files until you identify which changes are mechanical and which need my decision.
```
