import type { HeroImage } from "@/lib/images/types";

export type SectionImageMatch = HeroImage & { key: string };

/**
 * Specific heading matches first; greedy buyer/seller patterns last.
 * Photos live in public/images (git backup). Cloudflare Images is used
 * when NEXT_PUBLIC_CF_IMAGES_HASH is set — see lib/images/src.ts.
 */
const RULES: { key: string; test: RegExp; src: string; alt: string }[] = [
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
