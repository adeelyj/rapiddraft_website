import { createContext, useContext, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Locale = 'en' | 'de';

type LocaleContextValue = {
    locale: Locale;
    localizePath: (path: string) => string;
    switchLocalePath: (nextLocale: Locale) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
    locale: 'en',
    localizePath: (path) => path,
    switchLocalePath: (nextLocale) => (nextLocale === 'de' ? '/de' : '/'),
});

function stripLocalePrefix(pathname: string) {
    if (pathname === '/de') return '/';
    if (pathname.startsWith('/de/')) return pathname.slice(3);
    return pathname;
}

function withLocalePrefix(path: string, locale: Locale) {
    if (locale === 'en') return path;
    if (path === '/') return '/de';
    if (path.startsWith('/#')) return `/de${path.slice(1)}`;
    return `/de${path}`;
}

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
    const location = useLocation();

    const localizePath = (path: string) => {
        if (/^(https?:|mailto:|tel:)/.test(path)) return path;
        if (!path.startsWith('/')) return path;
        return withLocalePrefix(stripLocalePrefix(path), locale);
    };

    const switchLocalePath = (nextLocale: Locale) => {
        const unprefixedPathname = stripLocalePrefix(location.pathname);
        const nextPathname = withLocalePrefix(unprefixedPathname, nextLocale);
        return `${nextPathname}${location.search}${location.hash}`;
    };

    return (
        <LocaleContext.Provider value={{ locale, localizePath, switchLocalePath }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}
