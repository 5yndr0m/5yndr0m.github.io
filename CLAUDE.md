# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

No lint or test commands are configured.

## Architecture

This is an **Astro 5 static portfolio/blog site** deployed to GitHub Pages at `dilanjana.me`. The site is a single-page layout with all sections on the homepage and a dynamic blog route.

### Routing

- `/` → `src/pages/index.astro` — single page with all sections as components
- `/blog/[...slug]` → `src/pages/blog/[...slug].astro` — dynamically generated from the `blog` content collection via `getStaticPaths()`

### Content Collections

Blog posts live in `src/content/blog/` as Markdown files. The schema is defined in `src/content/config.ts`:

| Field | Type | Required |
|---|---|---|
| `title` | string | yes |
| `description` | string | yes |
| `pubDate` | date | yes |
| `updatedDate` | date | no |
| `heroImage` | image | no |
| `category` | string | no (default: "General") |

### Styling

- **Tailwind CSS v4** configured via the Vite plugin (no `tailwind.config.js` — config is in `astro.config.mjs` and `src/styles/global.css`)
- Custom brand colors defined in `global.css` using `@theme`: `--color-brand-linux` (amber-500), `--color-brand-sec` (lime-500)
- Google Fonts: Geist (body), Google Sans Code (mono)
- Typography plugin applied to blog prose with lime color scheme
- Dark mode supported throughout via `dark:` Tailwind classes

### Icons

Uses `astro-icon` with `@iconify-json/mdi` (Material Design Icons). Access icons with `<Icon name="mdi:icon-name" />`.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `main`.
