# Forward Engineering — Meeting Briefing

> Distilled from two independent deep-research reports (GPT + Perplexity) into a navigable briefing for a **May 2026** meeting with Forward Engineering GmbH.

## TL;DR

- **Identity.** FE is **not** a generalist engineering services firm. It's a Munich-headquartered specialist in **composite-intensive structures, mixed-material body, and EV battery enclosures**, spun out of Roding Automobile in 2016 and backed strategically by Mitsui & Co.
- **Footprint.** Munich (HQ) · Nagoya · Shanghai · Oak Park (Detroit). ~26–40 people. SME-scale revenue.
- **Three concurrent battery-enclosure routes** — they're not betting on one material religion:
  1. **SMC / hybrid** (Evonik, LION Smart, Lorenz, Vestaro, Minth)
  2. **Thermoplastic "Megamolding"** (SABIC, ENGEL, Envalior — large-format injection-molded PP)
  3. **High-function hybrid composite** (FibreCoat, Coleitec — HP-RTM, integrated EMI/thermal/fire)
- **Strongest near-term commercial pull:** **GB 38031-2025** — effective **2026-07-01**. UNECE R100 thermal-propagation update is mandatory for new vehicles from Sep 2027.
- **Their stated technical bottleneck (from FE's own 2024 SPE ACCE deck):** lack of accurate FRP crash material cards causes designers to default to metals.
- **Their biggest open commercial question:** demonstrators, awards, and conference visibility are abundant. Named **series-production OEM wins** are not visible in public sources.

## Where to start

1. **[Company snapshot](company.md)** — who they are, where, leadership, size, customers
2. **[Strategic direction](strategy.md)** — 12-row matrix of confirmed / likely / speculative thrusts
3. **[Battery enclosures](battery.md)** — the technical heart; three routes, architecture playbook, bottlenecks
4. **[Technology & CAE](technology.md)** — process map, software stack, engineering disciplines
5. **[Regulations](regulations.md)** — GB 38031-2025, UNECE R100, UL 2596 / BETR / TaG
6. **[Competition & pain points](competition.md)** — value-chain positioning, profit pools, diplomatic questions
7. **[Acceleration opportunities](opportunities.md)** — ranked by impact / effort
8. **[Meeting playbook](meeting.md)** — questions, intelligent statements, red/green flags, opening pitch, glossary

## Your angle in the room

You bring **battery-pack structural FEM**, **crash & load-path** thinking, and an interest in **AI-enabled CAE workflows**. The leverage zones map to FE's stated bottlenecks:

- **Material-card calibration** & subsystem→system correlation (their #1 stated pain)
- **GB 38031-2025 / UNECE R100 / UL 2596** readiness toolchains and decision frameworks
- **Bottom impact, side-pole intrusion, rocker-to-pack** load-path reasoning — exactly where enclosure strategy becomes vehicle strategy
- **CAE workflow automation** on one enclosure family across variants — pre-processing, report generation, requirements traceability, test-data correlation
- **Bridging plaque-level (BETR / TaG / Box TRA)** data into pack-level confidence — turning UL 2596 outputs into architecture decisions

## Confidence legend

Throughout the briefing, claims are flagged:

- <span class="badge badge-confirmed">Confirmed</span> — primary or near-primary source (FE site, partner release, official standard)
- <span class="badge badge-likely">Likely</span> — strong inference from multiple supporting sources
- <span class="badge badge-speculative">Speculative</span> — hypothesis worth testing in the meeting
