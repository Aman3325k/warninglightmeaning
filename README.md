# WarningLightMeaning.com

A comprehensive, SEO-optimized directory of car dashboard warning lights built with Astro.js and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Astro (Static Site Generation)
- **Styling**: Tailwind CSS v4
- **Hosting**: Cloudflare Pages
- **Forms**: Formspree

## 🛠️ Project Structure

```text
/
├── public/              # Static assets (robots.txt, _headers, favicon)
├── src/
│   ├── components/      # Reusable UI components (Navigation, Footer, Cards)
│   ├── data/            # Source of truth for content (lights.ts, makes.ts)
│   ├── layouts/         # Page layouts (Layout.astro)
│   ├── pages/           # File-based routing (pages, categories, lights)
│   └── styles/          # Global styles (Tailwind config)
├── astro.config.mjs     # Astro configuration (@astrojs/sitemap)
└── package.json         # Dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npx astro check`         | Run diagnostic checks across the codebase        |

## 📝 Pre-Launch Checklist Status
- 100% Mobile Responsive
- Dynamic XML Sitemap configured
- Canonical URLs & OG Tags implemented
- Cloudflare `.pages.dev` noindex headers applied
- 404 Custom Page built
- JSON-LD structured data (FAQ, Breadcrumbs) added

Next step: Deploy to Cloudflare Pages!
