# Technology & CAE

> Process-and-material map · CAE software stack · engineering disciplines · where FE depends on partners.

## Technology and process map

| Technology / process | Problem it solves | Volume fit | FE strength | Partner dependency | Public evidence |
|---|---|---|---|---|---|
| **CFRP monocoque & modular composite platforms** | Maximum stiffness/mass for small series & premium structures | Low–Med | Structural architecture, mixed-material integration | Manufacturing line, serial industrialization | Roding Roadster; monocoque/body service line |
| **GFRP / epoxy SMC battery covers** | Fire resistance, integrated ribs/features, complex geometry, medium-volume economics | Med | Architecture, crash & thermal validation, mixed-material pack design | Chemistry / SMC processing | 2021 FE/LION/Evonik/Lorenz/Vestaro project |
| **Large-format PP injection molding ("Megamolding")** | Cost-down, function integration, part-count reduction | Med–High | System layout, load testing, process-aware design | Tooling, compounding, process development | SABIC/ENGEL/FE; IAA 2025; K 2025 |
| **Organosheet / TP sandwich covers** | Local stiffness + thermal protection without metal penalty | Med–High | Structural concepting, integration into enclosure | Semi-finished material supply, press tuning | Envalior JEC 2025; ENGEL JEC 2026 |
| **HP-RTM hybrid composite battery & inverter housings** | High-performance composite shells with integrated EMI/fire | Med | System requirements, validation path | RTM line/process, coated-fiber supply | FibreCoat/Coleitec/FE 2026 demonstrator |
| **Additive manufacturing (DfA)** | Faster prototyping, low-volume functional parts, early validation | Low | DfAM integration, lightweight concepting | Material supply, industrial-scale AM | Local Motors Olli; LEHVOSS collaboration; FE internship ad |
| **Design for circularity / mono-material polymer assemblies** | End-of-life simplification, recyclability, CO₂ story | Med–High | Requirements translation, concept design, LCA | Recycling-process proof, value-chain execution | Mono-Material Seat; FSCM consortium |

## CAE & software stack

> Confirmed from public sources vs. inferred from work patterns. Bring this list to validate during the meeting.

| Area | Confirmed | Plausible / not confirmed | Why the inference is reasonable |
|---|---|---|---|
| Explicit crash / nonlinear structural CAE | **LS-DYNA** | Pam-Crash, Radioss, Abaqus/Explicit | Crash, side impact, bottom impact, abuse cases for composites & mixed materials |
| Pre/post | **HyperMesh, HyperView** | ANSA, Primer, MetaPost | Standard neighboring tools |
| CAD | **Catia V5** (Japan job ad) | NX, 3DEXPERIENCE, SolidWorks | OEM-facing programs often need multi-CAD fluency |
| Material & manufacturing simulation | Mold flow, warpage, push-down — **outputs** confirmed | Moldflow / Moldex3D | Outputs match those tools' capabilities |
| Composite material modeling | Material characterization & modular crash-card program — **methods** confirmed | Digimat or equivalent multiscale | Work would benefit strongly |
| Optimization / DOE | Morphology-based, trade-space oriented | HEEDS, modeFRONTIER, Isight | Concept-screening style implies formalized option evaluation |
| LCA / sustainability | LCA tool use confirmed; not named | GaBi/Sphera, OpenLCA, SimaPro, ecoinvent | Dominant toolchains for the services advertised |

## Engineering disciplines FE almost certainly runs daily

- Structural FEM
- Crashworthiness (LS-DYNA-class explicit)
- Composite material modeling & **progressive failure**
- Material-card calibration (with strain-rate, temperature, fiber-orientation effects)
- Thermal-runaway test interpretation (Box TRA, TaG, UL 2596)
- Battery-pack enclosure architecture
- Sealing, ingress (IPX7/IPX9), venting, deflagration pressure
- Joining & insert strategy (adhesives, inserts, fasteners)
- Manufacturing simulation (mold flow, warpage, fiber orientation, residual stress)
- Tolerance management & GD&T
- Cost engineering, should-cost, tooling amortization
- LCA / PEF / circularity analysis
- Program management from concept → prototype → series feasibility

## Where FE almost certainly depends on partners

- Material chemistry, formulation, plaque-level data generation
- Series manufacturing capacity (SMC line, injection-molding, HP-RTM)
- Full-pack thermal-runaway test rigs
- High-voltage electrical integration & BMS
- Software / E/E
- Tier-1-style PPAP / industrialization
- Recycling-process commercial proof

## What this means for your conversation

FE's real value is **systems-level technical synthesis**, not "one solver seat." If you frame your background as **load-path-driven decision quality** and **CAE workflow automation that protects expert judgment**, you're speaking their language. See [Meeting playbook · AI/CAE](meeting.md#ai--digital-engineering-questions).
