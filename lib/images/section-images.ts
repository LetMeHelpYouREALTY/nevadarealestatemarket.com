import type { HeroImage } from "@/lib/images/types";
import { COMMUNITY_HERO_IMAGES } from "@/lib/images/community-images";

export type SectionImageMatch = HeroImage & { key: string };

type SectionRule = { key: string; test: RegExp; src: string; alt: string };

/**
 * Named-community heading matches first (longest slug wins) so
 * "About Sun City Anthem" does not fall through to the generic 55+ photo.
 */
const COMMUNITY_RULES: SectionRule[] = Object.entries(COMMUNITY_HERO_IMAGES)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([slug, img]) => ({
    key: `community-${slug}`,
    test: new RegExp(slug.replace(/-/g, "[\\s-]"), "i"),
    src: img.src,
    alt: img.alt,
  }));

/**
 * Specific heading matches first; greedy buyer/seller patterns last.
 * Photos live in public/images (git backup). Cloudflare Images hosted
 * storage is used when NEXT_PUBLIC_CF_IMAGES_HASH is set — see lib/images/src.ts.
 */
const HEADING_RULES: SectionRule[] = [
  {
    key: "named-schools",
    test: /named schools|schools near|school campus/i,
    src: "/images/sections/section-named-schools.jpg",
    alt: "Henderson Nevada school campus building used as a location landmark",
  },
  {
    key: "tax-savings",
    test: /income tax savings|state income tax savings/i,
    src: "/images/sections/section-tax-savings.jpg",
    alt: "Nevada desert home representing California-to-Nevada tax relocation",
  },
  {
    key: "equity",
    test: /equity position|stronger than you think/i,
    src: "/images/sections/section-equity.jpg",
    alt: "Move-up Henderson home with pool representing seller equity",
  },
  {
    key: "divorce-probate",
    test: /situations we help|divorce|probate/i,
    src: "/images/sections/section-divorce-probate.jpg",
    alt: "Quiet Nevada street for discreet divorce and probate home sales",
  },
  {
    key: "services",
    test: /real estate services|core real estate|neighborhood services/i,
    src: "/images/sections/section-services.jpg",
    alt: "Henderson office desk for Nevada real estate services",
  },
  {
    key: "service-areas",
    test: /service areas|areas we serve/i,
    src: "/images/sections/section-service-areas.jpg",
    alt: "Las Vegas Valley aerial covering Henderson Summerlin and North Las Vegas",
  },
  {
    key: "specialization",
    test: /areas of specialization/i,
    src: "/images/sections/section-specialization.jpg",
    alt: "Mixed Las Vegas Valley housing types showing areas of specialization",
  },
  {
    key: "clark-county",
    test: /about clark county/i,
    src: "/images/sections/section-clark-county.jpg",
    alt: "Aerial of Clark County Nevada suburban housing and mountains",
  },
  {
    key: "property-search",
    test: /property searches|popular property/i,
    src: "/images/sections/section-property-search.jpg",
    alt: "Mixed Nevada home styles along a Henderson street for MLS searches",
  },
  {
    key: "why-henderson",
    test: /why henderson/i,
    src: "/images/sections/section-henderson.jpg",
    alt: "Palm-lined Henderson Nevada neighborhood with McCullough Range",
  },
  {
    key: "why-summerlin",
    test: /why summerlin/i,
    src: "/images/sections/section-summerlin.jpg",
    alt: "Summerlin homes with Red Rock Canyon sandstone cliffs",
  },
  {
    key: "segment-outlook",
    test: /segment outlook/i,
    src: "/images/sections/section-segment-outlook.jpg",
    alt: "Aerial rooftops showing mixed Las Vegas Valley housing segments",
  },
  {
    key: "market-cities",
    test: /valley cities|market profiles/i,
    src: "/images/sections/section-service-areas.jpg",
    alt: "Las Vegas Valley cities housing profiles from the air",
  },
  {
    key: "55-plus",
    test: /55|active adult|sun city|del webb|downsiz|extract your equity/i,
    src: "/images/sections/section-55-plus-clubhouse.jpg",
    alt: "Active adult 55+ villas and clubhouse pool in Southern Nevada",
  },
  {
    key: "new-construction",
    test: /new construction|builder|taylor morrison|william lyon|toll brothers/i,
    src: "/images/sections/section-new-homes-street.jpg",
    alt: "New-construction homes in a Southern Nevada builder community",
  },
  {
    key: "luxury",
    test: /luxury|custom home|the ridges|macdonald highlands/i,
    src: "/images/sections/section-luxury.jpg",
    alt: "Luxury Nevada great room with desert mountain views",
  },
  {
    key: "relocation",
    test: /reloc|california|no state income tax|moving/i,
    src: "/images/sections/section-relocation.jpg",
    alt: "Move-in day at a Las Vegas Valley home for relocating buyers",
  },
  {
    key: "investment",
    test: /invest|rental|cap rate|cash flow/i,
    src: "/images/properties/investment-townhomes.jpg",
    alt: "Nevada townhomes suited to rental and investment analysis",
  },
  {
    key: "valuation",
    test: /home worth|cma|appraisal|price your home|home value/i,
    src: "/images/sections/section-valuation.jpg",
    alt: "Henderson home at twilight for market valuation context",
  },
  {
    key: "office-contact",
    test: /contact|get in touch|office|hours|google business|appointment/i,
    src: "/images/sections/section-office-directions.jpg",
    alt: "Henderson office corridor of Dr. Jan Duffy near St Rose Parkway",
  },
  {
    key: "maps",
    test: /map|directions|market area maps/i,
    src: "/images/sections/section-valley-maps.jpg",
    alt: "Las Vegas Valley housing grid and desert mountains for community maps",
  },
  {
    key: "faq",
    test: /faq|frequently asked|questions/i,
    src: "/images/sections/section-faq.jpg",
    alt: "Henderson real estate office consultation table with mountain views",
  },
  {
    key: "reviews",
    test: /client|review|testimonial|what .* say/i,
    src: "/images/sections/section-reviews-home.jpg",
    alt: "Nevada covered patio at dusk representing client-ready homes",
  },
  {
    key: "trusted-brand",
    test: /trusted brand|national brand|why choose|berkshire hathaway|bhhs advantage|expertise/i,
    src: "/images/sections/section-trusted-brand.jpg",
    alt: "Nevada desert-contemporary home representing Berkshire Hathaway HomeServices brand strength",
  },
  {
    key: "market-snapshot",
    test: /snapshot|median|inventory|housing market|market data|forecast|market report|market insights|market update|forces driving|real estate market|key statistics|segment outlook/i,
    src: "/images/sections/section-market-snapshot.jpg",
    alt: "Aerial rooftops across the Las Vegas Valley housing market",
  },
  {
    key: "selling",
    test: /sell|listing|staging|curb appeal|top dollar/i,
    src: "/images/sections/section-selling-process.jpg",
    alt: "Staged Nevada living room opening to desert mountain views",
  },
  {
    key: "buying",
    test: /\bbuy\b|\bbuyer|pre-approv|offer|closing|keys|first-time/i,
    src: "/images/sections/section-buying-process.jpg",
    alt: "Open entry of a Nevada home for Las Vegas Valley buyers",
  },
  {
    key: "compare",
    test: /compare|which community|neighborhoods|communities/i,
    src: "/images/sections/section-compare-communities.jpg",
    alt: "Side-by-side Southern Nevada neighborhood streetscapes for community comparison",
  },
];

const RULES: SectionRule[] = [...COMMUNITY_RULES, ...HEADING_RULES];

const DEFAULT_SECTION: SectionImageMatch = {
  key: "default",
  src: "/images/sections/section-trusted-expertise.jpg",
  alt: "Desert-contemporary Nevada home architectural detail",
};

/**
 * Pick photography that matches an H2/H3 heading (or nearby copy).
 */
export function getSectionImage(heading: string): SectionImageMatch {
  for (const rule of RULES) {
    if (rule.test.test(heading)) {
      return {
        key: rule.key,
        src: rule.src,
        alt: `${rule.alt} — ${heading}`,
      };
    }
  }
  return {
    ...DEFAULT_SECTION,
    alt: `${DEFAULT_SECTION.alt} — ${heading}`,
  };
}
