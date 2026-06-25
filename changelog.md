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
