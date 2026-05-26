# Battery enclosures — the technical heart

> FE solves the same customer problem through **multiple architectures**, not by betting on one material religion. OEMs don't buy "composites" — they buy **compliance, cost, cycle time, packaging efficiency, manufacturability, and trust**.

## The three concurrent routes

| Route | Materials | Process | Volume fit | FE-led validation work | Status |
|---|---|---|---|---|---|
| **SMC / hybrid** | Glass-fiber epoxy SMC; later semi-integral with extruded Al bottom (Minth) | Compression molding + bonding | Medium | Side impact 350 kN, modal, bending/torsion stiffness, impulse pressure under TR | Demonstrator → Pure Performance Battery (LION Smart) |
| **Thermoplastic Megamolding** | STAMAX (FR LGF-PP) tray; Tepex/PP organosheet sandwich cover; metal underbody | Large-format injection molding (ENGEL duo 5500 combi M, 1.77 × 1.30 m) | Medium-to-high | Simulation, load testing, mold-flow, warpage, sealing, IPX | SABIC reference; SPE "Enabler Technology" first place 2025 |
| **Hybrid composite (HP-RTM)** | Aluminum-coated fibers (FibreCoat); EMI shielding integrated; passive cooling; fire performance | HP-RTM | Medium | System requirements, validation path, battery application know-how | 2026 demonstrator with Coleitec |

## Route 1 — SMC / hybrid

**Partners:** Evonik (epoxy SMC chemistry) · LION Smart (battery developer) · Lorenz Kunststofftechnik (SMC processor) · Vestaro (composites venture) · Minth (extruded Al bottom)

**FE's contribution:** modular cell-to-pack GFRP-SMC HV battery enclosure architecture; CAE validation across:

- Side impact up to **350 kN**
- Modal analysis
- Bending and torsion stiffness
- Impulse pressure under thermal runaway

The story evolved from the 2021 modular SMC concept into the **Pure Performance Battery** (LION Smart, Mar 2022) — semi-integral vehicle integration with an **extruded-aluminum bottom structure from Minth**, connecting the side rockers into the load path. This is exactly the kind of architecture-to-vehicle-strategy thinking worth digging into.

> **Configurations described publicly:** 65 / 85 / 120 kWh capacity. Immersive-cooled supercell module.

## Route 2 — Thermoplastic "Megamolding"

**Partners:** SABIC (PP STAMAX) · ENGEL (large-format injection molding) · Envalior (Tepex organosheet, sandwich architecture) · DuPont · Ensinger · Freudenberg · Siebenwurst

**Architecture:** thermoplastic/organosheet sandwich cover panel + flame-retardant PP STAMAX tray + metal underbody panel.

**Public claims:**
- **10–20%** lower mass vs all-metal alternatives
- Up to **30%** lower cost
- Up to **40%** CO₂ reduction (ENGEL release, Jan 2025)
- Cover dimensions on the duo 5500 combi M: **1.77 × 1.30 m**

**Marketing escalation timeline:**
- JEC World 2025 — "world's first large-format injection-molded battery case"
- IAA Mobility 2025 — battery housing made from **two large PP injection-molded parts**
- K 2025 — Megamolding pitched as cost / circularity / innovation platform
- Nov 2025 — **SPE "Enabler Technology" first place** for the hybrid battery cover (Envalior)

> 💡 **Question to test:** Is the "two large PP parts" IAA 2025 concept already customer-specific, production-nominated, or still demonstrator-stage?

## Route 3 — High-function hybrid composite (HP-RTM)

**Partners:** FibreCoat (aluminum-coated fibers, Aachen) · Coleitec (China composites manufacturer)

**FE's contribution:** Battery & inverter housing demonstrator — public technical contact is **Zheren Wang, Battery Group Lead**.

**Differentiator:** Functional integration *into the material system* rather than bolted on:
- EMI shielding
- Passive cooling
- Improved fire performance
- Compatible with established **HP-RTM** processing

**Status:** Demonstrator stage (early 2026). Most ambitious of the three routes; still earliest in maturity.

## Architecture playbook — what they think about (FE's own deck)

FE's 2024 SPE ACCE deck explicitly ranks **commercial requirements before FEA load cases**. That's a tell:

1. Cost reduction
2. Package efficiency
3. Scalability
4. Variant flexibility
5. *Then* CFD, coolant pressure, internal pressure under TR, bottom impact, side impact, mold flow, sealing, physical validation

Their staged de-risking roadmap covers:
- Mold flow & warpage
- Push-down analysis
- Vent sealing
- IPX7 / IPX9 ingress
- IP validation
- Physical validation
- PFMEA
- Subsystem testing

## The hardest unsolved problems they're actually wrestling with

These are all amplifications of well-known battery-pack structural challenges, made worse by **materials uncertainty**:

| Bottleneck | What FE has said publicly | Why it matters |
|---|---|---|
| **Material-card maturity** | 2024 deck states explicitly that lack of accurate FRP crash material cards causes designers to prefer metals | One of the clearest public admissions of an industry bottleneck — and your direct entry point |
| **Plaque → system bridging** | Both FE and UL stress moving from plaques to assembly selection, but interpretation is heavy | UL 2596 helps screen, but architecture decisions still need confidence |
| **Joining, sealing, tolerance robustness** | SABIC HVBE de-risk roadmap explicitly covers vent sealing, IPX7/IPX9, torque sensitivity, bore diameters, Stamax↔organosheet adhesion, assembly trials | Where "good concepts" go to die in real assembly |
| **Load-path architecture** | Pure Performance Battery materials discuss **bottom impact** and **rocker integration** directly | This is where enclosure strategy = vehicle strategy |
| **Coupled TR + EMI + manufacturability** | Treated as one problem, not separate checkboxes | The whole point of the hybrid composite route |

> **Your strongest opening line is not metals vs. composites.** It's: *"Where does each architecture break first — tray crush, flange leakage, insert pull-out, thermal-event penetration, stack-up sensitivity, warpage-driven sealing loss, or subsystem correlation failure?"*

## The big open commercial question

Public sources show **strong technical marketing and partner visibility**. They do **not** clearly show a named **automotive series-production EV battery enclosure win** attributed to FE.

That doesn't mean none exist. It means public sources don't prove it. **It is the single most important question to probe in your meeting.**

Suggested wording:
> "Which of your battery-enclosure programs have progressed furthest toward OEM release, and what were the biggest gates between demonstrator and SOP?"

See the [Meeting playbook](meeting.md) for the rest of the question bank.
