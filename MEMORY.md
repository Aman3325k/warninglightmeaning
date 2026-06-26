# MEMORY.md — Project State for warninglightmeaning.com

## Project Status
- Phase: 8 — Deploy
- Last updated: June 26, 2026
- Domain: warninglightmeaning.com (purchased: NO)
- Cloudflare Pages: Ready for Deployment (warninglightmeaning.pages.dev)
- GitHub repo: https://github.com/Aman3325k/warninglightmeaning.git
- Git commit hash: 327a5cb

## What Is Built
- [x] Astro project initialized
- [x] Tailwind CSS v4 installed
- [x] AGENTS.md, DESIGN.md, MEMORY.md, TASKS.md, DATA.md, ROUTES.md, ERRORS.md, GEMINI.md created
- [x] frontend-design & webapp-testing skills installed
- [x] Layout.astro created (favicon links added, head slot added, canonical URL dynamic, og:url added)
- [x] Navigation.astro & Footer.astro created
- [x] Homepage (index.astro) built
- [x] src/data/lights.ts created (17 priority warning lights)
- [x] src/data/makes.ts created (32 centralized car makes)
- [x] UrgencyBadge.astro & LightCard.astro components created
- [x] AdUnit.astro placeholder component created
- [x] src/pages/lights/[slug].astro — light detail pages (17 pages, FAQ + breadcrumb schema)
- [x] src/pages/warning-lights/index.astro — warning lights index
- [x] src/pages/makes/index.astro — makes index (32 makes)
- [x] src/pages/makes/[make]/index.astro — make detail pages (32 pages)
- [x] src/pages/colors/[color]/index.astro — color pages (6 pages)
- [x] src/pages/about.astro, privacy-policy.astro, terms.astro, contact.astro (4 pages)
- [x] src/pages/404.astro — Custom 404 error page
- [x] public/favicon.svg — custom amber warning triangle icon
- [x] public/robots.txt (pointing to dynamic sitemap)
- [x] @astrojs/sitemap integration configured in astro.config.mjs
- [x] public/_headers file (Cloudflare Pages duplicate content fix with exact subdomain)

## Build Status
- Last build: 63 pages, 0 errors, 0 warnings
- Pages: / + /warning-lights/ + 17 light pages + /makes/ + 32 make pages + 6 color pages + 4 legal pages + 404 page

## What Is NOT Built Yet
- GA4 tracking
- Microsoft Clarity
- Cookie consent banner

## Components NOT Yet Built
- Sidebar.astro (listed in ROUTES.md but not created yet)
- MakeCard.astro (listed in ROUTES.md but not created yet)

## Key Decisions Made
- Framework: Astro.js static output only (output: 'static')
- Styling: Tailwind CSS v4 — no custom CSS
- Hosting: Cloudflare Pages (noindex implemented for preview domains)
- Accent color: #F59E0B amber
- Font: Inter
- No SPA routing — full MPA
- US audience target for AdSense CPM
- canonical prop made optional in Layout.astro (auto-generates if not provided)
- og:url added to Layout.astro for social sharing
- Layout.astro has <slot name="head"> for JSON-LD schema injection
- Layout.astro does NOT wrap slot in <main> — pages manage their own <main>

## Analytics
- GA4 Measurement ID: NOT SET UP YET
- Microsoft Clarity ID: NOT SET UP YET

## Known Issues
- Contact form uses placeholder Formspree endpoint (`YOUR_REAL_ID_HERE` needs to be updated with real endpoint)
- Sidebar.astro and MakeCard.astro listed in ROUTES.md but not yet created
