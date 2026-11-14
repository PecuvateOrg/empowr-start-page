# Design System — Empowr start page (start.empowrcic.org)

> What **this project** decided. Read before building or changing any page.
> Layers, read bottom-up; each may be stricter than the one above, never looser:
> 1. Web Build Framework (`core/` + the matching `types/` overlay): rules for any build.
> 2. Brand kit: the Empowr brand kit, `company/identity/brand-guide.md` in the Empowr CNS (private hub): colours, logo, Nunito, voice and the UI house style, including its **contrast table**. **Not restated here.**
> 3. This file: only what is specific to this project.

| | |
|---|---|
| **Build type** | marketing-site (link-in-bio hub) |
| **Framework** | Astro 7 |
| **Created** | 2026-11-14 (recorded from the code as it stands) |
| **Last decision** | 2026-11-14 |

---

## Layout

Single page of links, checked at 480px. `design/CONTEXT.md` is the editing process for this page; this file is the design record.

## Current state vs the brand kit

- **Off-brand blue** `#4A6FD4` (brand is `#4A70C2`).
- Nunito plus Inter; some extra greys (`#545454`, `#657b83`).

---

## Decision log

### 2026-11-14 — Recorded
- First design record, from the group-wide design records pass. No code changed; gaps below
  are fixed per project, with screenshots before anything goes live.

## Open questions

- [ ] Replace `#4A6FD4` with the brand `--blue`.
- [ ] Inter is loaded alongside Nunito: drop it (one font, Nunito).
