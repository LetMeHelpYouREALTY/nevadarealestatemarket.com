import { marketStats, siteConfig, agentInfo } from "@/lib/site-config";
import { expandedMarketFaqs } from "@/lib/nevada-market-research";
import type { FAQItem } from "@/lib/schema";

export const nevadaMarketAreas = [
  {
    name: "Las Vegas",
    slug: "las-vegas",
    path: "/las-vegas",
    medianPrice: marketStats.lasVegas.medianPriceFormatted,
    change: marketStats.lasVegas.yearOverYearChange,
    daysOnMarket: marketStats.lasVegas.daysOnMarket,
    inventoryMonths: marketStats.lasVegas.inventoryMonths,
    summary:
      "The broadest inventory in the valley — from affordable North Las Vegas corridors to luxury golf communities.",
    bestFor: "Variety of price points, entertainment access, investors",
  },
  {
    name: "Henderson",
    slug: "henderson",
    path: "/henderson",
    medianPrice: marketStats.henderson.medianPriceFormatted,
    change: marketStats.henderson.yearOverYearChange,
    daysOnMarket: marketStats.henderson.daysOnMarket,
    summary:
      "Nevada's second-largest city — family-friendly, strong schools, and premier luxury corridors like Lake Las Vegas.",
    bestFor: "Families, luxury buyers, California relocators",
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    path: "/summerlin",
    medianPrice: marketStats.summerlin.medianPriceFormatted,
    change: marketStats.summerlin.yearOverYearChange,
    daysOnMarket: marketStats.summerlin.daysOnMarket,
    summary:
      "Master-planned living with Red Rock views, top schools, and guard-gated luxury in The Ridges.",
    bestFor: "Families, outdoor lifestyle, upscale buyers",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    path: "/north-las-vegas",
    medianPrice: "$420,000",
    change: "+1.0%",
    daysOnMarket: 42,
    summary:
      "Fast-growing value market with new construction, first-time buyer programs, and strong rental demand.",
    bestFor: "First-time buyers, investors, young families",
  },
] as const;

export const clarkCountyHighlights = {
  population: "2.4 million+",
  countySeat: "Las Vegas",
  majorCities: ["Las Vegas", "Henderson", "North Las Vegas", "Boulder City"],
  economicDrivers: [
    "Tourism & hospitality",
    "Data centers (Switch SUPERNAP, Apex Industrial Park)",
    "Healthcare & life sciences",
    "Logistics & distribution",
    "California & Pacific Northwest migration",
  ],
};

function mergeFaqs(base: FAQItem[], extra: FAQItem[]) {
  const seen = new Set(base.map((f) => f.question));
  return [...base, ...extra.filter((f) => !seen.has(f.question))];
}

const legacyFaqs = {
  hub: [
    {
      question: "What is the Nevada real estate market like in 2026?",
      answer: `As of ${marketStats.lastUpdated}, the Las Vegas Valley median home price is ${marketStats.lasVegas.medianPriceFormatted} (${marketStats.lasVegas.yearOverYearChange} YoY), with ${marketStats.lasVegas.daysOnMarket} average days on market and ${marketStats.lasVegas.inventoryMonths} months of inventory — a normalizing, balanced market. Henderson (${marketStats.henderson.medianPriceFormatted}) and Summerlin (${marketStats.summerlin.medianPriceFormatted}) trade at premiums. Call ${agentInfo.phone} for a neighborhood-specific analysis.`,
    },
    {
      question: "Is Nevada a good state to buy real estate?",
      answer:
        "Nevada offers no state income tax, strong job growth, and home prices typically 40–60% below comparable California markets. Clark County continues to attract relocators and investors. Work with a local expert to match community, schools, and appreciation potential to your goals.",
    },
    {
      question: "Who provides Nevada real estate market analysis?",
      answer: `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, publishes market reports and neighborhood guides at ${siteConfig.url}. Ranked Nevada's Top 1% with $127M+ closed volume since 2013.`,
    },
  ],
  clarkCounty: [
    {
      question: "What is the Clark County Nevada housing market?",
      answer: `Clark County encompasses Las Vegas, Henderson, North Las Vegas, and surrounding communities — home to 2.4 million+ residents. The ${marketStats.lastUpdated} median price across the valley is ${marketStats.lasVegas.medianPriceFormatted} with ${marketStats.lasVegas.activeListings.toLocaleString()} active listings.`,
    },
    {
      question: "Which Clark County city has the lowest home prices?",
      answer:
        "North Las Vegas typically offers the most affordable entry points (median around $420,000), followed by select Las Vegas corridors. Henderson and Summerlin command higher medians for schools, amenities, and master-planned living.",
    },
    {
      question: "How do I get a Clark County market report?",
      answer: `Visit ${siteConfig.url}/market-report for monthly statistics or call Dr. Jan Duffy at ${agentInfo.phone} for a free custom analysis of your target city or neighborhood.`,
    },
  ],
  forecast: [
    {
      question: "What is the Nevada housing forecast for 2026?",
      answer:
        "Economists expect modest 1–4% annual appreciation valley-wide in 2026, with Henderson and Summerlin potentially outpacing at 4–6%. California migration, data-center expansion, and limited land in premium communities support long-term demand.",
    },
    {
      question: "Will Las Vegas home prices drop in 2026?",
      answer:
        "A sharp correction is unlikely given ~2.9 months of inventory, steady migration, and job growth. Buyers should focus on neighborhood-level trends — some corridors appreciate faster than others. Overpriced listings still sit; correctly priced homes sell in under 30 days.",
    },
    {
      question: "Best areas to buy in Nevada in 2026?",
      answer:
        "Families often choose Henderson or Summerlin; first-time buyers look at North Las Vegas and Mountains Edge; luxury buyers target The Ridges, MacDonald Ranch, and Lake Las Vegas. Schedule a consultation at (702) 500-1955 for a personalized shortlist.",
    },
  ],
  compare: [
    {
      question: "Henderson vs Summerlin — which is better?",
      answer:
        "Henderson offers slightly lower medians ($492K vs $625K), strong schools, and Lake Las Vegas luxury. Summerlin provides Red Rock access, Downtown Summerlin, and ultra-luxury in The Ridges. Both appreciate well — choice depends on commute, budget, and lifestyle.",
    },
    {
      question: "Las Vegas vs Henderson for families?",
      answer:
        "Henderson consistently ranks among America's safest cities with excellent schools and master-planned amenities. Las Vegas proper offers more price diversity and urban access. Many families choose Henderson (Green Valley, Anthem, Inspirada) or west-side Las Vegas (Summerlin, Skye Canyon).",
    },
    {
      question: "Where are the most affordable homes in the Las Vegas Valley?",
      answer:
        "North Las Vegas, east Las Vegas, and select Henderson edges (Whitney Ranch area) offer lower entry points. New construction in Skye Canyon and Mountains Edge balances amenities with relative value.",
    },
  ],
};

export const nevadaMarketFaqs = {
  hub: mergeFaqs(expandedMarketFaqs.hub, legacyFaqs.hub),
  clarkCounty: mergeFaqs(expandedMarketFaqs.clarkCounty, legacyFaqs.clarkCounty),
  forecast: mergeFaqs(expandedMarketFaqs.forecast, legacyFaqs.forecast),
  compare: mergeFaqs(expandedMarketFaqs.compare, legacyFaqs.compare),
  tax: expandedMarketFaqs.tax,
};

export const marketResourceLinks = [
  { href: "/nevada-buyers-guide", label: "Nevada Buyers Guide" },
  { href: "/no-state-income-tax", label: "No State Income Tax" },
  { href: "/market-report", label: "Monthly Market Report" },
  { href: "/market-update", label: "Weekly Market Update" },
  { href: "/market-insights", label: "2026 Market Insights" },
  { href: "/home-valuation", label: "Free Home Valuation" },
  { href: "/compare-communities", label: "Compare Communities" },
  { href: "/maps", label: "Interactive Maps" },
  { href: "/directions", label: "Office Directions" },
  { href: "/clark-county-housing-market", label: "Clark County Data" },
  { href: "/nevada-housing-forecast", label: "2026 Forecast" },
] as const;
