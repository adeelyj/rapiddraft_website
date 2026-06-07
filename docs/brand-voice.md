# RapidDraft brand voice & messaging (the consistency yardstick)

Source: one-pager v6 (grounded facts) + competitor/customer language research. Every page
must read as if written by one person against this guide. Concise, engaging, specific to our
buyers/competitors, with a storyline. EN + DE.

## Positioning statement
RapidDraft is agentic drawing release and design review for hardware engineering teams — a
traceable, human-in-the-loop second set of eyes, grounded in your own rules and running
on-prem, that catches drawing and design issues before release, carries them through to an
auditable release gate, and preserves the tribal knowledge your reviews depend on.

## Who we write for (mirror their words)
- **Design / release engineer** — "getting drawings out the door," cuts a rev, owns the title block and sign-off.
- **Drawing checker** — the "second set of eyes" (EU **Vier-Augen-Prinzip**); we assist this role, never replace it.
- **Quality engineer** — owns FAI/**FAIR**, ballooning, PPAP/**EMPB** per **VDA Band 2**; "any deviation = rejection."
- **Engineering manager / release-gate owner** — feels the serial multi-signature bottleneck and the Konstruktionsfreigabe deadline.
- **DFM / supplier-facing engineer** — fields "why is this tolerance here?", handles "thrown over the wall" handoffs.
- **IT / data governance** — the "our company won't let us paste anything into AI" (Samsung-ban) reflex; gates on-prem.

**Their objections (answer these, don't dodge):** "it's a generic LLM that doesn't know our rules"; "it'll be confidently wrong / just rearranges boxes and arrows"; "I'll revalidate everything anyway, so it's another draft to check"; "it can't explain itself to an auditor"; "our IP can't leave the building"; "it's one more step in a serial chain"; "will it replace my sign-off?"

**Their decision criteria:** traceability / show-your-work (rated as high as accuracy); must remove work, not add a re-verification tax; human-in-the-loop; grounded in *their* rules; caught-before-it-escapes value in *their* units (hours of validation, weeks of rework, 24h on a FAIR); data sovereignty stated plainly and early.

## Competitive whitespace — what we own, what we avoid
- vs the **speed crowd** (DraftAid, "2D drawings in 4 minutes", CadXStudio): they race a number for one artifact and stop at "production-ready." We own **release + review + traceability**, not "draw faster." Don't lead with a speed number.
- vs the **checker crowd** (NexCAD): they shout "Stop Costly Errors" and stop at generic standards-checking. We ground the check in **your company's rules** and carry it to the **release gate + audit trail (VDA/EMPB)**. No fear-imperative openers.
- vs the **copilot/agent crowd** (MecAgent, bananaz, CoLab, Leo): they anthropomorphize ("digital teammate", "24/7", "truly understands ME"). We show depth through **traceability**, not adjectives. Don't call it a copilot/teammate.
- vs the **AI-first platforms** (PhysicsX, Synera, Quaisr, Bench): they assert an epoch ("AI era", "AI-native", "operating system for engineering", "connect everything, engineer anything"). We do the opposite: **plain, verb-led, artifact-specific**. No era-naming, no OS/backbone grandeur.

## Voice attributes (with do / avoid)
1. **Engineer-credible** — use shop-floor/release vocabulary as evidence of belonging; dry, matter-of-fact.
   - Do: "Catch missing dimensions, tolerance conflicts, and datum-scheme gaps before you cut the rev — and before the EMPB."
   - Avoid: "Revolutionize your workflow and unlock unprecedented productivity."
2. **Specific over hype** — lead with the job and the named artifact; concrete nouns over adjectives.
   - Do: "Flags what would fail a First Article Inspection, line by line."
   - Avoid: "A powerful, intelligent, end-to-end platform that seamlessly transforms engineering."
3. **Calm and precise** — state the cost of an escaped error plainly; let the economics persuade.
   - Do: "Catch it in review and you lose a few hours. Catch it after release and it's rework, a rejected EMPB, or scrap."
   - Avoid: "STOP costly errors before they DESTROY your shop floor!"
4. **Traceable / show-your-work** — every finding points back to its source; promise references, not verdicts.
   - Do: "Every finding links back to the rule, standard, or drawing note it came from."
   - Avoid: "Our AI just knows what's wrong. Trust the model."
5. **Human-in-the-loop** — the tireless first pass; the engineer keeps the sign-off; supports the four-eyes principle.
   - Do: "RapidDraft does the first pass; the engineer keeps the sign-off."
   - Avoid: "An autonomous AI engineer that handles your reviews 24/7 so you don't have to."
6. **Sovereignty-first** — say on-prem / no-training-on-your-IP / SSO / GDPR up front, not on a buried page.
   - Do: "Models run locally, on your infrastructure. Your IP never leaves the building, and we don't train on it."
   - Avoid: "Military-grade, enterprise-grade security you can trust (see compliance page)."

## Vocabulary
**Use:** drawing release · design review · check the drawing / second set of eyes · catch before release / before the EMPB · manufacturing drawings · tolerance stack-up · GD&T / datums / feature control frame · DFM / manufacturability · First Article Inspection / FAIR · BOM · EMPB / VDA Band 2 / PPAP · Vier-Augen-Prinzip · traceability / Rückverfolgbarkeit · grounded in your rules · human-in-the-loop · release gate · audit trail · decision context · tribal knowledge · on-prem / runs locally · data sovereignty · no training on your IP · SSO / GDPR / Local/EU cloud · cut a rev / ECN · supplier / OEM CAD collaboration.

**Avoid:** revolutionary · AI-first / AI-native · the AI era · agentic layer / autonomous engineer / digital teammate · copilot (as the whole positioning) · 10x / 50% / weeks-to-minutes / any number not in the one-pager · seamless / end-to-end / enterprise-grade / plug-and-play · next-generation / game-changer · operating system for engineering / digital backbone · connect everything, engineer anything · world's first / the only / truly understands · fully automated / hands-off · supercharge / unlock / transform · streamline / leverage · "Stop Costly Errors" shouting · "production-ready" as a hero claim · "done in 4 minutes" / fastest · em-dashes (use commas/periods).

## Storyline (one narrative across the site)
1. **Home** — the job, named plainly: agentic drawing release and design review. Catch issues earlier, automate the repetitive checks, keep the decision context — across CAD, drawings, and release. Buyer's words, no era-naming, no speed-race.
2. **The problem** — design intent lives in CAD, manufacturing requirements live in drawings, review logic is tribal knowledge; the release chain is a serial multi-signature bottleneck. Catch it in review = hours; catch it after release = rework / rejected EMPB / scrap.
3. **Platform** — grounded review, not a black box: applies engineering + manufacturing + *your* rules and shows its work; every finding links to its source. The engine: release package, PDM/PLM, 2D drawings, NX/CATIA/SolidWorks, supplier QA → human-in-the-loop AI grounded in rules → audit trail, BOM, FAIR, DFM findings, release gate. Human keeps the sign-off.
4. **Security** — sovereignty up front: models run locally, IP never leaves the building, no training on it; SSO, GDPR, Local/EU cloud. The plain answer to the Samsung-ban reflex.
5. **Use cases** — concrete and recognizable: technical drawing checks; quality inspection documents (BOM, FAIR); DFM reviews that pre-empt "why is this tolerance here?"; supplier/OEM collaboration so design isn't thrown over the wall. Supports the Vier-Augen-Prinzip; respects EMPB/VDA rigor.
6. **Proof** — one honest number in their units: ~30% ROI from better design review workflows. Value framed as caught-before-it-escapes and tribal knowledge captured before the person who set it up leaves. No invented 10x/50%.
7. **Company** — built for this buyer, on their terms: we speak the release engineer's, checker's, and quality engineer's language; skepticism welcome, which is why everything is traceable, on-prem, and human-in-the-loop.
8. **Book a demo** — start narrow: one product family, one drawing-release process, one recurring bottleneck. Bring a drawing that's hard to release; we show the findings traced back to your rules. Low-risk, scoped, on your infrastructure.

## Grounded facts (the ONLY claims allowed)
From the one-pager v6 — do not invent beyond this:
- Positioning: "Agentic drawing release and design review for engineering teams."
- Engine I/O: in = Release Package, PDM/PLM, 2D Drawings, NX/CATIA/SolidWorks, Supplier QA; out = Audit trail (VDA/EMPB), BOM, FAIR, DFM Findings, Release Gate.
- 4 capabilities: analyze manufacturing drawings; accelerate design reviews; remove team silos; preserve company knowledge.
- 4 use cases: technical drawing checks; quality inspection documents (BOM, FAIR); DFM reviews; supplier/OEM CAD collaboration.
- 4 sovereignty pillars: data sovereignty (local/on-prem); IP protection (anonymized/approved data only); employee trust (transparent, traceable, reliable); data quality (remove inconsistencies across part data, drawings, BOMs).
- Trust posture: on-prem, SSO, Local/EU cloud, GDPR-compliant. SOC 2 / ISO 27001 = visible TODO until confirmed.
- **Only metric: ~30% ROI from improving design review workflows.** No "10x faster feedback", no "50% less checking time", no other numbers.
- Pilot: one product family / one drawing-release process / one recurring review bottleneck.
