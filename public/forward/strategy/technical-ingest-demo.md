# Technical Ingest Demo

> Generated from the current Forward pilot source files. This is a lightweight proof that we can ingest mixed technical material into chunked, source-traceable records and expose it as a searchable knowledge surface.

## What this demo proves

- Markdown and PDF sources can be normalized into one chunk schema.
- Every chunk keeps source traceability back to file, section, line, or page.
- PDF content is flagged for follow-on page-layout or OCR/vision review instead of pretending plain text is enough.
- The same ingestion shape can later feed a proper Rapid Craft technical wiki, embeddings, and case-specific copilots.

## Corpus summary

- Source documents: `3`
- Total chunks: `130`
- Total PDF pages ingested: `39`

## Documents

| Document | Type | Chunks | Notes |
| --- | --- | ---: | --- |
| `GPT_deep-research-report.md` | `markdown` | 35 | fe, battery, cite, s, company, 2025 |
| `perplexity_forward_research.md` | `markdown` | 56 | 1, material, 2, fe, 8, 3 |
| `ilide.info-gb38031-2025-english-version-pr_e84d1c5d14a25a61d533e6f011eecbf3.pdf` | `pdf` | 39 | test, 2, battery, 1, 8, 5 |

## Search examples

### Query: `material card calibration`

- `perplexity_forward_research.md` -> **High‑ROI acceleration opportunities for FE (analyst proposals)** (`score 20`, tags: battery-enclosure, material-cards, cae-workflow, regulation, validation-testing, business-strategy)
  Below, I’ll focus on a few you explicitly listed and a couple of additional ones, structured to be “pitchable” in a meeting. **1) Productized GB 38031‑2025 readiness program** - **Customer:** OEMs, Tier‑1 enclosure su...
- `perplexity_forward_research.md` -> **Executive summary** (`score 18`, tags: battery-enclosure, material-cards, cae-workflow, regulation, knowledge-reuse, validation-testing, business-strategy)
  - **Identity \& footprint (verified).** Forward Engineering (FE) was founded in March 2016 as a spin‑off from Roding Automobile GmbH; Mitsui \& Co. took an equity stake the same year. FE describes itself as a “global...
- `perplexity_forward_research.md` -> **Business model (services and revenue logic)** (`score 16`, tags: battery-enclosure, material-cards, cae-workflow, regulation, knowledge-reuse, validation-testing, business-strategy)
  - FE positions itself as a **holistic product‑development partner** that runs from concept through virtual validation to prototype/testing and supplier handover for composite/mixed‑material structures. They highlight...

### Query: `GB 38031 thermal stability`

- `ilide.info-gb38031-2025-english-version-pr_e84d1c5d14a25a61d533e6f011eecbf3.pdf` -> **Page 34** (`score 20`, tags: battery-enclosure, cae-workflow, regulation, validation-testing)
  Ⅰ 26 GB 38031—2025 Appendix C (Normative) Thermal Propagation Analysis and Verification Report C.1 General Principles After thermal runaway caused by internal short-circuiting of a single cell, the battery pack or sys...
- `ilide.info-gb38031-2025-english-version-pr_e84d1c5d14a25a61d533e6f011eecbf3.pdf` -> **Page 29** (`score 18`, tags: battery-enclosure, regulation, validation-testing)
  Ⅰ 21 GB 38031—2025 9.2 If partial changes occur in the battery pack or system, supplementary tests on the technical requirements related to the changed parameters may be conducted according to Table 7. After approval,...
- `perplexity_forward_research.md` -> **Key public HVBE concepts** (`score 14`, tags: battery-enclosure, material-cards, cae-workflow, regulation, validation-testing, business-strategy)
  **1) PP Megamolding™ thermoplastic HV battery enclosure (SABIC \& partners)** - **Architecture (verified).** 1.8 × 1.5 m enclosure with: thermoplastic/organosheet sandwich cover, all‑thermoplastic flame‑retardant long...

### Query: `AI automation for CAE pre-processing`

- `perplexity_forward_research.md` -> **High‑ROI acceleration opportunities for FE (analyst proposals)** (`score 26`, tags: battery-enclosure, material-cards, cae-workflow, regulation, validation-testing, business-strategy)
  Below, I’ll focus on a few you explicitly listed and a couple of additional ones, structured to be “pitchable” in a meeting. **1) Productized GB 38031‑2025 readiness program** - **Customer:** OEMs, Tier‑1 enclosure su...
- `perplexity_forward_research.md` -> **F. 10 questions about AI/digital‑engineering opportunities** (`score 14`, tags: battery-enclosure, material-cards, cae-workflow, validation-testing, business-strategy)
  1. “Which parts of your current CAE workflows would you most like to automate in the next 12–24 months?” 2. “Have you experimented with AI assistants for pre‑processing (geometry cleanup, meshing) or post‑processing?”...
- `perplexity_forward_research.md` -> **Manufacturing processes and integration** (`score 13`, tags: material-cards, cae-workflow, regulation, validation-testing)
  **Table – Processes vs characteristics and FE dependence (mix of verified and inference)** | Process | Problem \& volume | CapEx \& cycle time | CAE \& validation | Recycling/repair implications | FE role vs partners...

### Query: `knowledge capture reusable engineering assets`

- `perplexity_forward_research.md` -> **Questions that remain unanswered from public sources** (`score 30`, tags: battery-enclosure, cae-workflow, knowledge-reuse, validation-testing, business-strategy)
  These are good areas to probe in your meeting: 1. **Real SOP wins:** Which of FE’s composite/thermoplastic HVBE solutions are actually in series production, under which OEMs, and at what volumes? Public sources focus...
- `GPT_deep-research-report.md` -> **Operating model and strategic direction** (`score 10`, tags: battery-enclosure, cae-workflow, validation-testing)
  FE’s own public messaging is unusually coherent around one theme: **“material and simulation driven design” translated into production-relevant solutions.** The company says it helps customers develop “better products...
- `GPT_deep-research-report.md` -> **Company snapshot** (`score 8`, tags: knowledge-reuse, validation-testing, business-strategy)
  Forward Engineering was founded in March 2016 in Munich as a spin-off from Roding Automobile, according to Mitsui’s 2016 announcement, which also confirmed Mitsui’s equity participation and business alliance with FE....

## Why this matters for Forward

- The strongest repeated themes in the source corpus are battery enclosure architecture, material-card maturity, regulation pressure, validation traceability, and AI help around repetitive CAE work.
- That means a good demo is not generic chat-over-PDF. It should feel like an engineering knowledge system with source-linked evidence, reusable workflow patterns, and room for tables, figures, symbols, and standards language.

## Recommended next layer

1. Add layout-aware PDF ingestion so tables, callouts, captions, and image regions become first-class objects instead of flat text.
2. Reuse the DraftLint OCR/runtime split for scanned drawings or image-heavy documents.
3. Store chunks, figures, tables, and citations under one document-object schema so Rapid Craft can answer questions and also assemble wiki pages or reports.
4. Add embeddings and hybrid retrieval only after the object model is stable enough to preserve engineering traceability.
