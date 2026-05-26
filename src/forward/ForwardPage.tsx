import { useEffect } from 'react';
import { Closing, Footer } from './components/Closing';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { PilotOptions } from './components/PilotOptions';
import { Research } from './components/Research';
import { ROICalculator } from './components/ROICalculator';
import './forward.css';

const FORWARD_TITLE = 'Forward Engineering × RapidDraft';
const FORWARD_DESCRIPTION =
  'Forward Engineering × RapidDraft — an agentic layer for engineering review, analysis, and collaboration. Drawing release, design review, and manufacturing feedback kept on the CAD model.';
const FORWARD_URL = 'https://forward.rapiddraft.ai/';

// Swap a single attribute on an existing element, returning a restore fn.
// No-op (and returns a no-op restore) if the element doesn't exist.
function swapAttr(selector: string, attr: string, next: string): () => void {
  const el = document.querySelector(selector);
  if (!el) return () => {};
  const previous = el.getAttribute(attr);
  el.setAttribute(attr, next);
  return () => {
    if (previous === null) {
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, previous);
    }
  };
}

export default function ForwardPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = FORWARD_TITLE;

    const restoreFns: Array<() => void> = [
      swapAttr('meta[name="description"]', 'content', FORWARD_DESCRIPTION),
      swapAttr('meta[property="og:title"]', 'content', FORWARD_TITLE),
      swapAttr('meta[property="og:description"]', 'content', FORWARD_DESCRIPTION),
      swapAttr('meta[property="og:url"]', 'content', FORWARD_URL),
      swapAttr('meta[name="twitter:title"]', 'content', FORWARD_TITLE),
      swapAttr('meta[name="twitter:description"]', 'content', FORWARD_DESCRIPTION),
    ];

    // The main site's index.html intentionally omits a robots meta so the
    // rest of rapiddraft.ai stays indexable. The Forward page wants
    // noindex/nofollow — create the meta on mount, remove it on unmount.
    const existingRobots = document.querySelector('meta[name="robots"]');
    let robotsRestore: () => void;
    if (existingRobots) {
      const previous = existingRobots.getAttribute('content');
      existingRobots.setAttribute('content', 'noindex, nofollow');
      robotsRestore = () => {
        if (previous === null) {
          existingRobots.removeAttribute('content');
        } else {
          existingRobots.setAttribute('content', previous);
        }
      };
    } else {
      const created = document.createElement('meta');
      created.setAttribute('name', 'robots');
      created.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(created);
      robotsRestore = () => created.remove();
    }
    restoreFns.push(robotsRestore);

    return () => {
      document.title = previousTitle;
      for (const restore of restoreFns) restore();
    };
  }, []);

  return (
    <main className="forward-page">
      <Nav />
      <Hero />
      <ROICalculator />
      <Closing />
      <PilotOptions />
      <Research />
      <Footer />
    </main>
  );
}
