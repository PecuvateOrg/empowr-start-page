# CLAUDE.md

> **This repository is PUBLIC** (`PecuvateOrg/empowr-start-page`).
>
> **Devlog and memory location:** `../workspace-docs/empowr-start-page/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

## Identity
Empowr CIC landing page — a single-file static HTML link-in-bio hub (480px mobile-first) routing visitors to roller skating programmes, shop, donations, and volunteering.

## Self-Reference
This file is Layer 0 — routing only. Read `NON-NEGOTIABLES.md` before doing anything; project
detail lives in each CONTEXT.md.

## Routing

| Task | Go to | Read | Skills |
|---|---|---|---|
| HTML/CSS edits, layout, copy, brand tokens | design/ | design/CONTEXT.md | webapp-testing |
| Image assets, URL wiring, deployment | publish/ | publish/CONTEXT.md | webapp-testing |

## Shared Memory

Adopts `Frameworks/MWP Framework/spec/session-memory.md` (2026-10-09). This repo is public, so
all of these live in the **private** hub at `../workspace-docs/empowr-start-page/`, never here:

- Session bridge (read at start, rewrite in place at close, ≤1,000 words): `memory.md`
- Decisions: `decisions.md`
- Traps and "do not" rules — read before touching the area: `gotchas.md`
- Session history: `DEVLOG.md`; pre-bridge memory, search only: `archive/memory-history-to-2026-10-09.md`

## Cross-Workspace Flows

- Content update → Deploy: design/ (edit HTML/CSS/copy) → publish/ (swap images, wire URLs) → deploy to Netlify

## File Placement

- HTML source → project root
- Image assets → assets/ (when created)

## Token Management

- Do not read `landing.page.guide.html` in full unless editing markup — read only the relevant section
- Do not load publish/CONTEXT.md unless the task involves images, URLs, or deployment
- Do not load design/CONTEXT.md unless the task involves HTML, CSS, or copy

## Deployment

- Platform: Netlify
- Domain: start.empowrcic.org
- Branch: master

## Skills and Tools Available

| Tool / Skill | Trigger | Purpose |
|---|---|---|
| `/netlify-deploy` | deploying to Netlify | Deploy to Netlify and configure `start.empowrcic.org` |
| `/pre-build-check` | before any deploy | Validate Astro build structure and frontend quality |
| `/pre-deploy-security` | before any deploy | Security hygiene scan — FAILs block the deploy |
| `/webapp-testing` | after any change | Playwright browser preview and screenshot capture at 480px |
| `/simplify` | after a feature is built | Review changed code for reuse, quality, and efficiency |
