# RapidDraft Website: Final Build Spec

The definitive version. Same structure and copy you approved, now with every line tagged at its exact level so a developer can build it without guessing. No em-dashes. Headings are consistent throughout.

## Heading and element system

Use these nine elements, nothing else.

- **Kicker / Eyebrow** (hero only). On Home it is a one-line positioning kicker. On inner pages it is the page name in 1 to 3 words. Renders uppercase and letter-spaced. No period.
- **H1** (one per page, hero only). The page headline, up to about 8 words. No period.
- **Subhead** (pairs with every H1). 1 to 2 sentences, up to about 30 words.
- **H2** (each major section). Up to about 8 words. No period.
- **H3** (each repeating item: capabilities, cards, pillars, FAQ questions, workflow titles, people, roles). 1 to 5 words, or the question itself for FAQs. No period, except FAQ questions, which end with "?".
- **Body**. 1 to 3 sentences, full punctuation.
- **Meta row** (tags, badges, KPIs, field lists, contact). Items separated by middots. No periods.
- **Button**. Verb first, 2 to 4 words.
- **Figure**. A diagram or image. Always paired with a one-line `Caption` (renders below it) and `Alt` text (for accessibility and SEO). Diagrams are not readable by search engines, so the caption carries the meaning. One figure per page.

Rules that keep it consistent:

- Exactly one H1 per page. Exactly one hero kicker/eyebrow per page. Ordinary sections get no eyebrow.
- A named utility block (the ROI calculator) may carry a short eyebrow because its H2 is a benefit line. The FAQ uses its H2 alone, no eyebrow.
- Heading level follows layout role. A full-width section is H2. A card in a grid is H3. Never skip a level.
- All headings are sentence case with no trailing period. Proper nouns and the named product modules (Drawing Memory, Review Automation, Model-Linked Collaboration, Bulk Review) keep their casing.
- One display heading breaks the length rule on purpose: the Home problem statement.
- Buttons are sentence case, verb first ("Book a demo", "Explore the platform"). Numbers stay in one style ("30%", "10x", "1 to 2 business days").

## Structure

- Public pages: Home, Platform, Security and sovereignty, Use cases, Company, Book a demo.
- Navigation: Platform · Use cases · Security · Company · **[ Book a demo ]**. Logo links Home. No "Home" or "ROI" item.
- ROI is a Home section, an "Estimate your ROI" button, and a footer link.
- Unlisted routes: `/theegarten-pactec` and `/pilots/:slug` for prospects, `/deal-room` for investors. Retire `/cad-concept`.

## Diagrams

Three diagrams, one per page, each pinned to a section below with its caption and alt text.

- Hub-and-spoke, inputs to outputs. Goes on Home, in the Solution section.
- Engineering-stack layer, inputs above and outputs below. Goes on Platform, in the AI review layer section.
- On-prem agentic architecture. Goes on Security and sovereignty, directly under the hero, as the page centerpiece.

---

## Page 1: Home

`Kicker (hero)` Agentic drawing release and design review for engineering teams
`H1` Accelerate engineering decisions and drawing release
`Subhead` RapidDraft catches design and drawing issues earlier and automates repetitive review checks. The decisions behind each drawing stay attached to the model, instead of scattering across emails, PDFs, and meetings.
`Button` Book a demo
`Button` See how it works
`Meta (badges)` On-prem AI · Local/EU Cloud · GDPR-Compliant · Human-in-the-loop
`Note` Hero visual is the interactive capability rail (Drawing Memory, Review Automation, Model-Linked Collaboration, Bulk Review), each with its short video.

`H2` Reduce repeated work before it delays release
`Body` RapidDraft brings faster feedback, fewer iterations, and less manual checking to the workflows where drawings, reviews, and release readiness still slow teams down.
`Meta (KPIs)` 30% Fewer change cycles · 10x Faster feedback · 50% Less checking time
`Meta (trust)` Built by engineers from aerospace, automotive, and process industries · Advised by leaders at Siemens, Volocopter, and Amazon · Backed by UnternehmerTUM and XPLORE

`H2` Design intent lives in CAD. Requirements live in drawings. The review logic lives in people's heads.  _(the one sanctioned display heading)_
`Body` Collaboration is inefficient, drawing review is error-prone, and quality inspection is slow and tedious. Good designs stall in documentation and review.
`H3` Drawings restart on every revision
`Body` Documentation work gets rebuilt whenever geometry changes, even when the underlying intent stays the same.
`H3` Manufacturing constraints live outside CAD
`Body` DFM notes, supplier feedback, and release caveats stay buried in PDFs, emails, and follow-up threads.
`H3` Review decisions lose their model context
`Body` Comments and approvals are hard to trace back to the exact change in geometry that triggered them.
`H3` Lessons learned rarely reach the next cycle
`Body` Teams keep rediscovering the same issues because past decisions are not preserved with the model.

`H2` Turn fragmented review work into a connected release workflow
`Body` RapidDraft is human-in-the-loop AI, grounded in your rules. Drafting intent, review decisions, and manufacturing feedback stay attached to the design, with the 3D model as the single source of truth and engineers in control of every release. Teams redo less work, close reviews faster, and keep the knowledge that usually leaves when a project ends or a colleague moves on.
`Figure` Hub-and-spoke diagram. RapidDraft at the center, engineering inputs on the left, release-ready outputs on the right.
`Caption` RapidDraft sits between your engineering inputs and release-ready outputs, with human-in-the-loop review at the center.
`Alt` Engineering inputs (SOLIDWORKS, EPLAN, 2D drawings, CIM Database, release package, supplier QA) feed into RapidDraft at the center, which produces DFM findings, inspection readiness, BOM consistency, release gates, and an audit trail.

`H2` One review layer, four core capabilities
`H3` Generate drawings and QA documents
`Body` Produce manufacturing-ready drawings, BOMs, and first-article and inspection reports straight from your CAD geometry.
`H3` Automate review and DFM checks
`Body` Check completeness, manufacturability, and standards (ISO and ASME) against your own rules, and catch issues before release.
`H3` Collaborate around the model
`Body` Bring design, QA, and suppliers into one shared CAD review space, with every comment attached to the geometry it refers to.
`H3` Preserve review knowledge
`Body` Keep decisions, findings, and drafting intent attached to the model so they carry across revisions instead of getting lost.
`Button` Explore the platform

`H2` Works with your stack, keeps your data in-house
`Body` RapidDraft brings AI-assisted review into your existing CAD, drawing, BOM, and PLM workflows. Your tools, approval gates, and sensitive engineering data stay under your control.
`Meta (pillars)` Data sovereignty · IP protection · Employee trust · Data quality
`Meta (badges)` On-prem AI · Local/EU Cloud · GDPR-Compliant · SSO · Human approval
`Button` Read about security

`Eyebrow (utility)` ROI calculator
`H2` Estimate the annual value of faster engineering review
`Body` Adjust the core assumptions to see how reduced review effort and fewer late issues turn into annual value.
`Meta (inputs)` Number of engineers · Hours spent per week · Average hourly rate
`Meta (outputs)` Annual time-saving value · Annual avoided-issue value · Total value
`Body` Conservative by design. Time saved is the higher of 3 hours per engineer per week or 30% of current effort. Each engineer avoids at least one issue per year, at an average avoided cost of about €5,000. The model assumes 42 working weeks per year.

`H2` Bring speed and traceability to drawing release
`Body` See how RapidDraft helps your team reduce review effort, generate manufacturing-ready drawings faster, and keep decision context across revisions.
`Button` Book a demo
`Button` See use cases

---

## Page 2: Platform

`Eyebrow (hero)` Platform
`H1` One agentic review layer for your entire drawing-release process
`Subhead` RapidDraft sits on top of your CAD and PLM and keeps drawing release, design review, and manufacturing feedback attached to the model. It is human-in-the-loop and grounded in your rules.
`Button` Book a demo
`Button` See it in your workflow

`H2` The model is the single source of truth, and so is the review
`Body` Drawings, reviews, and feedback usually scatter across email, PDFs, and spreadsheets, disconnected from the CAD they describe. RapidDraft keeps them attached to the model and governed by your rules, so every release is backed by a complete, traceable review.

`H2` How it works
`H3` Connect
`Body` Plug RapidDraft into your CAD and PLM: Siemens NX, CATIA, SolidWorks, EPLAN, and your PDM or CIM Database. Your data stays in your governed systems.
`H3` Check
`Body` RapidDraft generates drawings and QA documents, then reviews them against your engineering, manufacturing, and company-specific rules. It flags missing dimensions, tolerance and GD&T issues, standards violations, and manufacturability risks.
`H3` Release
`Body` Engineers review the findings, decide, and release through a clear gate. Every decision feeds an audit trail (VDA, EMPB) and reusable company knowledge.

`H2` Inside the platform
`Body` The modules behind RapidDraft, and how each one works.
`H3` Drawing Memory
`Body` Generate manufacturing-ready drawings and inspection-ready documents, including BOMs and first-article and inspection reports, from current geometry, and preserve drafting intent as designs evolve.
`List`
  - Preserves dimensions, notes, and checks across revisions.
  - Keeps redraw effort from starting at zero after each change.
  - Turns review effort into reusable company knowledge.
`H3` Review Automation
`Body` Apply your engineering, manufacturing, and company-specific logic to surface manufacturability and completeness issues early, while engineers keep control of the final decisions.
`List`
  - Flags repeated DFM risks before formal review starts.
  - Catches missing, inconsistent, or review-critical information before release.
  - Standardizes technical drawings against ISO and ASME.
`H3` Model-Linked Collaboration
`Body` Give design, QA, and suppliers one shared CAD review environment built around the model.
`List`
  - Feedback stays attached to geometry instead of scattered screenshots.
  - Every reviewer works from the same model state and revision.
  - Lessons learned stay connected to the part for future iterations.
`H3` Bulk Review
`Body` Run repeated checks across drawings, revisions, and part families without reopening work one file at a time.
`List`
  - Applies the same review logic across large drawing sets and revision queues.
  - Surfaces common failure patterns and high-priority outliers fast.
  - Lets engineers triage exceptions instead of repeating the same checks.

`H2` Works inside the stack you already run
`Body` RapidDraft fits natively with Siemens NX, CATIA, SolidWorks, and EPLAN, and connects to your PDM or PLM, for example CIM Database. It reads your CAD models, drawings, and BOMs, and works with your release process rather than replacing it.
`Meta (tags)` Siemens NX · CATIA · SolidWorks · EPLAN · PLM / PDM (CIM Database) · Drawings · BOMs

`H2` The AI review layer
`Body` Analyze drawings, apply rules, surface issues, capture decisions. RapidDraft automates the repetitive checking and surfaces what needs attention. Every approval stays with your engineers, and it runs inside your environment.
`Button` How we keep your data secure
`Figure` Engineering-stack diagram. Inputs across the top, the RapidDraft review layer in the middle, outputs across the bottom.
`Caption` One review layer across your stack: drawings, PDM/PLM, and supplier QA in; DFM findings, inspection documents, BOMs, release gates, and an audit trail out.
`Alt` The engineering stack (NX/CATIA/SW, 2D drawings, PDM/PLM, release package, supplier QA) sits above the RapidDraft review layer; outputs (DFM findings, first-article inspection report, BOM, release gate, audit trail) sit below.
`Note` Artwork fix: the center bar currently reads "human-in-the-loop-AI, grounded with rules." Change it to "human-in-the-loop AI, grounded in your rules" to drop the stray hyphen and match the site wording.

`H2` Frequently asked questions
`H3` Does it work with my CAD?
`Body` Yes. Siemens NX, CATIA, SolidWorks, and EPLAN today, with more coming. You do not change tools or workflow.
`H3` Does it replace my engineers?
`Body` No. It highlights issues, suggests fixes, and automates repetitive work. Final approval always stays with the engineer.
`H3` Can it run on-prem?
`Body` Yes. It runs locally on your infrastructure, with local or EU-cloud options.
`H3` How accurate is it?
`Body` It is grounded in engineering standards and your company rules, and it learns from your feedback on your specific parts over time.
`H3` What happens to my data?
`Body` It stays in your environment. Models run locally, and training uses only anonymized or approved data.
`Button` Book a demo

---

## Page 3: Security and sovereignty  _(dark band)_

`Eyebrow (hero)` Security and sovereignty
`H1` Enterprise AI that never leaves your control
`Subhead` RapidDraft is built for teams who cannot send drawings to a third-party cloud. Models run on your infrastructure, training stays governed, and your engineers keep the final say.
`Meta (badges)` On-prem AI · SSO · Local / EU Cloud · GDPR-Compliant
`Button` Request an NDA
`Button` Book a demo
`Figure` On-prem agentic architecture, the page centerpiece. Your data and on-prem hardware on the left, the RapidDraft agent workspace in the center, outputs and engineer approval on the right.
`Caption` RapidDraft runs on your hardware, on your network. Your data stays on-site, the agent orchestrates the work, and an engineer approves before anything is written back to your PLM.
`Alt` On-prem hardware (NVIDIA DGX Spark) and your release package on the left, behind a security boundary; the RapidDraft agent workspace orchestrating BOM, DFM, model/canvas, knowledge, and artifacts tools in the center; evidence-linked results, engineer approval, and writeback to the CIM Database (PLM) on the right.
`Note` Artwork fix: for this public page, relabel the top-left card from "Theegarten-Pactec data" to "Your release package." Keep the named version on the unlisted /theegarten-pactec page.

`H2` Why it matters
`Body` In automotive and precision manufacturing, your drawings and BOMs are some of your most sensitive IP. RapidDraft brings AI into that work without moving the data out of approved environments or out of your engineers' hands.

`H2` The four pillars
`H3` Data sovereignty
`Body` AI models run locally, on-prem, so your designs never leave your environment.
`H3` IP protection
`Body` Training uses only anonymized or approved data, and no third-party model ever sees your IP.
`H3` Employee trust
`Body` Workflows are transparent, traceable, and reliable, and final approval always stays with your engineers.
`H3` Data quality
`Body` One clean source across part data, drawings, and BOMs.

`H2` Deployment and data handling
`Body` Run it on-prem for full sovereignty, or in a private or EU-hosted cloud if you would rather we operate it, scaling to your release volume. Either way you get scoped access, SSO, role-based permissions, encryption, and a complete audit trail, with no uncontrolled data movement.

`H2` AI governance
`Body` Models run locally and learn only from anonymized or approved data. The agentic workflow is transparent and traceable, so you can see why a finding was raised, and engineers, not the AI, make every release decision.

`H2` Standards and audit
`Body` Outputs follow your drawing standards, ISO and ASME. Release gates, first-article inspection (FAIR and EMPB), BOM consistency, and a full audit trail line up with VDA and your quality processes.

`H2` Compliance
`Body` RapidDraft is GDPR-compliant by design, with EU data residency, a DPA available on request, and subprocessor transparency. `[[Certifications: SOC 2 / ISO 27001, state status or "in progress"]]`
`Button` Request an NDA
`Button` Book a demo

---

## Page 4: Use cases

`Eyebrow (hero)` Use cases
`H1` Where RapidDraft fits in real release workflows
`Subhead` From new product introduction to supplier drawing packages, RapidDraft is strongest where drawings, reviews, and manufacturability checks still create expensive loops.
`Meta (overview)` Drawings stay aligned with evolving CAD geometry · Manufacturability review starts before release friction compounds · Supplier-facing documentation leaves with fewer gaps
`Button` Book a demo
`Button` See workflow examples

`H2` Built for drawing-heavy release work, not abstract CAD demos
`Body` RapidDraft adds structure where review logic, manufacturability questions, and drawing updates are still handled manually across release-critical workflows.

`H3` New product development  _(visual index 01)_
`Body` When 3D geometry moves faster than documentation, drawing release becomes the hidden bottleneck. RapidDraft keeps design, review, and drawing updates moving in the same direction.
`List`
  - Generate drawing updates continuously as geometry evolves.
  - Screen early manufacturability questions before formal release reviews.
  - Give program leads a clearer view of what is ready and what still needs attention.
`Meta (tags)` Drawing-led release · Early DFM review · Design intent preserved

`H3` Battery packs and structural components  _(visual index 02)_
`Body` High-complexity parts carry tighter tolerances, more manufacturing sensitivity, and less room for avoidable review drift.
`List`
  - Highlight manufacturing-sensitive features while the model is still active.
  - Keep GD&T, geometry checks, and drawing completeness in one review flow.
  - Reduce rework on components where late surprises are expensive.
`Meta (tags)` High-complexity parts · Tolerance-heavy review · Release discipline

`H3` Supplier drawing packages  _(visual index 03)_
`Body` Supplier packages are strongest when drawings, release notes, QA documents, and review decisions leave together. RapidDraft helps teams send cleaner packages with fewer clarification loops.
`List`
  - Generate inspection-ready documents (BOM, first-article) and check for missing release information before the package leaves engineering.
  - Standardize drawing outputs and review expectations across suppliers.
  - Reduce back-and-forth on manufacturability, quality, and missing detail.
`Meta (tags)` Supplier handoff · Inspection-ready documents · Fewer feedback loops

`H3` Change-driven updates (ECR / ECO)  _(visual index 04)_
`Body` Geometry changes often trigger drawing churn long after the design decision is made.
`List`
  - See which views, dimensions, and notes need attention after a change.
  - Avoid restarting drawing work from zero after each revision.
  - Keep the release path tighter when engineering change is already in motion.
`Meta (tags)` Revision-driven workflows · Update validation · Faster sign-off

`H3` Legacy drawing cleanup  _(visual index 05)_
`Body` Old archives carry outdated tolerances, missing standards context, and inconsistent release practices.
`List`
  - Surface missing GD&T, outdated notes, and standards inconsistencies.
  - Prioritize cleanup where release or manufacturing confusion is highest.
  - Support migration toward cleaner drawing standards across older programs.
`Meta (tags)` Archive modernization · Standards cleanup · Manufacturing clarity

`H2` Bring a real workflow into the conversation
`Body` If one of these looks familiar, we can start there and show where RapidDraft fits into your current review and drawing-release path.
`Button` Book a demo
`Button` Platform

---

## Page 5: Company

`Eyebrow (hero)` Company
`H1` Built by engineers who have felt the release bottleneck firsthand
`Subhead` RapidDraft exists because technical drawings and design reviews still slow down real hardware programs. We are building the software we wished existed: tooling that reduces repeated effort, tightens review cycles, and makes release workflows easier to govern.

`H2` Our vision
`Body` The 3D model should be the single source of truth for the entire release, including drawings, reviews, inspection documents, and decisions. We are building toward engineering work where nothing is rebuilt from zero on the next revision, and no hard-won decision is ever lost.

`H2` Our mission
`Body` To turn engineering release workflows from manual bottlenecks into structured, reliable systems. We reduce repeated drafting and review effort, improve consistency, and help teams move from design intent to release-ready output with more speed and control.

`H2` Founding team
`H3` Adeel Yawar Jamil
`Body` Founder and Mechanical Engineering Lead. 15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries. RapidDraft grew from his repeated experience of good designs slowing down in drawing and review chaos.
`H3` Dr. Hasan Raza
`Body` Founder and Operations Lead. 15+ years scaling engineering and manufacturing operations globally, with the operating discipline to make RapidDraft useful inside real industrial release workflows.
`H3` Sreekar Reddy Sajjala
`Body` Founder and AI Lead. Builds production AI systems and engineering software across FEM, CFD, topology optimization, and data-driven tooling, connecting engineering-grade reasoning with reliable software delivery.

`H2` Advisory board
`H3` Shehjar Kaul
`Body` Machine learning and business expert at Siemens.
`H3` Julio Saucedo
`Body` Battery design and manufacturing lead at Volocopter.
`H3` Muneeb Ahmed
`Body` Program manager at Amazon.

`H2` Backed by
`Meta (logos)` UnternehmerTUM · XPLORE

`H2` Open roles
`Body` Each role is built around product ownership and technical depth. You will work across disciplines and help shape how RapidDraft evolves.
`H3` Full stack web developer
`Body` Build and scale the platform that turns complex CAD intelligence into fast, intuitive engineering workflows.
`Meta (tags)` Node.js/Python · React · CAD API experience · Cloud (AWS/GCP) · Git
`H3` AI and ML expert
`Body` Build systems that understand 3D geometry and drawings to automate DFM checks, feature recognition, and engineering decisions.
`Meta (tags)` Python · PyTorch · OpenCascade · Graph Algorithms · 3D Vision
`H3` CAD automation engineer
`Body` Develop the core CAD automation that extracts geometry, relationships, and engineering intent from NX, SolidWorks, and CATIA models.
`Meta (tags)` GD&T Logic · NX/SolidWorks · Geometry Processing
`Body` Send a short note about what you have built. We care more about judgment, execution quality, and technical depth than a polished application package.
`Button` See open roles

`H2` Contact
`Meta (details)` info@rapiddraft.ai · +49 176 8444 3362 · Munich, Germany
`Button` Book a demo
`Button` Contact us

---

## Page 6: Book a demo

`Eyebrow (hero)` Book a demo
`H1` Bring the workflow that is slowing your team down the most
`Subhead` The best demo starts with a real release workflow, not a generic product tour. Tell us where drawings, reviews, or manufacturability checks create the most friction, and we will focus the conversation there.
`Meta (in the call)` Walk through the highest-effort workflow · See where RapidDraft fits your CAD and release environment · Decide whether it is a strong candidate for a narrow pilot
`Body` We typically respond within 1 to 2 business days.

`H2` Share the workflow you want to walk through
`Body` A focused request helps us make the demo specific and useful.
`Meta (fields)` Name (required) · Work Email (required) · Company · Role · CAD tools · Message
`Button` Book a demo

`H2` How a pilot works
`Body` Start with one focused workflow: a single product family, one drawing-release process, or one recurring review bottleneck.
`List`
  - Measure review effort, repeated issues, and time to release.
  - Expand team by team once the workflow proves itself.

`H2` Best fit
`List`
  - Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.
  - Supplier-facing programs where quality, certification, or manufacturing teams still depend on 2D documentation.
  - Teams that want a measurable reduction in redraw and review effort before broader rollout.

---

## Footer

`Body` RapidDraft helps engineering teams accelerate design reviews, generate manufacturing-ready drawings, and retain decision logic across CAD workflows.
`Meta (backed by)` UnternehmerTUM · XPLORE
`Meta (product)` Platform · Use cases · Security · ROI calculator · Book a demo
`Meta (company)` Vision and mission · Team · Open roles
`Meta (contact)` info@rapiddraft.ai · +49 176 8444 3362
`Meta (legal and social)` Impressum · Privacy · Request an NDA · LinkedIn
`Body` © RapidDraft. Made with care in Munich.

---

## Quick reference: levels by page

- Home: 1 kicker, 1 H1, 7 H2 (credibility, problem, solution, capabilities, security, ROI, close), H3 on the four problem cards and four capabilities, plus the ROI utility eyebrow.
- Platform: 1 eyebrow, 1 H1, 6 H2 (idea, how it works, inside the platform, integrations, AI review layer, FAQ), H3 on three steps, four modules, and each FAQ question.
- Security: 1 eyebrow, 1 H1, 6 H2 (why it matters, four pillars, deployment and data handling, AI governance, standards and audit, compliance), H3 on the four pillars.
- Use cases: 1 eyebrow, 1 H1, 2 H2 (the lead and the close), H3 on the five workflows.
- Company: 1 eyebrow, 1 H1, 7 H2 (vision, mission, founding team, advisory board, backed by, open roles, contact), H3 on three founders, three advisors, three roles.
- Book a demo: 1 eyebrow, 1 H1, 3 H2 (request, pilot, best fit), no H3.
