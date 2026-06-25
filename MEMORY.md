# MEMORY.md — Project State for warninglightmeaning.com

## Project Status
- Phase: 6 — Technical SEO (next up)
- Last updated: June 25, 2026
- Domain: warninglightmeaning.com (purchased: NO)
- Cloudflare Pages: NOT DEPLOYED YET
- GitHub repo: https://github.com/Aman3325k/warninglightmeaning.git
- Git commit hash: 16c6efd

## What Is Built
- [x] Astro project initialized
- [x] Tailwind CSS v4 installed
- [x] AGENTS.md created
- [x] DESIGN.md created
- [x] MEMORY.md created
- [x] TASKS.md created
- [x] DATA.md created
- [x] ROUTES.md created
- [x] ERRORS.md created
- [x] GEMINI.md created
- [x] frontend-design skill installed at .agents/skills/frontend-design
- [x] webapp-testing skill installed at .agents/skills/webapp-testing
- [x] Layout.astro created (favicon links added, head slot added, canonical optional)
- [x] Navigation.astro created
- [x] Footer.astro created
- [x] Homepage (index.astro) built
- [x] src/data/lights.ts created (10 priority warning lights)
- [x] UrgencyBadge.astro component created
- [x] LightCard.astro component created
- [x] AdUnit.astro placeholder component created
- [x] src/pages/lights/[slug].astro — light detail pages (10 pages, FAQ + breadcrumb schema)
- [x] src/pages/warning-lights/index.astro — warning lights index
- [x] src/pages/makes/index.astro — makes index (20 makes)
- [x] src/pages/makes/[make]/index.astro — make detail pages (20 pages)
- [x] src/pages/about.astro
- [x] src/pages/privacy-policy.astro
- [x] src/pages/terms.astro
- [x] src/pages/contact.astro
- [x] public/favicon.svg — custom amber warning triangle icon

## Build Status
- Last build: 37 pages, 0 errors
- Pages: / + /warning-lights/ + 10 light pages + /makes/ + 20 make pages + 4 legal pages

## What Is NOT Built Yet
- robots.txt
- sitemap.xml
- _headers file (Cloudflare duplicate content fix)
- GA4 tracking
- Microsoft Clarity
- Cookie consent banner

## Components NOT Yet Built
- Sidebar.astro (listed in ROUTES.md but not created yet)
- MakeCard.astro (listed in ROUTES.md but not created yet)

## Key Decisions Made
- Framework: Astro.js static output only
- Styling: Tailwind CSS v4 — no custom CSS
- Hosting: Cloudflare Pages
- Accent color: #F59E0B amber
- Font: Inter
- No SPA routing — full MPA
- US audience target for AdSense CPM
- canonical prop made optional in Layout.astro
- Layout.astro has <slot name="head"> for JSON-LD schema injection
- Layout.astro does NOT wrap slot in <main> — pages manage their own <main>

## Analytics
- GA4 Measurement ID: NOT SET UP YET
- Microsoft Clarity ID: NOT SET UP YET

## Known Issues
- Contact form uses placeholder Formspree endpoint (needs real endpoint)
- Sidebar.astro and MakeCard.astro listed in ROUTES.md but not yet created
