// Google Business Profile Schema Data
// NAP must match GBP exactly for nevadarealestatemarket.com

import {
  siteConfig,
  agentInfo,
  officeInfo,
  businessHours,
  specialHours,
  hendersonServiceAreas,
  businessCategories,
  socialProfileUrls,
  businessAttributes,
  agentStats,
} from "./site-config";
import { getGbpPhotoSchemaUrls } from "./gbp-media";

export const businessInfo = {
  name: siteConfig.fullName,
  alternateName: "Henderson MacDonald Highlands Real Estate",
  address: {
    streetAddress: officeInfo.address.street,
    addressLocality: officeInfo.address.city,
    addressRegion: officeInfo.address.state,
    postalCode: officeInfo.address.zip,
    addressCountry: "US",
  },
  phone: {
    display: agentInfo.phone,
    tel: agentInfo.phoneTel.replace("tel:", ""),
    sms: agentInfo.smsTel.replace("sms:", ""),
  },
  email: agentInfo.email,
  url: siteConfig.url,

  license: agentInfo.license,
  priceRange: "$$$",
  foundingDate: siteConfig.foundingDate,

  hours: businessHours,

  geo: {
    latitude: officeInfo.coordinates.lat,
    longitude: officeInfo.coordinates.lng,
  },

  serviceAreas: hendersonServiceAreas,
  categories: businessCategories,

  services: [
    {
      name: "Luxury Home Sales",
      description: "High-end properties and estates in Henderson",
    },
    {
      name: "Buyer Representation",
      description: "Full-service home buying assistance in Henderson",
    },
    {
      name: "Seller Representation",
      description: "List and sell your Henderson home for top dollar",
    },
    {
      name: "Custom Build Representation",
      description: "Expert guidance for custom home builds and estates",
    },
    {
      name: "Private Showings",
      description: "Discreet private tours of luxury Henderson properties",
    },
    {
      name: "Market Consultations",
      description: "Personalized Henderson market insights and analysis",
    },
    {
      name: "Property Management Consulting",
      description: "Investment and rental property guidance",
    },
    {
      name: "California Relocation Services",
      description: "Helping CA buyers transition to Henderson",
    },
    {
      name: "55+ Community Specialist",
      description: "Anthem and Henderson active adult communities",
    },
    {
      name: "New Construction Representation",
      description: "Builder negotiations and buyer protection",
    },
  ],

  attributes: businessAttributes,

  socialProfiles: socialProfileUrls,
  languages: ["English", "Spanish"],
};

export const gbpDescription = {
  whoWeAre: siteConfig.gbpDescription,

  whatWeDo: `Dr. Jan Duffy provides expert representation for luxury properties, custom builds, and estates across Henderson's most prestigious communities. Ranked in Nevada's Top 1%, she offers private showings, personalized consultations, and market insights tailored to buyers and sellers seeking premier real estate.

Specialized services include buyer and seller representation, luxury home sales, custom build guidance, private showings, market consultations, and property management consulting. Dr. Jan's approach combines deep Henderson neighborhood expertise with the global resources of Berkshire Hathaway HomeServices.`,

  whereWeServe: `Dr. Jan serves Henderson and surrounding Southern Nevada communities including Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem, Calico Ridge, Mission Hills, Whitney Ranch, Black Mountain, Gibson Springs, Paradise Hills, River Mountain, Foothills, Silverado Ranch, McCullough Hills, Green Valley North, and Midway.

Office located at 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052. Open daily 6:00 AM – 9:00 PM. Call (702) 500-1955 or visit nevadarealestatemarket.com to start your Henderson luxury real estate journey.`,
};

export const gbpFAQs = [
  {
    question: "What Henderson communities does Dr. Jan Duffy specialize in?",
    answer:
      "Dr. Jan specializes in Henderson's premier communities including Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem, Calico Ridge, Mission Hills, Whitney Ranch, and surrounding areas. She provides expert representation for luxury properties, custom builds, and estates. Call (702) 500-1955.",
  },
  {
    question: "Is Dr. Jan Duffy ranked among top Henderson real estate agents?",
    answer:
      "Yes. Dr. Jan Duffy is ranked in Nevada's Top 1% of REALTORS® with Berkshire Hathaway HomeServices Nevada Properties. She has closed $127M+ in transactions and served 500+ satisfied clients since 2013.",
  },
  {
    question: "Does Dr. Jan offer private showings for luxury Henderson homes?",
    answer:
      "Yes. Dr. Jan Duffy offers private showings and personalized consultations for luxury properties, custom builds, and estates in Henderson. Call or text (702) 500-1955 to schedule a private tour.",
  },
  {
    question: "What are Dr. Jan Duffy's office hours in Henderson?",
    answer:
      "Dr. Jan Duffy is available daily from 6:00 AM to 9:00 PM, seven days a week. The office is located at 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052. Online appointments are also available. Closed July 3–4, 2026 for the 4th of July holiday.",
  },
  {
    question: "What is the average home price in Henderson in 2026?",
    answer:
      "As of January 2026, the Henderson median home price is $485,000, up 5.1% year-over-year. Luxury communities like Lake Las Vegas and MacDonald Ranch command higher price points. Contact Dr. Jan at (702) 500-1955 for current market data.",
  },
  {
    question:
      "Does Dr. Jan help buyers relocating to Henderson from California?",
    answer:
      "Yes. California relocation is a specialty. Dr. Jan helps CA buyers understand Nevada's tax advantages, compare home values, and find the perfect Henderson neighborhood. Call (702) 500-1955 for relocation assistance.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer:
      `Call or text (702) 500-1955 for immediate assistance, or email ${agentInfo.email}. Office visits available at 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052. Open daily 6 AM – 9 PM. Online appointments also available.`,
  },
  {
    question: "What makes Henderson MacDonald Highlands Real Estate different?",
    answer:
      "Backed by Berkshire Hathaway HomeServices and Warren Buffett's legacy of trust, Dr. Jan Duffy combines Henderson luxury market expertise with world-class marketing resources. The business is women-owned, veteran-owned, LGBTQ+ friendly, and wheelchair accessible.",
  },
];

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function generateLocalBusinessSchema() {
  const galleryImages = getGbpPhotoSchemaUrls();

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    image:
      galleryImages.length > 0
        ? galleryImages
        : `${siteConfig.url}/images/agent/dr-jan-duffy-headshot.webp`,
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    foundingDate: businessInfo.foundingDate,
    description: siteConfig.gbpDescription,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...ALL_DAYS],
        opens: businessHours.opens,
        closes: businessHours.closes,
      },
      ...specialHours.map((entry) => ({
        "@type": "OpeningHoursSpecification" as const,
        validFrom: entry.date,
        validThrough: entry.date,
        description: `Closed — ${entry.label}`,
      })),
    ],
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Henderson Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agentStats.averageRating.toString(),
      reviewCount: agentStats.reviewCount.toString(),
      bestRating: "5",
    },
    sameAs: businessInfo.socialProfiles,
    knowsAbout: [
      "Henderson luxury real estate",
      "MacDonald Ranch homes",
      "Lake Las Vegas estates",
      "Green Valley Ranch",
      "Seven Hills Henderson",
      "Anthem Henderson",
      "Custom home builds",
      "Luxury estates",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
      url: "https://www.bfrre.com",
    },
  };
}

export function generateFAQSchema(faqs = gbpFAQs) {
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
