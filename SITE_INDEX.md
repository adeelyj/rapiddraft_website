# RapidDraft Website — Site Index

> **Deployed at:** rapiddraft.ai · Built with React + Vite + Tailwind · Auto-deployed from `main` via Netlify

---

## Shared Layout (all pages)

| Element | File | Notes |
|---|---|---|
| Navbar | `src/components/Navbar.tsx` | Logo, nav links (Home, ROI, Use Cases, Team), Book a Demo CTA, mobile menu |
| Footer | `src/components/Footer.tsx` | Company description, UnternehmerTUM / XPLORE logos, nav columns, copyright |
| Layout wrapper | `src/components/Layout.tsx` | Sticky navbar + outlet + footer |

---

## Pages & Sections

### 1. `/` — Home
**File:** `src/pages/Product.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero | *Accelerate engineering decisions and drawing release* |
| 2 | Capability Rail | 4 tabs: Drawing Analysis · Design Reviews · Collaboration · Bulk Reviews |
| 3 | Proof Strip | 30% fewer cycles · 10× faster feedback · 50% less checking time |
| 4 | Problem–Solution Story | *Turn fragmented review work into a connected release workflow* |
| 5 | Enterprise-Ready AI | *Works with your stack. Keeps your data secure.* |
| 6 | ROI Calculator `#roi-calculator` | Interactive sliders → annual savings estimate |
| 7 | Final CTA | *Bring speed and traceability to drawing release* |

---

### 2. `/use-cases` — Use Cases
**File:** `src/pages/UseCases.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero | *Where RapidDraft fits in real release workflows* |
| 2 | Use Case 1 | New Product Development |
| 3 | Use Case 2 | Battery Packs and Structural Components |
| 4 | Use Case 3 | Supplier Drawing Packages |
| 5 | Use Case 4 | Change-driven Updates (ECR/ECO) |
| 6 | Use Case 5 | Legacy Drawing Cleanup |
| 7 | Final CTA | *Bring a real workflow into the conversation* |

---

### 3. `/team` — Team
**File:** `src/pages/Team.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero | *Built by engineers who have felt the release bottleneck firsthand* |
| 2 | Mission | *Turn engineering release workflows from manual bottlenecks into structured, reliable systems* |
| 3 | Founding Team | Adeel Yawar Jamil · Dr. Hasan Raza · Sreekar Reddy Sajjala |
| 4 | Advisory Network | Shehjar Tikoo · Julio Castaño · Muneeb Akhtar |
| 5 | Open Roles `#open-roles` | Full Stack Web Dev · AI & ML Expert · CAD Automation Engineer |
| 6 | Job Application Form | Name · Email · Message |

---

### 4. `/book-demo` — Book a Demo
**File:** `src/pages/BookDemo.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero + Form | *Bring the workflow that is slowing your team down the most* |
| 2 | Strong Fit | *RapidDraft is strongest where drawings still carry the workflow* |

**Form fields:** Name · Email · Company · Role · CAD Tools · Workflow description

---

### 5. `/deal-room` — Deal Room
**File:** `src/pages/DealRoomV3.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero + Step Preview | Interactive onboarding step buttons |
| 2 | Pilot Offers | 3 offer cards (Start NDA+LOI, View Pilot Offers) |
| 3 | Why RapidDraft `#why-rapiddraft` | Overview text |
| 4 | FAQ `#faq` | Collapsible Q&A |
| 5 | Contact Person `#contact-person` | Assigned contact card with email CTA |

---

### 6. `/deal-room/nda-request` — NDA + LOI Request
**File:** `src/pages/NdaRequest.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero + Form | *Share the details needed to prepare the NDA and LOI* |
| 2 | Success State | Confirmation with document links |

**Form fields:** Full Name · Title · Email · Company · Jurisdiction · Address · Business Unit · Systems/Environment · Use Case

---

### 7. `/theegarten-pactec` — Theegarten-Pactec Pilot Page
**File:** `src/pages/TheegartenPactec.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero | *Agentic drawing release and design review for engineering teams* |
| 2 | Security First | *Data security and transparency come first* — Local-AI deployment architecture diagram (NVIDIA DGX Spark) with animated output cards |
| 3 | Live Demo | *Release check for a real module-change workflow* — 5 demo steps |
| 4 | Pilot Programme | *Proof of value before production deployment* — 4 phases (Feasibility · Kick-off · Review · Deployment) |
| 5 | Founding Team | *Engineering depth, AI capability, and industrial execution* — 3 founder cards + Contact Us CTA |

---

### 8. `/pilots/:slug` — Dynamic Company Demo Pages
**File:** `src/pages/CompanyDemoPage.tsx`

Slugs are registered in `src/companyDemos/registry.ts`. Each page includes:
- Header with brand and access label
- Hero storyboard (revision-based workflow steps)
- Chapter rail (sticky sidebar navigation)
- Story chapters with videos and artifact flows

---

### 9. `/cad-concept` — CAD Concept (Dark theme)
**File:** `src/pages/CadConcept.tsx`

| # | Section | Heading |
|---|---|---|
| 1 | Hero | *Engineering review, drawing memory, and release logic in one control surface* |
| 2 | Failure Modes | *Mechanical release work still breaks when context falls out of the loop* |
| 3 | Closed-Loop Workflow | *Why teams lose engineering context* |
| 4 | Capability Stories | *A sharper visual system for CAD, reviews, and manufacturing handoff* |
| 5 | Final CTA | *Move from geometry change to drawing release with fewer blind spots* |

---

## Redirects

| From | To |
|---|---|
| `/how-it-works` | `/` |
| `/pitch` | `/` |
| `/join-us` | `/team#open-roles` |
| `/deal-room_v3` | `/deal-room` |
| `/deal-room_v3/nda-request` | `/deal-room/nda-request` |
| `pitch.rapiddraft.ai/*` | `rapiddraft.ai/*` |

---

## Special Subdomains

| Subdomain | File | Description |
|---|---|---|
| `forward.rapiddraft.ai` | `src/forward/ForwardPage.tsx` | Standalone Forward product page with Hero, ROI Calculator, Pilot Options, Research, CTA |

---

## Key Shared Components

| Component | File | Used in |
|---|---|---|
| `Section` | `src/components/Section.tsx` | Content sections with light/white background variants |
| `Reveal` | `src/components/home/Reveal.tsx` | Scroll-triggered fade-in animation |
| `HeroCapabilityRail` | `src/components/home/HeroCapabilityRail.tsx` | Tabbed video showcase (Home, CadConcept) |
| `ProblemSolutionStory` | `src/components/home/ProblemSolutionStory.tsx` | Problem → solution narrative block |
| `ProofStrip` | `src/components/home/ProofStrip.tsx` | 3-metric proof strip |
| `PageMeta` | `src/components/PageMeta.tsx` | `<title>`, description, OG tags |

---

## Design Tokens (CSS utility classes)

| Class | Purpose |
|---|---|
| `.site-kicker` | Small orange pill label above section headings |
| `.hero-title` | Large balanced hero heading |
| `.hero-copy` | Hero body text |
| `.section-title` | Section heading (2rem → 4xl → 5xl) |
| `.section-copy` | Section body text |
| `.card-title` / `.card-copy` | Card heading and body |
| `.btn-primary` | Orange filled CTA button |
| `.btn-secondary` | White/bordered secondary button |
| `.surface-card` | White rounded card with soft shadow |
| `.warm-panel` | Warm-tinted rounded panel |
| `.hero-mesh` | Section background with radial gradient mesh |
| `.card-index` | `01 / 02` orange step numbering |

---

*Last updated: 2026-06-05*
