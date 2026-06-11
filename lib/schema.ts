/**
 * Schema.org Structured Data Generators for nevadarealestatemarket.com
 * SEO, AEO (FAQ/speakable), and GEO (entity @graph) optimized
 *
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

import {
  siteConfig,
  agentInfo,
  officeInfo,
  agentStats,
  businessHours,
  hendersonServiceAreas,
  socialProfileUrls,
} from "./site-config";

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export interface NeighborhoodData {
  name: string;
  slug: string;
  description: string;
  medianPrice?: string;
  latitude?: number;
  longitude?: number;
  containedIn?: string;
}

export interface CommunityAmenity {
  name: string;
  description?: string;
}

export interface SeniorCommunityData {
  name: string;
  description: string;
  priceRange: string;
  numberOfHomes: number;
  yearBuilt?: string;
  amenities: CommunityAmenity[];
  latitude?: number;
  longitude?: number;
  hoaFees?: string;
  ageRestriction?: string;
}

// ============================================================================
// Constants
// ============================================================================

const BASE_URL = siteConfig.url;
const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const PERSON_ID = `${BASE_URL}/#person`;

// Social media profiles — matches GBP sameAs
export const socialProfiles = {
  youtube: "https://www.youtube.com/@DrDuffy",
  tiktok: "https://www.tiktok.com/@drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy/",
  twitter: "https://x.com/drjanduffy",
  linkedin:
    "https://www.linkedin.com/company/dr-jan-duffy-realtor-berkshire-hathaway-homeservices-henderson/",
  facebook: "https://www.facebook.com/DrJanDuffyRealtorHenderson/",
  pinterest: "https://www.pinterest.com/DrJanDuffy/",
};

// ============================================================================
// Core Schema Generators
// ============================================================================

/**
 * Generate RealEstateAgent schema (LocalBusiness subtype)
 * Used site-wide in the root layout
 */
export function generateRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": ORG_ID,
    name: officeInfo.name,
    alternateName: [
      siteConfig.name,
      siteConfig.fullName,
      "BHHS Nevada Properties",
      "Berkshire Hathaway HomeServices",
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/images/dr-jan-duffy.jpg`,
    image: `${BASE_URL}/images/dr-jan-duffy.jpg`,
    description: siteConfig.gbpDescription,
    telephone: agentInfo.phoneTel.replace("tel:", ""),
    email: agentInfo.email,
    priceRange: "$$$",
    foundingDate: siteConfig.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Henderson",
        sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
      },
      ...hendersonServiceAreas.map((area) => ({
        "@type": "Place" as const,
        name: area,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: businessHours.opens,
        closes: businessHours.closes,
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      validIn: {
        "@type": "State",
        name: "Nevada",
      },
      identifier: agentInfo.license,
    },
    sameAs: socialProfileUrls,
    parentOrganization: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#parent-organization`,
      name: "Berkshire Hathaway HomeServices Nevada Properties",
      url: "https://www.bfrre.com",
      parentOrganization: {
        "@type": "Organization",
        name: "Berkshire Hathaway HomeServices",
        url: "https://www.bhhs.com",
        sameAs: "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: agentInfo.phoneTel.replace("tel:", ""),
      contactType: "customer service",
      email: agentInfo.email,
      areaServed: "US",
      availableLanguage: ["English"],
    },
    hasMap: officeInfo.googleMapsUrl,
    employee: { "@id": PERSON_ID },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agentStats.averageRating.toString(),
      reviewCount: agentStats.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout: [
      "Henderson luxury real estate",
      "MacDonald Ranch homes",
      "Lake Las Vegas estates",
      "Green Valley Ranch",
      "Seven Hills Henderson",
      "Anthem Henderson",
      "Custom home builds",
      "Luxury estates",
      "Property management consulting",
    ],
    slogan: "Luxury Henderson Real Estate | Nevada's Top 1% REALTOR®",
  };
}

/**
 * Person schema linked to RealEstateAgent — strengthens E-E-A-T and GEO entity graph
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: agentInfo.name,
    jobTitle: agentInfo.title,
    description: siteConfig.gbpDescription,
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/images/dr-jan-duffy.jpg`,
    email: agentInfo.email,
    telephone: agentInfo.phoneTel.replace("tel:", ""),
    worksFor: { "@id": ORG_ID },
    sameAs: socialProfileUrls,
    knowsAbout: [
      "Henderson luxury real estate",
      "Las Vegas real estate market",
      "MacDonald Ranch homes",
      "Lake Las Vegas estates",
      "Summerlin luxury communities",
      "55+ active adult communities",
      "California relocation to Nevada",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      identifier: agentInfo.license,
    },
  };
}

/**
 * Site-wide @graph schema for SEO, AEO, and GEO
 * Combines RealEstateAgent + Person + Organization + WebSite entities
 */
export function generateSiteGraphSchema() {
  return combineSchemas(
    generateRealEstateAgentSchema(),
    generatePersonSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
  );
}

/**
 * Generate Organization schema for BHHS brand
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#parent-organization`,
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.bfrre.com",
    logo: `${BASE_URL}/favicon-32x32.png`,
    parentOrganization: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices",
      url: "https://www.bhhs.com",
      sameAs: [
        "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
        "https://www.linkedin.com/company/berkshire-hathaway-homeservices/",
      ],
    },
  };
}

// ============================================================================
// Navigation Schema Generators
// ============================================================================

/**
 * Generate BreadcrumbList schema for navigation trails
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
    publisher: {
      "@id": ORG_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/listings?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================================
// Content Schema Generators
// ============================================================================

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating = 5,
  worstRating = 1,
) {
  return {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: worstRating.toString(),
  };
}

/**
 * Generate Review schema for individual testimonials
 */
export function generateReviewSchema(reviews: ReviewItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": ORG_ID,
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    aggregateRating: generateAggregateRatingSchema(
      agentStats.averageRating,
      agentStats.reviewCount,
    ),
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished:
        review.datePublished || new Date().toISOString().split("T")[0],
    })),
  };
}

// ============================================================================
// Location Schema Generators
// ============================================================================

/**
 * Generate Place schema for neighborhoods
 */
export function generateNeighborhoodSchema(neighborhood: NeighborhoodData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${BASE_URL}/neighborhoods/${neighborhood.slug}#place`,
    name: `${neighborhood.name}, Las Vegas`,
    description: neighborhood.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: neighborhood.containedIn || "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };

  if (neighborhood.latitude && neighborhood.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
    };
  }

  if (neighborhood.containedIn) {
    schema.containedInPlace = {
      "@type": "City",
      name: neighborhood.containedIn,
      addressRegion: "NV",
    };
  }

  return schema;
}

/**
 * Generate Residence schema for 55+ communities
 * Uses ResidentialComplex with amenityFeature
 */
export function generateSeniorCommunitySchema(community: SeniorCommunityData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: community.name,
    description: community.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Henderson",
      addressRegion: "NV",
      addressCountry: "US",
    },
    numberOfAccommodationUnits: community.numberOfHomes,
    petsAllowed: true,
  };

  if (community.latitude && community.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: community.latitude,
      longitude: community.longitude,
    };
  }

  if (community.yearBuilt) {
    schema.yearBuilt = community.yearBuilt;
  }

  // Add amenity features
  if (community.amenities.length > 0) {
    schema.amenityFeature = community.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
      ...(amenity.description && { description: amenity.description }),
    }));
  }

  // Add price range as offers
  if (community.priceRange) {
    schema.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "Price Range",
        value: community.priceRange,
      },
      {
        "@type": "PropertyValue",
        name: "Age Restriction",
        value: community.ageRestriction || "55+",
      },
    ];

    if (community.hoaFees) {
      (schema.additionalProperty as Array<Record<string, unknown>>).push({
        "@type": "PropertyValue",
        name: "HOA Fees",
        value: community.hoaFees,
      });
    }
  }

  return schema;
}

/**
 * Generate RealEstateListing schema for property pages
 */
export function generateRealEstateListingSchema(listing: {
  name: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  images?: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.name,
    description: listing.description,
    url: listing.url.startsWith("http")
      ? listing.url
      : `${BASE_URL}${listing.url}`,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address.street,
      addressLocality: listing.address.city,
      addressRegion: listing.address.state,
      postalCode: listing.address.zip,
      addressCountry: "US",
    },
    ...(listing.bedrooms && { numberOfBedrooms: listing.bedrooms }),
    ...(listing.bathrooms && { numberOfBathroomsTotal: listing.bathrooms }),
    ...(listing.sqft && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: listing.sqft,
        unitCode: "FTK",
      },
    }),
    ...(listing.images &&
      listing.images.length > 0 && {
        image: listing.images.map((img) =>
          img.startsWith("http") ? img : `${BASE_URL}${img}`,
        ),
      }),
  };
}

// ============================================================================
// Page-Specific Schema Generators
// ============================================================================

/**
 * Generate Service schema for services pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${BASE_URL}${service.url}`,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: service.areaServed || [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "North Las Vegas",
    ],
    serviceType: "Real Estate Services",
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url.startsWith("http") ? page.url : `${BASE_URL}${page.url}`}#webpage`,
    name: page.name,
    description: page.description,
    url: page.url.startsWith("http") ? page.url : `${BASE_URL}${page.url}`,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORG_ID,
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
  };
}

/**
 * WebPage with SpeakableSpecification — AEO / voice search optimization
 */
export function generateSpeakableWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  cssSelectors?: string[];
}) {
  return {
    ...generateWebPageSchema(page),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector:
        page.cssSelectors ?? [
          "h1",
          "[data-speakable]",
          ".speakable-summary",
        ],
    },
  };
}

/**
 * Article schema for market reports and insights — GEO / content citations
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const pageUrl = article.url.startsWith("http")
    ? article.url
    : `${BASE_URL}${article.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: article.headline,
    description: article.description,
    url: pageUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    image: article.image ?? `${BASE_URL}/images/dr-jan-duffy.jpg`,
    inLanguage: "en-US",
  };
}

/**
 * Dataset schema for market statistics — GEO / structured data for AI crawlers
 */
export function generateDatasetSchema(dataset: {
  name: string;
  description: string;
  url: string;
  dateModified: string;
  variables: Array<{ name: string; value: string }>;
}) {
  const pageUrl = dataset.url.startsWith("http")
    ? dataset.url
    : `${BASE_URL}${dataset.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${pageUrl}#dataset`,
    name: dataset.name,
    description: dataset.description,
    url: pageUrl,
    dateModified: dataset.dateModified,
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    spatialCoverage: {
      "@type": "Place",
      name: "Clark County, Nevada",
      geo: {
        "@type": "GeoCoordinates",
        latitude: officeInfo.coordinates.lat,
        longitude: officeInfo.coordinates.lng,
      },
    },
    variableMeasured: dataset.variables.map((v) => ({
      "@type": "PropertyValue",
      name: v.name,
      value: v.value,
    })),
    license: "https://creativecommons.org/licenses/by/4.0/",
  };
}

/**
 * ItemList schema for neighborhood and service index pages
 */
export function generateItemListSchema(list: {
  name: string;
  description?: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: list.name,
    ...(list.description && { description: list.description }),
    itemListElement: list.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
      ...(item.description && { description: item.description }),
    })),
  };
}

export type PageSchemaBundleOptions = {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  speakable?: boolean;
  datePublished?: string;
  dateModified?: string;
};

/**
 * Standard page-level @graph: WebPage (+ optional speakable), BreadcrumbList, FAQPage
 */
export function generatePageSchemaBundle(options: PageSchemaBundleOptions) {
  const path = options.path.startsWith("/") ? options.path : `/${options.path}`;
  const pageInput = {
    name: options.name,
    description: options.description,
    url: path,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
  };

  const schemas: Record<string, unknown>[] = [
    options.speakable
      ? generateSpeakableWebPageSchema(pageInput)
      : generateWebPageSchema(pageInput),
  ];

  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(options.breadcrumbs));
  }

  if (options.faqs && options.faqs.length > 0) {
    schemas.push(generateFAQSchema(options.faqs));
  }

  return schemas;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Combine multiple schemas into a single JSON-LD script
 */
export function combineSchemas(...schemas: Record<string, unknown>[]) {
  if (schemas.length === 1) {
    return schemas[0];
  }
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      const { "@context": _, ...rest } = schema;
      return rest;
    }),
  };
}

/**
 * Convert schema object to JSON-LD string
 */
export function schemaToJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
