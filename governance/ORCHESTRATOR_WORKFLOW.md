# Orchestrator Workflow

The orchestrator is responsible for turning user intent into safe engineering execution.

The user should not need to explicitly manage agents or phases.

## Default Sequence

For every non-trivial request:

1. Classify the request.
2. Read relevant project memory.
3. Locate affected code, components, files, data, or flows.
4. Determine risk and scope.
5. Select required specialist roles.
6. Ask the user only if a real decision is needed.
7. Implement the smallest correct change.
8. Review the diff.
9. Run suitable checks.
10. Update project memory when the change creates a new rule, convention, or decision.

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

