# Step 1: Current repository findings

> A short orientation note before any rebuild work. Captures how this app is wired so the
> new `major-changes-hasan` branch reuses the existing machinery instead of fighting it.

## Stack

| Concern | What it is |
|---|---|
| Build tool | **Vite 7** (`vite`, `vite build` runs `tsc -b` first) |
| Framework | **React 19** + **react-router-dom 7** (SPA, `BrowserRouter` in `src/main.tsx`) |
| Language | **TypeScript ~5.9** (strict via `tsconfig.app.json`) |
| Styling | **Tailwind CSS 3.4** + a hand-written design layer in `src/index.css` (`@layer components`/`utilities`) |
| Utilities | `clsx`, `tailwind-merge`, `framer-motion`, `lucide-react` (icons) |
| Package manager | **npm** (`package-lock.json` present) |
| Hosting | **Netlify** (`netlify.toml`: build `npm run build`, publish `dist`, SPA redirect `/* -> /index.html 200`, functions in `netlify/functions`) |

## Routing (`src/App.tsx`)

- All public pages render inside a single `<Route path="/" element={<Layout/>}>` parent.
- Hostname switches at the top of `App()`: `pitch.rapiddraft.ai` redirects to the apex, `forward.rapiddraft.ai` renders `ForwardPage`, and per-company demo hostnames render `CompanyDemoPage` in host mode.
- Existing routes: `/`, `/cad-concept`, `/deal-room` (+ `/nda-request`, `/loi-request`), legacy `deal-room_v1/v2/v3`, `/use-cases`, `/team`, `/book-demo`, `/theegarten-pactec`, `/pilots/:slug`, plus redirects (`how-it-works`, `pitch`, `join-us`).

## Shared layout & component conventions

| Component | File | Role |
|---|---|---|
| `Layout` | `src/components/Layout.tsx` | Sticky `Navbar` + `<main>` + `Footer`; handles hash-scroll and scroll-to-top on route change |
| `Navbar` | `src/components/Navbar.tsx` | Logo (`BrandMark`) + nav links + "Book a Demo" pill; mobile menu; has a dark-mode branch keyed on `/cad-concept` |
| `Footer` | `src/components/Footer.tsx` | Dark (`bg-dark`) footer, "Backed by" logos, product/company/contact columns |
| `Section` | `src/components/Section.tsx` | `py-16 md:py-28`, max-width **1180px**, `white`/`light` background variants |
| `PageMeta` | `src/components/PageMeta.tsx` | Imperatively upserts `<title>`, description, OG/Twitter tags. **This is the meta mechanism** to reuse per page. |
| `BrandMark` | `src/components/BrandMark.tsx` | `<img>` of `/media/rd_logo.png` (light) or `/media/rd_logo_white.png` (dark) |
| `Reveal` | `src/components/home/Reveal.tsx` | Scroll-triggered fade-in (framer-motion) |

Component conventions: function components, default exports for pages, named exports for some shared bits, Tailwind utility classes inline plus the semantic classes from `index.css` (`.site-kicker`, `.section-title`, `.hero-title`, `.btn-primary`, `.surface-card`, `.warm-panel`, etc.). Container width is **1180px** (`max-w-[1180px]`) almost everywhere; hero sections use `1280px`.

## ROI calculator (must be preserved verbatim)

Lives in `src/pages/Product.tsx` as `RoiCalculatorSection()`. Logic to keep exactly:

- Inputs: engineers (1-20), hours/week (1-40), hourly rate (€30-200). Defaults 5 / 3 / 60.
- `WORKING_WEEKS_PER_YEAR = 42`, `AVOIDED_COST_PER_ISSUE = 5000`.
- `savedHoursPerEngineerPerWeek = max(3, hoursPerWeek * 0.3)`.
- `annualTimeSavingValue = engineers * savedHours * hourlyRate * 42`.
- `annualAvoidedIssueValue = engineers * 5000`.
- `totalValue = sum`. `formatEuro` => `€` + `toLocaleString('en-US')`.

This matches the spec's stated assumptions. I will lift the calculation + state into a restyled section, not change the math.

## Figures to reuse (currently on `/theegarten-pactec`)

Both are inline React SVG components inside `src/pages/TheegartenPactec.tsx`:

- **Figure 1 — Engineering stack** = `EngineeringStackDiagram()` (line ~292). `viewBox 0 0 1120 560`. Left input pills (SOLIDWORKS/EPLAN, 2D Drawings, CIM Database, Release Package, Supplier QA) flow into a central RapidDraft core, out to right output pills (DFM Findings, Inspection Readiness, BOM Consistency, Release Gates, Audit Trail). Center label currently reads `RapidDraft` / `HUMAN-IN-THE-LOOP REVIEW`.
  - Goes on **Platform** (AI review layer). Spec wants a **generic** stack (NX / CATIA / SW, PDM / PLM) and the center bar to read **"human-in-the-loop AI, grounded in your rules."**
- **Figure 3 — On-prem architecture** = `LocalAiDeploymentDiagram()` (line ~80). `viewBox 0 0 1200 420`. Input column (Theegarten-Pactec Release Package + NVIDIA DGX Spark on-prem hardware) -> security gate -> RapidDraft agent workspace (BOM/DFM/Model/Knowledge/Artifacts tools) -> animated output cards (Evidence-linked results, Engineer approval, Release -> CIM Database).
  - Goes on **Security** as the centerpiece. Spec wants the top-left input card relabeled **"Your release package"** for the public page; the named "Theegarten-Pactec data" version stays on the unlisted `/theegarten-pactec` page.
- **Figure 2 — Hub-and-spoke** does not exist yet. Reference image at `docs/figures/figure-2-hub-and-spoke.png`. Build original for Home solution section.

Plan: extract figures 1 and 3 into shared components under `src/components/diagrams/` parameterized by `variant` (generic vs. customer-named) and theme, so `/theegarten-pactec` keeps its exact current rendering while Platform/Security get restyled, generic variants.

## Netlify forms (must stay intact)

Hidden static forms in `index.html` drive Netlify form detection. **Field names must match between these hidden forms and the React forms.**

| Form `name` | Fields |
|---|---|
| `bookdemo` | `name`, `email`, `company`, `role`, `cad-tools`, `message` |
| `job-application` | `name`, `email`, `message` |
| `nda-request` | `full-name`, `title`, `email`, `company`, `jurisdiction`, `address`, `business-unit-site`, `systems-environment`, `use-case-workflow`, `submission_recipient` |

The Book-a-demo page spec fields (Name, Work Email, Company, Role, CAD tools, Message) map cleanly onto the existing `bookdemo` form. The Security page "Request an NDA" CTA points at the existing `/deal-room/nda-request` flow which uses `nda-request`.

## What changes vs. what is preserved

- **Preserve:** routing shell + hostname logic, `PageMeta`, ROI math, figure SVG geometry, Netlify forms + field names, unlisted routes (`/theegarten-pactec`, `/pilots/:slug`, `/deal-room`).
- **Replace:** the visual design layer (`index.css` semantic classes + Tailwind theme), nav/footer chrome, and all six public page bodies, restyled to the inxm.ai language with spec copy.
- **Retire:** `/cad-concept` (drop from nav; archive page/route).
