import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { langFromPathname, stripLangPrefix, withLangPrefix, type Lang } from './paths';

export type { Lang };

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /* Map an unprefixed internal path ('/platform', '/#roi-calculator') to the
     active locale's URL. Non-internal values (http, mailto, '#hash') pass through. */
  localizePath: (path: string) => string;
};

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => undefined,
  toggle: () => undefined,
  localizePath: (path) => path,
});

/* Global EN/DE language, derived from the /de URL prefix (see ./paths.ts).
   Consumers keep the same useLang() API as before; switching language
   navigates to the same page under the other prefix (preserving search +
   hash). <html lang> is set before paint by the inline script in index.html
   and kept in sync here on SPA navigation. localStorage 'rd-lang' is kept as
   a preference breadcrumb. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPathname(location.pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      try {
        localStorage.setItem('rd-lang', next);
      } catch {
        /* ignore storage errors */
      }
      const { pathname, search, hash } = window.location;
      if (next === langFromPathname(pathname)) return;
      navigate(`${withLangPrefix(stripLangPrefix(pathname), next)}${search}${hash}`);
    },
    [navigate],
  );

  const toggle = useCallback(() => setLang(lang === 'en' ? 'de' : 'en'), [lang, setLang]);

  const localizePath = useCallback(
    (path: string) => {
      if (!path.startsWith('/')) return path;
      return withLangPrefix(stripLangPrefix(path), lang);
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggle, localizePath }),
    [lang, setLang, toggle, localizePath],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
