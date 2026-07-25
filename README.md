# A and V Group — Construction Website

Trilingual (Armenian / Russian / English) marketing site for **A and V Group**, a
construction company in Armenia operating in civil construction, road construction,
and engineering infrastructure.

Single-page scrolling site with anchor navigation, built with Next.js (App Router),
Tailwind CSS v4, and Framer Motion for scroll-driven animation.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (`motion`) — scroll reveals, parallax, marquee
- **i18n**: locale-prefixed routing (`/hy`, `/ru`, `/en`) via `proxy.ts`, default Armenian
- Self-hosted **Mardoto** (Armenian display) + **Noto Sans / Noto Sans Armenian** (body)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the root redirects to the default locale (`/hy`).

## Structure

- `app/[locale]/` — locale layout + single-page route
- `components/` — section components (Hero, Services, Projects, About, Contact) + `motion/` primitives
- `dictionaries/` — `hy.json` / `ru.json` / `en.json` content
- `public/projects/` — project render visualizations
- `lib/i18n/` — locale config + dictionary loader

## Placeholders pending real content

- Contact details (phone / email / address) and the map are bracketed placeholders
- Stats bar intentionally omitted until real figures are provided
- Project cards show renders labelled as visualizations; names/locations/stats to be added
- Contact form is not yet wired to a backend
