# SP Institute

SP Institute is a responsive, read-only professional learning site for business and programming courses. It provides a home page, course catalog, individual study dashboard, and one reusable lesson interface. The product intentionally excludes video, live instruction, graded assignments, groups, gamification, and leaderboards.

## Current architecture

- **React** renders the user interface.
- **Vite** builds static production assets.
- **pnpm** manages JavaScript dependencies.
- **GitHub Actions** builds and deploys the static site to GitHub Pages.
- **Hash routes** keep navigation compatible with static hosting.
- **Local browser storage** remembers completed lessons on the current browser only.

The GitHub Pages deployment base is `/sp/`, matching this repository’s project-site path.

## Requirements

- Node.js 24
- pnpm 11

The repository declares both versions in `package.json`. Use the declared pnpm version through Corepack when possible.

## Local development

```bash
corepack enable
pnpm install
pnpm dev
```

Vite prints the local development address after the server starts.

## Production build

```bash
pnpm run build
pnpm run preview
```

`pnpm run build` writes the deployable static site to `dist/`. `pnpm run preview` serves that build locally for review.

## GitHub Pages deployment

The deployment workflow is stored in `.github/workflows/deploy.yml`. In the repository’s GitHub Pages settings, choose **GitHub Actions** as the publishing source. A push to `main` then installs dependencies, builds the Vite project, uploads `dist/`, and deploys the artifact.

## Course content

Course metadata and lesson content live in `src/data/courses.js`. The catalog, dashboard, and study pages all derive from that one data source. Add a course there rather than creating a page-specific course implementation.

## Progress and accounts

The current GitHub Pages phase stores completion state in the current browser. It does not provide user accounts or cross-device synchronization. Those capabilities require an authenticated backend and shared persistent storage, which are intentionally deferred until the Koyeb-hosted phase.

## Contribution rules

Repository change rules, file-creation limits, verification expectations, and change-log requirements are defined in `CONTRIBUTING.md`. Every code or configuration change must also be recorded in `changelog.md`.
