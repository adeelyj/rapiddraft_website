import { useEffect, useState } from 'react';
import { Closing, Footer } from './components/Closing';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { QuestionBank } from './components/QuestionBank';
import { Research } from './components/Research';
import { ROICalculator } from './components/ROICalculator';
import './forward.css';

export default function ForwardPage() {
  const [bankOpen, setBankOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content') ?? null;
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute('content') ?? null;

    document.title = 'Forward Engineering x RapidDraft | RapidDraft';
    description?.setAttribute(
      'content',
      'Forward Engineering x RapidDraft demo with research links, ROI framing, and bundled Forward-scoped wiki content.'
    );

    if (robots) {
      robots.setAttribute('content', 'noindex, nofollow');
    }

    return () => {
      document.title = previousTitle;

      if (description && previousDescription !== null) {
        description.setAttribute('content', previousDescription);
      }

      if (robots && previousRobots !== null) {
        robots.setAttribute('content', previousRobots);
      }
    };
  }, []);

  return (
    <main className="forward-page">
      <Nav onOpenBank={() => setBankOpen(true)} />
      <Hero />
      <ROICalculator />
      <Closing />
      <Research />
      <Footer />
      {bankOpen ? <QuestionBank onClose={() => setBankOpen(false)} /> : null}
    </main>
  );
}
