# CLAUDE.md

> **This repository is PUBLIC** (`PecuvateOrg/empowr-start-page`).
>
> **Devlog and memory location:** `../workspace-docs/empowr-start-page/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

@NON-NEGOTIABLES.md

Other tools: read `NON-NEGOTIABLES.md` first, then `~/projects/NON-NEGOTIABLES.md`.

## Routing

| Task | Go to | Read | Skills |
|---|---|---|---|
| **Design: look, colours, components** | `design-system/` | `design-system/MASTER.md` (then the Empowr brand kit it names) | — |
| HTML/CSS edits, layout, copy, brand tokens | design/ | design/CONTEXT.md | webapp-testing |
| Image assets, URL wiring, deployment | publish/ | publish/CONTEXT.md | webapp-testing |

## Cross-Workspace Flows

- Content update → Deploy: design/ (edit HTML/CSS/copy) → publish/ (swap images, wire URLs) → deploy to Netlify

## File Placement

- HTML source → project root
- Image assets → assets/ (when created)

## Deployment

- Platform: Netlify
- Domain: start.empowrcic.org
- Branch: master
