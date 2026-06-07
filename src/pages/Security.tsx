import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import {
  Section,
  Container,
  Eyebrow,
  H1,
  H2,
  H3,
  Subhead,
  Intro,
  Body,
  Button,
  Tag,
  Figure,
} from '../components/ui/primitives';
import OnPremFigure from '../components/diagrams/OnPremFigure';
import { useLang } from '../i18n/LanguageContext';

const CONTENT = {
  en: {
    meta: {
      title: 'Security and sovereignty | RapidDraft',
      description:
        'RapidDraft runs on your infrastructure, on your network. Models stay on-prem, training stays governed, and engineers keep the final say over every release.',
    },
    heroBadges: ['On-prem AI', 'SSO', 'Local / EU Cloud', 'GDPR-Compliant'],
    hero: {
      eyebrow: 'Security and sovereignty',
      heading: 'Enterprise AI that never leaves your control',
      subhead:
        'RapidDraft is built for teams who cannot send drawings to a third-party cloud. Models run on your infrastructure, training stays governed, and your engineers keep the final say.',
      requestNda: 'Request an NDA',
      bookDemo: 'Book a demo',
      figureCaption:
        'RapidDraft runs on your hardware, on your network. Your data stays on-site, the agent orchestrates the work, and an engineer approves before anything is written back to your PLM.',
      figureInputLabel: 'Your release package',
    },
    whyItMatters: {
      eyebrow: 'Why it matters',
      title: 'Bring AI to your most sensitive IP without moving it',
      intro:
        "In automotive and precision manufacturing, your drawings and BOMs are some of your most sensitive IP. RapidDraft brings AI into that work without moving the data out of approved environments or out of your engineers' hands.",
    },
    pillarsSection: {
      eyebrow: 'The four pillars',
      title: 'Four commitments behind every release',
      intro:
        'Data sovereignty, IP protection, employee trust, and data quality, held together by one governed drawing-release workflow.',
    },
    pillars: [
      {
        title: 'Data sovereignty',
        body: 'AI models run locally, on-prem, so your designs never leave your environment.',
      },
      {
        title: 'IP protection',
        body: 'Training uses only anonymized or approved data, and no third-party model ever sees your IP.',
      },
      {
        title: 'Employee trust',
        body: 'Workflows are transparent, traceable, and reliable, and final approval always stays with your engineers.',
      },
      {
        title: 'Data quality',
        body: 'One clean source across part data, drawings, and BOMs.',
      },
    ],
    deployment: {
      eyebrow: 'Deployment and data handling',
      title: 'Run it on-prem or in a private EU cloud',
      intro:
        'Run it on-prem for full sovereignty, or in a private or EU-hosted cloud if you would rather we operate it, scaling to your release volume. Either way you get scoped access, SSO, role-based permissions, encryption, and a complete audit trail, with no uncontrolled data movement.',
    },
    governance: {
      eyebrow: 'AI governance',
      title: 'Transparent agents, engineers in control',
      intro:
        'Models run locally and learn only from anonymized or approved data. The agentic workflow is transparent and traceable, so you can see why a finding was raised, and engineers, not the AI, make every release decision.',
    },
    standards: {
      eyebrow: 'Standards and audit',
      title: 'Outputs that line up with your quality processes',
      intro:
        'Outputs follow your drawing standards, ISO and ASME. Release gates, first-article inspection (FAIR and EMPB), BOM consistency, and a full audit trail line up with VDA and your quality processes.',
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'GDPR-compliant by design',
      intro:
        'RapidDraft is GDPR-compliant by design, with EU data residency, a DPA available on request, and subprocessor transparency.',
      todoTag: 'TODO: SOC 2 / ISO 27001 — state status or “in progress”',
      requestNda: 'Request an NDA',
      bookDemo: 'Book a demo',
    },
  },
  de: {
    meta: {
      title: 'Sicherheit und Souveränität | RapidDraft',
      description:
        'RapidDraft läuft auf Ihrer Infrastruktur, in Ihrem Netzwerk. Modelle bleiben On-Prem, das Training bleibt kontrolliert, und Ihre Ingenieure behalten bei jeder Freigabe das letzte Wort.',
    },
    heroBadges: ['On-Prem-KI', 'SSO', 'Lokale/EU-Cloud', 'DSGVO-konform'],
    hero: {
      eyebrow: 'Sicherheit und Souveränität',
      heading: 'Enterprise-KI, die Ihre Kontrolle nie verlässt',
      subhead:
        'RapidDraft ist für Teams gebaut, die keine Zeichnungen in eine Drittanbieter-Cloud geben dürfen. Modelle laufen auf Ihrer Infrastruktur, das Training bleibt kontrolliert, und Ihre Ingenieure behalten das letzte Wort.',
      requestNda: 'NDA anfragen',
      bookDemo: 'Demo buchen',
      figureCaption:
        'RapidDraft läuft auf Ihrer Hardware, in Ihrem Netzwerk. Ihre Daten bleiben vor Ort, der Agent orchestriert die Arbeit, und ein Ingenieur gibt frei, bevor etwas in Ihr PLM zurückgeschrieben wird.',
      figureInputLabel: 'Ihr Freigabepaket',
    },
    whyItMatters: {
      eyebrow: 'Warum es zählt',
      title: 'Bringen Sie KI in Ihr sensibelstes IP, ohne es zu verschieben',
      intro:
        'In der Automobil- und Präzisionsfertigung gehören Ihre Zeichnungen und Stücklisten zu Ihrem sensibelsten IP. RapidDraft bringt KI in diese Arbeit, ohne die Daten aus freigegebenen Umgebungen oder aus den Händen Ihrer Ingenieure zu bewegen.',
    },
    pillarsSection: {
      eyebrow: 'Die vier Säulen',
      title: 'Vier Versprechen hinter jeder Freigabe',
      intro:
        'Datensouveränität, IP-Schutz, Vertrauen der Mitarbeiter und Datenqualität, zusammengehalten durch einen kontrollierten Freigabe-Workflow.',
    },
    pillars: [
      {
        title: 'Datensouveränität',
        body: 'KI-Modelle laufen lokal, On-Prem, sodass Ihre Konstruktionen Ihre Umgebung nie verlassen.',
      },
      {
        title: 'IP-Schutz',
        body: 'Das Training nutzt ausschließlich anonymisierte oder freigegebene Daten, und kein Drittanbieter-Modell sieht jemals Ihr IP.',
      },
      {
        title: 'Vertrauen der Mitarbeiter',
        body: 'Workflows sind transparent, nachvollziehbar und verlässlich, und die finale Freigabe bleibt stets bei Ihren Ingenieuren.',
      },
      {
        title: 'Datenqualität',
        body: 'Eine saubere Quelle über Teiledaten, Zeichnungen und Stücklisten hinweg.',
      },
    ],
    deployment: {
      eyebrow: 'Bereitstellung und Datenverarbeitung',
      title: 'Betreiben Sie es On-Prem oder in einer privaten EU-Cloud',
      intro:
        'Betreiben Sie es On-Prem für volle Souveränität oder in einer privaten bzw. EU-gehosteten Cloud, wenn wir es lieber für Sie betreiben sollen, skaliert auf Ihr Freigabevolumen. So oder so erhalten Sie eingeschränkten Zugriff, SSO, rollenbasierte Berechtigungen, Verschlüsselung und einen vollständigen Audit-Trail, ohne unkontrollierte Datenbewegung.',
    },
    governance: {
      eyebrow: 'KI-Governance',
      title: 'Transparente Agenten, Ingenieure in Kontrolle',
      intro:
        'Modelle laufen lokal und lernen nur aus anonymisierten oder freigegebenen Daten. Der agentische Workflow ist transparent und nachvollziehbar, sodass Sie sehen, warum ein Befund entstanden ist, und Ingenieure, nicht die KI, treffen jede Freigabeentscheidung.',
    },
    standards: {
      eyebrow: 'Standards und Audit',
      title: 'Ergebnisse, die zu Ihren Qualitätsprozessen passen',
      intro:
        'Ergebnisse folgen Ihren Zeichnungsstandards, ISO und ASME. Freigabe-Gates, Erstmusterprüfung (FAIR und EMPB), Stücklisten-Konsistenz und ein vollständiger Audit-Trail passen zu VDA und Ihren Qualitätsprozessen.',
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'DSGVO-konform by Design',
      intro:
        'RapidDraft ist DSGVO-konform by Design, mit EU-Datenresidenz, einem auf Anfrage verfügbaren AVV und Transparenz über Unterauftragsverarbeiter.',
      todoTag: 'TODO: SOC 2 / ISO 27001 — Status angeben oder “in Bearbeitung”',
      requestNda: 'NDA anfragen',
      bookDemo: 'Demo buchen',
    },
  },
} as const;

/* Consistent centered section header used by every section. */
function SectionHeader({
  eyebrow,
  title,
  intro,
  display = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  display?: boolean;
}) {
  return (
    <div className={clsx('mx-auto text-center', display ? 'max-w-[1000px]' : 'max-w-[860px]')}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <H2 display={display}>{title}</H2>
      {intro && <Intro className="mx-auto mt-5 max-w-[760px]">{intro}</Intro>}
    </div>
  );
}

export default function Security() {
  const { lang } = useLang();
  const t = CONTENT[lang];
  return (
    <div className="rd2 rd-page">
      <PageMeta
        title={t.meta.title}
        description={t.meta.description}
        path="/security"
      />

      {/* ── Hero (centered) + centerpiece figure ─────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">{t.hero.heading}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              {t.hero.subhead}
            </Subhead>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {t.heroBadges.map((b) => (
                <Tag key={b}>{b}</Tag>
              ))}
            </div>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/deal-room/nda-request" variant="primary">
                {t.hero.requestNda}
              </Button>
              <Button to="/book-demo" variant="secondary" arrow>
                {t.hero.bookDemo}
              </Button>
            </div>
          </div>

          {/* Centerpiece figure, directly under the hero */}
          <div className="mx-auto mt-10 w-full max-w-[1120px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
            <Figure caption={t.hero.figureCaption}>
              <OnPremFigure inputLabel={t.hero.figureInputLabel} />
            </Figure>
          </div>
        </Container>
      </header>

      {/* ── Why it matters ───────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.whyItMatters.eyebrow}
          title={t.whyItMatters.title}
          intro={t.whyItMatters.intro}
        />
      </Section>

      {/* ── The four pillars ─────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.pillarsSection.eyebrow}
          title={t.pillarsSection.title}
          intro={t.pillarsSection.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {t.pillars.map((pillar, i) => (
            <div key={pillar.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{pillar.title}</H3>
              <Body soft sm className="mt-2.5">
                {pillar.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Deployment and data handling ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.deployment.eyebrow}
          title={t.deployment.title}
          intro={t.deployment.intro}
        />
      </Section>

      {/* ── AI governance ────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.governance.eyebrow}
          title={t.governance.title}
          intro={t.governance.intro}
        />
      </Section>

      {/* ── Standards and audit ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.standards.eyebrow}
          title={t.standards.title}
          intro={t.standards.intro}
        />
      </Section>

      {/* ── Compliance ───────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow={t.compliance.eyebrow}
          title={t.compliance.title}
          intro={t.compliance.intro}
        />
        <div className="mt-8 flex justify-center">
          <Tag accent>{t.compliance.todoTag}</Tag>
        </div>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/deal-room/nda-request" variant="primary">
            {t.compliance.requestNda}
          </Button>
          <Button to="/book-demo" variant="secondary" arrow>
            {t.compliance.bookDemo}
          </Button>
        </div>
      </Section>
    </div>
  );
}
