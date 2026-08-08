/**
 * Hero background images per route.
 * Assets live in /public/images/hero/ (Unsplash, free license) and agent portraits.
 */

export type HeroImage = {
  src: string;
  alt: string;
};

/** Area slugs inherit parent city hero when not listed explicitly. */
export const HERO_IMAGES: Record<string, HeroImage> = {
  home: {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Las Vegas Valley skyline with desert mountains at golden hour, Nevada real estate market",
  },
  about: {
    src: "/images/agent/dr-jan-duffy.jpg",
    alt: "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties",
  },
  contact: {
    src: "/images/agent/dr-jan-duffy-on-call.jpg",
    alt: "Dr. Jan Duffy on the phone helping Nevada home buyers and sellers",
  },
  "nevada-real-estate-market": {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Aerial view of the Las Vegas Valley and Clark County, Nevada housing market",
  },
  "clark-county-housing-market": {
    src: "/images/hero/clark-county-aerial.jpg",
    alt: "Clark County Nevada suburban communities and desert mountains",
  },
  "nevada-housing-forecast": {
    src: "/images/hero/modern-nevada-home.jpg",
    alt: "Modern Nevada home exterior representing 2026 housing market trends",
  },
  "compare-communities": {
    src: "/images/hero/nevada-neighborhoods.jpg",
    alt: "Nevada master-planned neighborhood with palm trees and desert homes",
  },
  "no-state-income-tax": {
    src: "/images/hero/desert-luxury-home.jpg",
    alt: "Luxury desert home in Nevada with mountain views appealing to relocating buyers",
  },
  "nevada-buyers-guide": {
    src: "/images/hero/buyer-new-home.jpg",
    alt: "New Nevada home with welcoming curb appeal for Las Vegas Valley buyers",
  },
  henderson: {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Henderson Nevada neighborhood with palm-lined streets and desert homes",
  },
  "las-vegas": {
    src: "/images/hero/las-vegas-skyline.jpg",
    alt: "Las Vegas Nevada skyline and Strip at dusk",
  },
  summerlin: {
    src: "/images/hero/summerlin-red-rock.jpg",
    alt: "Desert mountains behind Las Vegas representing Summerlin and Red Rock Canyon",
  },
  "north-las-vegas": {
    src: "/images/hero/north-las-vegas-homes.jpg",
    alt: "North Las Vegas suburban homes and new construction communities",
  },
  buyers: {
    src: "/images/hero/buyer-new-home.jpg",
    alt: "Buyers exploring a new Nevada home with Dr. Jan Duffy buyer representation",
  },
  "buyers-california-relocator": {
    src: "/images/hero/desert-luxury-home.jpg",
    alt: "Nevada luxury home for California relocators seeking no state income tax",
  },
  "buyers-first-time-buyers": {
    src: "/images/hero/buyer-new-home.jpg",
    alt: "First-time homebuyer ready Nevada residence in the Las Vegas Valley",
  },
  "buyers-luxury-homes-las-vegas": {
    src: "/images/hero/desert-luxury-home.jpg",
    alt: "Luxury Las Vegas Valley estate with desert mountain views",
  },
  sellers: {
    src: "/images/hero/modern-nevada-home.jpg",
    alt: "Well-presented Nevada home ready for sale with professional marketing",
  },
  "sellers-divorce-probate": {
    src: "/images/hero/nevada-neighborhoods.jpg",
    alt: "Quiet Nevada neighborhood for sensitive divorce and probate home sales",
  },
  "sellers-downsizing": {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Henderson and Summerlin homes ideal for downsizers",
  },
  "sellers-move-up": {
    src: "/images/hero/modern-nevada-home.jpg",
    alt: "Move-up Nevada home for growing households in Clark County",
  },
  "sellers-relocation": {
    src: "/images/hero/las-vegas-skyline.jpg",
    alt: "Las Vegas skyline for sellers relocating in or out of Nevada",
  },
  services: {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Las Vegas Valley skyline representing full-service Nevada real estate",
  },
  listings: {
    src: "/images/hero/modern-nevada-home.jpg",
    alt: "Featured Nevada homes and MLS listings across the Las Vegas Valley",
  },
  "home-valuation": {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Henderson Nevada homes for accurate market valuation insights",
  },
  "luxury-homes": {
    src: "/images/hero/desert-luxury-home.jpg",
    alt: "Luxury Nevada estate with mountain backdrop in Las Vegas Valley",
  },
  "investment-properties": {
    src: "/images/hero/clark-county-aerial.jpg",
    alt: "Clark County aerial view for Nevada investment property analysis",
  },
  "new-construction": {
    src: "/images/hero/buyer-new-home.jpg",
    alt: "New construction home in Southern Nevada master-planned community",
  },
  relocation: {
    src: "/images/hero/desert-luxury-home.jpg",
    alt: "Nevada desert home for families relocating to Las Vegas Valley",
  },
  "why-berkshire-hathaway": {
    src: "/images/agent/dr-jan-duffy.jpg",
    alt: "Dr. Jan Duffy representing Berkshire Hathaway HomeServices Nevada Properties",
  },
  "google-business": {
    src: "/images/agent/dr-jan-duffy-on-call.jpg",
    alt: "Dr. Jan Duffy Google Business Profile contact and reviews",
  },
  faq: {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Nevada real estate FAQ answers for Las Vegas Valley buyers and sellers",
  },
  "market-update": {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Nevada real estate market update for the Las Vegas Valley",
  },
  "market-report": {
    src: "/images/hero/clark-county-aerial.jpg",
    alt: "Clark County housing market report aerial neighborhood view",
  },
  "market-insights": {
    src: "/images/hero/modern-nevada-home.jpg",
    alt: "Nevada housing market insights with modern desert home exterior",
  },
  neighborhoods: {
    src: "/images/hero/nevada-neighborhoods.jpg",
    alt: "Las Vegas Valley neighborhoods and master-planned communities",
  },
  "55-plus-communities": {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Active adult 55+ communities in Henderson and Summerlin Nevada",
  },
  maps: {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Interactive Nevada real estate maps for Las Vegas Valley communities",
  },
  directions: {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Directions to Dr. Jan Duffy Henderson Nevada real estate office",
  },
};

const AREA_FALLBACK: Record<string, string> = {
  henderson: "henderson",
  "las-vegas": "las-vegas",
  summerlin: "summerlin",
  "north-las-vegas": "north-las-vegas",
  neighborhoods: "neighborhoods",
  "55-plus-communities": "55-plus-communities",
  buyers: "buyers",
  sellers: "sellers",
  maps: "maps",
};

/**
 * Resolve hero image for a pathname (e.g. /henderson/green-valley → henderson hero).
 */
export function getHeroImage(pathname: string): HeroImage {
  const path = pathname.replace(/\/$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return HERO_IMAGES.home;
  }

  const fullKey = segments.join("-");
  if (HERO_IMAGES[fullKey]) {
    return HERO_IMAGES[fullKey];
  }

  const first = segments[0];
  if (HERO_IMAGES[first]) {
    return HERO_IMAGES[first];
  }

  if (AREA_FALLBACK[first] && HERO_IMAGES[AREA_FALLBACK[first]]) {
    return HERO_IMAGES[AREA_FALLBACK[first]];
  }

  return HERO_IMAGES.home;
}

export function getHeroImageByKey(key: keyof typeof HERO_IMAGES | string): HeroImage {
  return HERO_IMAGES[key] ?? HERO_IMAGES.home;
}
