import { siteConfig } from "@/lib/site-config";
import { hendersonCommunities } from "@/lib/market-communities/henderson";
import { summerlinCommunities } from "@/lib/market-communities/summerlin";
import { lasVegasCommunities } from "@/lib/market-communities/las-vegas";
import { northLasVegasCommunities } from "@/lib/market-communities/north-las-vegas";

export type SitemapEntry = {
  path: string;
  label: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export type SitemapGroup = {
  title: string;
  entries: SitemapEntry[];
};

/**
 * Single source of truth for XML sitemap + HTML /site-map crawl hub.
 * Keeps GSC “Discovered” URLs linked from a crawlable HTML page.
 */
export function getSitemapGroups(): SitemapGroup[] {
  return [
    {
      title: "Core & market hubs",
      entries: [
        { path: "/", label: "Home", priority: 1, changeFrequency: "weekly" },
        {
          path: "/nevada-real-estate-market",
          label: "Nevada Real Estate Market",
          priority: 1,
          changeFrequency: "weekly",
        },
        {
          path: "/clark-county-housing-market",
          label: "Clark County Housing Market",
          priority: 0.95,
          changeFrequency: "weekly",
        },
        {
          path: "/nevada-housing-forecast",
          label: "Nevada Housing Forecast",
          priority: 0.95,
          changeFrequency: "weekly",
        },
        {
          path: "/nevada-buyers-guide",
          label: "Nevada Buyers Guide",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/compare-communities",
          label: "Compare Communities",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/no-state-income-tax",
          label: "No State Income Tax",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/market-report",
          label: "Market Report",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          path: "/market-update",
          label: "Market Update",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          path: "/market-insights",
          label: "Market Insights",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/about",
          label: "About Dr. Jan Duffy",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/contact",
          label: "Contact",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/directions",
          label: "Office Directions",
          priority: 0.95,
          changeFrequency: "monthly",
        },
        {
          path: "/faq",
          label: "FAQ",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/listings",
          label: "Listings",
          priority: 0.9,
          changeFrequency: "daily",
        },
        {
          path: "/why-berkshire-hathaway",
          label: "Why Berkshire Hathaway",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/google-business",
          label: "Google Business Profile",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/services",
          label: "Services",
          priority: 0.7,
          changeFrequency: "monthly",
        },
        {
          path: "/site-map",
          label: "HTML Site Map",
          priority: 0.5,
          changeFrequency: "weekly",
        },
        {
          path: "/news",
          label: "News",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/privacy-policy",
          label: "Privacy Policy",
          priority: 0.4,
          changeFrequency: "yearly",
        },
      ],
    },
    {
      title: "Buyers, sellers & services",
      entries: [
        { path: "/buyers", label: "Buyers", priority: 0.8, changeFrequency: "monthly" },
        {
          path: "/buyers/california-relocator",
          label: "California Relocator Buyers",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/buyers/first-time-buyers",
          label: "First-Time Buyers",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/buyers/luxury-homes-las-vegas",
          label: "Luxury Homes for Buyers",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        { path: "/sellers", label: "Sellers", priority: 0.8, changeFrequency: "monthly" },
        {
          path: "/sellers/move-up",
          label: "Move-Up Sellers",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/sellers/downsizing",
          label: "Downsizing Sellers",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/sellers/divorce-probate",
          label: "Divorce & Probate Sales",
          priority: 0.7,
          changeFrequency: "monthly",
        },
        {
          path: "/sellers/relocation",
          label: "Relocation Home Sales",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/luxury-homes",
          label: "Luxury Homes",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/new-construction",
          label: "New Construction",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/investment-properties",
          label: "Investment Properties",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/relocation",
          label: "Relocating to Las Vegas",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/home-valuation",
          label: "Home Valuation",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities",
          label: "55+ Communities",
          priority: 0.8,
          changeFrequency: "monthly",
        },
      ],
    },
    {
      title: "55+ community guides",
      entries: [
        {
          path: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/sun-city-anthem",
          label: "Sun City Anthem",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/sun-city-aliante",
          label: "Sun City Aliante",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/del-webb-lake-las-vegas",
          label: "Del Webb at Lake Las Vegas",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/trilogy-summerlin",
          label: "Trilogy Summerlin",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/solera-anthem",
          label: "Solera Anthem",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/55-plus-communities/heritage-stonebridge",
          label: "Heritage at Stonebridge",
          priority: 0.8,
          changeFrequency: "monthly",
        },
      ],
    },
    {
      title: "Maps",
      entries: [
        { path: "/maps", label: "Real Estate Maps", priority: 0.9, changeFrequency: "monthly" },
        {
          path: "/maps/henderson",
          label: "Henderson Map",
          priority: 0.85,
          changeFrequency: "monthly",
        },
        {
          path: "/maps/summerlin",
          label: "Summerlin Map",
          priority: 0.85,
          changeFrequency: "monthly",
        },
        {
          path: "/maps/las-vegas",
          label: "Las Vegas Map",
          priority: 0.85,
          changeFrequency: "monthly",
        },
        {
          path: "/maps/north-las-vegas",
          label: "North Las Vegas Map",
          priority: 0.85,
          changeFrequency: "monthly",
        },
        {
          path: "/maps/clark-county",
          label: "Clark County Map",
          priority: 0.85,
          changeFrequency: "monthly",
        },
      ],
    },
    {
      title: "Neighborhood guides",
      entries: [
        {
          path: "/neighborhoods",
          label: "Neighborhoods",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/summerlin",
          label: "Summerlin Neighborhoods",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/henderson",
          label: "Henderson Neighborhoods",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/green-valley",
          label: "Green Valley",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/the-ridges",
          label: "The Ridges",
          priority: 0.8,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/southern-highlands",
          label: "Southern Highlands",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas Neighborhoods",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/skye-canyon",
          label: "Skye Canyon",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/centennial-hills",
          label: "Centennial Hills",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/inspirada",
          label: "Inspirada",
          priority: 0.7,
          changeFrequency: "weekly",
        },
        {
          path: "/neighborhoods/mountains-edge",
          label: "Mountain's Edge",
          priority: 0.7,
          changeFrequency: "weekly",
        },
      ],
    },
    {
      title: "Market areas & communities",
      entries: [
        {
          path: "/henderson",
          label: "Henderson Real Estate",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          path: "/summerlin",
          label: "Summerlin Real Estate",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          path: "/las-vegas",
          label: "Las Vegas Real Estate",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        {
          path: "/north-las-vegas",
          label: "North Las Vegas Real Estate",
          priority: 0.9,
          changeFrequency: "weekly",
        },
        ...hendersonCommunities.map((c) => ({
          path: `/henderson/${c.slug}`,
          label: `${c.name} (Henderson)`,
          priority: 0.8,
          changeFrequency: "weekly" as const,
        })),
        ...summerlinCommunities.map((c) => ({
          path: `/summerlin/${c.slug}`,
          label: `${c.name} (Summerlin)`,
          priority: 0.8,
          changeFrequency: "weekly" as const,
        })),
        ...lasVegasCommunities.map((c) => ({
          path: `/las-vegas/${c.slug}`,
          label: `${c.name} (Las Vegas)`,
          priority: 0.8,
          changeFrequency: "weekly" as const,
        })),
        ...northLasVegasCommunities.map((c) => ({
          path: `/north-las-vegas/${c.slug}`,
          label: `${c.name} (North Las Vegas)`,
          priority: 0.8,
          changeFrequency: "weekly" as const,
        })),
      ],
    },
    {
      title: "Guides & articles",
      entries: [
        {
          path: "/las-vegas-real-estate",
          label: "Las Vegas Real Estate",
          priority: 0.95,
          changeFrequency: "weekly",
        },
        {
          path: "/las-vegas-homes-with-rv-parking",
          label: "Las Vegas Homes with RV Parking",
          priority: 0.85,
          changeFrequency: "weekly",
        },
        {
          path: "/north-las-vegas-zip-codes-a-comprehensive-guide",
          label: "North Las Vegas Zip Codes Guide",
          priority: 0.85,
          changeFrequency: "monthly",
        },
        {
          path: "/discover-your-dream-home-at-silverstone-ranch",
          label: "Silverstone Ranch",
          priority: 0.85,
          changeFrequency: "weekly",
        },
        {
          path: "/your-trusted-henderson-luxury-real-estate-expert",
          label: "Henderson Luxury Expert",
          priority: 0.9,
          changeFrequency: "monthly",
        },
        {
          path: "/william-lyon-homes-las-vegas-now-part-of-taylor-morrison",
          label: "William Lyon / Taylor Morrison",
          priority: 0.8,
          changeFrequency: "monthly",
        },
        {
          path: "/market-insights/home-is-possible-hip-program",
          label: "Home Is Possible (HIP) Program",
          priority: 0.85,
          changeFrequency: "monthly",
        },
      ],
    },
  ];
}

export function getAllSitemapEntries(): SitemapEntry[] {
  return getSitemapGroups().flatMap((group) => group.entries);
}

export function toAbsoluteSitemapUrl(path: string): string {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
