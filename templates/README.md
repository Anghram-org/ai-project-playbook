# Templates

These files support projects that consume this playbook.

They are not active instructions for maintaining this repository. External agents use them when bootstrapping a new project or retrofitting an existing project.

The primary transferable artifact is `project_skeleton/`. It is the complete base structure to copy into a new project or compare against an existing project.

Read `PROJECT_SKELETON_USAGE.md` before copying or merging the skeleton.

## Contents

- `project_skeleton/`: concrete starting structure for a consuming project. New projects copy it and adapt it; existing projects compare it with their current structure and merge only the missing or corrected pieces.
- `PROJECT_SKELETON_USAGE.md`: instructions for agents that copy or merge `project_skeleton/`.
- `executors/`: supporting template for project-specific executor agents, used only when a recurring executor is actually needed.
- `prompts/`: operator prompts for new project bootstrap and existing project retrofit.

Do not generate project structure from prose descriptions when the skeleton can be copied or merged. Adapt `ADAPT` markers and placeholders to the project and replace unknown values with explicit `Unknown` or `Needs operator decision` entries. Do not create standalone agent `.md` files unless the target platform explicitly loads that path and format as agent definitions.
