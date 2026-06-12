import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site';

interface PageMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  keywords?: string;
  noindex?: boolean;
  schema?: object | object[];
}

const SCHEMA_ATTR = 'data-page-schema';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function PageMeta({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = 'website',
  keywords,
  noindex = false,
  schema,
}: PageMetaProps) {
  useEffect(() => {
    const path = canonicalPath ?? window.location.pathname;
    const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');
    if (keywords) setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);

    setLink('canonical', canonical);

    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);

    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    const injected: HTMLScriptElement[] = [];
    if (schema) {
      const list = Array.isArray(schema) ? schema : [schema];
      list.forEach((s) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute(SCHEMA_ATTR, 'true');
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
        injected.push(script);
      });
    }

    return () => {
      injected.forEach((s) => s.remove());
    };
  }, [title, description, canonicalPath, ogImage, ogType, keywords, noindex, schema]);

  return null;
}
