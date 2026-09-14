import type { HeroImage } from "@/lib/images/types";

/**
 * Unique H1 photography keyed by community / neighborhood slug
 * (last path segment). Used when a route is not listed in HERO_IMAGES.
 */
export const COMMUNITY_HERO_IMAGES: Record<string, HeroImage> = {
  "lake-las-vegas": {
    src: "/images/neighborhoods/lake-las-vegas.jpg",
    alt: "Lake Las Vegas Henderson waterfront homes around the private lake — Dr. Jan Duffy REALTOR®",
  },
  "seven-hills": {
    src: "/images/neighborhoods/seven-hills.jpg",
    alt: "Seven Hills Henderson hillside homes with Las Vegas Valley views",
  },
  "macdonald-highlands": {
    src: "/images/neighborhoods/macdonald-highlands.jpg",
    alt: "MacDonald Highlands Henderson luxury hillside estate with valley views",
  },
  "macdonald-ranch": {
    src: "/images/neighborhoods/macdonald-highlands.jpg",
    alt: "MacDonald Ranch Henderson desert-contemporary homes near MacDonald Highlands",
  },
  "green-valley-ranch": {
    src: "/images/neighborhoods/green-valley.jpg",
    alt: "Green Valley Ranch Henderson neighborhood with mature desert landscaping",
  },
  "green-valley": {
    src: "/images/neighborhoods/green-valley.jpg",
    alt: "Green Valley Henderson established neighborhood streetscapes",
  },
  anthem: {
    src: "/images/neighborhoods/anthem.jpg",
    alt: "Anthem Henderson master-planned homes with McCullough Range views",
  },
  inspirada: {
    src: "/images/neighborhoods/inspirada.jpg",
    alt: "Inspirada Henderson master-planned homes around resort-style amenities",
  },
  "the-ridges": {
    src: "/images/neighborhoods/the-ridges.jpg",
    alt: "The Ridges Summerlin luxury estate with Red Rock and valley views",
  },
  "the-summit": {
    src: "/images/neighborhoods/the-ridges.jpg",
    alt: "Summerlin West ultra-luxury ridge estates overlooking the Las Vegas Valley",
  },
  "red-rock-country-club": {
    src: "/images/neighborhoods/red-rock-country-club.jpg",
    alt: "Red Rock Country Club Summerlin golf-course homes at the foot of Red Rock Canyon",
  },
  stonebridge: {
    src: "/images/hero/summerlin-red-rock.jpg",
    alt: "Stonebridge Summerlin West new master-planned homes with mountain light",
  },
  "heritage-stonebridge": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Heritage at Stonebridge Del Webb 55+ villas in Summerlin West Nevada",
  },
  "the-vistas": {
    src: "/images/hero/summerlin-red-rock.jpg",
    alt: "The Vistas Summerlin West homes with mountain and valley views",
  },
  "skye-canyon": {
    src: "/images/neighborhoods/skye-canyon.jpg",
    alt: "Skye Canyon North Las Vegas master-planned homes and community trails",
  },
  "centennial-hills": {
    src: "/images/neighborhoods/centennial-hills.jpg",
    alt: "Centennial Hills northwest Las Vegas homes near Lone Mountain",
  },
  "spring-valley": {
    src: "/images/hero/las-vegas-skyline.jpg",
    alt: "Spring Valley Las Vegas homes with valley and Strip-adjacent location",
  },
  "rhodes-ranch": {
    src: "/images/hero/nevada-neighborhoods.jpg",
    alt: "Rhodes Ranch southwest Las Vegas golf-community homes",
  },
  "silverstone-ranch": {
    src: "/images/neighborhoods/silverstone-ranch.jpg",
    alt: "Silverstone Ranch Northwest Las Vegas golf-course community homes",
  },
  "lone-mountain": {
    src: "/images/neighborhoods/centennial-hills.jpg",
    alt: "Lone Mountain Las Vegas homes with desert hillside backdrop",
  },
  "arts-district": {
    src: "/images/hero/las-vegas-skyline.jpg",
    alt: "Downtown Las Vegas Arts District urban neighborhood near the valley skyline",
  },
  aliante: {
    src: "/images/neighborhoods/aliante.jpg",
    alt: "Aliante North Las Vegas master-planned homes near the golf course",
  },
  "del-webb-north-ranch": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Del Webb at North Ranch 55+ single-story homes in North Las Vegas",
  },
  "tule-springs": {
    src: "/images/hero/north-las-vegas-homes.jpg",
    alt: "Tule Springs North Las Vegas new-construction desert homes",
  },
  eldorado: {
    src: "/images/hero/north-las-vegas-homes.jpg",
    alt: "Eldorado North Las Vegas established suburban homes",
  },
  "villages-tule-springs": {
    src: "/images/hero/north-las-vegas-homes.jpg",
    alt: "Villages at Tule Springs North Las Vegas master-planned homes",
  },
  "mountains-edge": {
    src: "/images/neighborhoods/mountains-edge.jpg",
    alt: "Mountain’s Edge southwest Las Vegas homes along the desert ridge",
  },
  "southern-highlands": {
    src: "/images/neighborhoods/southern-highlands.jpg",
    alt: "Southern Highlands Las Vegas golf-community luxury homes",
  },
  "sun-city-anthem": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Sun City Anthem Henderson 55+ villas and clubhouse amenities",
  },
  "sun-city-summerlin": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Sun City Summerlin 55+ homes with Red Rock Canyon nearby",
  },
  "sun-city-aliante": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Sun City Aliante North Las Vegas 55+ neighborhood",
  },
  "solera-anthem": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Solera at Anthem Henderson 55+ community homes",
  },
  "trilogy-summerlin": {
    src: "/images/hero/55-plus-community.jpg",
    alt: "Trilogy Summerlin 55+ homes near Red Rock Canyon",
  },
  "del-webb-lake-las-vegas": {
    src: "/images/neighborhoods/lake-las-vegas.jpg",
    alt: "Del Webb Lake Las Vegas 55+ homes near the private lake",
  },
};

export function getCommunityHeroImage(slug: string): HeroImage | undefined {
  return COMMUNITY_HERO_IMAGES[slug];
}
