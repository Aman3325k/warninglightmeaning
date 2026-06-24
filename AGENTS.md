# AGENTS.md — Agent Rules for warninglightmeaning.com

## Identity
- Site: warninglightmeaning.com
- Framework: Astro.js (static output only)
- Styling: Tailwind CSS v4
- Hosting: Cloudflare Pages (GitHub auto-deploy)
- Primary agent: Antigravity
- Strategic layer: Claude (claude.ai)

## Non-Negotiable Rules
- NEVER change output: 'static' in astro.config.mjs
- NEVER use SPA routing or View Transitions
- NEVER use localStorage or sessionStorage
- NEVER run git add . — always stage files individually
- NEVER delete or recreate GA4 properties or streams
- NEVER modify AGENTS.md, MEMORY.md, TASKS.md without being explicitly told to
- NEVER proceed with irreversible actions without confirmation
- NEVER assume missing information — stop and report back
- NEVER install packages not listed in TASKS.md
- NEVER modify files outside the scope of the current task

## Workflow Rules
- Read MEMORY.md before starting any task
- Read TASKS.md to find the current task
- Read ROUTES.md before creating any new page or component
- Read DESIGN.md before writing any HTML or CSS
- Read DATA.md before writing any content
- Check ERRORS.md before implementing anything — avoid repeat mistakes
- After completing a task: update MEMORY.md and TASKS.md
- Commit after every working feature with a clear message
- Always push: git push origin main after committing
- Verify Cloudflare deployment before declaring anything done

## Verification Rules
- Never declare a fix done based on code alone
- Always verify live in production after deployment
- Use DevTools Network tab to verify analytics
- Use browser incognito for testing

## What Claude Decides
- Architecture decisions
- SEO strategy
- Content strategy
- Design direction
- What to build next

## What Antigravity Does
- File creation and editing
- Git commits and pushes
- Running terminal commands
- Converting designs to Astro components
- Never makes strategy decisions independently
