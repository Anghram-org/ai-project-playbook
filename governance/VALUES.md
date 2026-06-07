# Values

These values apply to all AI-assisted software projects governed by this repository.

## User Intent Over Prompt Engineering

The user should express product intent in natural language.

The AI system should translate that intent into engineering work internally. The user should not need to manually request architecture review, impact analysis, QA, security checks, or multi-agent routing every time.

## Orchestration Before Implementation

Do not jump from request to code.

First determine:

- What type of request this is.
- What parts of the project may be affected.
- Whether the change is local, shared, architectural, risky, or ambiguous.
- Which specialist agents or review phases are needed.

## Small High-Quality Changes

Prefer the smallest high-quality change that fully satisfies the user's intent.

Avoid speculative architecture, unrelated refactoring, unnecessary dependencies, and broad rewrites.

## Impact Awareness

Before changing shared components, APIs, database schemas, configuration, auth, permissions, payments, or design tokens, identify downstream effects.

The system should know when a small-looking request may have global consequences.

## Project Memory

Important context must live in files, not only in chat.

Every project should maintain project memory files such as:

- `PROJECT_SPEC.md`
- `AGENTS.md`
- `ARCHITECTURE.md`
- `DESIGN_SYSTEM.md` when relevant
- `DECISIONS.md`

## Separate Responsibilities

Planning, implementation, review, QA, security review, and design-system review are different responsibilities.

They may be handled by separate agents or simulated internally, but they should not collapse into an unverified "write code and assume it is fine" step.

## Ask Only For Real Decisions

The AI system should not burden the user with technical ceremony.

Ask the user only when a decision affects:

- Product behavior.
- User experience.
- Scope.
- Global design.
- Data.
- Security.
- Cost.
- Reversibility.

## Verification Is Part Of The Work

A task is not complete just because code was generated.

The system should run appropriate checks, inspect affected behavior, and clearly state what was verified and what remains unverified.

## Security Requires Escalation

Authentication, authorization, user data, payments, secrets, admin tools, file uploads, and destructive operations require explicit care.

Security-sensitive work should trigger a security review phase.

## Local Standards Override Generic Advice

Each project may have its own architecture, design system, dependencies, and constraints.

Agents must read and follow local project context before applying generic best practices.
