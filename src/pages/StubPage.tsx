import PageMeta from '../components/PageMeta';
import { Container, Eyebrow, H1, Subhead, Button } from '../components/ui/primitives';

type StubPageProps = {
  eyebrow: string;
  title: string;
  note?: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
};

/* Interim placeholder rendered in the new design language. Used for pages that
   are scheduled for the next build phase on the major-changes-hasan branch, so
   navigation and footer links never 404 during review. */
export default function StubPage({
  eyebrow,
  title,
  note,
  metaTitle,
  metaDescription,
  path,
}: StubPageProps) {
  return (
    <div className="rd2">
      <PageMeta title={metaTitle} description={metaDescription} path={path} robots="noindex" />
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div className="pointer-events-none absolute inset-0 rd-gridlines" aria-hidden="true" />
        <Container className="relative py-24 sm:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <H1>{title}</H1>
            <Subhead className="mt-6 max-w-2xl">
              {note ?? 'This section is being built on the major-changes-hasan branch and will follow shortly.'}
            </Subhead>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/" variant="secondary" arrow>
                Back to home
              </Button>
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
