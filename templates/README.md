# Templates

These files are portable source templates for projects that consume this playbook.

They are not active instructions for maintaining this repository. External agents use them when bootstrapping a new project or retrofitting an existing project.

These markdown files are not callable agents by themselves. They are source text. A consuming project must place their content into its native agent mechanism, or into named sections/phases of `AGENTS.md` when no native callable mechanism exists.

## Contents

- `core/`: canonical project-local Super Agent and Orchestrator role text.
- `executors/`: template for project-specific executor agents.
- `project/`: starting points for project memory files.
- `prompts/`: operator prompts for new project bootstrap and existing project retrofit.

Do not copy these files blindly. Adapt placeholders to the project and replace unknown values with explicit `Unknown` or `Needs operator decision` entries. Do not create standalone agent `.md` files from these templates unless the target platform explicitly loads that path and format as agent definitions.
