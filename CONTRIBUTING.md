# Contributing to SP Institute

This repository is a React and Vite application that currently deploys as a static GitHub Pages site. Keep changes small, reviewable, and directly connected to a current product need.

## Required change record

Every repository change must be recorded in `changelog.md` in chronological order under the current date.

For every created, edited, renamed, or deleted file, record:

- File path.
- Concise description of what changed.
- Reason the change was necessary.
- Any known limitation that remains after the change.

Update `changelog.md` in the same delivery batch as the code or configuration change.

## New-file workflow

Create at most three new files in one delivery batch. Create each new file in sequence. Do not begin the next new file until the current one is complete and verified.

Before creating a new file, document these four items in the delivery record:

1. **Role** — What job the file performs in this project.
2. **Completion criteria** — Concrete, observable conditions that make the file complete for that role.
3. **Implementation** — The complete file contents.
4. **Verification** — Confirmation that every completion criterion is met, or a precise description of what cannot yet be verified and why.

A file is not complete when its own responsibilities are represented by empty functions, fake integrations, speculative abstractions, or unimplemented placeholders. A narrowly scoped adapter for a dependency that has not yet been introduced is allowed only when the missing dependency is identified explicitly.

## Editing existing files

Existing files may be edited whenever a working change requires it. Avoid unrelated cleanup in the same batch. Every edited file must have its own `changelog.md` entry.

## Engineering rules

### KISS

Choose the clearest direct implementation that satisfies the current requirement. Prefer ordinary functions, explicit data, and native browser behavior over extra layers.

### YAGNI

Do not add account systems, remote storage, analytics, assessments, video, social features, component libraries, or server infrastructure until a current requirement needs them.

### DRY

Keep a fact, rule, route, calculation, or persistence behavior in one source of truth. Extract repeated behavior only after it is actually repeated or when a single shared implementation prevents inconsistent product behavior.

## Static-hosting boundary

GitHub Pages serves the built front end. Browser-local lesson progress is intentional for the current phase. User accounts and cross-device synchronization require authenticated server-side services and shared persistent storage; do not claim those capabilities exist before that backend phase is implemented.

## Dependency and build rules

- Use the versions declared in `package.json`.
- Generate `pnpm-lock.yaml` only with the declared pnpm major version from a real dependency resolution. Never hand-write or infer integrity records.
- Once the lockfile exists, update the deployment workflow to use `pnpm install --frozen-lockfile` and enable pnpm cache support.
- Keep the Vite `base` value aligned with this repository’s GitHub Pages project path.

## Review checklist

Before a change is complete, verify that:

- The application still has a valid entry point and build configuration.
- Navigation, catalog filtering, study routing, and lesson completion remain usable.
- Semantic controls remain native links or buttons.
- Keyboard focus remains visible and page titles update after route changes.
- New or edited files are fully represented in `changelog.md`.
