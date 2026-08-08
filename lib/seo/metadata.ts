import type { Metadata } from "next";
import { siteConfig, agentInfo } from "@/lib/site-config";

/** Prefer landscape hero for link previews; agent portrait remains fallback elsewhere. */
const DEFAULT_OG_IMAGE = `${siteConfig.url}/images/hero/modern-nevada-home.jpg`;
const DEFAULT_OG_ALT = `${siteConfig.name} | ${agentInfo.name}`;

export type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  images?: string[];
  publishedTime?: string;
  modifiedTime?: string;
};

function toCanonicalUrl(path: string): string {
  if (path === "/") return siteConfig.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // Strip trailing slash (except root) so GSC sees one canonical form
  const trimmed =
    normalized.length > 1 && normalized.endsWith("/")
      ? normalized.slice(0, -1)
      : normalized;
  return `${siteConfig.url}${trimmed}`;
}

/**
 * Google Search Console + Bing Webmaster verification tokens from env.
 * Set GOOGLE_SITE_VERIFICATION to the content value from GSC HTML-tag method.
 */
function buildVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();

  if (!google && !bing && !yandex) return undefined;

  const other: Record<string, string> = {};
  if (bing) other["msvalidate.01"] = bing;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}

/**
 * Shared metadata builder for SEO, Open Graph, Twitter, GSC, and AI snippet hints.
 */
export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  // Only set a self-referencing canonical when `path` is provided.
  // Root layout must omit `path` so child routes do not inherit homepage canonical
  // (GSC: "Alternate page with proper canonical tag").
  const canonical = options.path ? toCanonicalUrl(options.path) : undefined;
  const images = options.images?.length ? options.images : [DEFAULT_OG_IMAGE];
  const verification = buildVerification();

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    authors: [{ name: agentInfo.name, url: `${siteConfig.url}/about` }],
    creator: agentInfo.name,
    publisher: agentInfo.brokerage,
    metadataBase: new URL(siteConfig.url),
    ...(canonical ? { alternates: { canonical } } : {}),
    ...(verification ? { verification } : {}),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: options.title,
      description: options.description,
      ...(canonical ? { url: canonical } : {}),
      siteName: siteConfig.name,
      locale: "en_US",
      type: options.type ?? "website",
      images: images.map((url) => ({
        url,
        alt: DEFAULT_OG_ALT,
        width: 1200,
        height: 630,
      })),
      ...(options.publishedTime && { publishedTime: options.publishedTime }),
      ...(options.modifiedTime && { modifiedTime: options.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "US-NV",
      "geo.placename": "Henderson, Las Vegas Valley, Nevada",
      "geo.position": "36.0017;-115.117",
      ICBM: "36.0017, -115.117",
      "og:locale": "en_US",
    },
  };
}
