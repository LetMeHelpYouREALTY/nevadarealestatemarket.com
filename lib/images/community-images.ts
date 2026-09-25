import type { HeroImage } from "@/lib/images/types";

/**
 * Unique H1 photography keyed by community / neighborhood slug
 * (last path segment). Used when a route is not listed in HERO_IMAGES.
 */
export const COMMUNITY_HERO_IMAGES: Record<string, HeroImage> = {
  summerlin: {
    src: "/images/hero/summerlin-red-rock.jpg",
    alt: "Summerlin Las Vegas master-planned homes with Red Rock Canyon backdrop",
  },
  henderson: {
    src: "/images/hero/henderson-neighborhood.jpg",
    alt: "Henderson Nevada neighborhood streetscapes near St. Rose Parkway",
  },
  "north-las-vegas": {
    src: "/images/hero/north-las-vegas-homes.jpg",
    alt: "North Las Vegas new-construction homes in desert master-planned communities",
  },
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
    src: "/images/neighborhoods/macdonald-ranch.jpg",
    alt: "MacDonald Ranch Henderson desert-contemporary homes below MacDonald Highlands",
  },
  "green-valley-ranch": {
    src: "/images/neighborhoods/green-valley-ranch.jpg",
    alt: "Green Valley Ranch Henderson neighborhood near The District shopping village",
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
    src: "/images/neighborhoods/the-summit.jpg",
    alt: "The Summit Summerlin West ultra-luxury ridge estate overlooking the Las Vegas Valley",
  },
  "red-rock-country-club": {
    src: "/images/neighborhoods/red-rock-country-club.jpg",
    alt: "Red Rock Country Club Summerlin golf-course homes at the foot of Red Rock Canyon",
  },
  stonebridge: {
    src: "/images/neighborhoods/stonebridge.jpg",
    alt: "Stonebridge Summerlin West new master-planned homes with mountain light",
  },
  "heritage-stonebridge": {
    src: "/images/neighborhoods/heritage-stonebridge.jpg",
    alt: "Heritage at Stonebridge Del Webb 55+ villas in Summerlin West Nevada",
  },
  "the-vistas": {
    src: "/images/neighborhoods/the-vistas.jpg",
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
    src: "/images/neighborhoods/spring-valley.jpg",
    alt: "Spring Valley Las Vegas suburban homes with valley and Strip-adjacent location",
  },
  "rhodes-ranch": {
    src: "/images/neighborhoods/rhodes-ranch.jpg",
    alt: "Rhodes Ranch southwest Las Vegas golf-community homes",
  },
  "silverstone-ranch": {
    src: "/images/neighborhoods/silverstone-ranch.jpg",
    alt: "Silverstone Ranch Northwest Las Vegas golf-course community homes",
  },
  "lone-mountain": {
    src: "/images/neighborhoods/lone-mountain.jpg",
    alt: "Lone Mountain Las Vegas homes with the rocky peak behind rooftops",
  },
  "arts-district": {
    src: "/images/neighborhoods/arts-district.jpg",
    alt: "Downtown Las Vegas Arts District brick lofts and mural-lined streets",
  },
  aliante: {
    src: "/images/neighborhoods/aliante.jpg",
    alt: "Aliante North Las Vegas master-planned homes near the golf course",
  },
  "del-webb-north-ranch": {
    src: "/images/neighborhoods/del-webb-north-ranch.jpg",
    alt: "Del Webb at North Ranch 55+ single-story homes in North Las Vegas",
  },
  "tule-springs": {
    src: "/images/neighborhoods/tule-springs.jpg",
    alt: "Tule Springs North Las Vegas new-construction desert homes",
  },
  eldorado: {
    src: "/images/neighborhoods/eldorado.jpg",
    alt: "Eldorado North Las Vegas established suburban homes",
  },
  "villages-tule-springs": {
    src: "/images/neighborhoods/villages-tule-springs.jpg",
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
    src: "/images/neighborhoods/sun-city-anthem.jpg",
    alt: "Sun City Anthem Henderson 55+ villas and clubhouse amenities",
  },
  "sun-city-summerlin": {
    src: "/images/neighborhoods/sun-city-summerlin.jpg",
    alt: "Sun City Summerlin 55+ homes with Red Rock Canyon nearby",
  },
  "sun-city-aliante": {
    src: "/images/neighborhoods/sun-city-aliante.jpg",
    alt: "Sun City Aliante North Las Vegas 55+ neighborhood",
  },
  "solera-anthem": {
    src: "/images/neighborhoods/solera-anthem.jpg",
    alt: "Solera at Anthem Henderson 55+ community homes",
  },
  "trilogy-summerlin": {
    src: "/images/neighborhoods/trilogy-summerlin.jpg",
    alt: "Trilogy Summerlin 55+ homes near Red Rock Canyon",
  },
  "del-webb-lake-las-vegas": {
    src: "/images/neighborhoods/del-webb-lake-las-vegas.jpg",
    alt: "Del Webb Lake Las Vegas 55+ villas with clubhouse pool and lake views",
  },
};

export function getCommunityHeroImage(slug: string): HeroImage | undefined {
  return COMMUNITY_HERO_IMAGES[slug];
}
