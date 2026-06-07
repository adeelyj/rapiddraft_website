# HANDOFF — RapidDraft website rebuild (major-changes-hasan)

## Goal
Rebuild the RapidDraft marketing site on branch `major-changes-hasan` applying the
**design language of inxm.ai** to the **content/IA of `docs/website-spec.md`**, keeping
RapidDraft's name/logo/content and the orange accent. `main` is production and must never
be touched. The site is fully bilingual (EN/DE). Awaiting the user's review of both
language versions.

## Branch & git state
- **Branch:** `major-changes-hasan` (tracks `origin/major-changes-hasan`). Up to date, **working tree clean**.
- **HEAD:** `9c8457c` — "Content audit vs spec + keep Home to 2 lines (EN + DE)".
- **`origin/main`:** `b072242` — UNTOUCHED. Never commit/PR/merge to it.
- Recent commits (newest first):
  - `9c8457c` Content audit vs spec + keep Home to 2 lines (EN + DE)
  - `964c079` Harmonize navbar sizing for elegance
  - `a06042c` Bring valuable elements from existing site; update footer index
  - `b29c80b` Remove hero highlight, Security themeable, eyebrows homepage-only
  - `592d21e` Bilingual EN/DE site: language toggle, centered nav, full German
  - `a9f8524` Build remaining pages (Platform, Security, Use cases, Company, Book a demo)

## Done
- New flat/hairline design system in `src/rd2.css` (tokens `--rd-*`, light/dark).
- Fonts: **Inter** all text, **Manrope** all numbers (`--rd-num`), **Geist Mono** for `/` `//` marks.
- Fixed background grid with cursor-following orange spotlight + lens distortion (`GridBackdrop.tsx`).
- Light/dark toggle + EN/DE toggle in centered navbar (auto-hides on scroll down). No-flash inline script in `index.html`.
- Apple-style full-viewport snap sections (`.rd-screen` + `html.rd-snap` proximity).
- All pages built & bilingual: Home, Platform, Security, Use cases, Company, Book a demo.
- Three theme-aware SVG figures: HubAndSpoke (Home), EngineeringStack (Platform), OnPrem (Security).
- Founding-team photos + use-case banner images brought from old site, restyled to fit.
- Footer index updated to new structure ("Product" → "Platform").
- Content audited vs `website-spec.md` (6-agent pass): no critical loss, more concise, buyer/competitor vocabulary; SOC 2 / ISO 27001 left as a **visible TODO** (not claimed).
- **Home: every heading/subhead/body ≤ 2 lines in BOTH EN and DE** — verified by measurement (`over2count: 0`).

## In progress
Nothing active. Last task (Home ≤2 lines EN+DE) complete, committed, pushed.
**Awaiting user review of EN + DE across the site.**

## Next steps (when user returns)
1. Address specific review feedback they give on EN/DE.
2. (Optional, only if asked) Apply the same ≤2-line discipline to the OTHER pages in German — the 2-line rule was scoped to Home only; do not expand scope unprompted.
3. After any edits: `npm run build` (runs `tsc -b`) must pass, then commit + push to `major-changes-hasan` only.

## Key decisions (do not reopen)
- **Alignment:** fully **center-aligned** everywhere (settled after several iterations).
- **Eyebrows:** homepage ONLY. Inner pages = heading/subhead/body. Enforced via `.rd-page` class + CSS (`.rd-page .rd-eyebrow { display:none }`), not per-file deletion. Home uses `rd2` WITHOUT `rd-page`.
- **Hero highlight removed** on all pages (`.rd-mark { color: inherit }`).
- **Security is themeable** (NOT forced dark) — uses `rd2 rd-page` like every other page.
- **Snap:** `proximity` not `mandatory`; hero + final CTA are non-snap so hero fits and footer is reachable.
- **i18n pattern:** each page/component has `const CONTENT = { en:{...}, de:{...} } as const;` + `const { lang } = useLang(); const t = CONTENT[lang];`.
- **German** may use slightly tighter phrasing than literal translation to hold 2-line rule (meaning preserved).
- **No invented facts** — bracketed placeholders rendered as visible TODOs. **No em-dashes.** One H1 per page. Preserve ROI math. Keep Netlify forms (`bookdemo`, `job-application`, `nda-request`) with matching field names.

## Gotchas
- **Centering:** paragraph classes in `rd2.css` use `margin-block: 0` (NOT `margin: 0`) so Tailwind `mx-auto` still centers. Reverting to `margin:0` re-breaks off-center body text.
- **Theme toggle:** `useTheme` (`src/hooks/useTheme.ts`) is DOM-`data-theme`-source-of-truth with force re-render — needed because of two hook instances + StrictMode. Don't refactor to local `useState`.
- **MetaRow/TagRow:** props typed `readonly` arrays so `as const` content doesn't TS-error.
- Measure text/lines with the Preview MCP (`mcp__Claude_Preview__*`), port **5174**. Use `preview_eval` to count elements whose rendered height > 2 line-heights.
- Many **legacy routes/pages still exist** (Forward deal-room, Product, Team, CadConcept, company demos). They're intentionally kept and routed/redirected in `App.tsx`. Don't delete.

## Where things live
- **Design system:** `src/rd2.css` (type scale, tokens, `.rd-page`/`.rd-screen`/`.rd-tile`/`.rd-btn*`/`.rd-figcaption`).
- **Primitives:** `src/components/ui/primitives.tsx` (Section, Container, Eyebrow, H1/H2/H3, Subhead, Intro, Lede, Body, MetaRow, Button, Tag, Card, Figure, SectionHead…).
- **i18n:** `src/i18n/LanguageContext.tsx` (`LanguageProvider`, `useLang`, `type Lang`). Wrapped in `src/main.tsx`. No-flash script in `index.html`.
- **Pages (current):** `src/pages/{Home,Platform,Security,UseCasesPage,Company,BookDemoPage}.tsx`.
- **Home parts:** `src/components/home2/{CapabilityRail,RoiCalculator}.tsx`.
- **Figures:** `src/components/diagrams/{HubAndSpokeFigure,EngineeringStackFigure,OnPremFigure}.tsx`.
- **Chrome:** `src/components/{Navbar,Footer,GridBackdrop}.tsx`.
- **Routing:** `src/App.tsx`.
- **Spec & research:** `docs/website-spec.md`, `docs/design-language-inxm.md`, `docs/repo-findings.md`, `docs/figures/`.
- **Media:** `public/media/` — people (`adeel,hasan,sreekar,shehjar,julio,muneeb,camillo.jpg`), `usecase-*.{jpg,png}`, logos.

## Open questions
- User may want the ≤2-line discipline extended to inner pages (esp. German). Not done — scoped to Home. Confirm before expanding.
- SOC 2 / ISO 27001 still placeholder TODOs on Security — need real certification status (or keep as roadmap language) once the user provides facts.
