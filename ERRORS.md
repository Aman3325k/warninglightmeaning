# ERRORS.md — Known Errors & Fixes for warninglightmeaning.com

## How To Use This File
Before implementing anything, check here first.
If you hit a new error, add it here after fixing it.

## Known Astro + Cloudflare Errors To Avoid

### ERROR 001 — Trailing Slash Canonical Mismatch
- Problem: Cloudflare Pages 308-redirects no-slash URLs to slash URLs.
  If canonical tags omit trailing slash, Google flags as "Redirect error".
- Fix: Always include trailing slash in canonical tags.
- Example: canonical="https://warninglightmeaning.com/lights/check-engine/"
- Never do: .replace(/\/$/, '') on canonical URLs

### ERROR 002 — git add . Staging Everything
- Problem: Staging unintended files breaks git history and risks pushing secrets.
- Fix: Always stage file by file. Example: git add src/pages/index.astro
- Never run: git add .

### ERROR 003 — output: 'static' Removed
- Problem: Changing Astro output mode breaks Cloudflare Pages static deployment.
- Fix: Never touch output: 'static' in astro.config.mjs

### ERROR 004 — Analytics ID Changed Without Verification
- Problem: Changing GA4 Measurement ID based on assumption (not GA4 Admin verification)
  causes broken tracking or deleted streams (unrecoverable).
- Fix: Always verify Measurement ID directly in GA4 Admin > Data Streams
  before touching any analytics code.

### ERROR 005 — Cloudflare Cache Not Purged After Deploy
- Problem: Custom domain serves stale HTML even after new Cloudflare Pages deploy.
- Fix: After deploying, go to Cloudflare Dashboard > domain zone >
  Caching > Configuration > Purge Everything.

### ERROR 006 — Script Race Condition in Head
- Problem: element.append() places scripts at END of <head>.
  If tracking gate reads window variable before it is set, it sees undefined
  and defaults to blocking all tracking.
- Fix: Use element.prepend() for any script that sets window variables
  other scripts depend on.

### ERROR 007 — Cookie Detection Unreliable on CDN
- Problem: Set-Cookie headers stripped by Cloudflare cache on cached responses.
  Cookie-based region detection always returns undefined for cached pages.
- Fix: Use Cloudflare Worker / middleware HTMLRewriter to inject
  window.__VISITOR_REGION__ via edge-side script tag instead of cookies.
