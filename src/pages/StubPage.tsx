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
   are scheduled for a later build phase, so navigation and footer links never
   404 during review. */
export default function StubPage({
  eyebrow,
  title,
  note,
  metaTitle,
  metaDescription,
  path,
}: StubPageProps) {
  return (
    <div className="rd2 rd-page">
      <PageMeta title={metaTitle} description={metaDescription} path={path} robots="noindex" />
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <H1>{title}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              {note ?? 'This section is being finalized and will follow shortly.'}
            </Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
              <Button to="/" variant="secondary" arrow>
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
