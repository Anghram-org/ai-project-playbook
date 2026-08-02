---
name: audit-project-system
description: Deeply audit a project instruction system or an operator-scoped system area against the current local instructions, agent authority, project memory, routing, and reachable execution paths. Use when Super Agent is asked to review repository structure, instructions, configuration, roles, routing, schemas, privacy boundaries, agents, skills, orchestration, validation, or tooling for consequential logical errors, conflicts, stale references, unreachable rules, ownership leaks, propagation gaps, or execution drift. Do not use for ordinary product or code review.
---

# Audit Project System

Find important project-system defects through reproducible evidence. Report only defects that pass the proof gate; do not turn style preferences, harmless safety repetition, or hypothetical redesign opportunities into findings.

## Establish the Audit Contract

1. Read `AGENTS.md` completely, then read every current mandatory first-read file it routes for system work. Do not assume the initial skeleton filenames or placeholders remained unchanged after project adaptation.
2. Treat the operator's named area as the audit seed. For a project-wide audit, include tracked system instructions, native agent definitions, workflow skills, project-memory routes, configuration, path and privacy contracts, schemas, validation, and tooling. Do not inspect secrets or private records unless they are necessary evidence and the operator authorizes that inspection.
3. State the baseline: current local instructions, current repository and upstream state required by local workflow, and explicit operator constraints. Audit the implemented project, not an imagined redesign.
4. Classify each candidate concern as `instruction_gap`, `role_boundary_problem`, `routing_problem`, `agent_mechanism_problem`, `memory_structure_problem`, `skill_problem`, `schema_problem`, `privacy_problem`, `workflow_gap`, or `none`.
5. Classify the decision as Super-Agent-owned, owned by another role, or mixed under the local authority contract. Diagnose only the system portion the Super Agent owns. Route non-owned decisions to the responsible role or operator; split mixed work before editing.

## Build a Bounded Consequence Graph

Trace only paths that can affect supported execution:

- instruction roots, precedence, and first-read routing;
- router to the selected agent or workflow skill;
- skill frontmatter to `agents/openai.yaml` and agent wiring;
- project memory, schemas, configuration, templates, scripts, and validators directly referenced by the audited rule;
- direct consumers of a changed field, path, command, role, or invariant.

Start with the audit seed, inspect its direct incoming and outgoing edges, and expand another edge only when an observed invariant or failure depends on it. Record why each expansion matters. Stop when a node has no routing, authority, storage, privacy, validation, safety, or execution effect within scope. Repository-wide does not mean treating every prose or formatting difference as connected.

## Generate and Test Candidate Findings

Check the bounded graph for:

- mutually incompatible instructions on the same reachable path;
- missing, circular, ambiguous, or incorrect agent and skill routing;
- authority granted to the wrong role;
- instructions that cannot be reached or executed as written;
- stale or broken paths, names, metadata, prompts, schemas, commands, or tool references;
- configuration, schema, or memory contracts that disagree with their direct consumers;
- privacy, storage, or validation paths that fail the claimed contract;
- duplicated rules whose divergence changes supported behavior.

For each candidate, try to disprove it before reporting it:

1. Locate the exact applicable rule and the exact conflicting artifact or observed behavior.
2. Reproduce the failure with a read-only command, minimal trace, validator, or deterministic reasoning over the reachable path. Reproduce a possibly transient symptom twice or confirm it through an independent invariant.
3. Check precedence, exceptions, alternate valid routes, platform behavior, local adaptation, and direct consumers.
4. Identify the concrete routing, authority, privacy, data-integrity, safety, execution, or maintenance consequence.
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

- `critical`: exposes protected data, corrupts protected state, grants unsafe authority, or drives destructive behavior in a supported route;
- `high`: reliably causes wrong routing, ownership, persistence, schema, or execution in a primary supported workflow;
- `medium`: reliably breaks a secondary supported route or makes required verification materially unreliable;
- `low`: real and reproducible, but localized with limited operational impact.

Do not report harmless wording differences, intentional safety repetition across separate read paths, transient environment failures outside the repository contract, unsupported future scenarios, optional unused material, or refactoring opportunities as defects. A cleaner design is not evidence that the current design is wrong.

## Conclude the Audit

Finish when every node and edge in the bounded graph has been checked, every candidate is proven, dismissed, deduplicated, or recorded as an evidence limitation, and a final pass introduces no new root cause inside scope. Do not continue into adjacent architecture merely because it could also be improved.

For a review-only request, do not edit. If the operator explicitly requests fixes, change only proven Super-Agent-owned problems, preserve local role boundaries, and follow all repository sync, privacy, dirty-tree, and verification gates.

Start the report with the exact H1 required by the selected Super Agent's local display-name rule, then include:

- `status:` `diagnosis`, `changed`, `blocked`, or `no_durable_update`;
- `problem_type:` proven classifications, or `none`;
- `scope_and_baseline:` audited seeds, reachable paths, and exclusions;
- `proven_problems:` severity, exact evidence, violated contract, reproduced consequence, counterexample check, and smallest valid fix direction for each root cause;
- `changed_files:` paths or `none`;
- `routing_effect:` what future execution does differently, or `none`;
- `verification:` commands, traces, validators, and clean checks performed;
- `residual_risk:` unavailable evidence or `none`.

If no candidate passes the proof gate, say so directly. Do not manufacture a recommendation to justify the audit.
