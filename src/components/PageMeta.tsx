import { useEffect } from 'react';

type PageMetaProps = {
    title: string;
    description: string;
    path?: string;
    image?: string;
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

export default function PageMeta({ title, description, path, image = DEFAULT_IMAGE }: PageMetaProps) {
    useEffect(() => {
        const origin = window.location.origin;
        const url = new URL(path ?? window.location.pathname, origin).toString();
        const resolvedImage = new URL(image, origin).toString();

        document.title = title;

        upsertMeta('meta[name="description"]', { name: 'description', content: description });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: resolvedImage });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: resolvedImage });
    }, [description, image, path, title]);

    return null;
}
