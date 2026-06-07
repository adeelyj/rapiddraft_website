import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'de';

function initialLang(): Lang {
  if (typeof document !== 'undefined' && document.documentElement.lang === 'de') return 'de';
  return 'en';
}

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => undefined,
  toggle: () => undefined,
});

/* Global EN/DE language. The active language lives in React state (so every
   consumer re-renders on change) and is mirrored to <html lang> + localStorage.
   An inline script in index.html sets <html lang> before paint to avoid a flash. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem('rd-lang', next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === 'en' ? 'de' : 'en'), [lang, setLang]);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
