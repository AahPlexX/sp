# Change Log

This file is the implementation record for `AahPlexX/sp`.

## Change-recording rules

- Record every created, edited, renamed, or deleted repository file in the same delivery batch.
- For each file, record its path, a concise description of the change, the reason for the change, and any known limitation that remains.
- Keep entries in chronological order: oldest first, newest last.
- Create no more than three new files in a delivery batch. Existing files may be edited when the completed change requires it.

## 2026-06-25 — Static GitHub Pages prototype and deployment workflow

### Created: `index.html`

- **Change:** Added the initial GitHub Pages entry document with responsive viewport metadata, page description, theme color, skip link, application root, and no-JavaScript fallback.
- **Reason:** The site required a browser entry point for static hosting.
- **Known limitation:** The original standalone entry was later replaced by the React/Vite entry path.

### Created: `app.css`

- **Change:** Added the responsive visual system for home, catalog, dashboard, and study views, including flexible layout groups, `clamp()`-based sizing, responsive breakpoints, focus visibility, and reduced-motion support.
- **Reason:** The initial site needed a reusable, responsive presentation layer.
- **Known limitation:** Style ownership remains in one stylesheet until repeated component-specific styling demonstrates a need to split it.

### Created: `app.js`

- **Change:** Added the original data-driven static application.
- **Reason:** The first GitHub Pages version required a working client application before the React migration.
- **Known limitation:** This legacy file is no longer loaded by `index.html` and should be removed only in a later cleanup batch after a successful build verification.

### Created: `package.json`

- **Change:** Established the Vite/pnpm package manifest for the migration from static JavaScript to a build-based application.
- **Reason:** The project needed reproducible dependency declarations and build scripts.
- **Known limitation:** A pnpm lockfile has not yet been generated from a real pnpm 11 dependency resolution.

### Created: `vite.config.js`

- **Change:** Added Vite’s repository deployment base path and output configuration.
- **Reason:** GitHub Pages project sites require the repository path during asset generation.
- **Known limitation:** The configuration depends on the project remaining hosted under the `/sp/` path until hosting changes.

### Created: `.github/workflows/deploy.yml`

- **Change:** Added GitHub Actions steps for pnpm setup, Node setup, dependency installation, Vite build, Pages artifact upload, and deployment.
- **Reason:** GitHub Pages must receive Vite’s built output rather than source files.
- **Known limitation:** The current install step cannot use `--frozen-lockfile` or pnpm cache until `pnpm-lock.yaml` exists.

## 2026-06-25 — React and Vite application foundation

### Created: `src/data/courses.js`

- **Change:** Added the single course catalog data source for business, JavaScript, HTML, CSS, Python, and full-stack reading courses.
- **Reason:** Catalog, dashboard, and study screens need one source of truth for course metadata and lesson content.
- **Known limitation:** Current content is an initial catalog, not a complete certification curriculum.

### Created: `src/App.jsx`

- **Change:** Added the React application for the home page, catalog, individual dashboard, and universal read-only study interface.
- **Reason:** The product required one maintainable application layer rather than separate page-specific scripts.
- **Known limitation:** Account-backed state and cross-device synchronization are intentionally not part of the static-hosting phase.

### Created: `src/main.jsx`

- **Change:** Added the React root entry point using `StrictMode`.
- **Reason:** Vite needs one module entry that mounts React into the existing application root.
- **Known limitation:** Build verification remains pending until pnpm 11 can generate and use a lockfile.

### Edited: `index.html`

- **Change:** Replaced the standalone script reference with the Vite React module entry, `/src/main.jsx`, while preserving metadata, skip link, application root, and no-JavaScript fallback.
- **Reason:** The browser needed to load the React application through Vite.
- **Known limitation:** None beyond the pending build verification noted above.

### Edited: `package.json`

- **Change:** Added React, React DOM, Vite, and the official Vite React plugin with development, build, and preview scripts.
- **Reason:** The project required the dependencies and commands used by the React/Vite application.
- **Known limitation:** `pnpm-lock.yaml` is still absent.

### Edited: `vite.config.js`

- **Change:** Enabled the official React plugin while retaining `/sp/` as the GitHub Pages base path.
- **Reason:** React JSX requires Vite’s React integration and repository-path-aware asset output.
- **Known limitation:** None beyond the deployment-path dependency already noted.

## 2026-06-25 — Shared client-state cleanup

### Created: `src/lib/progress.js`

- **Change:** Moved browser-based lesson-progress reading, persistence, and calculation out of `src/App.jsx`.
- **Reason:** Home, dashboard, and study views use the same completion behavior and need one consistent implementation.
- **Known limitation:** Progress remains browser-local until a future authenticated backend exists.

### Created: `src/lib/routing.js`

- **Change:** Moved hash-route parsing and document-title lookup out of `src/App.jsx`.
- **Reason:** Routing rules and page titles need a single source of truth.
- **Known limitation:** Hash routing is intentionally retained for static GitHub Pages compatibility.

### Edited: `src/App.jsx`

- **Change:** Replaced in-file route parsing, document-title mapping, browser-storage reads, browser-storage writes, and course-progress calculation with imports from the new shared modules.
- **Reason:** Remove duplicated client-state behavior while preserving the existing public interface.
- **Known limitation:** No remote account, data, or authentication service was added.

## 2026-06-25 — Contribution protocol and repository hygiene

### Created: `CONTRIBUTING.md`

- **Change:** Added repository-specific contribution rules for change logging, three-file waterfall creation, role-based completion verification, KISS, YAGNI, DRY, static-hosting boundaries, dependency discipline, and review checks.
- **Reason:** Future contributors need one durable, project-local implementation protocol.
- **Known limitation:** The document governs repository work but cannot itself provide a pnpm lockfile or hosted backend.

### Edited: `.gitignore`

- **Change:** Replaced legacy Jekyll and Bundler ignore rules with Vite/pnpm rules for dependencies, build output, local environment files, tool output, editor state, operating-system files, and logs.
- **Reason:** The project is a Vite/pnpm application; the previous ignore file targeted a different GitHub Pages implementation.
- **Known limitation:** None. `pnpm-lock.yaml` remains intentionally trackable.

### Edited: `README.md`

- **Change:** Replaced the placeholder heading with product scope, architecture, local development, production build, GitHub Pages deployment, course-content location, progress limitation, and contribution guidance.
- **Reason:** Developers need accurate setup and operational instructions that match the current source tree.
- **Known limitation:** The documented lockfile workflow is pending because a compatible pnpm 11 dependency resolution could not be generated in the available environment.

### Edited: `changelog.md`

- **Change:** Rewrote the record format so all entries run oldest-to-newest and added full path, change, reason, and limitation fields for this batch.
- **Reason:** The repository protocol requires chronological entries and complete per-file audit details.
- **Known limitation:** Earlier same-day history is reconstructed from the repository state and prior implementation records; exact prior commit timestamps are not reproduced here.

## 2026-06-25 — Course-content verification gate

### Created: `src/lib/courseValidation.js`

- **Change:** Added a framework-free validator for the course catalog. It verifies catalog shape, non-empty required course fields, unique course identifiers, supported subject areas, non-empty lesson collections, and complete lesson title/body/note content. It also exports an assertion helper for command-line verification.
- **Reason:** Course data drives every visible learning surface. Invalid catalog data should fail before it reaches a deployed study interface.
- **Known limitation:** The validator checks structural integrity, not factual accuracy, pedagogy quality, certification standards, or external source citations.

### Created: `scripts/verify-course-content.mjs`

- **Change:** Added a command-line verifier that imports the production catalog, runs the shared assertion, prints the verified course and lesson totals, and exits with failure status when validation fails.
- **Reason:** The catalog needs a deterministic build-time gate that checks the actual content source rather than a duplicate fixture.
- **Known limitation:** The command validates the static course data currently committed; it does not validate future remote content sources because none exist yet.

### Created: `test/courseValidation.test.mjs`

- **Change:** Added Node built-in test coverage for the production catalog, missing required data, duplicate identifiers, unsupported areas, incomplete lessons, and aggregated assertion failures.
- **Reason:** The validation rule set needs executable checks that fail when a rule is accidentally removed or weakened.
- **Known limitation:** Browser interaction, visual layout, and accessibility behavior are not covered by this unit test.

### Edited: `package.json`

- **Change:** Added `check`, `test`, and `verify` scripts. `verify` runs catalog validation, the Node test suite, and the Vite production build in that order.
- **Reason:** Local development and CI need one repeatable pre-deployment command instead of separate, manually remembered checks.
- **Known limitation:** Dependency installation remains non-frozen until a pnpm 11-generated lockfile is available.

### Edited: `.github/workflows/deploy.yml`

- **Change:** Replaced the standalone build step with `pnpm run verify`, making GitHub Pages deployment depend on content validation, tests, and a successful production build.
- **Reason:** A deployment should not publish when the course catalog is malformed, validation behavior has regressed, or the build fails.
- **Known limitation:** The workflow still uses `pnpm install --no-frozen-lockfile` and has no pnpm cache until `pnpm-lock.yaml` is generated from a real resolution.

### Edited: `README.md`

- **Change:** Documented `pnpm run verify` as the local verification and production-build command and updated the deployment description to reflect the verification gate.
- **Reason:** The operating guide must match the actual build and deployment process.
- **Known limitation:** The command has not been executed in the available environment because pnpm 11 and registry access were unavailable there.

### Edited: `changelog.md`

- **Change:** Added the complete chronological record for the course-content verification gate and all files created or edited in this batch.
- **Reason:** The repository contribution protocol requires synchronized audit details for every change.
- **Known limitation:** The history records file-level verification and code review; a completed GitHub Actions run is still needed to confirm the full install/test/build/deploy path.
