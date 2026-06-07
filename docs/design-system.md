# RapidDraft design system (v2)

Single source of consistency rules. Source of truth in code: `src/rd2.css` (tokens +
component classes) and `src/components/ui/primitives.tsx` (React primitives). Apply these
everywhere; do not hardcode colors, sizes, or spacing.

## Palette (locked)
All color comes from `--rd-*` tokens (light canonical, dark via `[data-theme='dark']`).
No raw hex/Tailwind palette utilities in app code (the only exception is the intentional
always-dark Platform review-layer bar).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--rd-bg` | `#f5f5f5` | `#0d0d0d` | page canvas |
| `--rd-surface` | `#ffffff` | `#111111` | cards, inputs |
| `--rd-inverse` | `#0d0d0d` | `#f5f5f5` | inverted fills |
| `--rd-fg-strong` | `#000` | `#fff` | hero H1 |
| `--rd-head` | `#1f1f1f` | `#fff` | section headings |
| `--rd-fg` | `#1a1a1a` | `#f2f2f2` | body |
| `--rd-fg-2` | `#4a4a4a` | `#c9c9c9` | supporting / soft body |
| `--rd-fg-3` | `#5f5f5f` | `#9a9a9a` | eyebrow / meta / caption (AA on canvas) |
| `--rd-hair` | `#e0e0e0` | `#1f1f1f` | 1px borders |
| `--rd-edge` | `#c8c8c8` | `#2c2c2c` | hover border |
| `--rd-accent` | `#ea580c` | `#fb7a3c` | the single brand accent |
| `--rd-shadow-hover` | soft | soft | card hover elevation |

Single accent only (logo orange). Flat by default: hairline 1px borders, **no shadows at
rest** (shadow appears only on card hover).

## Fonts (locked)
- **Inter** — all reading + UI text (`--rd-sans` / `--rd-meta`).
- **Manrope** — all numerals: KPIs, ROI, indices `01..` (`--rd-num`).
- **Geist Mono** — only the `//` and `/` accent marks (`--rd-mono`).

## Type scale (one set)
| Class / primitive | Size | Use |
|---|---|---|
| `H1` / `.rd-h1` | clamp(36,4.6vw,56) w500 | hero only, 1 per page |
| `H2` / `.rd-h2` | clamp(28,3.2vw,40) w500 | every section heading |
| `H3` / `.rd-h3` | clamp(18,1.2vw,20) w500 | card / item title |
| `Subhead` / `.rd-sub` | clamp(17,1.4vw,20) | hero paragraph only |
| `Intro` / `.rd-intro` | clamp(16,1.2vw,18) | paragraph under an H2 |
| `Body` / `.rd-body` | 16 (`sm` = 15) | card / list copy |
| eyebrow / meta / micro | 11–14 | labels (`--rd-fg-3`) |

Dense 4-up tiles and the ROI / dark-bar carry a few intentional fixed sizes; everything
else uses the primitives. Do not introduce new arbitrary `text-[Npx]`.

## Spacing & layout
- Section rhythm: `.rd-section` `padding-block: clamp(56,9vw,120)`. Snap pages use
  `.rd-screen` (100svh, content flex-centered under the 80px nav).
- Header → content gap: **`mt-10`**. Button row under content: `mt-9`. Gutter `clamp(20,3vw,56)`.
- Content widths: readable text `max-w-[760px]`; section header `max-w-[860px]`; 3/4-up card
  grids `max-w-[1120px]`; 2-up statement grids `~980`; forms `max-w-[640px]`.

## Components
- **Eyebrow** — homepage only (hidden on `.rd-page` inner pages). `// LABEL`, accent `//`.
- **Buttons** — `.rd-btn` pill, 48px (`--sm` 40px for nav). Variants: primary (accent fill),
  secondary (canvas + edge, accent on hover), ghost. Arrow nudges +3px on hover.
- **Tag / pill** — `.rd-tag` only (hairline pill, 13px). `--accent` for the GDPR-style chip.
  Same component everywhere (home badges = open-role skills = security badges).
- **Cards** — one interactive model: `.rd-tile` (centered) or `.rd-lift` on any bespoke card.
  Rest = flat hairline; **hover = translateY(-4px) + `--rd-shadow-hover` + edge border**.
  Every card across the site animates identically.
- **Figures** — `.rd-figure` + centered `.rd-figcaption` (14px, no `//`).
- **Forms** — `.rd-label` + `.rd-input`/`.rd-textarea`; accent focus ring.

## Interaction & motion
- **Card lift** — the only card hover (above). Durations from `--rd-dur*`, ease `--rd-ease`.
- **Scroll snap (Home only)** — `html.rd-snap { scroll-snap-type: y mandatory }`,
  `.rd-screen { scroll-snap-align: start; scroll-snap-stop: always }`: one scroll = one
  section, content centered. The product rail is its own screen so it is never skipped; the
  footer is `scroll-snap-align: end` so the bottom stays reachable.
- **Reveal** — section content fades/slides up on enter (IntersectionObserver `.is-in`).
- `prefers-reduced-motion`: snap off, transitions/lift off.

## Accessibility (WCAG 2.1 AA)
- One `H1` per page; `H2`/`H3` nesting; landmarks (`header`/`main`/`footer`/`nav`).
- Text contrast ≥ 4.5:1 (`--rd-fg-3` darkened to `#5f5f5f` for AA on canvas; problem-card
  rest opacity 0.8 keeps dimmed copy ≥ 4.5:1).
- `alt` on all imgs; `aria-label` on icon-only controls; visible `:focus-visible` ring.
- Form fields labelled; targets ≥ 40px.
