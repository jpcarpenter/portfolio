# jacobpaulcarpenter.com

Personal portfolio for Jacob Carpenter — built with **Nuxt 3** (Vue 3, Composition API) and **Tailwind CSS**, statically generated (SSG).

## Requirements

- Node `22` (see `.nvmrc`) — run `nvm use`

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

Runs at http://localhost:3000.

## Build (static site generation)

```bash
npm run generate
```

Outputs static HTML to `.output/public`, ready to deploy to Netlify, Cloudflare Pages, or any static host.

Preview the production build locally:

```bash
npm run preview
```

## Add your photo

Drop a headshot at `public/jacob.jpg` (portrait, ~4:5 works best). Until then, the hero shows a `JC` monogram fallback.

## Structure

- `pages/index.vue` — page shell + SEO meta
- `components/TheNav.vue` — top navigation
- `components/AboutHero.vue` — intro, experience, dev stack, layered photo
- `components/ProjectsSection.vue` — selected work
- `components/ContactSection.vue` — contact + links
- `assets/css/main.css` — Tailwind + custom component styles
- `tailwind.config.ts` — design tokens (colors, fonts)
