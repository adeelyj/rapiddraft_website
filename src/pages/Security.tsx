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
        'RapidDraft runs on your infrastructure, on your network. Models stay on-prem, we do not train on your IP, and engineers keep the sign-off on every release.',
    },
    heroBadges: ['On-prem AI', 'SSO', 'Local / EU Cloud', 'GDPR-Compliant'],
    hero: {
      eyebrow: 'Security and sovereignty',
      heading: 'Your drawings never leave the building',
      subhead:
        'If your company will not let engineers paste into a public AI, that instinct is right. RapidDraft runs locally and never trains on your IP.',
      requestNda: 'Request an NDA',
      bookDemo: 'Book a demo',
      figureCaption:
        'RapidDraft runs on your hardware, on your network. Your data stays on-site, the agent runs the first pass, and an engineer approves before anything is written back to your PLM.',
      figureInputLabel: 'Your release package',
    },
    whyItMatters: {
      eyebrow: 'Why it matters',
      title: 'Bring AI to your most sensitive drawings without moving them',
      intro:
        'Your drawings and BOMs are among your most sensitive IP. RapidDraft brings AI to them without moving the data out of approved environments.',
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
        body: 'Models run locally, on-prem, so your designs never leave your environment.',
      },
      {
        title: 'IP protection',
        body: 'Training uses only anonymized or approved data. No third-party model ever sees your IP, and we never train on it.',
      },
      {
        title: 'Employee trust',
        body: 'Every finding is transparent and traces back to its source, and the engineer keeps the final sign-off, never the AI.',
      },
      {
        title: 'Data quality',
        body: 'One clean source across part data, drawings, and BOMs, with inconsistencies caught before release.',
      },
    ],
    deployment: {
      eyebrow: 'Deployment and data handling',
      title: 'Run it on-prem or in a private EU cloud',
      intro:
        'Run it on-prem for full sovereignty, or in a private or EU-hosted cloud we operate, scaled to your release volume.',
      points: [
        'Works around your CAD, PDM, PLM, and release process',
        'Scoped access, SSO, and role-based permissions',
        'Encryption and a full audit trail',
        'No uncontrolled data movement',
      ],
    },
    governance: {
      eyebrow: 'AI governance',
      title: 'Show-your-work agents, engineers in control',
      intro:
        'Models run locally and learn only from anonymized or approved data, and the agentic workflow shows its work.',
      points: [
        'See why each finding was raised',
        'Trace it to the rule, standard, or drawing note',
      ],
    },
    standards: {
      eyebrow: 'Standards and audit',
      title: 'Outputs that line up with your quality processes',
      intro:
        'Outputs follow your drawing standards, ISO and ASME, at the rigor your quality team already works to.',
      points: [
        'Release gates',
        'First-article inspection (FAIR, EMPB)',
        'BOM consistency',
        'Full audit trail',
        'Aligned with VDA Band 2',
      ],
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'GDPR-compliant by design',
      intro: '',
      points: [
        'EU data residency',
        'DPA available on request',
        'Subprocessor transparency',
      ],
      requestNda: 'Request an NDA',
      bookDemo: 'Book a demo',
    },
  },
  de: {
    meta: {
      title: 'Sicherheit und Souveränität | RapidDraft',
      description:
        'RapidDraft läuft auf Ihrer Infrastruktur, in Ihrem Netzwerk. Modelle bleiben On-Prem, wir trainieren nicht auf Ihrem IP, und Ihre Ingenieure behalten das letzte Wort bei jeder Freigabe.',
    },
    heroBadges: ['On-Prem-KI', 'SSO', 'Lokale/EU-Cloud', 'DSGVO-konform'],
    hero: {
      eyebrow: 'Sicherheit und Souveränität',
      heading: 'Ihre Zeichnungen verlassen das Haus nie',
      subhead:
        'Darf niemand etwas in eine öffentliche KI einfügen? Der Reflex stimmt. RapidDraft läuft lokal und trainiert nie auf Ihrem IP.',
      requestNda: 'NDA anfragen',
      bookDemo: 'Demo buchen',
      figureCaption:
        'RapidDraft läuft auf Ihrer Hardware, in Ihrem Netzwerk. Ihre Daten bleiben vor Ort, der Agent übernimmt den ersten Durchlauf, und ein Ingenieur gibt frei, bevor etwas in Ihr PLM zurückgeschrieben wird.',
      figureInputLabel: 'Ihr Freigabepaket',
    },
    whyItMatters: {
      eyebrow: 'Warum es zählt',
      title: 'KI auf Ihre sensibelsten Zeichnungen bringen, ohne sie zu verschieben',
      intro:
        'Zeichnungen und Stücklisten sind Ihr sensibelstes IP. RapidDraft bringt KI dazu, ohne sie aus freigegebenen Umgebungen zu bewegen.',
    },
    pillarsSection: {
      eyebrow: 'Die vier Säulen',
      title: 'Vier Zusagen hinter jeder Freigabe',
      intro:
        'Datensouveränität, IP-Schutz, Vertrauen der Mitarbeiter und Datenqualität, zusammengehalten durch einen kontrollierten Freigabe-Workflow.',
    },
    pillars: [
      {
        title: 'Datensouveränität',
        body: 'Modelle laufen lokal, On-Prem, sodass Ihre Konstruktionen Ihre Umgebung nie verlassen.',
      },
      {
        title: 'IP-Schutz',
        body: 'Das Training nutzt ausschließlich anonymisierte oder freigegebene Daten. Kein Drittanbieter-Modell sieht jemals Ihr IP, und wir trainieren nie darauf.',
      },
      {
        title: 'Vertrauen der Mitarbeiter',
        body: 'Jeder Befund ist transparent und führt auf seine Quelle zurück, und die finale Freigabe bleibt beim Ingenieur, nie bei der KI.',
      },
      {
        title: 'Datenqualität',
        body: 'Eine saubere Quelle über Teiledaten, Zeichnungen und Stücklisten hinweg, mit Inkonsistenzen, die vor der Freigabe gefunden werden.',
      },
    ],
    deployment: {
      eyebrow: 'Bereitstellung und Datenverarbeitung',
      title: 'Betreiben Sie es On-Prem oder in einer privaten EU-Cloud',
      intro:
        'Betreiben Sie es On-Prem für volle Souveränität oder in einer privaten bzw. EU-gehosteten Cloud, die wir betreiben, skaliert auf Ihr Freigabevolumen.',
      points: [
        'Fügt sich in Ihr CAD, PDM, PLM und Ihren Freigabeprozess ein',
        'Eingeschränkter Zugriff, SSO und rollenbasierte Berechtigungen',
        'Verschlüsselung und ein vollständiger Audit-Trail',
        'Keine unkontrollierte Datenbewegung',
      ],
    },
    governance: {
      eyebrow: 'KI-Governance',
      title: 'Agenten, die ihre Arbeit zeigen, Ingenieure in Kontrolle',
      intro:
        'Modelle laufen lokal und lernen nur aus anonymisierten oder freigegebenen Daten, und der agentische Workflow legt seine Arbeit offen.',
      points: [
        'Sehen, warum jeder Befund entstanden ist',
        'Auf die Regel, Norm oder Zeichnungsnotiz zurückverfolgen',
      ],
    },
    standards: {
      eyebrow: 'Standards und Audit',
      title: 'Ergebnisse, die zu Ihren Qualitätsprozessen passen',
      intro:
        'Ergebnisse folgen Ihren Zeichnungsstandards, ISO und ASME, in der Sorgfalt, mit der Ihr Qualitätsteam ohnehin arbeitet.',
      points: [
        'Freigabe-Gates',
        'Erstmusterprüfung (FAIR, EMPB)',
        'Stücklisten-Konsistenz',
        'Vollständiger Audit-Trail',
        'Konform mit VDA Band 2',
      ],
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'DSGVO-konform von Grund auf',
      intro: '',
      points: [
        'EU-Datenresidenz',
        'AVV auf Anfrage',
        'Transparenz über Unterauftragsverarbeiter',
      ],
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
      <header className="relative overflow-hidden">
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

      {/* ── How it runs: deployment, governance, standards, compliance ── */}
      <Section>
        <div className="mx-auto max-w-[1040px] border-b border-[var(--rd-hair)]">
          {[t.deployment, t.governance, t.standards, t.compliance].map((s) => (
            <div
              key={s.title}
              className="grid gap-x-12 gap-y-3 border-t border-[var(--rd-hair)] py-9 text-left md:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--rd-accent)]"
                  style={{ fontFamily: 'var(--rd-meta)' }}
                >
                  {s.eyebrow}
                </div>
                <H3 className="mt-2.5">{s.title}</H3>
              </div>
              <div>
                {s.intro && <Body soft>{s.intro}</Body>}
                <ul className={clsx('grid gap-x-8 gap-y-2.5 sm:grid-cols-2', s.intro && 'mt-4')}>
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--rd-accent)]"
                      />
                      <Body soft sm>
                        {p}
                      </Body>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
