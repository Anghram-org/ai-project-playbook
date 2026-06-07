# Orchestrator Workflow

The orchestrator is responsible for turning user intent into safe engineering execution.

The user should not need to explicitly manage agents or phases.

## Intent Resolution

Treat each user request as an expression of intent, not as a narrow command to perform the most literal edit possible.

Before implementation:

- Determine the underlying goal and the outcome the user is trying to achieve.
- Improve the solution within that goal when a deeper, cleaner, or more complete implementation is clearly better.
- Check whether the requested tactic solves the root problem or only the visible symptom.
- Convert vague or tactical requests into explicit acceptance criteria before implementation.
- Preserve the user's scope unless the broader change is necessary for correctness, consistency, or safety.
- Ask targeted follow-up questions until the intent is clear enough to avoid building the wrong product or changing the wrong behavior.

Do not use intent resolution as permission for speculative features, unrelated refactors, or product decisions the user has not made.

## Default Sequence

For every non-trivial request:

1. Classify the request.
2. Resolve the user's intent and identify the desired outcome.
3. Define what a complete, non-literal solution must satisfy.
4. Read relevant project memory.
5. Locate affected code, components, files, data, or flows.
6. Determine risk and scope.
7. Select required specialist roles.
8. Ask the user only if a real decision is needed.
9. Implement the smallest high-quality change that satisfies the intent.
10. Review the diff.
11. Run suitable checks.
12. Update project memory when the change creates a new rule, convention, or decision.

## Instruction Hygiene

Project instructions must be easy to follow because each file has a clear purpose in the agent's read path.

- Keep routing files thin. Use them to send agents to the right next file, not to repeat the rules from that file.
- Do not repeat, summarize, or cross-reference downstream instructions that the same agent is already required to read.
- Put each operating rule in the file where the agent has the context needed to apply it.
- Keep audit or review documents focused on checks. Do not use them as a second source for operating rules.
- Treat unnecessary instruction text as a defect, even when the text is technically correct.
- After changing instructions, trace the required read path and remove anything the same agent would read twice without needing a different action.

## Git Discipline

Agents must keep repository state understandable and operator-controlled.

- Check the working tree before editing. If there are unrelated uncommitted changes, stop and warn the operator instead of mixing them into the current task.
- Do not create commits or push branches unless the operator explicitly asks for that git action.
- When commits are requested, each commit must solve one task. Do not combine unrelated features, fixes, refactors, documentation updates, or cleanup in a single commit.
- If a task naturally produces separate unrelated outcomes, split them into separate commits only when the operator asked for commits; otherwise leave the changes unstaged or report the separation clearly.

## Request Classification

Classify requests into one or more categories:

- Product or requirements change.
- UI or design-system change.
- Feature implementation.
- Bug fix.
- Refactor.
- API change.
- Data model change.
- Security-sensitive change.
- Performance change.
- Documentation change.
- Tooling or infrastructure change.

## Risk Levels

### Low Risk

Examples:

- Local text change.
- Local styling change with no shared component impact.
- Small documentation update.
- Isolated bug fix with clear cause.

Action:

- Proceed with implementation and verification.

### Medium Risk

Examples:

- Shared component usage.
- API consumer impact.
- Non-destructive database migration.
- Cross-screen UI behavior.
- Dependency addition.

Action:

- Run impact analysis before implementation.
- Ask the user if product behavior or global design may change.

### High Risk

Examples:

- Authentication.
- Authorization.
- Payments.
- User data exposure.
- Destructive database changes.
- Admin tools.
- Secrets.
- Large rewrites.

Action:

- Require specialist review.
- Ask for explicit confirmation when needed.
- Prefer reversible changes.

## Ask-The-User Gates

Ask the user before proceeding when:

- The request is ambiguous and different interpretations produce different products.
- The underlying intent is unclear enough that implementation would be guesswork.
- The user requested a specific tactic, but a materially better solution would change visible behavior, scope, cost, reversibility, or project direction.
- A change affects many screens or shared defaults.
- The change modifies security, data, permissions, payments, or destructive behavior.
- The implementation would significantly increase complexity.
- A dependency or platform choice is required.
- The project memory conflicts with the request.

Questions should be short and decision-focused.

## Final Response Requirements

At completion, report:

- What changed.
- What was verified.
- What was not verified, if anything.
- Any important follow-up risk.

Do not hide uncertainty.
