/**
 * Hero background images per route.
 * Assets live in /public/images/hero/ (sourced via Parallel Search → Unsplash, free license).
 */

export type HeroImage = {
  src: string;
  alt: string;
};

/** Area slugs inherit parent city hero when not listed explicitly. */
export const HERO_IMAGES: Record<string, HeroImage> = {
  home: {
    src: "/images/hero/nevada-valley-skyline.jpg",
    alt: "Las Vegas Valley skyline with desert mountains at golden hour, Nevada real estate",
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
    alt: "Luxury desert home in Nevada with mountain views and no state income tax appeal",
  },
  "nevada-buyers-guide": {
    src: "/images/hero/buyer-new-home.jpg",
    alt: "New Nevada home with welcoming curb appeal for first-time buyers",
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
    alt: "Affordable North Las Vegas suburban homes and new construction",
  },
};

const AREA_FALLBACK: Record<string, string> = {
  henderson: "henderson",
  "las-vegas": "las-vegas",
  summerlin: "summerlin",
  "north-las-vegas": "north-las-vegas",
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
