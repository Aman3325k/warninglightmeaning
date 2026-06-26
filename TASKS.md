# TASKS.md — Task Queue for warninglightmeaning.com

## Current Task
PHASE 8 — Deploy

## Task Queue (in strict order)

### ✅ Phase 1 — Setup
- [x] Initialize Astro project
- [x] Install Tailwind CSS v4
- [x] Create all 7 brain files
- [x] Create GitHub repo
- [x] First git commit and push

### ✅ Phase 2 — Stitch Design
- [x] Homepage design completed (built directly in Astro)

### ✅ Phase 3 — Core Components
- [x] Create Layout.astro (nav + footer + meta + favicon + head slot)
- [x] Create Navigation.astro component
- [x] Create Footer.astro component
- [x] Create UrgencyBadge.astro component
- [x] Create LightCard.astro component
- [x] Create AdUnit.astro component
- [ ] Create MakeCard.astro component (not yet built — not blocking)
- [ ] Create Sidebar.astro component (not yet built — not blocking)

### ✅ Phase 4 — Pages
- [x] Homepage (index.astro)
- [x] src/data/lights.ts (17 priority warning lights)
- [x] Warning lights index (/warning-lights/)
- [x] Light detail pages — 17 pages (/lights/[slug]/)
- [x] Browse by Make index (/makes/)
- [x] Make detail pages — 32 makes (/makes/[make]/)
- [x] Colors index pages — 6 colors (/colors/[color]/)
- [x] Custom 404 page (404.astro)

### ✅ Phase 5 — Legal Pages
- [x] /about
- [x] /privacy-policy
- [x] /terms
- [x] /contact

### ✅ Phase 6 — Technical SEO & Pre-Launch
- [x] public/robots.txt (linked to dynamic sitemap)
- [x] Install @astrojs/sitemap and remove hardcoded public/sitemap.xml
- [x] public/_headers file (Cloudflare duplicate content fix with exact subdomain)
- [x] Verify canonical tags and og:url on all pages
- [x] Favicon audit (amber triangle)
- [x] FAQ schema (FAQPage JSON-LD) — done on light detail pages
- [x] Breadcrumb schema (BreadcrumbList JSON-LD) — done on light + make pages

### 🔲 Phase 7 — Analytics
- [ ] GA4 tracking setup
- [ ] Microsoft Clarity setup
- [ ] Cookie consent banner (EU visitors only)

### 🔲 Phase 8 — Deploy (CURRENT)
- [ ] Update Formspree ID in contact.astro
- [ ] Create Cloudflare Pages project (warninglightmeaning.pages.dev)
- [ ] Connect GitHub repo
- [ ] Verify live deployment
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Submit to Bing Webmaster Tools

### 🔲 Phase 9 — Monetization
- [ ] Apply for Google AdSense (after 10+ daily users)
- [ ] Add AdSense ad units to sidebar + in-content
- [ ] Create Gumroad PDF product

## Rules for This File
- Never skip a phase
- Mark tasks ✅ when confirmed live in production
- Never mark done based on code alone
