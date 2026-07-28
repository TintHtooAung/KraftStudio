# Kraft Studio — Architecture Portfolio

Modern architecture portfolio site for Kraft Studio (Yangon). React + Vite + Tailwind + Framer Motion.

## Features

- Responsive home, projects, and project detail pages
- Category routes: Residential, Hotels & Schools, Commercial
- Scroll animations and desktop parallax (disabled on touch)
- Contact section and bilingual About (Burmese / English)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, etc.).

For SPA hosting, redirect all routes to `index.html`.

### Netlify

Add `public/_redirects`:

```
/*    /index.html   200
```

### Vercel

`vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS 3
- Framer Motion
- React Router 6

## Notes

Legacy static HTML/CSS/JS files in the repo root are archived references only. The live app is under `src/` via `index.html`.
