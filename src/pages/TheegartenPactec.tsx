import { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

type PageLang = 'en' | 'de';

const PAGE_CONTENT = {
    en: {
        metaTitle: 'RapidDraft for Theegarten-Pactec | AI-assisted release checks',
        metaDescription:
            'A tailored RapidDraft follow-up for Theegarten-Pactec: AI-assisted drawing, BOM, and CIM Database release checks with source-linked findings, engineer approval, and controlled deployment.',
        hero: {
            kicker: 'For Theegarten-Pactec Engineering',
            title: 'Catch drawing and BOM errors before release',
            body:
                'RapidDraft reviews a release package — drawing, BOM, STEP model, and EPLAN context — and returns source-linked findings your engineers approve before the change reaches CIM Database.',
            cta: 'Contact Us',
            chips: ['Controlled boundary', 'On-prem option', 'No silent training', 'Engineer approval'],
        },
        language: {
            label: 'Page language',
            en: 'EN',
            de: 'DE',
        },
        security: {
            kicker: 'Data Security',
            title: 'Your design data stays inside the agreed boundary',
            body:
                'For the pilot, RapidDraft can run inside a Theegarten-approved local or private environment. Drawings, BOMs, prompts, embeddings, findings, and reports stay within the agreed boundary and are not used for silent model training.',
        },
        architecture: {
            kicker: 'Architecture Follow-Up',
            title: 'How RapidDraft deploys inside your environment',
            body:
                'We treat architecture as a set of deployment decisions Theegarten makes with us: where data is processed, how model calls are mediated, which systems are connected, and where engineers keep release control.',
            principles: [
                {
                    title: 'Boundary first',
                    body:
                        'Drawings, BOMs, prompts, embeddings, generated findings, and review reports remain inside the agreed Theegarten-approved boundary.',
                },
                {
                    title: 'Human approval remains central',
                    body:
                        'RapidDraft proposes source-linked findings; Theegarten engineers approve, reject, or request changes before release handoff.',
                },
                {
                    title: 'Integration is phased',
                    body:
                        'Start with file/package ingestion and manual export, then add customer-approved connectors for CIM Database, EPLAN, CAD/PDM/PLM, and document stores.',
                },
            ],
            stack: {
                title: 'Local AI deployment stack',
                appendixTitle: 'Technical deployment stack',
                appendixBody:
                    'A deeper IT view for comparing proof-of-concept, pilot, and production deployment options. The exact runtime is scoped with Theegarten IT before any production commitment.',
                columns: ['Layer', 'Proof of Concept', 'Pilot', 'Production / Enterprise'],
                rows: [
                    ['Compute', 'DGX Spark / workstation (demo)', '01. DGX/RTX Spark\n02. RTX PRO 6000 Blackwell', 'H200 pool / customer AI platform'],
                    ['Runtime', 'Docker Compose', 'K3s + Helm', 'Kubernetes · OpenShift AI · VMware Private AI · Run:ai'],
                    ['Model serving', 'vLLM', 'vLLM + 1 NIM · LiteLLM gateway', 'NVIDIA AI Enterprise + NIM (+ Triton / SGLang) · Model Gateway'],
                    ['Data & vectors', 'PostgreSQL + pgvector', 'PostgreSQL + Qdrant + MinIO', '+ OpenSearch / Elastic · separated DB / vector / object'],
                    ['Doc intelligence', 'Docling', 'Docling + PaddleOCR / Surya', '+ Table Transformer · layout models · scaled ingestion'],
                    ['Agent & workflow', 'LangGraph', 'LangGraph + Temporal (human gates)', 'Versioned prompt / agent / workflow registry · provenance'],
                    ['Identity & security', 'Local / Keycloak', 'Keycloak SSO + RBAC · ACL-before-retrieval', 'OIDC / SAML / AD · OPA / Casbin · Vault · SBOM · signed · air-gap'],
                    ['Observability', 'Langfuse (opt.)', 'Prometheus + Grafana + Langfuse', '+ LangSmith / Elastic / Splunk'],
                    ['Connectors', 'File share · STEP AP242', 'SharePoint · BOM export · 1 PDM spike', 'CIM / PLM · EPLAN · SolidWorks PDM · NX Open · Creo (controlled plane)'],
                ],
            },
            notes: [
                'DGX/RTX Spark is a pilot/reference option; production can use customer-approved GPU servers or enterprise AI platforms.',
                'CIM, EPLAN, CAD/PDM/PLM, and file-share connectors should stay marked as future integrations until scoped with Theegarten IT.',
                'Project indexing is for cited retrieval, not cross-customer reuse or silent model training.',
            ],
        },
        roadmap: {
            kicker: 'Adoption Path',
            title: 'From pilot release checks to a controlled engineering workflow layer',
            body:
                'The first step is a narrow, measurable release-check pilot. Later stages can add CIM Database handoff, EPLAN/document context, and governed automation only after Theegarten approves the scope.',
            phases: [
                {
                    title: 'Pilot release checks',
                    body: 'Check drawings, BOMs, CAD exports, and release packages before sign-off.',
                    chips: ['Findings', 'Change summary', 'Review report'],
                },
                {
                    title: 'CIM Database report handoff',
                    body: 'Attach a source-linked review report to the release record while CIM Database remains the system of record.',
                    chips: ['CIM / PLM', 'EPLAN context', 'Report handoff'],
                },
                {
                    title: 'EPLAN and document context',
                    body: 'Use approved project documents, EPLAN context, standards, and prior findings for cited retrieval inside the agreed boundary.',
                    chips: ['Cited retrieval', 'Prior reviews', 'Rule templates'],
                },
                {
                    title: 'Engineer-approved automation',
                    body: 'Draft change summaries, action lists, checklists, and release artifacts for engineer approval.',
                    chips: ['Action lists', 'Checklists', 'Draft summaries'],
                },
                {
                    title: 'Enterprise deployment boundary',
                    body: 'Scale with private deployment, identity, audit, workflow versions, and approved model routing.',
                    chips: ['SSO / RBAC', 'Audit trail', 'Model routing'],
                },
                {
                    title: 'Longer-term engineering cockpit',
                    body: 'Bring review, workflows, AI assistance, decisions, approvals, and release evidence into one controlled workspace.',
                    chips: ['CAD context', 'Workflow cockpit', 'Release evidence'],
                },
            ],
            foundationLabel: 'Constant across every phase',
            foundationItems: [
                'source-linked evidence',
                'engineer approval',
                'existing CAD / PLM authority',
                'controlled customer data boundary',
            ],
        },
        demo: {
            kicker: 'Live Demo',
            title: 'Release check for a real module-change workflow',
            body:
                'We will demonstrate the release logic on a representative Theegarten workflow: drawing update, BOM impact, optional EPLAN context, and engineer-approved CIM Database handoff.',
            steps: [
                {
                    title: 'Inspection report generation',
                    body: ['Drawing to inspection report'],
                    media: { type: 'video', src: '/media/theegarten/qa-report.mp4', label: 'QA report video' },
                },
                {
                    title: 'Drawing and model review',
                    body: ['STEP file DFM review', 'Drawing linting', 'Naming and drafting consistency'],
                    mediaList: [
                        { type: 'video', src: '/media/theegarten/dfm-review-injection-sample.mp4', label: 'DFM review video' },
                        { type: 'video', src: '/media/theegarten/find-drawing-errors.mp4', label: 'Find drawing errors video' },
                    ],
                },
                {
                    title: 'EPLAN knowledge lookup',
                    body: ['Approved project documents queried with cited answers'],
                    media: { type: 'video', src: '/media/theegarten/rag-eplan.mp4', label: 'EPLAN RAG video' },
                },
                {
                    title: 'Collaboration',
                    body: ['Commenting', 'Shared supplier/client review context'],
                    media: { type: 'video', src: '/media/theegarten/commenting-apillar.mp4', label: 'A-pillar commenting video' },
                },
                {
                    title: 'CIM Database handoff',
                    body: ['Review report prepared for engineer-approved PLM handoff'],
                },
                {
                    title: 'Planned next capabilities',
                    body: [
                        'EMPB / AS9102 export adapters',
                        'Access-controlled engineering knowledge',
                        'Naming and documentation standards',
                    ],
                },
            ],
        },
        nextSteps: {
            title: 'Action Tracker',
            columns: ['Action', 'Status'],
            groups: [
                {
                    title: 'Phase 01',
                    rows: [
                        ['First Meeting, June 04 2026', 'Completed'],
                        ['Follow-up meeting, June 16, 13:00-14:00 CEST', 'Scheduled'],
                        ['Define project scope and success/fail criteria', 'Open'],
                        ['Confirm NDA and pilot LOI documents', 'Open'],
                        ['RapidDraft visits Theegarten', 'Open'],
                    ],
                },
                {
                    title: 'Phase 02: Kickoff',
                    rows: [['Kickoff', 'Open']],
                },
            ],
        },
        pilot: {
            kicker: 'Pilot Programme',
            title: 'Proof of value before production deployment',
            body:
                'Validate RapidDraft on one representative release workflow, prove findings quality with Theegarten engineers, and decide on production only after the value and security fit are clear.',
            phases: [
                {
                    title: 'Phase 1 — Feasibility',
                    note: '',
                    duration: '1 week',
                    body:
                        'Visit Theegarten-Pactec and interview 2-3 engineers to map one release workflow, pain points, data boundaries, and success criteria.',
                    deliverable: 'Output: agreed pilot scope, security concept, and success criteria.',
                },
                {
                    title: 'Phase 2 — Kick-off',
                    note: '',
                    duration: '1 week',
                    body:
                        'Confirm scope, sample packages, access constraints, demo workflow, open questions, and team responsibilities.',
                    deliverable: 'Output: confirmed sample package, roles, timeline, and kickoff materials.',
                },
                {
                    title: 'Phase 3 — Review',
                    note: '',
                    duration: '2 weeks',
                    body:
                        'Review implementation status with engineers and test whether findings are useful, traceable, and relevant to release decisions.',
                    deliverable: 'Output: value report, use-case fit, and findings-quality assessment.',
                },
                {
                    title: 'Phase 4 — Deployment',
                    note: '(optional)',
                    duration: 'optional',
                    body:
                        'Move to production only if the value case, security requirements, and rollout approach are confirmed.',
                    deliverable: 'Output: deployment plan, training approach, and support model.',
                },
            ],
        },
        team: {
            kicker: 'Pilot Team',
            title: 'Direct engineering and AI support for the pilot.',
            body:
                'Theegarten-Pactec would work directly with founders who understand mechanical release workflows, controlled deployment, and production AI systems.',
            cta: 'Contact Us',
            members: [
                {
                    name: 'Adeel Yawar Jamil',
                    title: 'Founder & Mechanical Engineering Lead',
                    bio:
                        '15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries.',
                    image: '/media/adeel.jpg',
                },
                {
                    name: 'Dr. Hasan Raza',
                    title: 'Founder & Operations Lead',
                    bio:
                        '15+ years scaling engineering and manufacturing operations, with focus on controlled deployment inside industrial workflows.',
                    image: '/media/hasan.jpg',
                },
                {
                    name: 'Sreekar Reddy Sajjala',
                    title: 'Founder & AI Lead',
                    bio:
                        'Builds production AI systems and engineering software across FEM, CFD, topology optimization, and data-driven tooling.',
                    image: '/media/sreekar.jpg',
                },
            ],
        },
        diagrams: {
            stack: {
                aria: 'RapidDraft layer connecting Theegarten engineering inputs to controlled release outputs',
                title: 'RapidDraft connects engineering inputs to controlled release outputs',
                inputs: [
                    ['SOLIDWORKS', 'EPLAN'],
                    ['2D Drawings'],
                    ['CIM Database'],
                    ['Release Package'],
                    ['Supplier QA'],
                ],
                outputs: ['DFM Findings', 'Inspection Readiness', 'BOM Consistency', 'Release Gates', 'Audit Trail'],
                center: 'RapidDraft',
                centerNote: 'HUMAN-IN-THE-LOOP REVIEW',
            },
            localAi: {
                aria:
                    'Local AI deployment architecture from Theegarten release package to engineer-approved CIM Database release',
                title: 'Local AI deployment architecture for RapidDraft at Theegarten-Pactec',
                packageKicker: 'THEEGARTEN-PACTEC DATA',
                packageTitle: 'Release Package',
                packageMeta: 'CAD · Drawing · BOM · EPLAN',
                hardwareKicker: 'PRIVATE RUNTIME OPTION',
                hardwareTitle: 'NVIDIA DGX Spark',
                hardwareMeta: 'Runs on-site · company network',
                workspaceKicker: 'RAPIDDRAFT WORKSPACE',
                workspaceTitle: 'Agent inside the product',
                workspaceMeta: 'Runs defined checks and retrieval',
                toolLayer: 'AGENT TOOL LAYER',
                tools: ['BOM', 'DFM', 'Model / Canvas', 'Knowledge', 'Artifacts'],
                reasoning: 'Checks · retrieval · evidence',
                outputKicker: 'AGENT OUTPUT',
                outputTitle: 'Evidence-linked results',
                outputMeta: 'BOM · DFM · citations · release notes',
                humanKicker: 'HUMAN IN THE LOOP',
                humanTitle: 'Engineer approval',
                humanMeta: 'Reviews & approves before release',
                plmKicker: 'PLM HANDOFF',
                plmTitle: 'CIM Database release summary',
                plmMeta: 'Review report written back to PLM',
            },
        },
    },
    de: {
        metaTitle: 'RapidDraft für Theegarten-Pactec | KI-gestützte Freigabeprüfungen',
        metaDescription:
            'RapidDraft Follow-up für Theegarten-Pactec: KI-gestützte Prüfungen von Zeichnungen, Stücklisten und CIM-Database-Freigaben mit nachvollziehbaren Befunden, Engineer-Freigabe und kontrollierter Bereitstellung.',
        hero: {
            kicker: 'Für Theegarten-Pactec Engineering',
            title: 'Zeichnungs- und Stücklistenfehler vor der Freigabe erkennen',
            body:
                'RapidDraft prüft ein Freigabepaket — Zeichnung, Stückliste, STEP-Modell und EPLAN-Kontext — und liefert quellenbasierte Befunde, die Ihre Engineers vor der Übergabe an CIM Database freigeben.',
            cta: 'Kontakt aufnehmen',
            chips: ['Kontrollierte Grenze', 'On-prem möglich', 'Kein stilles Training', 'Engineer-Freigabe'],
        },
        language: {
            label: 'Seitensprache',
            en: 'EN',
            de: 'DE',
        },
        security: {
            kicker: 'Datensicherheit',
            title: 'Ihre Konstruktionsdaten bleiben innerhalb der vereinbarten Grenze',
            body:
                'Für den Pilot kann RapidDraft innerhalb einer von Theegarten freigegebenen lokalen oder privaten Umgebung laufen. Zeichnungen, Stücklisten, Prompts, Embeddings, Befunde und Reports bleiben innerhalb der vereinbarten Grenze und werden nicht für stilles Modelltraining genutzt.',
        },
        architecture: {
            kicker: 'Architektur-Follow-up',
            title: 'Wie RapidDraft in Ihrer Umgebung bereitgestellt wird',
            body:
                'Wir behandeln Architektur als Reihe von Bereitstellungsentscheidungen, die Theegarten mit uns trifft: wo Daten verarbeitet werden, wie Modellaufrufe vermittelt werden, welche Systeme angebunden werden und wo Engineers die Freigabekontrolle behalten.',
            principles: [
                {
                    title: 'Grenze zuerst',
                    body:
                        'Zeichnungen, Stücklisten, Prompts, Embeddings, generierte Befunde und Review-Reports bleiben innerhalb der vereinbarten Theegarten-genehmigten Grenze.',
                },
                {
                    title: 'Engineer-Freigabe bleibt zentral',
                    body:
                        'RapidDraft schlägt quellenbasierte Befunde vor; Theegarten-Engineers bestätigen, verwerfen oder fordern Änderungen an, bevor eine Freigabeübergabe erfolgt.',
                },
                {
                    title: 'Integration erfolgt phasenweise',
                    body:
                        'Start mit Datei-/Paket-Ingestion und manuellem Export, danach kundenseitig genehmigte Connectoren für CIM Database, EPLAN, CAD/PDM/PLM und Dokumentenspeicher.',
                },
            ],
            stack: {
                title: 'Lokaler KI-Bereitstellungs-Stack',
                appendixTitle: 'Technischer Bereitstellungs-Stack',
                appendixBody:
                    'Eine vertiefte IT-Sicht zum Vergleich von Proof of Concept, Pilot und Produktionsoptionen. Die konkrete Laufzeitumgebung wird vor einer Produktionsentscheidung mit Theegarten IT gescoped.',
                columns: ['Ebene', 'Proof of Concept', 'Pilot', 'Produktion / Enterprise'],
                rows: [
                    ['Compute', 'DGX Spark / Workstation (Demo)', '01. DGX/RTX Spark\n02. RTX PRO 6000 Blackwell', 'H200-Pool / Kunden-AI-Plattform'],
                    ['Runtime', 'Docker Compose', 'K3s + Helm', 'Kubernetes · OpenShift AI · VMware Private AI · Run:ai'],
                    ['Model Serving', 'vLLM', 'vLLM + 1 NIM · LiteLLM Gateway', 'NVIDIA AI Enterprise + NIM (+ Triton / SGLang) · Model Gateway'],
                    ['Daten & Vektoren', 'PostgreSQL + pgvector', 'PostgreSQL + Qdrant + MinIO', '+ OpenSearch / Elastic · getrennte DB / Vector / Object Stores'],
                    ['Dokumentintelligenz', 'Docling', 'Docling + PaddleOCR / Surya', '+ Table Transformer · Layout-Modelle · skalierte Ingestion'],
                    ['Agent & Workflow', 'LangGraph', 'LangGraph + Temporal (Human Gates)', 'Versioniertes Prompt-/Agent-/Workflow-Registry · Provenance'],
                    ['Identität & Security', 'Lokal / Keycloak', 'Keycloak SSO + RBAC · ACL-before-retrieval', 'OIDC / SAML / AD · OPA / Casbin · Vault · SBOM · signiert · Air-gap'],
                    ['Observability', 'Langfuse (opt.)', 'Prometheus + Grafana + Langfuse', '+ LangSmith / Elastic / Splunk'],
                    ['Connectoren', 'File Share · STEP AP242', 'SharePoint · BOM-Export · 1 PDM-Spike', 'CIM / PLM · EPLAN · SolidWorks PDM · NX Open · Creo (kontrolliert geplant)'],
                ],
            },
            notes: [
                'DGX/RTX Spark ist eine Pilot-/Referenzoption; Produktion kann auf kundenseitig freigegebenen GPU-Servern oder Enterprise-AI-Plattformen laufen.',
                'CIM, EPLAN, CAD/PDM/PLM und File-Share-Connectoren bleiben als zukünftige Integrationen markiert, bis sie mit Theegarten IT gescoped sind.',
                'Projektindexierung dient zitiertem Retrieval, nicht kundenübergreifender Wiederverwendung oder stillem Modelltraining.',
            ],
        },
        roadmap: {
            kicker: 'Adoptionspfad',
            title: 'Vom Pilot für Freigabeprüfungen zur kontrollierten Engineering-Workflow-Schicht',
            body:
                'Der erste Schritt ist ein enger, messbarer Pilot für Freigabeprüfungen. Spätere Stufen können CIM-Database-Übergabe, EPLAN-/Dokumentenkontext und kontrollierte Automatisierung ergänzen, sobald Theegarten den Umfang freigibt.',
            phases: [
                {
                    title: 'Pilot-Freigabeprüfungen',
                    body: 'Zeichnungen, Stücklisten, CAD-Exporte und Freigabepakete vor dem Sign-off prüfen.',
                    chips: ['Befunde', 'Änderungsübersicht', 'Review-Report'],
                },
                {
                    title: 'CIM-Database-Reportübergabe',
                    body: 'Einen quellenbasierten Review-Report an den Freigabedatensatz anhängen, während CIM Database das führende System bleibt.',
                    chips: ['CIM / PLM', 'EPLAN-Kontext', 'Report-Übergabe'],
                },
                {
                    title: 'EPLAN- und Dokumentenkontext',
                    body: 'Freigegebene Projektdokumente, EPLAN-Kontext, Standards und frühere Befunde für zitiertes Retrieval innerhalb der vereinbarten Grenze nutzen.',
                    chips: ['Zitiertes Retrieval', 'Frühere Reviews', 'Rule Templates'],
                },
                {
                    title: 'Engineer-freigegebene Automatisierung',
                    body: 'Änderungszusammenfassungen, Action Lists, Checklisten und Freigabeartefakte für Engineer-Freigabe entwerfen.',
                    chips: ['Action Lists', 'Checklisten', 'Draft Summaries'],
                },
                {
                    title: 'Enterprise-Bereitstellungsgrenze',
                    body: 'Skalierung mit privater Bereitstellung, Identity, Audit, Workflow-Versionen und genehmigtem Model Routing.',
                    chips: ['SSO / RBAC', 'Audit Trail', 'Model Routing'],
                },
                {
                    title: 'Langfristiges Engineering-Cockpit',
                    body: 'Review, Workflows, KI-Unterstützung, Entscheidungen, Freigaben und Release-Evidenz in einem kontrollierten Workspace bündeln.',
                    chips: ['CAD-Kontext', 'Workflow-Cockpit', 'Release-Evidenz'],
                },
            ],
            foundationLabel: 'Konstant über alle Phasen',
            foundationItems: [
                'quellenbasierte Evidenz',
                'Engineer-Freigabe',
                'bestehende CAD-/PLM-Autorität',
                'kontrollierte Kundendatengrenze',
            ],
        },
        demo: {
            kicker: 'Live Demo',
            title: 'Freigabeprüfung für einen realen Moduländerungs-Workflow',
            body:
                'Wir demonstrieren die Freigabelogik an einem repräsentativen Theegarten-Workflow: Zeichnungsänderung, Stücklistenauswirkung, optionaler EPLAN-Kontext und Engineer-freigegebene CIM-Database-Übergabe.',
            steps: [
                {
                    title: 'Prüfberichtserstellung',
                    body: ['Von Zeichnung zu Prüfbericht'],
                    media: { type: 'video', src: '/media/theegarten/qa-report.mp4', label: 'QA-Report-Video' },
                },
                {
                    title: 'Zeichnungs- und Modellprüfung',
                    body: ['DFM-Review der STEP-Datei', 'Zeichnungsprüfung', 'Benennungs- und Drafting-Konsistenz'],
                    mediaList: [
                        { type: 'video', src: '/media/theegarten/dfm-review-injection-sample.mp4', label: 'DFM-Review-Video' },
                        { type: 'video', src: '/media/theegarten/find-drawing-errors.mp4', label: 'Find-Drawing-Errors-Video' },
                    ],
                },
                {
                    title: 'EPLAN Knowledge Lookup',
                    body: ['Freigegebene Projektdokumente mit zitierten Antworten abfragen'],
                    media: { type: 'video', src: '/media/theegarten/rag-eplan.mp4', label: 'EPLAN-RAG-Video' },
                },
                {
                    title: 'Zusammenarbeit',
                    body: ['Kommentierung', 'Gemeinsamer Review-Kontext für Lieferant und Kunde'],
                    media: { type: 'video', src: '/media/theegarten/commenting-apillar.mp4', label: 'A-Pillar-Kommentierungs-Video' },
                },
                {
                    title: 'CIM-Database-Übergabe',
                    body: ['Review-Report für Engineer-freigegebene PLM-Übergabe vorbereiten'],
                },
                {
                    title: 'Geplante nächste Funktionen',
                    body: [
                        'EMPB-/AS9102-Exportadapter',
                        'Zugriffsgesteuertes Engineering-Wissen',
                        'Benennungs- und Dokumentationsstandards',
                    ],
                },
            ],
        },
        nextSteps: {
            title: 'Action Tracker',
            columns: ['Aktion', 'Status'],
            groups: [
                {
                    title: 'Phase 01',
                    rows: [
                        ['Erstes Meeting, 04. Juni 2026', 'Abgeschlossen'],
                        ['Follow-up-Termin am 16. Juni, 13:00-14:00 CEST', 'Geplant'],
                        ['Projektumfang und Erfolgs-/Abbruchkriterien definieren', 'Offen'],
                        ['NDA- und Pilot-LOI-Dokumente bestätigen', 'Offen'],
                        ['RapidDraft besucht Theegarten', 'Offen'],
                    ],
                },
                {
                    title: 'Phase 02: Kickoff',
                    rows: [['Kickoff', 'Offen']],
                },
            ],
        },
        pilot: {
            kicker: 'Pilotprogramm',
            title: 'Wertnachweis vor Produktionsbereitstellung',
            body:
                'RapidDraft an einem repräsentativen Freigabe-Workflow validieren, Befundqualität mit Theegarten-Engineers prüfen und erst nach klarem Wert- und Security-Fit über Produktion entscheiden.',
            phases: [
                {
                    title: 'Phase 1 — Machbarkeit',
                    note: '',
                    duration: '1 Woche',
                    body:
                        'Besuch bei Theegarten-Pactec und Interviews mit 2-3 Engineers, um einen Freigabe-Workflow, Pain Points, Datengrenzen und Erfolgskriterien zu erfassen.',
                    deliverable: 'Output: abgestimmter Pilotumfang, Security-Konzept und Erfolgskriterien.',
                },
                {
                    title: 'Phase 2 — Kick-off',
                    note: '',
                    duration: '1 Woche',
                    body:
                        'Scope, Beispielpakete, Zugriffsbeschränkungen, Demo-Workflow, offene Fragen und Teamverantwortung bestätigen.',
                    deliverable: 'Output: bestätigtes Beispielpaket, Rollen, Zeitplan und Kick-off-Materialien.',
                },
                {
                    title: 'Phase 3 — Review',
                    note: '',
                    duration: '2 Wochen',
                    body:
                        'Implementierungsstand mit Engineers prüfen und testen, ob Befunde nützlich, nachvollziehbar und relevant für Freigabeentscheidungen sind.',
                    deliverable: 'Output: Value Report, Use-Case-Fit und Bewertung der Befundqualität.',
                },
                {
                    title: 'Phase 4 — Deployment',
                    note: '(optional)',
                    duration: 'optional',
                    body:
                        'Produktionsstart nur dann, wenn Value Case, Security-Anforderungen und Rollout-Ansatz bestätigt sind.',
                    deliverable: 'Output: Deployment-Plan, Trainingsansatz und Support-Modell.',
                },
            ],
        },
        team: {
            kicker: 'Pilot-Team',
            title: 'Direkte Engineering- und KI-Unterstützung für den Pilot.',
            body:
                'Theegarten-Pactec würde direkt mit Gründern arbeiten, die mechanische Freigabe-Workflows, kontrollierte Bereitstellung und produktive KI-Systeme verstehen.',
            cta: 'Kontakt aufnehmen',
            members: [
                {
                    name: 'Adeel Yawar Jamil',
                    title: 'Founder & Mechanical Engineering Lead',
                    bio:
                        '15+ Jahre Erfahrung in CAD, Simulation und technischer Dokumentation in Aerospace, Automotive und Prozessindustrie.',
                    image: '/media/adeel.jpg',
                },
                {
                    name: 'Dr. Hasan Raza',
                    title: 'Founder & Operations Lead',
                    bio:
                        '15+ Jahre Erfahrung im Skalieren von Engineering- und Manufacturing-Operations mit Fokus auf kontrollierte Bereitstellung in industriellen Workflows.',
                    image: '/media/hasan.jpg',
                },
                {
                    name: 'Sreekar Reddy Sajjala',
                    title: 'Founder & AI Lead',
                    bio:
                        'Entwickelt produktive KI-Systeme und Engineering-Software für FEM, CFD, Topologieoptimierung und datengetriebene Tools.',
                    image: '/media/sreekar.jpg',
                },
            ],
        },
        diagrams: {
            stack: {
                aria: 'RapidDraft verbindet Theegarten-Engineering-Eingaben mit kontrollierten Freigabeergebnissen',
                title: 'RapidDraft verbindet Engineering-Eingaben mit kontrollierten Freigabeergebnissen',
                inputs: [
                    ['SOLIDWORKS', 'EPLAN'],
                    ['2D-Zeichnungen'],
                    ['CIM Database'],
                    ['Freigabepaket'],
                    ['Lieferanten-QA'],
                ],
                outputs: ['DFM-Befunde', 'Prüfbereitschaft', 'Stücklistenabgleich', 'Freigabe-Gates', 'Audit Trail'],
                center: 'RapidDraft',
                centerNote: 'HUMAN-IN-THE-LOOP REVIEW',
            },
            localAi: {
                aria:
                    'Lokale KI-Bereitstellungsarchitektur vom Theegarten-Freigabepaket zur Engineer-geprüften CIM-Database-Freigabe',
                title: 'Lokale KI-Bereitstellungsarchitektur für RapidDraft bei Theegarten-Pactec',
                packageKicker: 'THEEGARTEN-PACTEC DATEN',
                packageTitle: 'Freigabepaket',
                packageMeta: 'CAD · Zeichnung · BOM · EPLAN',
                hardwareKicker: 'PRIVATE LAUFZEITOPTION',
                hardwareTitle: 'NVIDIA DGX Spark',
                hardwareMeta: 'Läuft vor Ort · Firmennetzwerk',
                workspaceKicker: 'RAPIDDRAFT WORKSPACE',
                workspaceTitle: 'Agent im Produkt',
                workspaceMeta: 'Führt definierte Prüfungen und Retrieval aus',
                toolLayer: 'AGENT TOOL LAYER',
                tools: ['BOM', 'DFM', 'Modell / Canvas', 'Knowledge', 'Artefakte'],
                reasoning: 'Prüfungen · Retrieval · Evidenz',
                outputKicker: 'AGENT OUTPUT',
                outputTitle: 'Quellenbasierte Ergebnisse',
                outputMeta: 'BOM · DFM · Zitate · Freigabenotizen',
                humanKicker: 'HUMAN IN THE LOOP',
                humanTitle: 'Engineer-Freigabe',
                humanMeta: 'Prüft & bestätigt vor Freigabe',
                plmKicker: 'PLM HANDOFF',
                plmTitle: 'CIM-Freigabezusammenfassung',
                plmMeta: 'Review-Report zurück an PLM',
            },
        },
    },
} as const;

type LocalAiDiagramCopy = (typeof PAGE_CONTENT)[keyof typeof PAGE_CONTENT]['diagrams']['localAi'];
type StackDiagramCopy = (typeof PAGE_CONTENT)[keyof typeof PAGE_CONTENT]['diagrams']['stack'];

function SecurityFirstDeploymentDiagram({ labels }: { labels: LocalAiDiagramCopy }) {
    const mono = "'IBM Plex Mono', monospace";
    const display = "'Space Grotesk', 'Manrope', sans-serif";
    const c = {
        ink: '#111827',
        gray: '#6B7280',
        faint: '#9CA3AF',
        border: '#D1D5DB',
        card: 'rgba(255,255,255,0.84)',
        orange: '#EA580C',
        orangeText: '#C2410C',
        orangeBorder: '#FDBA74',
        orangeFill: 'rgba(255,247,237,0.9)',
    };
    const tools = [
        { label: labels.tools[0] ?? 'BOM', x: 442, y: 206, w: 46 },
        { label: labels.tools[1] ?? 'DFM', x: 494, y: 206, w: 46 },
        { label: labels.tools[2] ?? 'Model / Canvas', x: 546, y: 206, w: 112 },
        { label: labels.tools[3] ?? 'Knowledge', x: 442, y: 242, w: 84 },
        { label: labels.tools[4] ?? 'Artifacts', x: 532, y: 242, w: 72 },
    ];

    return (
        <div className="relative w-full" aria-label={labels.aria}>
            <svg
                viewBox="0 0 1200 420"
                role="img"
                aria-label={labels.title}
                className="block h-auto w-full overflow-visible"
            >
                <defs>
                    <radialGradient id="security-dgx-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.18" />
                        <stop offset="60%" stopColor="#FB923C" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="security-dgx-logo" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#C2410C" />
                    </linearGradient>
                    <filter id="security-dgx-soft" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#111827" floodOpacity="0.07" />
                    </filter>
                    <filter id="security-dgx-orange-soft" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#EA580C" floodOpacity="0.14" />
                    </filter>
                    <style>
                        {`
                            .security-dgx-flow-base {
                                stroke: rgba(75,85,99,0.28);
                                stroke-width: 1.4;
                                stroke-linecap: round;
                                stroke-dasharray: 2 8;
                            }
                            .security-dgx-flow {
                                stroke: rgba(75,85,99,0.48);
                                stroke-width: 1.55;
                                stroke-linecap: round;
                                stroke-dasharray: 2 11;
                                animation: security-dgx-dash 2.8s linear infinite;
                            }
                            .security-dgx-flow-d { animation-delay: 0.9s; }
                            .security-dgx-pip { animation: security-dgx-pip 2.8s ease-in-out infinite; }
                            @keyframes security-dgx-dash { to { stroke-dashoffset: -84; } }
                            @keyframes security-dgx-pip { 0%,100%{opacity:.45} 50%{opacity:1} }
                            @media (prefers-reduced-motion: reduce) {
                                .security-dgx-flow,
                                .security-dgx-pip { animation: none; }
                            }
                        `}
                    </style>
                </defs>

                <ellipse cx="580" cy="210" rx="280" ry="210" fill="url(#security-dgx-glow)" />

                <g filter="url(#security-dgx-soft)">
                    <rect x="20" y="40" width="300" height="104" rx="16" fill={c.card} stroke={c.border} strokeWidth="1.1" />
                </g>
                <text x="42" y="66" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.faint}>
                    {labels.packageKicker}
                </text>
                <text x="42" y="96" fontFamily={display} fontSize="21" fontWeight="600" fill={c.ink}>
                    {labels.packageTitle}
                </text>
                <text x="42" y="120" fontFamily={mono} fontSize="13" fill={c.gray}>
                    {labels.packageMeta}
                </text>

                <g filter="url(#security-dgx-soft)">
                    <rect x="20" y="160" width="300" height="242" rx="16" fill={c.card} stroke={c.border} strokeWidth="1.1" />
                </g>
                <text x="42" y="184" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.faint}>
                    {labels.hardwareKicker}
                </text>
                <image href="/media/NVIDIA-DGX-SPARK.png" x="100" y="196" width="140" height="140" preserveAspectRatio="xMidYMid meet" />
                <text x="42" y="362" fontFamily={display} fontSize="21" fontWeight="600" fill={c.ink}>
                    {labels.hardwareTitle}
                </text>
                <text x="42" y="386" fontFamily={mono} fontSize="13" fill={c.gray}>
                    {labels.hardwareMeta}
                </text>

                <g filter="url(#security-dgx-soft)">
                    <rect x="346" y="128" width="50" height="50" rx="14" fill="rgba(255,255,255,0.92)" stroke={c.orangeBorder} strokeWidth="1.2" />
                </g>
                <g stroke={c.orange} strokeWidth="1.6" fill="none" strokeLinecap="round">
                    <rect x="363" y="152" width="18" height="13" rx="2.5" />
                    <path d="M365 152 V147 a6.5 6.5 0 0 1 13 0 V152" />
                </g>
                <circle cx="372" cy="159" r="1.8" fill={c.orange} />

                <g filter="url(#security-dgx-orange-soft)">
                    <rect x="420" y="40" width="320" height="362" rx="18" fill={c.orangeFill} stroke={c.orangeBorder} strokeWidth="1.3" />
                </g>
                <g transform="translate(442,54)">
                    <rect width="30" height="30" rx="9" fill="url(#security-dgx-logo)" />
                    <rect x="8" y="9.5" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.95" />
                    <rect x="8" y="14.8" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.78" />
                    <rect x="8" y="20.1" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.95" />
                </g>
                <text x="484" y="74" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.orangeText}>
                    {labels.workspaceKicker}
                </text>
                <text x="442" y="112" fontFamily={display} fontSize="21" fontWeight="600" fill={c.ink}>
                    {labels.workspaceTitle}
                </text>
                <text x="442" y="138" fontFamily={mono} fontSize="13" fill={c.gray}>
                    {labels.workspaceMeta}
                </text>
                <text x="442" y="188" fontFamily={mono} fontSize="12" letterSpacing="2.6" fill={c.faint}>
                    {labels.toolLayer}
                </text>
                {tools.map((tool) => (
                    <g key={tool.label}>
                        <rect x={tool.x} y={tool.y} width={tool.w} height="26" rx="8" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.32)" />
                        <text x={tool.x + tool.w / 2} y={tool.y + 17} textAnchor="middle" fontFamily={mono} fontSize="11" fill={c.orangeText}>
                            {tool.label}
                        </text>
                    </g>
                ))}
                <circle cx="446" cy="346" r="4.5" fill={c.orange} className="security-dgx-pip" />
                <text x="462" y="350" fontFamily={mono} fontSize="11" fill={c.gray}>
                    {labels.reasoning}
                </text>

                <g>
                    <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.18;0.22;0.78;0.82;1" dur="10s" repeatCount="indefinite" />
                    <g filter="url(#security-dgx-soft)">
                        <rect x="810" y="40" width="370" height="108" rx="16" fill={c.card} stroke={c.border} strokeWidth="1.1" />
                    </g>
                    <text x="832" y="66" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.faint}>
                        {labels.outputKicker}
                    </text>
                    <text x="832" y="96" fontFamily={display} fontSize="19" fontWeight="600" fill={c.ink}>
                        {labels.outputTitle}
                    </text>
                    <text x="832" y="122" fontFamily={mono} fontSize="12" fill={c.gray}>
                        {labels.outputMeta}
                    </text>
                </g>

                <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,-124;0,-124;0,0;0,0" keyTimes="0;0.18;0.22;0.42;0.43;1" dur="10s" repeatCount="indefinite" calcMode="linear" />
                    <animate attributeName="opacity" values="1;1;0;0;0;1;1" keyTimes="0;0.38;0.42;0.62;0.78;0.82;1" dur="10s" repeatCount="indefinite" />
                    <g filter="url(#security-dgx-soft)">
                        <rect x="810" y="164" width="370" height="116" rx="16" fill={c.card} stroke={c.border} strokeWidth="1.1" />
                    </g>
                    <text x="832" y="190" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.orangeText}>
                        {labels.humanKicker}
                    </text>
                    <g transform="translate(1126,170)">
                        <rect width="28" height="28" rx="8" fill="none" stroke={c.orangeBorder} />
                        <g stroke={c.orange} strokeWidth="1.6" fill="none">
                            <circle cx="14" cy="11" r="4" />
                            <path d="M6 25 c0-4.5 3.8-7 8-7 s8 2.5 8 7" strokeLinecap="round" />
                        </g>
                    </g>
                    <text x="832" y="224" fontFamily={display} fontSize="19" fontWeight="600" fill={c.ink}>
                        {labels.humanTitle}
                    </text>
                    <text x="832" y="250" fontFamily={mono} fontSize="12" fill={c.gray}>
                        {labels.humanMeta}
                    </text>
                </g>

                <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,-124;0,-124;0,-256;0,-256;0,0;0,0" keyTimes="0;0.18;0.22;0.38;0.42;0.62;0.63;1" dur="10s" repeatCount="indefinite" calcMode="linear" />
                    <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.58;0.62;0.78;0.82;1" dur="10s" repeatCount="indefinite" />
                    <g filter="url(#security-dgx-soft)">
                        <rect x="810" y="296" width="370" height="108" rx="16" fill={c.card} stroke={c.border} strokeWidth="1.1" />
                    </g>
                    <text x="832" y="322" fontFamily={mono} fontSize="12" letterSpacing="2.2" fill={c.faint}>
                        {labels.plmKicker}
                    </text>
                    <text x="832" y="350" fontFamily={display} fontSize="18" fontWeight="600" fill={c.ink}>
                        {labels.plmTitle}
                    </text>
                    <text x="832" y="374" fontFamily={mono} fontSize="12" fill={c.gray}>
                        {labels.plmMeta}
                    </text>
                </g>

                <g fill="none">
                    <path d="M320 92 H420" className="security-dgx-flow-base" />
                    <path d="M320 92 H420" className="security-dgx-flow" />
                    <path d="M320 281 H420" className="security-dgx-flow-base" />
                    <path d="M320 281 H420" className="security-dgx-flow security-dgx-flow-d" />
                    <path d="M740 94 H810" className="security-dgx-flow-base" />
                    <path d="M740 94 H810" className="security-dgx-flow security-dgx-flow-d" />
                </g>
                <g fill="rgba(75,85,99,0.55)">
                    <path d="M420 92 l-7 -3.5 l0 7 z" />
                    <path d="M420 281 l-7 -3.5 l0 7 z" />
                    <path d="M810 94 l-7 -3.5 l0 7 z" />
                </g>
            </svg>
        </div>
    );
}

export function LocalAiDeploymentDiagram({ labels }: { labels: LocalAiDiagramCopy }) {
    const p = 'theegarten-deploy';
    const mono = "'IBM Plex Mono', monospace";
    const display = "'Space Grotesk', 'Manrope', sans-serif";
    const body = "'Manrope', sans-serif";
    const ink = '#0F172A';
    const slate = '#334155';
    const muted = '#475569';
    const faint = '#64748B';
    const line = '#94A3B8';
    const hair = '#E2E8F0';
    const orange = '#EA580C';
    const orangeText = '#C2410C';
    const orangeSoft = '#FFF7ED';
    const orangeBorder = '#FDBA74';
    const paper = '#FFFFFF';

    const edge = (d: string, tone: 'solid' | 'target' | 'future' = 'solid') => {
        const color = tone === 'target' ? orange : tone === 'future' ? faint : slate;
        return (
            <path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={tone === 'target' ? 1.8 : 1.55}
                strokeDasharray={tone === 'future' ? '7 7' : undefined}
                markerEnd={`url(#${p}-${tone === 'target' ? 'orange' : tone === 'future' ? 'faint' : 'slate'}-arrow)`}
            />
        );
    };

    const edgeLabel = (x: number, y: number, w: number, text: string, tone: 'solid' | 'target' | 'future' = 'solid') => (
        <g>
            <rect x={x - w / 2} y={y - 11} width={w} height="22" rx="6" fill={paper} stroke={hair} />
            <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontFamily={mono}
                fontSize="10.5"
                fill={tone === 'target' ? orangeText : tone === 'future' ? muted : slate}
            >
                {text}
            </text>
        </g>
    );

    const zone = (
        x: number,
        y: number,
        w: number,
        h: number,
        label: string,
        sub: string,
        tone: 'customer' | 'runtime' | 'control' | 'inference',
    ) => {
        const z = {
            customer: { stroke: slate, fill: 'rgba(255,255,255,0.58)', dash: undefined, color: slate },
            runtime: { stroke: orange, fill: 'rgba(255,247,237,0.42)', dash: '9 7', color: orangeText },
            control: { stroke: orangeBorder, fill: 'rgba(255,247,237,0.62)', dash: undefined, color: orangeText },
            inference: { stroke: faint, fill: 'rgba(241,245,249,0.74)', dash: undefined, color: muted },
        }[tone];
        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    rx="14"
                    fill={z.fill}
                    stroke={z.stroke}
                    strokeWidth="1.55"
                    strokeDasharray={z.dash}
                />
                <text x={x + 22} y={y + 30} fontFamily={mono} fontSize="11" letterSpacing="1.55" fontWeight="700" fill={z.color}>
                    {label}
                </text>
                <text x={x + 22} y={y + 49} fontFamily={body} fontSize="12.5" fill={muted}>
                    {sub}
                </text>
            </g>
        );
    };

    const node = (
        x: number,
        y: number,
        w: number,
        h: number,
        kicker: string,
        title: string,
        meta: string,
        meta2 = '',
        tone: 'service' | 'agent' | 'output' = 'service',
    ) => {
        const isAgent = tone === 'agent';
        const isOutput = tone === 'output';
        return (
            <g filter={`url(#${p}-shadow)`}>
                <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    rx="10"
                    fill={isAgent ? ink : isOutput ? orangeSoft : paper}
                    stroke={isAgent ? ink : isOutput ? orangeBorder : line}
                    strokeWidth={isAgent ? 1.7 : 1.35}
                />
                <text
                    x={x + 16}
                    y={y + 23}
                    fontFamily={mono}
                    fontSize="9.4"
                    letterSpacing="1.15"
                    fontWeight="700"
                    fill={isAgent ? orangeBorder : isOutput ? orangeText : muted}
                >
                    {kicker}
                </text>
                <text x={x + 16} y={y + 46} fontFamily={display} fontSize="16" fontWeight="700" fill={isAgent ? paper : ink}>
                    {title}
                </text>
                <text x={x + 16} y={y + 66} fontFamily={mono} fontSize="10.8" fill={isAgent ? '#CBD5E1' : muted}>
                    {meta}
                </text>
                {meta2 ? (
                    <text x={x + 16} y={y + 83} fontFamily={mono} fontSize="10.8" fill={isAgent ? '#CBD5E1' : muted}>
                        {meta2}
                    </text>
                ) : null}
            </g>
        );
    };

    return (
        <div
            className="relative w-full overflow-hidden rounded-[1.1rem] border border-slate-300 bg-slate-50 p-2 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.32)] sm:p-4"
            aria-label={labels.aria}
        >
            <svg
                viewBox="0 0 1240 742"
                role="img"
                aria-label={labels.title}
                className="block h-auto w-full rounded-[0.85rem] border border-slate-200 bg-[#F8FAFC]"
            >
                <defs>
                    <pattern id={`${p}-grid`} width="26" height="26" patternUnits="userSpaceOnUse">
                        <path d="M26 0H0V26" fill="none" stroke={hair} strokeWidth="1" />
                    </pattern>
                    <filter id={`${p}-shadow`} x="-20%" y="-20%" width="140%" height="160%">
                        <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#0F172A" floodOpacity="0.06" />
                    </filter>
                    <marker id={`${p}-slate-arrow`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                        <path d="M0 0L9 4.5L0 9Z" fill={slate} />
                    </marker>
                    <marker id={`${p}-orange-arrow`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                        <path d="M0 0L9 4.5L0 9Z" fill={orange} />
                    </marker>
                    <marker id={`${p}-faint-arrow`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                        <path d="M0 0L9 4.5L0 9Z" fill={faint} />
                    </marker>
                </defs>

                <rect width="1240" height="742" fill={`url(#${p}-grid)`} />
                {zone(20, 70, 1200, 648, 'THEEGARTEN-PACTEC CONTROLLED BOUNDARY', 'Theegarten owns DATA, release decisions, and the system of record.', 'customer')}
                <g>
                    <rect x="560" y="84" width="636" height="26" rx="7" fill={paper} stroke={orangeBorder} />
                    <text x="878" y="101" textAnchor="middle" fontFamily={mono} fontSize="10.5" fill={orangeText}>
                        TRUST BOUNDARY · backend-mediated model calls · ACL-filtered retrieval · no silent training
                    </text>
                </g>

                {zone(350, 124, 852, 566, 'RAPIDDRAFT CONTROLLED RUNTIME - LOCAL / PRIVATE OPTION', 'Pilot can use Docker Compose or k3s; enterprise can move to approved Kubernetes / AI platform.', 'runtime')}
                {zone(372, 190, 476, 500, 'ENGINEERING CONTROL PLANE', 'RapidDraft owns workflow, evidence, approvals, audit, and reports.', 'control')}
                {zone(872, 190, 312, 424, 'INFERENCE PLANE', 'Swappable private model serving behind a gateway.', 'inference')}

                <g filter={`url(#${p}-shadow)`}>
                    <rect x="52" y="152" width="250" height="86" rx="10" fill={paper} stroke={slate} strokeWidth="1.4" />
                    <circle cx="78" cy="193" r="9" fill="#F1F5F9" stroke={slate} strokeWidth="1.3" />
                    <path d="M64 218c2-12 9-17 14-17s12 5 14 17" fill="none" stroke={slate} strokeWidth="1.3" strokeLinecap="round" />
                    <text x="104" y="176" fontFamily={mono} fontSize="9.5" letterSpacing="1.2" fontWeight="700" fill={muted}>
                        PERSON
                    </text>
                    <text x="104" y="198" fontFamily={display} fontSize="17" fontWeight="700" fill={ink}>
                        User
                    </text>
                    <text x="104" y="217" fontFamily={mono} fontSize="11" fill={muted}>
                        engineering reviewer
                    </text>
                </g>

                <g filter={`url(#${p}-shadow)`}>
                    <path d="M52 292V426A125 13 0 0 0 302 426V292" fill={paper} stroke={slate} strokeWidth="1.4" />
                    <ellipse cx="177" cy="292" rx="125" ry="13" fill="#F1F5F9" stroke={slate} strokeWidth="1.4" />
                    <text x="177" y="318" textAnchor="middle" fontFamily={mono} fontSize="9.5" letterSpacing="1.2" fontWeight="700" fill={muted}>
                        DATA STORE
                    </text>
                    <text x="177" y="342" textAnchor="middle" fontFamily={display} fontSize="18" fontWeight="800" fill={ink}>
                        DATA
                    </text>
                    <text x="177" y="365" textAnchor="middle" fontFamily={mono} fontSize="10.5" fill={muted}>
                        drawings · BOM · STEP AP242
                    </text>
                    <text x="177" y="383" textAnchor="middle" fontFamily={mono} fontSize="10.5" fill={muted}>
                        EPLAN context · CIM metadata
                    </text>
                    <text x="177" y="401" textAnchor="middle" fontFamily={mono} fontSize="10.5" fill={muted}>
                        prompts · embeddings · findings
                    </text>
                </g>

                <g filter={`url(#${p}-shadow)`}>
                    <polygon points="177,420 301,500 177,580 53,500" fill={orangeSoft} stroke={orange} strokeWidth="2" />
                    <text x="177" y="483" textAnchor="middle" fontFamily={mono} fontSize="9.5" letterSpacing="1.2" fontWeight="700" fill={orangeText}>
                        DECISION
                    </text>
                    <text x="177" y="503" textAnchor="middle" fontFamily={display} fontSize="15.5" fontWeight="800" fill={ink}>
                        Decision block
                    </text>
                    <text x="177" y="525" textAnchor="middle" fontFamily={mono} fontSize="10" fill={muted}>
                        approve · reject
                    </text>
                    <text x="177" y="540" textAnchor="middle" fontFamily={mono} fontSize="10" fill={muted}>
                        request change
                    </text>
                </g>

                {node(394, 252, 216, 92, 'CONTAINER · AGENT', 'RapidDraft Agent', 'review orchestration', 'typed tool calls', 'agent')}
                {node(628, 252, 198, 92, 'WORKFLOW', 'Durable workflow', 'human approval gates', 'Temporal-ready')}
                {node(394, 362, 216, 84, 'RETRIEVAL', 'Knowledge index', 'pgvector or Qdrant', 'cited retrieval')}
                {node(628, 362, 198, 84, 'REGISTRY', 'Prompt / agent versions', 'approved artifacts')}
                {node(394, 462, 216, 84, 'DETERMINISTIC', 'Verifiers', 'BOM · revision · GD&T')}
                {node(628, 462, 198, 84, 'GOVERNANCE', 'Audit + provenance', 'prompt/model/data ver.')}
                {node(394, 566, 216, 92, 'INGEST', 'Doc + CAD ingestion', 'PDF · table · OCR', 'STEP / package export')}
                {node(628, 566, 198, 92, 'OUTPUT ARTIFACT', 'Release packet', 'prepared for review', 'not automatic write-back', 'output')}

                {node(892, 252, 272, 78, 'GATEWAY', 'Model gateway', 'LiteLLM / RapidDraft policy', 'backend-mediated')}
                {node(892, 348, 272, 66, 'SERVING', 'LLM runtime', 'vLLM or NVIDIA NIM')}
                {node(892, 432, 272, 62, 'VISION', 'Vision model', 'drawing / document evidence')}
                {node(892, 512, 272, 78, 'RETRIEVAL MODELS', 'Embeddings + reranker', 'project-scoped retrieval')}

                <g filter={`url(#${p}-shadow)`}>
                    <path d="M937 648V694A123 12 0 0 0 1183 694V648" fill={paper} stroke={slate} strokeWidth="1.4" />
                    <ellipse cx="1060" cy="648" rx="123" ry="12" fill="#F1F5F9" stroke={slate} strokeWidth="1.4" />
                    <text x="1060" y="672" textAnchor="middle" fontFamily={mono} fontSize="9.5" letterSpacing="1.2" fontWeight="700" fill={muted}>
                        SYSTEM OF RECORD · THEEGARTEN
                    </text>
                    <text x="1060" y="694" textAnchor="middle" fontFamily={display} fontSize="17" fontWeight="800" fill={ink}>
                        CIM Database
                    </text>
                </g>

                {edge('M302 195H348V298H394')}
                {edge('M302 350H336V604H394')}
                {edge('M302 384H320V628H394', 'future')}
                {edge('M500 252V236H866V291H892', 'target')}
                {edge('M1028 330V348')}
                {edge('M1028 414V432')}
                {edge('M1028 494V512')}
                {edge('M394 504H340V500H301')}
                {edge('M177 580V676H720V658')}
                {edge('M826 612H900V650H937')}
                {edge('M240 458H372V300H394', 'target')}

                {edgeLabel(342, 250, 148, 'authenticated session')}
                {edgeLabel(336, 472, 126, 'STEP / file export')}
                {edgeLabel(322, 650, 170, 'future: PDM / EPLAN', 'future')}
                {edgeLabel(706, 228, 156, 'model + embed calls', 'target')}
                {edgeLabel(356, 528, 156, 'source-linked findings')}
                {edgeLabel(446, 676, 150, 'approved export')}
                {edgeLabel(1010, 620, 204, 'prepared summary · not write-back')}
                {edgeLabel(300, 450, 116, 'request change', 'target')}
            </svg>
        </div>
    );
}

function EngineeringStackDiagram({ labels }: { labels: StackDiagramCopy }) {
    const inputPillX = 20;
    const outputPillX = 800;
    const pillWidth = 300;
    const pillHeight = 52;

    const inputs = [
        {
            label: labels.inputs[0],
            y: 84,
            path: 'M320 84 C388 88 432 184 478 280',
        },
        {
            label: labels.inputs[1],
            y: 180,
            path: 'M320 180 C388 184 432 226 478 280',
        },
        {
            label: labels.inputs[2],
            y: 280,
            path: 'M320 280 H478',
            active: true,
        },
        {
            label: labels.inputs[3],
            y: 380,
            path: 'M320 380 C388 376 432 334 478 280',
        },
        {
            label: labels.inputs[4],
            y: 476,
            path: 'M320 476 C388 472 432 376 478 280',
        },
    ];
    const outputs = [
        {
            label: labels.outputs[0],
            y: 84,
            path: 'M642 280 C688 184 732 88 800 84',
        },
        {
            label: labels.outputs[1],
            y: 180,
            path: 'M642 280 C688 226 732 184 800 180',
        },
        {
            label: labels.outputs[2],
            y: 280,
            path: 'M642 280 H800',
            active: true,
        },
        {
            label: labels.outputs[3],
            y: 380,
            path: 'M642 280 C688 334 732 376 800 380',
        },
        {
            label: labels.outputs[4],
            y: 476,
            path: 'M642 280 C688 376 732 472 800 476',
        },
    ];

    return (
        <div
            className="relative mx-auto w-full max-w-[880px]"
            aria-label={labels.aria}
        >
            <svg
                viewBox="0 0 1120 560"
                role="img"
                aria-labelledby="theegarten-stack-title"
                className="block h-auto w-full overflow-visible"
            >
                <title id="theegarten-stack-title">
                    {labels.title}
                </title>
                <defs>
                    <radialGradient id="rd-core-glow-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.28" />
                        <stop offset="58%" stopColor="#FB923C" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="rd-icon-gradient" x1="505" y1="220" x2="617" y2="338" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#C2410C" />
                    </linearGradient>
                    <filter id="rd-icon-shadow" x="-70%" y="-70%" width="240%" height="240%">
                        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#EA580C" floodOpacity="0.26" />
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7C2D12" floodOpacity="0.22" />
                    </filter>
                    <filter id="rd-soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#111827" floodOpacity="0.08" />
                    </filter>
                    <style>
                        {`
                            .rd-flow-base {
                                stroke: rgba(75, 85, 99, 0.34);
                                stroke-width: 1.45;
                                stroke-linecap: round;
                                stroke-dasharray: 2 8;
                            }

                            .rd-flow-active {
                                stroke: rgba(75, 85, 99, 0.5);
                                stroke-width: 1.65;
                                stroke-linecap: round;
                                stroke-dasharray: 2 12;
                                animation: rd-dash-flow 2.4s linear infinite;
                            }

                            .rd-output-flow {
                                animation-delay: 0.9s;
                            }

                            .rd-core-glow {
                                animation: rd-core-breathe 3.8s ease-in-out infinite;
                                transform-box: fill-box;
                                transform-origin: center;
                            }

                            @keyframes rd-dash-flow {
                                to {
                                    stroke-dashoffset: -84;
                                }
                            }

                            @keyframes rd-core-breathe {
                                0%, 100% {
                                    opacity: 0.78;
                                    transform: scale(0.98);
                                }
                                50% {
                                    opacity: 1;
                                    transform: scale(1.04);
                                }
                            }

                            @media (prefers-reduced-motion: reduce) {
                                .rd-flow-active,
                                .rd-core-glow {
                                    animation: none;
                                }
                            }
                        `}
                    </style>
                </defs>

                <rect width="1120" height="560" fill="url(#rd-core-glow-gradient)" opacity="0.18" />

                <g fill="none">
                    {inputs.map((input) => (
                        <path key={`${input.label.join('-')}-base`} d={input.path} className="rd-flow-base" />
                    ))}
                    {outputs.map((output) => (
                        <path key={`${output.label}-base`} d={output.path} className="rd-flow-base" />
                    ))}
                    {inputs.map((input) => (
                        <path key={`${input.label.join('-')}-flow`} d={input.path} className="rd-flow-active" />
                    ))}
                    {outputs.map((output) => (
                        <path key={`${output.label}-flow`} d={output.path} className="rd-flow-active rd-output-flow" />
                    ))}
                </g>

                <g>
                    {inputs.map((input) => (
                        <g key={input.label.join('-')} filter="url(#rd-soft-shadow)">
                            <rect
                                x={inputPillX}
                                y={input.y - pillHeight / 2}
                                width={pillWidth}
                                height={pillHeight}
                                rx={pillHeight / 2}
                                fill="rgba(255,255,255,0.68)"
                                stroke="#8B8B8B"
                                strokeWidth="1.2"
                            />
                            <text
                                x={inputPillX + pillWidth / 2}
                                y={input.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#111827"
                                fontSize="16"
                                fontWeight="700"
                                letterSpacing="0.35"
                            >
                                {input.label.length === 1 ? (
                                    input.label[0]
                                ) : (
                                    <>
                                        <tspan x={inputPillX + pillWidth / 2} dy="-0.58em">
                                            {input.label[0]}
                                        </tspan>
                                        <tspan x={inputPillX + pillWidth / 2} dy="1.18em">
                                            {input.label[1]}
                                        </tspan>
                                    </>
                                )}
                            </text>
                        </g>
                    ))}
                </g>

                <g>
                    {outputs.map((output) => (
                        <g key={output.label} filter="url(#rd-soft-shadow)">
                            <rect
                                x={outputPillX}
                                y={output.y - pillHeight / 2}
                                width={pillWidth}
                                height={pillHeight}
                                rx={pillHeight / 2}
                                fill="rgba(255,255,255,0.68)"
                                stroke="#8B8B8B"
                                strokeWidth="1.2"
                            />
                            <text
                                x={outputPillX + pillWidth / 2}
                                y={output.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#111827"
                                fontSize="16"
                                fontWeight="700"
                                letterSpacing="0.35"
                            >
                                {output.label}
                            </text>
                        </g>
                    ))}
                </g>

                <g transform="translate(560 280)">
                    <circle className="rd-core-glow" r="122" fill="url(#rd-core-glow-gradient)" />
                    <circle r="90" fill="rgba(255,255,255,0.72)" stroke="#9CA3AF" strokeWidth="1.4" />
                    <circle r="64" fill="rgba(255,255,255,0.9)" stroke="#EA580C" strokeWidth="1.7" />
                    <g filter="url(#rd-icon-shadow)" transform="translate(-36 -36)">
                        <rect x="0" y="0" width="72" height="72" rx="18" fill="url(#rd-icon-gradient)" />
                        <rect x="20" y="19" width="35" height="9" rx="3" fill="#FED7AA" />
                        <rect x="20" y="33" width="35" height="9" rx="3" fill="#FED7AA" />
                        <rect x="32" y="47" width="23" height="9" rx="3" fill="#FED7AA" />
                    </g>
                    <text
                        y="120"
                        textAnchor="middle"
                        fill="#111827"
                        fontSize="15"
                        fontWeight="800"
                        letterSpacing="0.8"
                    >
                        {labels.center}
                    </text>
                    <text
                        y="143"
                        textAnchor="middle"
                        fill="#6B7280"
                        fontSize="11"
                        fontWeight="700"
                        letterSpacing="1.2"
                    >
                        {labels.centerNote}
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default function TheegartenPactec() {
    const [lang, setLang] = useState<PageLang>('en');
    const copy = PAGE_CONTENT[lang];

    useEffect(() => {
        const timeouts: number[] = [];
        const scrollToHash = () => {
            const hash = window.location.hash.slice(1);

            if (!hash) {
                return;
            }

            [80, 320].forEach((delay) => {
                const timeout = window.setTimeout(() => {
                    document.getElementById(hash)?.scrollIntoView({ block: 'start' });
                }, delay);
                timeouts.push(timeout);
            });
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);

        return () => {
            window.removeEventListener('hashchange', scrollToHash);
            timeouts.forEach((timeout) => window.clearTimeout(timeout));
        };
    }, [lang]);

    return (
        <>
            <PageMeta
                title={copy.metaTitle}
                description={copy.metaDescription}
                path="/theegarten-pactec"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(255,237,213,0.62),transparent_32%)]" />
                <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] lg:items-center lg:px-8 lg:py-20 xl:px-10">
                    <Reveal className="min-w-0 lg:max-w-[610px]">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="site-kicker">{copy.hero.kicker}</div>
                            <div
                                className="inline-flex rounded-full border border-orange-200/80 bg-white p-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
                                role="group"
                                aria-label={copy.language.label}
                            >
                                {(['en', 'de'] as const).map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setLang(option)}
                                        aria-pressed={lang === option}
                                        className={`rounded-full px-3 py-1.5 transition ${
                                            lang === option
                                                ? 'bg-orange-100 text-primary shadow-[0_8px_20px_-16px_rgba(234,88,12,0.8)]'
                                                : 'text-gray-500 hover:text-primary'
                                        }`}
                                    >
                                        {copy.language[option]}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <h1 className="hero-title mt-6 max-w-full break-words text-balance hyphens-auto text-[2.42rem] sm:text-[3.3rem] md:text-[4rem] lg:text-[3.25rem] xl:text-[3.55rem]">
                            {copy.hero.title}
                        </h1>
                        <p className="hero-copy mt-6 max-w-2xl">
                            {copy.hero.body}
                        </p>
                        <div className="mt-8">
                            <a
                                href="mailto:info@rapiddraft.ai?cc=adeel@rapiddraft.ai,sreekar@rapiddraft.ai,hasan@rapiddraft.ai"
                                className="btn-primary w-full sm:w-auto"
                            >
                                {copy.hero.cta}
                            </a>
                        </div>
                        <div className="mt-6 flex max-w-3xl flex-wrap gap-2.5">
                            {copy.hero.chips.map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[0_10px_26px_-24px_rgba(234,88,12,0.5)]"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="min-w-0">
                        <EngineeringStackDiagram labels={copy.diagrams.stack} />
                    </Reveal>
                </div>
            </section>

            <section id="security-first" className="hero-mesh relative overflow-hidden border-y border-stone-200/70 py-16 md:py-24">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(255,237,213,0.55),transparent_44%)]" />
                <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal>
                        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-lg">
                                <div className="site-kicker">{copy.security.kicker}</div>
                                <h2 className="section-title mt-5 text-balance">
                                    {copy.security.title}
                                </h2>
                            </div>
                            <p className="section-copy max-w-sm">
                                {copy.security.body}
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <SecurityFirstDeploymentDiagram labels={copy.diagrams.localAi} />
                    </Reveal>
                </div>
            </section>

            <Section id="live-demo" className="scroll-mt-24 !py-16 md:!py-24" background="light">
                <div className="grid gap-9 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch">
                    <Reveal className="lg:flex lg:h-full lg:flex-col">
                        <div className="site-kicker">{copy.demo.kicker}</div>
                        <h2 className="section-title mt-5 text-balance">{copy.demo.title}</h2>
                        <p className="section-copy mt-5">
                            {copy.demo.body}
                        </p>
                    </Reveal>

                    <div className="grid gap-3 sm:grid-cols-2 lg:h-full lg:auto-rows-fr">
                        {copy.demo.steps.map((step, index) => {
                            const mediaItems = 'mediaList' in step ? step.mediaList : 'media' in step ? [step.media] : [];

                            return (
                                <Reveal key={step.title} delay={index * 0.04}>
                                    <article className="surface-card flex h-full flex-col p-5">
                                        {mediaItems.length ? (
                                            <div className={`mb-5 grid gap-2 ${mediaItems.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                                                {mediaItems.map((media) => (
                                                    <div key={media.src} className="overflow-hidden rounded-[0.65rem] border border-stone-200 bg-stone-50/80">
                                                        <video
                                                            className="aspect-video w-full bg-stone-100 object-cover"
                                                            src={media.src}
                                                            aria-label={media.label}
                                                            controls
                                                            loop
                                                            muted
                                                            playsInline
                                                            preload="metadata"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                        <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                                        <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                            {step.title}
                                        </h3>
                                        <div className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                                            {step.body.map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </div>
                                    </article>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </Section>

            <section id="action-tracker" className="hero-mesh scroll-mt-24 relative overflow-hidden border-t border-stone-200/70 py-12 md:py-16">
                <div className="relative mx-auto max-w-[980px] px-5 sm:px-6 lg:px-8">
                    <Reveal>
                        <details className="group rounded-[0.9rem] border border-stone-200 bg-white/78 shadow-[0_24px_80px_-62px_rgba(17,24,39,0.28)]" open>
                            <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 text-left transition hover:bg-orange-50/55 sm:px-6">
                                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-gray-500 transition group-open:rotate-90">
                                    &gt;
                                </span>
                                <h2 className="text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl">
                                    {copy.nextSteps.title}
                                </h2>
                            </summary>
                            <div className="border-t border-stone-200/80">
                                <div className="grid grid-cols-[minmax(0,1fr)_8rem] border-b border-stone-200/80 bg-stone-50/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80 sm:px-6">
                                    {copy.nextSteps.columns.map((column) => (
                                        <div key={column}>{column}</div>
                                    ))}
                                </div>
                                <div>
                                    {copy.nextSteps.groups.map((group, groupIndex) => {
                                        const previousRows = copy.nextSteps.groups
                                            .slice(0, groupIndex)
                                            .reduce((total, item) => total + item.rows.length, 0);

                                        return (
                                            <div key={group.title} className="border-b border-stone-200/80 last:border-b-0">
                                                <div className="border-b border-stone-200/70 bg-orange-50/35 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:px-6">
                                                    {group.title}
                                                </div>
                                                <div className="divide-y divide-stone-200/80">
                                                    {group.rows.map(([action, status], rowIndex) => (
                                                        <div
                                                            key={action}
                                                            className="grid grid-cols-[minmax(0,1fr)_8rem] gap-4 px-5 py-4 text-sm leading-6 text-gray-700 sm:px-6"
                                                        >
                                                            <div className="flex min-w-0 items-start gap-3 font-semibold text-gray-950">
                                                                <span className="mt-0.5 shrink-0 font-mono text-xs text-primary">
                                                                    {String(previousRows + rowIndex + 1).padStart(2, '0')}
                                                                </span>
                                                                <span className="min-w-0 break-words">{action}</span>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
                                                                        status === 'Completed' || status === 'Abgeschlossen'
                                                                            ? 'border-slate-200 bg-slate-100 text-slate-700'
                                                                            : status === 'Scheduled' || status === 'Geplant'
                                                                            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                                                            : 'border-orange-200 bg-orange-50 text-primary'
                                                                    }`}
                                                                >
                                                                    {status}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </details>
                    </Reveal>
                </div>
            </section>

            <section id="pilot-programme" className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <div className="site-kicker mx-auto w-fit">{copy.pilot.kicker}</div>
                        <h2 className="section-title mt-5 text-balance">{copy.pilot.title}</h2>
                        <p className="section-copy mx-auto mt-5">
                            {copy.pilot.body}
                        </p>
                    </Reveal>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
                        {copy.pilot.phases.map((phase, index) => (
                            <Reveal key={phase.title} delay={index * 0.05}>
                                <article className="surface-card flex h-full flex-col p-5 xl:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="min-w-0 flex-1 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                            {phase.title}
                                            {phase.note ? <span className="block">{phase.note}</span> : null}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">{phase.body}</p>
                                    <p className="mt-5 rounded-[1rem] border border-orange-200/80 bg-orange-50/80 px-3 py-2.5 text-sm font-semibold leading-6 text-primary xl:mt-auto">
                                        {phase.deliverable}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <Section id="product-architecture" className="scroll-mt-24 !py-16 md:!py-24" background="light">
                <Reveal className="max-w-4xl">
                    <div className="site-kicker">{copy.architecture.kicker}</div>
                    <h2 className="section-title mt-5 max-w-3xl text-balance">{copy.architecture.title}</h2>
                    <p className="section-copy mt-5 max-w-3xl">{copy.architecture.body}</p>
                </Reveal>

                <Reveal delay={0.04}>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {copy.architecture.principles.map((point) => (
                            <div key={point.title} className="border-l border-orange-200 bg-white/60 px-5 py-4">
                                <h3 className="text-base font-semibold tracking-tight text-gray-950">{point.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">{point.body}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.08} className="min-w-0">
                    <details className="group mt-10 overflow-hidden rounded-[0.9rem] border border-slate-200 border-t-orange-300 bg-white shadow-[0_24px_80px_-58px_rgba(17,24,39,0.28)]">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 transition hover:bg-orange-50/45 sm:px-6">
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                                    {copy.architecture.stack.appendixTitle}
                                </h3>
                                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                    {copy.architecture.stack.appendixBody}
                                </p>
                            </div>
                            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 font-mono text-base leading-none text-slate-500 transition group-open:rotate-45 group-open:border-orange-200 group-open:text-primary">
                                +
                            </span>
                        </summary>
                        <div className="border-t border-slate-200">
                            <div className="overflow-x-auto">
                                <table
                                    aria-label={copy.architecture.stack.title}
                                    className="w-full min-w-[980px] table-fixed border-collapse text-left lg:min-w-0"
                                >
                                    <colgroup>
                                        <col className="w-[17%]" />
                                        <col className="w-[26%]" />
                                        <col className="w-[28%]" />
                                        <col className="w-[29%]" />
                                    </colgroup>
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            {copy.architecture.stack.columns.map((column, columnIndex) => (
                                                <th
                                                    key={column}
                                                    scope="col"
                                                    className={`px-5 py-5 align-middle font-mono text-xs font-semibold uppercase tracking-[0.28em] ${
                                                        columnIndex === 2 ? 'text-primary' : 'text-slate-600'
                                                    }`}
                                                >
                                                    {column}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {copy.architecture.stack.rows.map(([layer, poc, pilot, production]) => (
                                            <tr key={layer} className="border-b border-slate-100 last:border-b-0">
                                                <th
                                                    scope="row"
                                                    className="border-r border-slate-100 px-5 py-7 align-top text-[15px] font-semibold leading-7 text-slate-950 xl:text-base"
                                                >
                                                    {layer}
                                                </th>
                                                <td className="border-r border-slate-100 px-5 py-7 align-top text-[15px] leading-7 text-slate-600 xl:text-base">
                                                    <span className="block whitespace-pre-line break-words">{poc}</span>
                                                </td>
                                                <td className="border-r border-slate-100 bg-orange-50/25 px-5 py-7 align-top text-[15px] leading-7 text-slate-800 xl:text-base">
                                                    <span className="block whitespace-pre-line break-words">{pilot}</span>
                                                </td>
                                                <td className="px-5 py-7 align-top text-[15px] leading-7 text-slate-700 xl:text-base">
                                                    <span className="block whitespace-pre-line break-words">{production}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </details>
                </Reveal>

                <Reveal delay={0.12}>
                    <div className="mt-8 grid gap-3 md:grid-cols-3">
                        {copy.architecture.notes.map((note, index) => (
                            <div key={note} className="border-l border-orange-200 bg-white/55 px-5 py-4">
                                <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
                                    Note {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="mt-2 text-sm leading-6 text-gray-600">{note}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </Section>

            <Section id="product-roadmap" className="scroll-mt-24 !py-16 md:!py-24" background="light">
                <Reveal className="max-w-4xl">
                    <div className="site-kicker">{copy.roadmap.kicker}</div>
                    <h2 className="section-title mt-5 max-w-3xl text-balance">{copy.roadmap.title}</h2>
                    <p className="section-copy mt-5 max-w-3xl">{copy.roadmap.body}</p>
                </Reveal>

                <div id="product-roadmap-two-column" className="mt-10 scroll-mt-24">
                    <div className="grid gap-9 lg:grid-cols-2 lg:gap-14">
                        {[0, 3].map((startIndex) => (
                            <ol key={startIndex} className="relative space-y-7 pl-12">
                                <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-orange-200 via-stone-200 to-slate-200" />
                                {copy.roadmap.phases.slice(startIndex, startIndex + 3).map((phase, phaseIndex) => {
                                    const phaseNumber = startIndex + phaseIndex + 1;

                                    return (
                                        <li key={phase.title} className="relative">
                                            <div className="absolute -left-12 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-[#fffaf3] font-mono text-xs font-semibold text-primary shadow-[0_12px_32px_-26px_rgba(234,88,12,0.9)]">
                                                {String(phaseNumber).padStart(2, '0')}
                                            </div>
                                            <details className="group min-w-0 border-b border-stone-200/90 pb-5">
                                                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-1 text-left">
                                                    <h3 className="min-w-0 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                                        {phase.title}
                                                    </h3>
                                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-200 font-mono text-sm leading-none text-gray-500 transition group-open:rotate-45 group-open:border-orange-200 group-open:text-primary">
                                                        +
                                                    </span>
                                                </summary>
                                                <p className="max-w-xl pt-3 text-sm leading-6 text-gray-600">
                                                    {phase.body}
                                                </p>
                                            </details>
                                        </li>
                                    );
                                })}
                            </ol>
                        ))}
                    </div>
                </div>
            </Section>

            <section id="pilot-team" className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-[1180px]">
                        <div className="warm-panel overflow-hidden p-5 sm:p-7 lg:p-8">
                            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:items-center">
                                <div>
                                    <div className="site-kicker">{copy.team.kicker}</div>
                                    <h2 className="section-title mt-5 text-balance">
                                        {copy.team.title}
                                    </h2>
                                    <p className="section-copy mt-5">
                                        {copy.team.body}
                                    </p>
                                    <div className="mt-7">
                                        <a
                                            href="mailto:info@rapiddraft.ai?cc=adeel@rapiddraft.ai,sreekar@rapiddraft.ai,hasan@rapiddraft.ai"
                                            className="btn-primary w-full sm:w-auto"
                                        >
                                            {copy.team.cta}
                                        </a>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-3">
                                    {copy.team.members.map((leader) => (
                                        <article
                                            key={leader.name}
                                            className="rounded-[1.45rem] border border-stone-200/85 bg-white/82 p-4 shadow-[0_18px_44px_-36px_rgba(17,24,39,0.2)]"
                                        >
                                            <div className="overflow-hidden rounded-[1.2rem] border border-stone-200/80 bg-stone-100">
                                                <div className="aspect-[4/4.35]">
                                                    <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                                                </div>
                                            </div>
                                            <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                                {leader.name}
                                            </h3>
                                            <p className="mt-2 text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.14em] text-primary">
                                                {leader.title}
                                            </p>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">{leader.bio}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
