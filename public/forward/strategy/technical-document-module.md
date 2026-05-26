# Technical Document Module

> This page translates the Forward research into a demo-ready Rapid Craft module for the meeting on **Thursday, May 14, 2026**.

## The right story for Forward

Forward does not need a generic "chat with documents" pitch.

The pattern across the current research is much more specific:

- battery-enclosure programs generate repeated engineering knowledge,
- material-card and validation evidence are hard to track and reuse,
- regulations like `GB 38031-2025` increase documentation burden,
- repetitive CAE glue work is a real cost center,
- old project files contain reusable know-how but are hard to search.

So the demo should feel like an **engineering knowledge system** with source traceability, not a
consumer-style PDF chatbot.

## What to demo

The cleanest demo story is:

1. Upload a mixed set of sources: engineering PDF, PowerPoint, design note, and validation report.
2. Ingest them into a **technical wiki** that preserves source, page, section, and document type.
3. Ask focused engineering questions such as:
   `Where do we discuss material-card calibration?`
   `Which pages mention bottom impact, rocker integration, or thermal propagation?`
   `Show me the regulation-related requirements and the tests they affect.`
4. Show generated wiki pages or topic pages such as:
   `Material cards`
   `Battery enclosure validation`
   `GB 38031 readiness`
   `Crash and load-path questions`
5. Show that the same ingestion layer can later feed workflow automation:
   report generation, requirements traceability, test-correlation notes, and CAE setup reuse.

## Recommended product shape

The fastest believable Rapid Craft architecture is four layers.

### 1. Intake

Accept `pdf`, `pptx`, `docx`, `md`, `txt`, and exported images.

Store one `document` record with:

- original filename
- source type
- checksum
- project / module
- upload time
- version

### 2. Page intelligence

Convert each document into `document objects`, not just one flat text blob.

The object types should be:

- `section`
- `page`
- `table`
- `figure`
- `caption`
- `symbol-region`
- `slide`

This matters because Forward-style documents are full of tables, pictures, load-case diagrams,
symbols, and mixed text density.

For scanned or drawing-heavy inputs, reuse the existing DraftLint posture:

- local document preprocessing
- OCR runtime selection
- optional layout detection
- optional symbol detection

The draft note at
`C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\01_tracks\cad-intelligence\handover\260411_draftlint-repo-assessment-and-doc-map.md`
already points to OCR/runtime-split pieces worth extracting.

### 3. Knowledge normalization

Normalize extracted content into source-traceable `chunks` and `facts`.

For the demo, the minimum useful record is:

- chunk text
- source file
- page or line range
- tags
- related figures/tables
- confidence / extraction mode

Then add lightweight derived structure:

- topic tags like `material-cards`, `regulation`, `validation`, `crash`, `CFD`, `meshing`
- glossary terms
- entity links
- suggested wiki pages

### 4. Retrieval and synthesis

Expose the normalized objects through:

1. technical wiki pages,
2. source-linked search,
3. promptable Q&A with citations,
4. downstream workflow helpers such as report generation or checklist assembly.

## What to build now versus later

For Thursday, keep the demo scope tight.

### Build now

- PDF plus Markdown ingestion
- chunking with page/section traceability
- source-linked keyword or hybrid search
- one generated technical wiki page per topic
- explicit flags for `needs OCR`, `table-like`, or `layout review`

### Fake honestly

- deep table understanding
- figure understanding
- symbol semantics
- PPTX fidelity
- embeddings quality

If asked, say these are the next layer once the document-object model is in place.

## Why this fits Rapid Craft

Rapid Craft already has nearby ingredients:

1. a collaboration shell with comments, revisions, and shareable context,
2. CAD and review workflows built around traceable evidence,
3. prior OCR and document-processing experiments from DraftLint,
4. planning notes that already mention eventual semantic search.

That means the quickest path is not a separate product. It is a new module that reuses the same
ideas:

- uploads and versions from collaboration,
- evidence and traceability from CAD intelligence,
- OCR/layout parts from DraftLint,
- wiki and search as the first pilot-facing surface.

## Forward-specific use cases to mention

The most credible first use cases are:

1. Technical wiki for battery-enclosure research, standards, and validation methods.
2. Search across old reports for `material card`, `bottom impact`, `thermal propagation`,
   `sealing`, or `venting`.
3. Auto-assemble a regulation evidence dossier for `GB 38031-2025` or `R100`.
4. Capture reusable notes for crash pre-processing, contact-definition strategy, and meshing setup.
5. Link test data, design assumptions, and CAE reports into one traceable view.

## In this folder

The lightweight prototype for this idea lives in:

- `prototype/forward_ingest_demo.py`
- `prototype/output/document_manifest.json`
- `prototype/output/chunks.json`
- `prototype/output/query_results.json`
- [Technical ingest demo](technical-ingest-demo.md)
