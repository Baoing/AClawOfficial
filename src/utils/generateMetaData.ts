import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://www.aiclawers.com/';
export const DEFAULT_TITLE = 'AIClawers — Shopify engineering & growth';
export const DEFAULT_DESCRIPTION =
  'AIClawers helps brands ship dependable Shopify outcomes—thoughtful storefronts, maintainable themes, custom apps, and integrations that match how you operate. We pair senior engineering with practical, AI-assisted workflows so your team feels guided (not guessing at APIs), launches stay on schedule, and performance holds up when campaigns and traffic spike.';
/** Absolute OG image on this site (place a 1200×630 asset at this path or update this URL). */
export const DEFAULT_IMAGE_URL = new URL('/images/Shopify_Flow_workflow_202604091532.jpeg', DEFAULT_URL).toString();

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [{ url: '/images/logo/logo.svg', type: 'image/svg+xml' }],
    shortcut: '/images/logo/logo.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'AIClawers',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (
  title?: string,
  description?: string,
  canonicaUrl?: string,
  imageUrl?: string
): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
