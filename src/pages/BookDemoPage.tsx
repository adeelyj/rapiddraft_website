import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import { useLang } from '../i18n/LanguageContext';
import {
  Section,
  Container,
  Eyebrow,
  H1,
  H2,
  Subhead,
  Intro,
  Body,
  MetaRow,
} from '../components/ui/primitives';

const CONTENT = {
  en: {
    meta: {
      title: 'Book a demo | RapidDraft',
      description:
        'The best demo starts with a real release workflow. Tell us where drawings, reviews, or manufacturability checks create the most friction, and we will focus the conversation there.',
    },
    hero: {
      eyebrow: 'Book a demo',
      heading: 'Bring the workflow that is slowing your team down the most',
      subhead:
        'The best demo starts with a real release workflow, not a generic product tour. Tell us where drawings, reviews, or manufacturability checks create the most friction, and we will focus the conversation there.',
      inTheCall: [
        'Walk through the highest-effort workflow',
        'See where RapidDraft fits your CAD and release environment',
        'Decide whether it is a strong candidate for a narrow pilot',
      ],
      responseNote: 'We typically respond within 1 to 2 business days.',
    },
    form: {
      title: 'Share the workflow you want to walk through',
      intro: 'A focused request helps us make the demo specific and useful.',
      nameLabel: 'Name (required)',
      emailLabel: 'Work email (required)',
      companyLabel: 'Company',
      roleLabel: 'Role',
      cadToolsLabel: 'CAD tools',
      messageLabel: 'Message',
      submit: 'Book a demo',
    },
    pilot: {
      title: 'How a pilot works',
      intro:
        'Start with one focused workflow: a single product family, one drawing-release process, or one recurring review bottleneck.',
      steps: [
        'Measure review effort, repeated issues, and time to release.',
        'Expand team by team once the workflow proves itself.',
      ],
    },
    bestFit: {
      title: 'Best fit',
      items: [
        'Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.',
        'Supplier-facing programs where quality, certification, or manufacturing teams still depend on 2D documentation.',
        'Teams that want a measurable reduction in redraw and review effort before broader rollout.',
      ],
    },
  },
  de: {
    meta: {
      title: 'Demo buchen | RapidDraft',
      description:
        'Die beste Demo beginnt mit einem echten Freigabe-Workflow. Sagen Sie uns, wo Zeichnungen, Reviews oder Fertigbarkeitsprüfungen den größten Reibungsverlust verursachen, und wir richten das Gespräch genau darauf aus.',
    },
    hero: {
      eyebrow: 'Demo buchen',
      heading: 'Bringen Sie den Workflow mit, der Ihr Team am stärksten ausbremst',
      subhead:
        'Die beste Demo beginnt mit einem echten Freigabe-Workflow, nicht mit einer generischen Produkttour. Sagen Sie uns, wo Zeichnungen, Reviews oder Fertigbarkeitsprüfungen die größte Reibung verursachen, und wir richten das Gespräch genau darauf aus.',
      inTheCall: [
        'Den aufwändigsten Workflow gemeinsam durchgehen',
        'Sehen, wo RapidDraft in Ihre CAD- und Freigabeumgebung passt',
        'Entscheiden, ob er ein starker Kandidat für ein eng gefasstes Pilotprojekt ist',
      ],
      responseNote: 'Wir antworten in der Regel innerhalb von 1 bis 2 Werktagen.',
    },
    form: {
      title: 'Teilen Sie den Workflow, den Sie durchgehen möchten',
      intro: 'Eine gezielte Anfrage hilft uns, die Demo konkret und nützlich zu gestalten.',
      nameLabel: 'Name (erforderlich)',
      emailLabel: 'Geschäftliche E-Mail (erforderlich)',
      companyLabel: 'Unternehmen',
      roleLabel: 'Rolle',
      cadToolsLabel: 'CAD-Tools',
      messageLabel: 'Nachricht',
      submit: 'Demo buchen',
    },
    pilot: {
      title: 'So läuft ein Pilotprojekt ab',
      intro:
        'Beginnen Sie mit einem fokussierten Workflow: einer einzelnen Produktfamilie, einem Zeichnungs-Freigabeprozess oder einem wiederkehrenden Review-Engpass.',
      steps: [
        'Review-Aufwand, wiederkehrende Probleme und Zeit bis zur Freigabe messen.',
        'Team für Team ausweiten, sobald sich der Workflow bewährt hat.',
      ],
    },
    bestFit: {
      title: 'Passt am besten zu',
      items: [
        'Konstruktionsteams im Maschinenbau mit häufigen CAD-Revisionen und zeichnungsintensiven Freigabe-Workflows.',
        'Lieferantenbezogene Programme, in denen Qualitäts-, Zertifizierungs- oder Fertigungsteams weiterhin auf 2D-Dokumentation angewiesen sind.',
        'Teams, die vor einem breiteren Rollout eine messbare Reduktion von Nachzeichnungs- und Review-Aufwand erreichen wollen.',
      ],
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

/* Left-aligned bullet list inside a centered tile/panel. */
function BulletList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={clsx('flex flex-col gap-3 text-left', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--rd-accent)]"
          />
          <Body soft sm>
            {item}
          </Body>
        </li>
      ))}
    </ul>
  );
}

export default function BookDemoPage() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 rd-page">
      <PageMeta title={t.meta.title} description={t.meta.description} path="/book-demo" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">{t.hero.heading}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">{t.hero.subhead}</Subhead>
            <MetaRow className="mt-8 justify-center" items={[...t.hero.inTheCall]} />
            <Body soft sm className="mt-6">
              {t.hero.responseNote}
            </Body>
          </div>
        </Container>
      </header>

      {/* ── Request form ─────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.form.title} intro={t.form.intro} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <form
            name="bookdemo"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-5 text-left"
          >
            <input type="hidden" name="form-name" value="bookdemo" />

            <div>
              <label htmlFor="bookdemo-name" className="rd-label">
                {t.form.nameLabel}
              </label>
              <input
                id="bookdemo-name"
                type="text"
                name="name"
                required
                className="rd-input"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-email" className="rd-label">
                {t.form.emailLabel}
              </label>
              <input
                id="bookdemo-email"
                type="email"
                name="email"
                required
                className="rd-input"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-company" className="rd-label">
                {t.form.companyLabel}
              </label>
              <input
                id="bookdemo-company"
                type="text"
                name="company"
                className="rd-input"
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-role" className="rd-label">
                {t.form.roleLabel}
              </label>
              <input
                id="bookdemo-role"
                type="text"
                name="role"
                className="rd-input"
                autoComplete="organization-title"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-cad-tools" className="rd-label">
                {t.form.cadToolsLabel}
              </label>
              <input id="bookdemo-cad-tools" type="text" name="cad-tools" className="rd-input" />
            </div>

            <div>
              <label htmlFor="bookdemo-message" className="rd-label">
                {t.form.messageLabel}
              </label>
              <textarea id="bookdemo-message" name="message" className="rd-textarea" />
            </div>

            <button type="submit" className="rd-btn rd-btn--primary mt-1">
              {t.form.submit}
            </button>
          </form>
        </div>
      </Section>

      {/* ── How a pilot works ────────────────────────────── */}
      <Section>
        <SectionHeader title={t.pilot.title} intro={t.pilot.intro} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <BulletList items={t.pilot.steps} />
        </div>
      </Section>

      {/* ── Best fit ─────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.bestFit.title} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <BulletList items={t.bestFit.items} />
        </div>
      </Section>
    </div>
  );
}
