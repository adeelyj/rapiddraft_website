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
        'If your company will not let engineers paste anything into a public AI, that is the right instinct, and RapidDraft is built for it. Models run locally, on your infrastructure. We do not train on your IP, and your engineers keep the sign-off.',
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
        'In automotive and precision manufacturing, your drawings and BOMs are some of your most sensitive IP, and the reflex is to keep them off any third-party cloud. RapidDraft brings AI to that work without moving the data out of approved environments or out of your engineers’ hands.',
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
        'Run it on-prem for full sovereignty, or in a private or EU-hosted cloud if you would rather we operate it, scaled to your release volume. Either way you get scoped access, SSO, role-based permissions, encryption, and a full audit trail, with no uncontrolled data movement.',
    },
    governance: {
      eyebrow: 'AI governance',
      title: 'Show-your-work agents, engineers in control',
      intro:
        'Models run locally and learn only from anonymized or approved data. The agentic workflow shows its work, so you can see why each finding was raised and trace it back to the rule, standard, or drawing note it came from. Engineers, not the AI, make every release decision.',
    },
    standards: {
      eyebrow: 'Standards and audit',
      title: 'Outputs that line up with your quality processes',
      intro:
        'Outputs follow your drawing standards, ISO and ASME. Release gates, first-article inspection (FAIR and EMPB), BOM consistency, and a full audit trail line up with VDA Band 2 and the rigor your quality team already works to.',
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'GDPR-compliant by design',
      intro:
        'RapidDraft is GDPR-compliant by design, with EU data residency, a DPA available on request, and subprocessor transparency.',
      todoTag: 'TODO: SOC 2 / ISO 27001: state status or “in progress”',
      requestNda: 'Request an NDA',
      bookDemo: 'Book a demo',
    },
  },
  de: {
    meta: {
      title: 'Sicherheit und Souveränität | RapidDraft',
      description:
        'RapidDraft läuft auf Ihrer Infrastruktur, in Ihrem Netzwerk. Modelle bleiben On-Prem, wir trainieren nicht auf Ihrem IP, und Ihre Ingenieure behalten die Freigabe über jede Konstruktionsfreigabe.',
    },
    heroBadges: ['On-Prem-KI', 'SSO', 'Lokale/EU-Cloud', 'DSGVO-konform'],
    hero: {
      eyebrow: 'Sicherheit und Souveränität',
      heading: 'Ihre Zeichnungen verlassen das Haus nie',
      subhead:
        'Wenn Ihr Unternehmen es Ingenieuren verbietet, etwas in eine öffentliche KI einzufügen, ist das der richtige Reflex, und genau dafür ist RapidDraft gebaut. Modelle laufen lokal, auf Ihrer Infrastruktur. Wir trainieren nicht auf Ihrem IP, und Ihre Ingenieure behalten die Freigabe.',
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
        'In der Automobil- und Präzisionsfertigung gehören Ihre Zeichnungen und Stücklisten zu Ihrem sensibelsten IP, und der Reflex ist, sie aus jeder Drittanbieter-Cloud herauszuhalten. RapidDraft bringt KI in diese Arbeit, ohne die Daten aus freigegebenen Umgebungen oder aus den Händen Ihrer Ingenieure zu bewegen.',
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
        'Betreiben Sie es On-Prem für volle Souveränität oder in einer privaten bzw. EU-gehosteten Cloud, wenn wir es lieber für Sie betreiben sollen, skaliert auf Ihr Freigabevolumen. So oder so erhalten Sie eingeschränkten Zugriff, SSO, rollenbasierte Berechtigungen, Verschlüsselung und einen vollständigen Audit-Trail, ohne unkontrollierte Datenbewegung.',
    },
    governance: {
      eyebrow: 'KI-Governance',
      title: 'Agenten, die ihre Arbeit zeigen, Ingenieure in Kontrolle',
      intro:
        'Modelle laufen lokal und lernen nur aus anonymisierten oder freigegebenen Daten. Der agentische Workflow zeigt seine Arbeit, sodass Sie sehen, warum jeder Befund entstanden ist, und ihn auf die Regel, den Standard oder die Zeichnungsnotiz zurückführen können. Ingenieure, nicht die KI, treffen jede Freigabeentscheidung.',
    },
    standards: {
      eyebrow: 'Standards und Audit',
      title: 'Ergebnisse, die zu Ihren Qualitätsprozessen passen',
      intro:
        'Ergebnisse folgen Ihren Zeichnungsstandards, ISO und ASME. Freigabe-Gates, Erstmusterprüfung (FAIR und EMPB), Stücklisten-Konsistenz und ein vollständiger Audit-Trail passen zu VDA Band 2 und der Sorgfalt, mit der Ihr Qualitätsteam ohnehin arbeitet.',
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'DSGVO-konform by Design',
      intro:
        'RapidDraft ist DSGVO-konform by Design, mit EU-Datenresidenz, einem auf Anfrage verfügbaren AVV und Transparenz über Unterauftragsverarbeiter.',
      todoTag: 'TODO: SOC 2 / ISO 27001: Status angeben oder “in Bearbeitung”',
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
          {[t.deployment, t.governance, t.standards, t.compliance].map((s, i) => (
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
                <Body soft>{s.intro}</Body>
                {i === 3 && (
                  <div className="mt-4">
                    <Tag accent>{t.compliance.todoTag}</Tag>
                  </div>
                )}
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
