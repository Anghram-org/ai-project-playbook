---
name: audit-project-system
description: Deeply audit the ai-project-playbook instruction system or an operator-scoped playbook area against the current maintainer workflow, agent authority, audience boundaries, and reachable governance paths. Use when Playbook Super Agent is asked to review repository instructions, agent roles, routing, governance, handoffs, templates, skills, orchestration, validation, or recurring workflow behavior for consequential logical errors, conflicts, stale references, unreachable rules, ownership leaks, propagation gaps, or execution drift. Do not use for ordinary content polishing or product implementation.
---

# Audit Project System

Find important playbook-system defects through reproducible evidence. Report only defects that pass the proof gate; do not turn style preferences, harmless repetition across different audiences, or hypothetical redesign opportunities into findings.

## Establish the Audit Contract

1. Read `AGENTS.md`, then follow its Playbook Maintainer Route and read only `PLAYBOOK_MAINTAINER_WORKFLOW.md` as the required maintainer workflow. Read other files only when they are inside the operator's scope or a traced dependency.
2. Treat the operator's named area as the audit seed. For a repository-wide audit, include the maintainer route, local agent definitions, workflow skills, source governance, external handoff, portable templates, and validation guidance. Do not read unrelated examples or consumer content without a concrete dependency.
3. State the baseline: current tracked instructions, current repository state, upstream state required by the Super Agent workflow, and explicit operator constraints. Audit the implemented playbook, not an imagined redesign.
4. Classify each candidate concern as `instruction_gap`, `role_boundary_problem`, `routing_problem`, `agent_mechanism_problem`, `memory_structure_problem`, `skill_problem`, `governance_propagation_problem`, `workflow_gap`, or `none`.
5. Identify the affected audience: playbook maintainer, external adopter, future-project agent, or template consumer. Treat cross-audience leakage as a defect only when the wrong reader can actually reach and act on the rule.

## Build a Bounded Consequence Graph

Trace only paths that can affect supported execution:

- `AGENTS.md` to the maintainer or external-agent route;
- maintainer workflow to the selected local agent and workflow skill;
- skill frontmatter to `agents/openai.yaml` and the local agent wiring;
- source governance to its direct handoff, audit, bootstrap, retrofit, or template consumers;
- exact paths, role names, prompts, validators, and commands referenced by the changed or audited rule.

Start with the audit seed, inspect its direct incoming and outgoing edges, and expand another edge only when an observed invariant or failure depends on it. Record why each expansion matters. Stop when a node has no routing, authority, propagation, validation, safety, or execution effect within scope. Repository-wide does not mean treating every prose difference as connected.

## Generate and Test Candidate Findings

Check the bounded graph for:

- mutually incompatible instructions on the same reachable path;
- missing, circular, ambiguous, or incorrect agent and skill routing;
- authority granted to the wrong role or audience;
- instructions that cannot be reached or executed as written;
- stale or broken paths, names, metadata, prompts, templates, or tool references;
- source governance changes whose required direct consumers remain inconsistent;
- audit or validation guidance that checks the wrong contract or leaves a claimed invariant unchecked;
- duplicated rules whose divergence changes supported behavior.

For each candidate, try to disprove it before reporting it:

1. Locate the exact applicable rule and the exact conflicting artifact or observed behavior.
2. Reproduce the failure with a read-only command, minimal trace, validator, or deterministic reasoning over the reachable instruction path. Reproduce a possibly transient symptom twice or confirm it through an independent invariant.
3. Check precedence, audience boundaries, exceptions, alternate valid routes, platform behavior, and direct consumers.
4. Identify the concrete routing, authority, propagation, safety, execution, or maintenance consequence.
5. Search the bounded graph for the same root cause and merge its manifestations into one finding.

Do not report a problem without all of these:

- a reachable artifact or behavior;
- an applicable violated contract;
- a reproducible failure predicate;
- a concrete consequence within scope;
- a rejected counterexample or alternate valid explanation.

Move unverifiable concerns to `residual_risk` with the missing evidence. Do not present them as findings.

## Rate Only Proven Problems

Assign severity from demonstrated impact:

- `critical`: reliably grants unsafe system authority, exposes protected information, or drives destructive behavior across a supported route;
- `high`: reliably causes wrong routing, ownership, governance propagation, or execution in a primary supported workflow;
- `medium`: reliably breaks a secondary supported route or makes required verification materially unreliable;
- `low`: real and reproducible, but localized with limited operational impact.

Do not report harmless wording differences, intentional repetition for separate audiences, transient environment failures outside the repository contract, unsupported future scenarios, optional unused material, or refactoring opportunities as defects. A cleaner design is not evidence that the current design is wrong.

## Conclude the Audit

Finish when every node and edge in the bounded graph has been checked, every candidate is proven, dismissed, deduplicated, or recorded as an evidence limitation, and a final pass introduces no new root cause inside scope. Do not continue into adjacent governance merely because it could also be improved.

For a review-only request, do not edit. If the operator explicitly requests fixes, change only proven system problems, preserve audience boundaries, and follow the repository sync, dirty-tree, and verification gates.

Report in Russian under `# Playbook Super Agent`:

- `status:` `diagnosis`, `changed`, `blocked`, or `no_durable_update`;
- `problem_type:` proven classifications, or `none`;
- `scope_and_baseline:` audited seeds, reachable paths, audiences, and exclusions;
- `proven_problems:` severity, exact evidence, violated contract, reproduced consequence, counterexample check, and smallest valid fix direction for each root cause;
- `changed_files:` paths or `none`;
- `routing_effect:` what future maintainers or consumers do differently, or `none`;
- `verification:` commands, traces, validators, and clean checks performed;
- `residual_risk:` unavailable evidence or `none`.

If no candidate passes the proof gate, say so directly. Do not manufacture a recommendation to justify the audit.
