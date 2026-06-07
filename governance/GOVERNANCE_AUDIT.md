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
- Is the Orchestrator described as a strategic technical lead, professional manager, and senior developer?
- Does the Orchestrator improve solutions inside the operator's goal instead of only following literal wording?
- Do agents improve solutions within the user's goal without adding speculative scope?
- Do instructions require agents to distinguish root problems from requested tactics or visible symptoms?
- Do agents define acceptance criteria for vague or tactical requests before implementation?
- Does the project require default Orchestrator routing before implementation?
- Is the Super Agent manually invoked instead of active by default?
- Is the Super Agent the only role allowed to create, edit, reorganize, or delete agent instructions, governance rules, role definitions, and memory routing?
- Is the Orchestrator forbidden from changing instructions?
- Do explicit instruction-change requests activate the Super Agent instead of granting instruction-edit authority to the Orchestrator?
- Are executor agents forbidden from changing instructions directly?
- Does every agent have a role-based name?
- Does every active agent start with an H1 heading containing its agent name?
- Are required executor roles present while leaving room for useful project-specific executor agents?
- Are routing instructions thin, with operating rules placed in the files where agents need them?
- Are instructions split by task so agents do not read rules for work they are not doing?
- Are duplicate instructions absent along each required agent read path?
- Are handoff, audit, and routing files free of repeated downstream rules?
- Are impact analysis rules present for shared components, APIs, data, auth, permissions, and config?
- Are ask-the-user gates clear?
- Are review and QA mandatory phases?
- Are security-sensitive changes escalated?
- Do agents avoid commits and pushes unless the operator explicitly requested them?
- Do commit rules require one task per commit and prohibit bundling unrelated work?
- Do dirty working tree rules require agents to stop and warn before mixing unrelated changes?
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
