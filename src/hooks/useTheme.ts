import { useReducer } from 'react';

export type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  if (typeof document !== 'undefined') {
    const t = document.documentElement.dataset.theme;
    if (t === 'dark' || t === 'light') return t;
  }
  return 'light';
}

/* Global light/dark theme. The active theme lives on <html data-theme>, which
   is the single source of truth and drives every --rd-* token via CSS. We read
   it on each render (no duplicated React state to fall out of sync) and force a
   re-render on change so the toggle icon and themed logo update. An inline
   script in index.html sets the initial value before paint to avoid a flash. */
export function useTheme() {
  const [, force] = useReducer((n: number) => n + 1, 0);
  const theme = currentTheme();

  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('rd-theme', next);
    } catch {
      /* ignore storage errors (private mode etc.) */
    }
    force();
  };

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, toggle, setTheme };
}
