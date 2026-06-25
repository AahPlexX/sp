# Change Log

This file is the required implementation record for `AahPlexX/sp`.

## Change-recording rules

- Every created, edited, renamed, or deleted repository file must be recorded in the same delivery batch.
- Each entry must state the affected file, the reason for the change, the behavior added or changed, and any known limitation that remains.
- New-file creation is limited to three files per delivery batch. Existing files may be edited only when the edit is necessary for the completed change to work correctly.
- Entries are ordered newest first.

## 2026-06-25 — Shared client-state cleanup

### Created: `src/lib/progress.js`

- Moved browser-based lesson-progress handling out of `src/App.jsx`.
- Added `readProgress()` to safely restore persisted completion state, returning an empty object when browser storage is unavailable or malformed.
- Added `getCourseProgress(course, progress)` so home, dashboard, and study views calculate completed lessons and percentage from one implementation.
- Added `toggleLessonProgress(progress, courseId, lessonIndex)` so one function creates the next immutable completion state and persists it when browser storage is available.
- Kept storage client-only because GitHub Pages cannot provide authenticated cross-device persistence.

### Created: `src/lib/routing.js`

- Moved hash-route parsing out of `src/App.jsx`.
- Added one approved-page set for `home`, `catalog`, `dashboard`, and `study` so unknown routes consistently fall back to home.
- Added `readRoute()` to normalize an incoming hash into page, course identifier, and lesson number.
- Added `getDocumentTitle()` so document-title behavior has one source of truth.

### Created: `changelog.md`

- Added the permanent required audit record for repository changes.
- Recorded the current refactor and the established project baseline below.

### Edited: `src/App.jsx`

- Replaced in-file route parsing, document-title mapping, browser-storage reads, browser-storage writes, and course-progress calculation with imports from `src/lib/routing.js` and `src/lib/progress.js`.
- Preserved all existing public behavior: hash navigation, catalog filtering, responsive menu state, lesson completion controls, local progress, and the reusable study interface.
- Did not add an account service, remote data source, assessment system, social feature, video feature, or additional dependency.

### Known limitation

- Completion state remains device- and browser-specific until the later authenticated backend phase. This is intentional for the static GitHub Pages phase.

## 2026-06-25 — React and Vite application foundation

### Created: `src/data/courses.js`

- Added the single catalog data source for business, JavaScript, HTML, CSS, Python, and full-stack reading courses.
- Each course owns its metadata and ordered lessons, allowing catalog, dashboard, and study screens to derive from the same data instead of maintaining separate page definitions.

### Created: `src/App.jsx`

- Added the React application for the home page, catalog, individual dashboard, and universal read-only study interface.
- Added hash-based navigation suitable for static GitHub Pages hosting.
- Added accessible buttons, links, labels, progress bars, mobile navigation state, and focus movement after navigation.
- Added local lesson-completion state as an interim static-hosting capability.

### Created: `src/main.jsx`

- Added the React root entry point using `StrictMode`.
- Imports the existing responsive stylesheet and mounts the application only when the `#app` element exists.

### Edited: `index.html`

- Replaced the former standalone script reference with the Vite React module entry, `/src/main.jsx`.
- Retained document metadata, skip link, application root, and no-JavaScript message.

### Edited: `package.json`

- Added React, React DOM, Vite, and the official Vite React plugin.
- Added development, build, and preview scripts.
- Declared pnpm 11 and Node 24 compatibility boundaries.

### Edited: `vite.config.js`

- Added the official React plugin.
- Kept the GitHub Pages project base path as `/sp/`.
- Configured a clean `dist` build directory targeting modern browsers.

### Known limitation

- `pnpm-lock.yaml` is not yet committed, so the current workflow does not yet use a frozen lockfile or package-manager cache.

## 2026-06-25 — Static GitHub Pages prototype and deployment workflow

### Created: `index.html`

- Added the initial GitHub Pages entry document with responsive viewport metadata, page description, theme color, skip link, application root, and no-JavaScript fallback.

### Created: `app.css`

- Added the responsive visual system for home, catalog, dashboard, and study views.
- Uses semantic layout groups, flexible grids, `clamp()`-based sizing, responsive breakpoints, focus visibility, and reduced-motion support.

### Created: `app.js`

- Added the original data-driven static application, later replaced by the React entry path while retaining the file as legacy source pending removal in a future cleanup batch.

### Created: `package.json`

- Established the Vite/pnpm package manifest for the static application’s conversion to a build-based React deployment.

### Created: `vite.config.js`

- Added Vite’s repository deployment base path and output configuration.

### Created: `.github/workflows/deploy.yml`

- Added GitHub Actions deployment steps for pnpm setup, Node setup, dependency installation, Vite build, Pages artifact upload, and deployment.

### Known limitation

- GitHub Pages must use GitHub Actions as its publishing source for this workflow to deploy.
