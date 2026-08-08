import type { Metadata } from "next";
import { siteConfig, agentInfo } from "@/lib/site-config";

const DEFAULT_OG_IMAGE = `${siteConfig.url}/images/dr-jan-duffy.jpg`;

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

function toCanonicalUrl(path?: string): string {
  if (!path || path === "/") return siteConfig.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

/**
 * Shared metadata builder for SEO, Open Graph, Twitter, and AI snippet hints.
 */
export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const canonical = toCanonicalUrl(options.path);
  const images = options.images?.length ? options.images : [DEFAULT_OG_IMAGE];

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    authors: [{ name: agentInfo.name, url: `${siteConfig.url}/about` }],
    creator: agentInfo.name,
    publisher: agentInfo.brokerage,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
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
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: options.type ?? "website",
      images: images.map((url) => ({
        url,
        alt: `${agentInfo.name} | ${siteConfig.name}`,
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
