---
name: execute-verify-repair
description: Execute an operator-specified project-system command, independently verify its result and bounded connected consequences, repair proven in-scope system problems, and repeat until the checks converge cleanly or a genuine blocker requires operator action. Use when Super Agent is explicitly told to run command X and finish the verify-fix cycle. Do not use for open-ended maintenance, ordinary product implementation, or commands whose requested side effects are not authorized.
---

# Execute Verify Repair

Run the requested command as a controlled transaction with evidence-backed verification and a convergent repair loop. A zero exit code is evidence, not proof of a correct outcome.

## Establish the Execution Contract

1. Read `AGENTS.md` completely, then read every current mandatory first-read file it routes for system work. Read other files only when they are direct targets or traced dependencies of the command.
2. Record the exact command, working directory, operator-defined scope, expected primary result, allowed side effects, and relevant success checks. Do not broaden "run X" into authorization for unrelated maintenance.
3. Confirm the command and every possible repair are within Super Agent authority under the local contract. An ordinary product decision, another role's domain decision, or mixed decision is a blocker until the responsible owner or operator supplies it.
4. Complete every repository sync, dirty-tree, privacy, and pre-write gate required by local instructions before a mutating command or repair. Preserve concurrent work and stop if unrelated changes would be mixed into the task.
5. Resolve the exact target before destructive, external, privileged, or non-idempotent actions. Obtain any approval required by the execution environment. Never weaken authority, privacy, safety, or validation gates to make the command pass.

## Define a Bounded Consequence Graph

Before the first run, list:

- the command's direct target and declared outputs;
- direct instructions, agent definitions, skills, project memory, configuration, schemas, validators, or consumers that determine whether the output works;
- authority, privacy, storage, routing, schema, and safety invariants reachable from those targets;
- the minimal checks that independently observe each relevant consequence.

Inspect direct incoming and outgoing dependencies. Expand beyond them only when an observed failure depends on another edge. Do not fix pre-existing or adjacent issues merely because the command exposed them; include them only when they block the requested result and fall inside the authorized system scope.

## Execute and Capture Evidence

Run the exact command in the recorded working directory. Capture:

- exit code and material stdout or stderr;
- created, changed, deleted, or externally mutated targets;
- before/after state relevant to the expected result;
- `git status` and focused diffs for repository mutations;
- any partial success or irreversible side effect.

If the literal command is unsafe or cannot represent the operator's stated intent in this environment, stop and explain the mismatch instead of silently substituting a materially different command.

## Verify Independently

Check the primary result with an observation independent of the command's own success message. Then verify every node in the bounded consequence graph using the narrowest reliable checks available:

- parse or load changed configuration and skill metadata;
- resolve references, role names, authority boundaries, and instruction read paths;
- run targeted validators or tests;
- inspect exact outputs, schemas, templates, and direct consumers;
- verify privacy, storage, and repository invariants where reachable.

Treat a failure as repairable only when all are true:

1. it is reproducible;
2. it violates an applicable current contract or the explicit expected result;
3. it was caused by the command or blocks its in-scope result;
4. its repair is within Super Agent authority and operator authorization;
5. an alternative explanation or valid counterexample has been checked and rejected.

Record unrelated, pre-existing, speculative, ordinary-product, or authority-excluded concerns as exclusions or residual risk, not repair work. Retry or independently confirm a potentially transient tool, permission, network, or environment symptom before treating it as a repository defect.

## Repair and Re-run

For each proven in-scope failure:

1. Deduplicate failures by root cause.
2. Choose the smallest durable repair that restores the violated invariant.
3. Avoid opportunistic refactors, broad rewrites, dependency upgrades, formatting churn, or weakened validation.
4. Apply the repair and run its narrow failing check first.
5. Re-run the original command when it is safe and idempotent, then repeat the independent consequence checks.

For a non-idempotent command, do not blindly repeat side effects. Verify the resulting state and use the smallest documented continuation, rollback, or equivalent check. Ask the operator when another execution could duplicate, publish, delete, charge, notify, overwrite, or irreversibly mutate data.

## Enforce Convergence

After every iteration, record a compact state fingerprint:

- original command result;
- unresolved failure IDs and signatures;
- relevant diff or external-state change;
- checks that became clean;
- new evidence obtained.

Continue only when the iteration reduces unresolved failures or adds decisive evidence that changes the next diagnosis. Apply these stop rules:

- Do not repeat an identical command-repair-check sequence with the same fingerprint.
- If the same failure survives two materially different in-scope repairs, stop as blocked and report both attempts.
- If states oscillate between two fingerprints, stop after one confirmed cycle.
- If the next step needs broader scope, another authority, a product or domain decision, unavailable protected evidence, external coordination, or a risky non-idempotent rerun, stop for operator action.
- If every primary and connected check is clean and the final diff contains only intended changes, converge successfully.

Do not declare success because the iteration budget or patience is exhausted. A stop without clean checks must name the concrete blocker and the smallest operator decision or external change needed.

Start the report with the exact H1 required by the selected Super Agent's local display-name rule, then include:

- `status:` `changed`, `blocked`, or `no_durable_update`;
- `problem_type:` proven classifications or `none`;
- `command:` exact command and working directory;
- `result:` primary outcome and side effects;
- `repairs:` root cause, changed paths, and iteration for each repair, or `none`;
- `changed_files:` paths or `none`;
- `routing_effect:` changed future behavior or `none`;
- `verification:` independent checks and final convergence state;
- `excluded_findings:` unrelated, pre-existing, speculative, ordinary-product, or authority-excluded concerns;
- `residual_risk:` remaining uncertainty or `none`.
