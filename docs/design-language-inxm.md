# Design language: inxm.ai (extracted) -> RapidDraft

> Source studied for **design language only**. No inxm.ai copy, logo, imagery, or proprietary
> assets are reused. Tokens below are observed from inxm.ai's public stylesheets
> (`site.css`, `site-v4.css`, `ds/colors_and_type.css`) and re-expressed as an original
> RapidDraft system. inxm.ai is dark-canonical with a light theme; RapidDraft will be
> **light-canonical** (apex + most pages light) with a **dark band** on Security, mirroring
> the spec.

## One-sentence feel

Quiet, technical, and editorial: a near-monochrome canvas (soft off-white or near-black), one
precise orange accent, hairline 1px borders instead of shadows, generous whitespace, large
light-weight headlines, and a mono "// label" system that makes it read like a well-set
engineering document rather than a typical SaaS landing page.

## The five rules that define the look

These are the load-bearing decisions. If a component follows these, it is on-brand.

1. **No drop shadows. No gradients.** Elevation is expressed as a **1px hairline border** only
   (`box-shadow: 0 0 0 1px <border>`). This is the single biggest departure from RapidDraft's
   current style (which leans on soft shadows + warm radial-gradient meshes).
2. **One accent, used like a scalpel.** Orange appears on the `//` eyebrow prefix, link/nav
   hovers, focus rings, section numbers, a single highlighted word, and tiny status marks.
   **Buttons and large fills are monochrome**, never orange.
3. **Tight radii.** 2/4/6/10px for surfaces; full pills (9999px) only for buttons and tags.
   Cards are near-square, not the 24-36px rounded panels used today.
4. **Light weights, big sizes, tight tracking.** Headlines are 48-64px at weight 400-500 with
   `-0.025em` to `-0.01em` tracking. Hierarchy comes from size + color + spacing, not bold.
5. **Mono labels everywhere structural.** Eyebrows, nav, KPIs, tags, IDs, and captions use a
   mono / Geist voice with `//` and `/` prefixes and tabular numerals.

## Color palette

inxm uses one token set with a dark-canonical `:root` and a `[data-theme="light"]` override.
RapidDraft adopts the same tokens; **light is our default**, dark is the Security band.

### Light theme (default for Home, Platform, Use cases, Company, Book a demo)

| Token | Hex | Use |
|---|---|---|
| `--bg-canvas` | `#f5f5f5` | Page background (soft warm-neutral grey, **not** pure white) |
| `--bg-surface` / `--bg-raised` | `#ffffff` | Cards, raised surfaces |
| `--bg-sunken` | `#ececec` | Recessed wells, code blocks |
| `--bg-inverse` | `#0d0d0d` | Inverted blocks / final CTA on light |
| `--fg-strong` | `#000000` | Primary headings |
| `--head-strong` | `#1f1f1f` | Section headings |
| `--fg-primary` | `#1a1a1a` | Body text |
| `--fg-secondary` | `#4a4a4a` | Supporting text, lede |
| `--fg-tertiary` | `#707070` | Eyebrow labels, meta |
| `--fg-muted` | `#a0a0a0` | Hairline labels, disabled |
| `--border-hair` | `#e0e0e0` | Default 1px dividers/edges |
| `--border-strong` | `#c8c8c8` | Card edge, secondary button border |

### Dark theme (Security and sovereignty band)

| Token | Hex |
|---|---|
| `--bg-canvas` | `#0d0d0d` |
| `--bg-surface` | `#111111` |
| `--bg-raised` | `#161616` (card) |
| `--bg-sunken` | `#0a0a0a` |
| `--fg-strong` | `#ffffff` |
| `--fg-primary` / `--fg-secondary` | `#f2f2f2` |
| `--border-hair` | `#1f1f1f` |
| `--border-strong` | `#2c2c2c` |

### Accent (single)

- inxm canonical orange: **`#FF5900`** on light, brightened to **`#FF7A33`** on dark; press `#e64f00` (light) / `#ff6a1a` (dark); soft `rgba(255,89,0,0.10)`; hairline `rgba(255,89,0,0.35)`.
- **RapidDraft accent decision (see bottom of doc):** keep RapidDraft's existing **`#ea580c`** as the single accent (it matches the current logo and is visually within a few degrees of inxm's `#FF5900`), applied in inxm's restrained accent role. Dark-mode brightened variant `#fb7a3c`, press `#c2410c`.

### Secondary / status tints (diagrams + status only, desaturated)

`--status-ok #2f7a3e` · `--status-warn #c98a1e` · `--status-error #c2362a` · `--status-info #4977a3`.
inxm's diagrams also use muted earth tones (`#7a95a4`, `#6b8290`, `#a582a0`, `#c9b68c`). RapidDraft
keeps figures mostly monochrome + accent, with these muted tints reserved for category coding.

## Typography

| Role | inxm | RapidDraft (per RapidDraft brand direction) |
|---|---|---|
| All text (display, headings, body, UI labels) | Satoshi / Geist | **Inter** (Google Fonts, OFL) — chosen by RapidDraft for all reading and UI text |
| Numbers (KPIs, section/card index, ROI values) | Geist / Geist Mono | **Manrope** (Google Fonts, OFL) — the credibility-KPI font from the earlier RapidDraft site, kept as the numeric voice |
| `//` and `/` accent marks | Geist Mono | **Geist Mono** (open source) — decorative marks only |

> Font note: inxm uses Satoshi + Geist. RapidDraft's brand direction is **Inter for all
> text and Manrope for all numbers** (KPIs, section numbers, card numbers, ROI values), which
> gives a clear text/number contrast while staying in the same restrained, technical spirit.

Type scale (px / line-height / weight / tracking), light-canonical:

| Element | Size | LH | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | 60-64 (clamp down to 30 mobile) | 1.1-1.22 | 500 | -0.025em |
| H2 (section) | 40-48 | 1.2 | 400-500 | -0.01em |
| H3 (card/item) | 22-24 | 1.3 | 500 | -0.005em |
| H4 / sub-item | 18 | 1.4 | 500 | 0 |
| Body | 16 | 1.8 | 400 | 0 |
| Lede / subhead | 16-18 | 1.7-1.8 | 400 | 0, color `--fg-secondary` |
| Small / meta | 13 | 1.6 | 400-500 | 0 |
| Eyebrow | 12 | — | 500 | 0.04em, UPPERCASE, `--fg-tertiary`, mono `//` accent prefix |
| Mono data/KPI | tabular-nums | — | 400 | 0 |

Heading color uses `--head-strong` (`#1f1f1f`), not pure black, for section H2s; hero H1 can go
to `--fg-strong`. One highlight treatment exists: a word wrapped with an **orange underline-
highlight** (`box-shadow: inset 0 -4px 0 <accent>` over a soft-accent background) — used at most
once per hero.

## Spacing, container, grid

- **4pt base scale:** 0/4/8/12/16/24/32/48/64/80/100/128px.
- **Section padding:** ~120px top/bottom on desktop (`--sp-9` 80px is the brand minimum; large
  marketing sections use 120px), 80px horizontal gutter, collapsing to 48-64px on tablet and
  24px on mobile.
- **Content max-width:** **1280px** standard, **1400px** for wide hero/testimonial bands.
  (RapidDraft currently uses 1180px; we widen to 1280px to match the airier inxm rhythm.)
- **Section header pattern:** a 2-column grid — eyebrow + H2 on the left, a `lede` paragraph
  (`max-width: 52ch`, `--fg-secondary`) on the right, with `64-80px` gap. Collapses to stacked
  on mobile.
- **Dividers:** sections separate with a single 1px `--border-hair` rule, not background-color
  blocking. Whitespace + hairlines carry the structure.

## Radii, borders, elevation

- Radii: `--r-xs 2px`, `--r-sm 4px`, `--r-md 6px`, `--r-lg 10px`, `--r-pill 9999px`.
- Cards: `--bg-raised` fill + `1px solid --border-hair` (or `--border-strong` for emphasis),
  radius 6-10px, **no shadow**.
- Elevation tokens are literally hairline rings: `--shadow-1: 0 0 0 1px var(--border-hair)`.

## Motion

- Durations: `--dur-fast 120ms`, `--dur-base 180ms`, `--dur-slow 260ms`.
- Easing: `--ease-standard cubic-bezier(0.2,0,0.2,1)`, enter `(0,0,0.2,1)`, exit `(0.4,0,1,1)`.
- Hover = color/border swap (to accent) + subtle 3px arrow nudge on CTA links. No big lifts.
- Subtle animated background grid on hero (low opacity). Scroll-reveal fades are fine but quiet.
- `prefers-reduced-motion`: collapse all animation/transition to ~0ms (inxm enforces this; we will too).

## Components

- **Header / nav:** sticky, 80px tall, `--bg-canvas`, **hairline bottom divider only**. Logo
  left (turns accent on hover). Mono nav links with an orange `/` slash prefix, hover -> accent.
  Right side: one primary pill CTA. No blur-glass, no shadow.
- **Buttons:**
  - Primary = solid **`#0d0d0d`** (near-black) bg, white text, pill, 40-44px tall, 13px mono/meta
    font, `1px` border same as bg, hover darken/translate-arrow. On the **dark** band it inverts
    to white bg / black text.
  - Secondary = transparent bg, `1px --border-strong`, `--fg-strong` text, hover border->accent.
  - Ghost = text-only, `--fg-secondary`, hover accent.
  - (Accent-filled buttons are intentionally **not** part of the system.)
- **Eyebrow:** `// LABEL` (orange `//`, mono), optionally with a tabular section number `01`.
- **Cards / list items:** raised white surface, hairline border, 6-10px radius, generous inner
  padding (24-32px), H3 + body + optional mono tag row. No shadow.
- **Tags / chips / KPIs:** pill or square hairline outline, mono, small; KPIs render the number
  large in display weight with a mono label beneath, separated by middots in meta rows.
- **Figures/diagrams:** flat, hairline-bordered, monochrome + single accent for the active path;
  thin animated dashed flow lines; technical/schematic feel (matches the existing RapidDraft SVGs,
  which only need restyling to flat + hairline + accent, not redrawing).
- **Footer:** can stay dark (inxm's footer is monochrome); restyle to hairline columns, mono
  labels, accent hovers. Carries Impressum / Privacy / Request an NDA / LinkedIn per spec.
- **Forms:** white field, 1px `--border-strong` hairline, 4-6px radius, focus -> 2px accent
  outline (`--border-focus`), mono field labels optional. No heavy inner shadows.

## Imagery / illustration

Minimal. inxm leans on schematic SVG diagrams, mono data, and the animated grid rather than
photography. RapidDraft keeps its product video rail on Home (it is core content) but frames it
in a flat hairline-bordered surface instead of a shadowed glass card. The NVIDIA DGX Spark photo
on Security stays (it is a real hardware reference), placed inside a hairline frame.

## How RapidDraft applies this (token plan)

Implement as CSS custom properties in `:root` (light) + `[data-theme="dark"]` override, wired
through the Tailwind theme so both `var(--*)` and Tailwind classes resolve to the same values.
A small set of primitives (`Eyebrow`, `H1`, `Subhead`, `H2`, `H3`, `Body`, `MetaRow`, `Button`,
`Figure`) enforces the spec's element hierarchy and these styles everywhere.

---

## Decisions & substitutions (please confirm)

1. **Accent — chose `#ea580c` (RapidDraft orange), not inxm's `#FF5900`.** Rationale: the two are
   visually near-identical, and `#ea580c` matches the existing RapidDraft logo/wordmark you are
   keeping, so accent marks and the logo stay coherent. Everything else (monochrome surfaces,
   black buttons, hairlines) follows inxm. If you'd rather match inxm's exact `#FF5900`, it's a
   one-line token change.
2. **Fonts — Inter for all text, Manrope for all numbers** (per RapidDraft direction), with
   Geist Mono kept only for the `//` / `/` accent marks. All are free for commercial use (OFL),
   loaded via Google Fonts. Manrope is the same font the earlier RapidDraft site used for its
   credibility KPIs, so the numeric voice carries over.
3. **Light-canonical, not dark-canonical.** inxm defaults to dark; the spec wants Home/Platform/
   Use cases/Company/Book-a-demo light and only Security on a dark band. RapidDraft inverts inxm's
   default accordingly.
4. **Spec vs. inxm conflicts:** the spec's own "Design notes" and the visual prose inside the
   "Diagrams" entries are superseded by this design language (per your instruction). The spec still
   governs information architecture, section order, headings, copy, and the three figures'
   captions/alt text. No content conflicts found so far; the only artwork edits are the two
   relabels the spec itself requests (generic stack + "human-in-the-loop AI, grounded in your
   rules" on Platform; "Your release package" on the public Security figure).
