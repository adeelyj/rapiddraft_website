import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { stripLangPrefix, withLangPrefix } from '../i18n/paths';

type PageMetaProps = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    robots?: string;
};

const DEFAULT_IMAGE = '/media/rd_social.png';

function upsertMeta(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
    });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector<HTMLLinkElement>(selector);

    if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
    });
}

export default function PageMeta({ title, description, path, image = DEFAULT_IMAGE, robots }: PageMetaProps) {
    const { lang } = useLang();

    useEffect(() => {
        const origin = window.location.origin;
        /* `path` is the unprefixed (English) path; the live URL carries the
           locale. Canonical follows the active locale, hreflang lists both. */
        const basePath = stripLangPrefix(path ?? window.location.pathname);
        const url = new URL(withLangPrefix(basePath, lang), origin).toString();
        const enUrl = new URL(basePath, origin).toString();
        const deUrl = new URL(withLangPrefix(basePath, 'de'), origin).toString();
        const resolvedImage = new URL(image, origin).toString();
        const robotsTag = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');

        document.title = title;

        upsertMeta('meta[name="description"]', { name: 'description', content: description });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: resolvedImage });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: resolvedImage });

        upsertLink('link[rel="canonical"]', { rel: 'canonical', href: url });
        upsertLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: enUrl });
        upsertLink('link[rel="alternate"][hreflang="de"]', { rel: 'alternate', hreflang: 'de', href: deUrl });
        upsertLink('link[rel="alternate"][hreflang="x-default"]', {
            rel: 'alternate',
            hreflang: 'x-default',
            href: enUrl,
        });

        if (robots) {
            upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
        } else if (robotsTag) {
            robotsTag.remove();
        }
    }, [description, image, lang, path, robots, title]);

    return null;
}
