export type Lang = 'en' | 'de';

const DE_PREFIX = '/de';

/* The URL is the source of truth: /de and /de/... render German, everything
   else English. This keeps German pages indexable, shareable, and bookmarkable
   (a client-side toggle is invisible to crawlers). */
export function langFromPathname(pathname: string): Lang {
  return pathname === DE_PREFIX || pathname.startsWith(`${DE_PREFIX}/`) ? 'de' : 'en';
}

export function stripLangPrefix(pathname: string): string {
  if (pathname === DE_PREFIX) return '/';
  if (pathname.startsWith(`${DE_PREFIX}/`)) return pathname.slice(DE_PREFIX.length);
  return pathname;
}

export function withLangPrefix(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  if (path === '/') return DE_PREFIX;
  if (path.startsWith('/#')) return `${DE_PREFIX}${path.slice(1)}`;
  return `${DE_PREFIX}${path}`;
}
