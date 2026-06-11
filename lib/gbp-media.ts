/**
 * Google Business Profile photos & videos — Henderson MacDonald Highlands Real Estate
 * Add files to public/images/gbp/ and set src paths here to display on-site.
 */

import { siteConfig, socialProfiles, officeInfo } from "./site-config";

export type GbpPhotoCategory =
  | "office"
  | "team"
  | "neighborhood"
  | "listing"
  | "luxury"
  | "at-work";

export type GbpPhoto = {
  id: string;
  src: string;
  alt: string;
  category: GbpPhotoCategory;
  caption?: string;
  /** GBP upload category label */
  gbpCategory: string;
};

export type GbpVideo = {
  id: string;
  title: string;
  description: string;
  /** YouTube video ID — leave empty to show channel link only */
  youtubeId?: string;
  url: string;
};

/** Henderson GBP photo upload plan — mirror these in Google Business Profile */
export const gbpPhotoUploadPlan = [
  {
    category: "Office & Team",
    gbpLabel: "At work / Team",
    description:
      "3185 St Rose Pkwy, Suite 101 — exterior, reception, Dr. Jan headshot, BHHS branding",
    examples: [
      "Office exterior at St Rose Pkwy",
      "Reception or conference room",
      "Dr. Jan Duffy professional headshot",
      "At closing table or with clients (with permission)",
    ],
    targetCount: "5–10 photos",
    folder: "public/images/gbp/office/",
  },
  {
    category: "Henderson Communities",
    gbpLabel: "Exterior / Neighborhood",
    description:
      "Show geographic expertise across Henderson service areas",
    examples: [
      "Lake Las Vegas waterfront",
      "MacDonald Ranch / MacDonald Highlands views",
      "Seven Hills hillside homes",
      "Green Valley Ranch golf and parks",
      "Anthem community amenities",
    ],
    targetCount: "10–15 photos",
    folder: "public/images/gbp/neighborhoods/",
  },
  {
    category: "Luxury Listings & Estates",
    gbpLabel: "Inside / Products",
    description: "High-end interiors, custom builds, and estate features",
    examples: [
      "Luxury kitchen and great room",
      "Pool and outdoor living",
      "Custom build progress or finished estate",
      "Lake Las Vegas or guard-gated entry",
    ],
    targetCount: "10–15 photos",
    folder: "public/images/gbp/luxury/",
  },
  {
    category: "Closings & Client Success",
    gbpLabel: "At work",
    description: "Sold signs, key handoffs, happy clients (with written consent)",
    examples: [
      "SOLD sign in Seven Hills or Anthem",
      "Closing day key handoff",
      "Buyer/seller testimonial photo",
    ],
    targetCount: "10–15 photos",
    folder: "public/images/gbp/closings/",
  },
] as const;

/**
 * Site gallery photos — add entries when files exist under public/images/gbp/
 * Example:
 * { id: "office-exterior", src: "/images/gbp/office/st-rose-exterior.webp", ... }
 */
export const gbpPhotos: GbpPhoto[] = [
  // Add photos here after uploading to public/images/gbp/
];

export const gbpVideos: GbpVideo[] = [
  {
    id: "henderson-luxury-channel",
    title: "Dr. Jan Duffy on YouTube",
    description:
      "Market updates, Henderson community tours, and luxury home insights from Dr. Jan Duffy, REALTOR®.",
    url: socialProfiles.youtube,
  },
  {
    id: "henderson-tiktok",
    title: "Dr. Jan Duffy on TikTok",
    description:
      "Short-form tours of Henderson neighborhoods, listing previews, and buyer tips.",
    url: socialProfiles.tiktok,
  },
];

export const gbpMediaLinks = {
  googleMapsPhotos: officeInfo.googleReviewsUrl,
  youtube: socialProfiles.youtube,
  instagram: socialProfiles.instagram,
  tiktok: socialProfiles.tiktok,
  facebook: socialProfiles.facebook,
};

export function getGbpPhotoSchemaUrls(): string[] {
  return gbpPhotos.map((photo) => `${siteConfig.url}${photo.src}`);
}

export function generateImageGallerySchema() {
  if (gbpPhotos.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${siteConfig.name} — Photos`,
    description:
      "Photos of Henderson luxury real estate, office, and communities served by Dr. Jan Duffy.",
    url: `${siteConfig.url}/google-business#photos`,
    image: gbpPhotos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${siteConfig.url}${photo.src}`,
      name: photo.alt,
      description: photo.caption ?? photo.alt,
    })),
  };
}

export function generateVideoSchema() {
  const embedded = gbpVideos.filter((v) => v.youtubeId);
  if (embedded.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} — Videos`,
    itemListElement: embedded.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
        url: video.url,
        publisher: {
          "@type": "Organization",
          name: siteConfig.fullName,
        },
      },
    })),
  };
}
