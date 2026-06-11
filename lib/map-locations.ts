import { officeInfo, agentInfo, siteConfig, businessHours } from "@/lib/site-config";

export type MapLocation = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  coordinates: { lat: number; lng: number };
  zoom: number;
  mapQuery: string;
  embedUrl: string;
  directionsUrl: string;
  searchUrl: string;
  heroKey: string;
  neighborhoods: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedPath: string;
};

function buildEmbedUrl(query: string, lat: number, lng: number, zoom: number): string {
  const encoded = encodeURIComponent(query);
  return `https://maps.google.com/maps?q=${encoded}&ll=${lat},${lng}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
}

function buildDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir//${encodeURIComponent(query)}`;
}

function buildSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const officeLocation: MapLocation = {
  slug: "office",
  name: "Dr. Jan Duffy Office",
  headline: "Visit Our Henderson Office",
  description:
    "Berkshire Hathaway HomeServices Nevada Properties — Henderson MacDonald Highlands Real Estate. Meet Dr. Jan Duffy for market consultations, private showings, and buyer/seller strategy sessions.",
  metaTitle: "Directions to Dr. Jan Duffy | Henderson NV Real Estate Office",
  metaDescription:
    "Get directions to Dr. Jan Duffy's Henderson office at 3185 St Rose Pkwy, Suite 101. Open daily 6 AM–9 PM. Call (702) 500-1955.",
  address: officeInfo.address,
  coordinates: officeInfo.coordinates,
  zoom: 15,
  mapQuery: officeInfo.address.full,
  embedUrl: officeInfo.googleMapsEmbed,
  directionsUrl: officeInfo.googleMapsUrl,
  searchUrl: officeInfo.googleReviewsUrl,
  heroKey: "henderson",
  neighborhoods: ["MacDonald Ranch", "Green Valley", "Anthem", "Seven Hills"],
  relatedPath: "/henderson",
  faqs: [
    {
      question: "Where is Dr. Jan Duffy's real estate office?",
      answer: `The office is at ${officeInfo.address.full}. Hours are ${businessHours.display}. Call ${agentInfo.phone} before visiting.`,
    },
    {
      question: "Is parking available at the Henderson office?",
      answer:
        "Yes — on-site parking, free parking lot, and free street parking are available per our Google Business Profile listing.",
    },
  ],
};

export const mapLocations: MapLocation[] = [
  officeLocation,
  {
    slug: "henderson",
    name: "Henderson, NV",
    headline: "Henderson NV Real Estate Map",
    description:
      "Explore Henderson neighborhoods on the map — Green Valley Ranch, Anthem, Inspirada, Lake Las Vegas, MacDonald Ranch, and Seven Hills. Dr. Jan Duffy specializes in Henderson luxury and family homes.",
    metaTitle: "Henderson NV Real Estate Map | Neighborhoods & Homes",
    metaDescription:
      "Interactive map of Henderson Nevada real estate markets. Median $485K. Expert guidance from Dr. Jan Duffy, BHHS Nevada. (702) 500-1955.",
    coordinates: { lat: 36.0395, lng: -114.9817 },
    zoom: 11,
    mapQuery: "Henderson, Nevada real estate",
    embedUrl: buildEmbedUrl("Henderson, NV", 36.0395, -114.9817, 11),
    directionsUrl: buildDirectionsUrl("Henderson, NV"),
    searchUrl: buildSearchUrl("homes for sale Henderson NV"),
    heroKey: "henderson",
    neighborhoods: [
      "Green Valley Ranch",
      "Anthem",
      "Inspirada",
      "Lake Las Vegas",
      "MacDonald Ranch",
      "Seven Hills",
    ],
    relatedPath: "/henderson",
    faqs: [
      {
        question: "What is the median home price in Henderson?",
        answer:
          "As of January 2026, the Henderson median is approximately $485,000. Lake Las Vegas and MacDonald Ranch trade at luxury price points.",
      },
      {
        question: "Who is the best realtor in Henderson NV?",
        answer: `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada, ranked Nevada's Top 1%. Office: ${officeInfo.address.full}. Call ${agentInfo.phone}.`,
      },
    ],
  },
  {
    slug: "summerlin",
    name: "Summerlin, NV",
    headline: "Summerlin NV Real Estate Map",
    description:
      "Map of Summerlin master-planned communities — The Ridges, Red Rock Canyon corridor, Downtown Summerlin, and village neighborhoods. Premier Las Vegas Valley luxury and family living.",
    metaTitle: "Summerlin NV Real Estate Map | Communities & Luxury Homes",
    metaDescription:
      "Summerlin Nevada real estate map with community guides. Median $625K. Dr. Jan Duffy, BHHS Nevada. (702) 500-1955.",
    coordinates: { lat: 36.1024, lng: -115.3273 },
    zoom: 12,
    mapQuery: "Summerlin, Las Vegas, NV",
    embedUrl: buildEmbedUrl("Summerlin, Las Vegas, NV", 36.1024, -115.3273, 12),
    directionsUrl: buildDirectionsUrl("Summerlin, Las Vegas, NV"),
    searchUrl: buildSearchUrl("homes for sale Summerlin Las Vegas"),
    heroKey: "summerlin",
    neighborhoods: ["The Ridges", "Red Rock", "Downtown Summerlin", "The Trails", "Willows"],
    relatedPath: "/summerlin",
    faqs: [
      {
        question: "Where is Summerlin located?",
        answer:
          "Summerlin is a master-planned community on the west side of the Las Vegas Valley, bordering Red Rock Canyon National Conservation Area.",
      },
      {
        question: "What is the Summerlin median home price?",
        answer:
          "Summerlin's median home price is approximately $625,000 as of January 2026, with luxury communities like The Ridges commanding significantly more.",
      },
    ],
  },
  {
    slug: "las-vegas",
    name: "Las Vegas, NV",
    headline: "Las Vegas NV Real Estate Map",
    description:
      "Las Vegas Valley real estate map — Centennial Hills, Spring Valley, Rhodes Ranch, Mountains Edge, and urban corridors. Compare neighborhoods with a local expert.",
    metaTitle: "Las Vegas NV Real Estate Map | Valley Neighborhoods",
    metaDescription:
      "Las Vegas Nevada housing map and neighborhood guide. Valley median $450K. Dr. Jan Duffy · (702) 500-1955.",
    coordinates: { lat: 36.1699, lng: -115.1398 },
    zoom: 11,
    mapQuery: "Las Vegas, Nevada",
    embedUrl: buildEmbedUrl("Las Vegas, NV", 36.1699, -115.1398, 11),
    directionsUrl: buildDirectionsUrl("Las Vegas, NV"),
    searchUrl: buildSearchUrl("homes for sale Las Vegas NV"),
    heroKey: "las-vegas",
    neighborhoods: [
      "Centennial Hills",
      "Spring Valley",
      "Rhodes Ranch",
      "Mountains Edge",
      "Southern Highlands",
    ],
    relatedPath: "/las-vegas",
    faqs: [
      {
        question: "What is the Las Vegas median home price in 2026?",
        answer:
          "The Las Vegas Valley median is approximately $450,000 with 28 average days on market as of January 2026.",
      },
      {
        question: "Which Las Vegas neighborhoods are best for families?",
        answer:
          "Summerlin, Henderson, Skye Canyon, Mountains Edge, and Centennial Hills are popular for schools, parks, and master-planned amenities.",
      },
    ],
  },
  {
    slug: "north-las-vegas",
    name: "North Las Vegas, NV",
    headline: "North Las Vegas Real Estate Map",
    description:
      "North Las Vegas housing map — affordable new construction, Aliante, Skye Canyon edges, and investor-friendly corridors. Entry-point community for first-time buyers.",
    metaTitle: "North Las Vegas Real Estate Map | Affordable Homes",
    metaDescription:
      "North Las Vegas NV real estate map. Median around $385K. New construction and value markets. Dr. Jan Duffy · (702) 500-1955.",
    coordinates: { lat: 36.1989, lng: -115.1175 },
    zoom: 12,
    mapQuery: "North Las Vegas, NV",
    embedUrl: buildEmbedUrl("North Las Vegas, NV", 36.1989, -115.1175, 12),
    directionsUrl: buildDirectionsUrl("North Las Vegas, NV"),
    searchUrl: buildSearchUrl("homes for sale North Las Vegas NV"),
    heroKey: "north-las-vegas",
    neighborhoods: ["Aliante", "Eldorado", "Centennial Hills edge", "Tropical Parkway corridor"],
    relatedPath: "/north-las-vegas",
    faqs: [
      {
        question: "Is North Las Vegas good for first-time buyers?",
        answer:
          "Yes — North Las Vegas offers the valley's most affordable medians (~$385K) with strong new construction inventory and rental demand.",
      },
      {
        question: "How far is North Las Vegas from the Strip?",
        answer:
          "Most North Las Vegas communities are 20–30 minutes from the Las Vegas Strip depending on traffic and location.",
      },
    ],
  },
  {
    slug: "clark-county",
    name: "Clark County, NV",
    headline: "Clark County Nevada Housing Map",
    description:
      "Clark County real estate map covering Las Vegas, Henderson, North Las Vegas, and Boulder City. Nevada's largest county drives statewide housing trends.",
    metaTitle: "Clark County NV Real Estate Map | Nevada Housing Market",
    metaDescription:
      "Clark County Nevada real estate map — Las Vegas, Henderson, Summerlin, North Las Vegas. Market data from Dr. Jan Duffy. (702) 500-1955.",
    coordinates: { lat: 36.0799, lng: -115.1485 },
    zoom: 10,
    mapQuery: "Clark County, Nevada",
    embedUrl: buildEmbedUrl("Clark County, Nevada", 36.0799, -115.1485, 10),
    directionsUrl: buildDirectionsUrl("Clark County, Nevada"),
    searchUrl: buildSearchUrl("Clark County Nevada real estate"),
    heroKey: "clark-county-housing-market",
    neighborhoods: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Boulder City"],
    relatedPath: "/clark-county-housing-market",
    faqs: [
      {
        question: "What cities are in Clark County Nevada?",
        answer:
          "Clark County includes Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated communities like Summerlin and Paradise.",
      },
      {
        question: "What is the Clark County housing market like?",
        answer: `The valley median is approximately $450,000 with 2.1 months inventory. See ${siteConfig.url}/clark-county-housing-market for full data.`,
      },
    ],
  },
];

export function getMapLocation(slug: string): MapLocation | undefined {
  return mapLocations.find((loc) => loc.slug === slug);
}

export function getOfficeLocation(): MapLocation {
  return officeLocation;
}
