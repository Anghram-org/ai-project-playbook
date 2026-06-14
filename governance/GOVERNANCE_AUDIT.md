# Governance Audit

Use this process when the governance repository changes or when an existing project may have drifted from the shared standards.

## Audit Goal

Determine whether the current project's agent instructions, workflow, and project memory still align with the governance repository.

## Audit Inputs

Read:

- Governance `VALUES.md`
- Governance `ORCHESTRATOR_WORKFLOW.md`
- Governance `AGENT_ROLES.md`
- Governance `PROJECT_RETROFIT.md` when auditing an existing project against a newer playbook
- Project `AGENTS.md`
- Project `PROJECT_SPEC.md`
- Project `ARCHITECTURE.md`
- Project `DESIGN_SYSTEM.md` when present

## Audit Questions

Check:

- Do instructions require agents to resolve user intent before implementation?
- Is the Orchestrator described as a strategic technical lead, professional manager, and senior developer?
- Does the Orchestrator improve solutions inside the operator's goal instead of only following literal wording?
- Do agents improve solutions within the user's goal without adding speculative scope?
- Do instructions require agents to distinguish root problems from requested tactics or visible symptoms?
- Do agents define acceptance criteria for vague or tactical requests before implementation?
- Does the project require default Orchestrator routing before implementation?
- Is `agent_super_agent` spawned or selected by name only when explicitly requested, instead of active by default?
- Does the project include the canonical Super Agent and Orchestrator role authority from `templates/project_skeleton/`?
- Is the Super Agent the only role allowed to create, edit, reorganize, or delete agent instructions, governance rules, role definitions, and memory routing?
- Is the Orchestrator forbidden from changing instructions?
- Do explicit instruction-change requests route to `agent_super_agent` by spawning or selecting that subagent instead of granting instruction-edit authority to the Orchestrator?
- Are executor agents forbidden from changing instructions directly?
- Does the project explain how agents are represented in the local toolchain?
- Are platform-native agent definitions used when available?
- For Codex projects, do Super Agent and Orchestrator exist as `.codex/agents/*.toml` instead of only prose in `AGENTS.md`?
- Are standalone agent `.md` files absent unless the platform explicitly loads them as agent definitions?
- Does each available executor agent define trigger, responsibilities, boundaries, inputs, output, handoffs, and checks?
- Does every agent have a role-based name?
- Does every active agent start operator-facing responses with an H1 heading that exactly matches its selected display name from `nickname_candidates` or the project's equivalent display-name field?
- Are only Super Agent and Orchestrator treated as required roles?
- Are executor roles treated as optional catalog entries used only when useful, and spawned by agent name in Codex subagent workflows?
- Is there a template for adding project-specific executor agents?
- Are routing instructions thin, with operating rules placed in the files where agents need them?
- Is `AGENTS.md` a thin router instead of a dump of full agent prompts when native agent files exist?
- Does `AGENTS.md` avoid role-specific workflow rules disguised as universal rules?
- Is instruction authority separated from ordinary project-file edit authority?
- For retrofitted projects, did the migration preserve useful local roles while removing conflicts and duplicate routing?
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
- For new projects, is bootstrap complete before application code starts?
- For new projects, did the operator provide or explicitly defer a short project description before project memory files and local agent definitions were created?
- For new projects, was `templates/project_skeleton/` copied and adapted instead of generating project structure from prose descriptions?
- For projects updated after playbook changes, were new governance values propagated into local operating rules?

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
