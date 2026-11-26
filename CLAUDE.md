<!-- Generated from AGENTS.md by _config/scripts/sync-claude-md.py. Edit AGENTS.md, not this file. -->
# CLAUDE.md

> **This repository is PUBLIC** (`PecuvateOrg/empowr-start-page`).
>
> **Devlog and memory location:** `../workspace-docs/empowr-start-page/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

<!-- NON-NEGOTIABLES.md, inlined -->
# Empowr CIC Landing Page — Non-Negotiables

Forced open by `CLAUDE.md`'s Self-Reference line — read before doing anything else in this
project.

## Rules

- **This repository is PUBLIC** (`PecuvateOrg/empowr-start-page`). Never create `DEVLOG.md` or
  `memory.md` in this repo — both filenames are gitignored here, so a copy created in this
  directory is silently never committed. Write session entries to
  `../workspace-docs/empowr-start-page/` in the private Empowr CIC hub instead.
- Never put live identifiers, unremediated security findings, or commercial state in any file
  tracked here. See `../CONTEXT.md` and `_config/guides/public-repo-collaboration.md`.

## Naming Conventions

- CSS classes: kebab-case (`.link-btn`, `.blue-card`)
- File names: kebab-case
- Section comments: `<!-- SECTION N: Name -->`
<!-- end NON-NEGOTIABLES.md -->

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
