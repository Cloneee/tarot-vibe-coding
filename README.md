# Tarot Vibe Code

Tarot Card Meanings List built with React, Vite, Tailwind CSS, strict TypeScript, and internal i18n for English and Vietnamese.

## Scripts

- `npm run dev` - local development
- `npm run lint` - ESLint
- `npm run build` - standard production build
- `npm run build:pages` - GitHub Pages-ready build for the `tarot-vibe-coding` repository path

## GitHub Pages

Run:

```bash
npm run build:pages
```

This generates a `dist/` bundle with the correct base path and a `404.html` copy of `index.html`, which is suitable for GitHub Pages project-site hosting.

If you need a different repository path, set `VITE_BASE_PATH` when building.
