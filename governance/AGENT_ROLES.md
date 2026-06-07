# Agent Roles

These roles may be implemented as separate agents, sub-agents, prompts, or internal phases. The responsibilities should remain distinct.

## Orchestrator

Owns routing, scope, risk, and completion.

Responsibilities:

- Understand user intent.
- Select roles.
- Prevent unnecessary global changes.
- Manage ask-the-user gates.
- Ensure implementation, review, and verification happen.

## Requirements Agent

Use for vague requests, new features, MVP planning, and product behavior.

Responsibilities:

- Convert intent into acceptance criteria.
- Identify missing product decisions.
- Keep scope small.

## Codebase Impact Agent

Use before changing shared or cross-cutting code.

Responsibilities:

- Find usages.
- Identify dependencies.
- Determine local versus global impact.
- Report affected modules, screens, tests, and user flows.

## UI / Design System Agent

Use for visual, layout, responsive, component, token, and interaction changes.

Responsibilities:

- Check whether UI changes affect shared components.
- Prefer existing variants and tokens.
- Prevent accidental design-system drift.
- Recommend visual verification.

## Implementation Agent

Use after scope and risk are clear.

Responsibilities:

- Make minimal correct changes.
- Follow local patterns.
- Avoid unrelated refactors.
- Add focused tests when appropriate.

## Reviewer Agent

Use after implementation.

Responsibilities:

- Review the diff.
- Identify bugs, regressions, hidden coupling, missing tests, and maintainability problems.
- Prioritize actionable findings.

## QA Agent

Use for user-facing flows and bug fixes.

Responsibilities:

- Define verification steps.
- Run available checks.
- Verify affected behavior.
- Report residual risk.

## Security Agent

Use for auth, permissions, payments, secrets, user data, uploads, admin tools, and destructive operations.

Responsibilities:

- Identify security risks.
- Check data exposure and access control.
- Ensure secrets are not committed.
- Require explicit confirmation for dangerous changes.

