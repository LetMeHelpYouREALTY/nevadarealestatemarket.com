/**
 * Research-backed Nevada market content (Parallel Search, June 2026).
 * Used for SEO body copy, AEO/GEO fact blocks, speakable summaries, and schema citations.
 */

import { agentInfo, marketStats, siteConfig } from "@/lib/site-config";
import type { FAQItem } from "@/lib/schema";

export const researchMeta = {
  lastResearched: "June 2026",
  methodology:
    "Market statistics synthesized from Las Vegas Realtors (LVR) valley reports, U.S. Census Bureau Clark County estimates, and industry housing trend publications. Figures represent Clark County / Las Vegas Valley unless noted.",
  sources: [
    {
      name: "Las Vegas Realtors",
      url: "https://www.lasvegasrealtor.com/market-statistics/",
      note: "Valley median sale price, inventory, days on market",
    },
    {
      name: "U.S. Census Bureau — Clark County",
      url: "https://www.census.gov/quickfacts/fact/table/clarkcountynevada/PST045225",
      note: "Population and demographic estimates",
    },
    {
      name: "USAFacts — Clark County population",
      url: "https://usafacts.org/answers/how-many-people-live-in-the-us/county/clark-county-nv",
      note: "2024 county population (~2.4M)",
    },
    {
      name: "Federal Reserve H.15",
      url: "https://www.federalreserve.gov/releases/h15/",
      note: "30-year fixed mortgage rate trends",
    },
  ],
} as const;

/** Speakable one-paragraph summaries for voice / AI snippet extraction */
export const speakableSummaries = {
  hub:
    `The Nevada real estate market in 2026 is normalizing toward balance across Clark County. ` +
    `The Las Vegas Valley median single-family sale price tracks near ${marketStats.lasVegas.medianPriceFormatted} ` +
    `with roughly ${marketStats.lasVegas.inventoryMonths} months of supply and ${marketStats.lasVegas.daysOnMarket} average days on market. ` +
    `Henderson and Summerlin trade at premiums; North Las Vegas offers the most affordable entry points. ` +
    `Dr. Jan Duffy provides free market analysis at ${agentInfo.phone}.`,
  clarkCounty:
    `Clark County, Nevada is home to more than 2.4 million residents — about 73 percent of the state's population. ` +
    `Major cities include Las Vegas, Henderson, and North Las Vegas. ` +
    `Economic growth from tourism, healthcare, logistics, and data-center expansion continues to support housing demand alongside California relocation.`,
  forecast:
    `Nevada's 2026 housing forecast calls for modest 1 to 4 percent annual appreciation in the Las Vegas Valley, ` +
    `with Henderson and Summerlin likely outpacing east-valley corridors. ` +
    `Mortgage rates near 6.5 percent and rising inventory give buyers more negotiating power than at the 2022 peak.`,
  tax:
    `Nevada is one of nine U.S. states with no personal state income tax. ` +
    `Relocators from California, New York, and Illinois often save thousands annually on wages and retirement income, ` +
    `while purchasing homes at lower price points than coastal markets.`,
} as const;

export const clarkCountyDemographics = {
  population2024: "2.4 million+",
  populationShare: "73.1% of Nevada",
  countySeat: "Las Vegas",
  medianAge: "38.5 years",
  cities: [
    { name: "Las Vegas", population: "678,900+", role: "County seat & tourism hub" },
    { name: "Henderson", population: "350,000+", role: "Family & luxury corridor" },
    { name: "North Las Vegas", population: "294,000+", role: "Value & new construction" },
    { name: "Boulder City", population: "15,000+", role: "Small-town, no gaming" },
    { name: "Mesquite", population: "23,600+", role: "Northern county gateway" },
  ],
  demographics: [
    "Hispanic or Latino residents: ~33% (above U.S. average)",
    "Asian population: ~11.6% and growing",
    "Foreign-born residents: significant share of workforce",
    "Working-age cohort (25–44) larger than national average",
  ],
} as const;

export const economicDriversDetail = [
  {
    title: "Tourism & Hospitality",
    body: "Las Vegas Strip resorts, conventions, and entertainment employ hundreds of thousands and anchor Clark County's service economy. Stable visitation supports rental demand and move-up buying across the valley.",
    entities: ["Las Vegas Strip", "Clark County", "Las Vegas Convention Center"],
  },
  {
    title: "Data Centers & Technology",
    body: "Switch SUPERNAP campuses and expanding Apex Industrial Park development in North Las Vegas position the valley as a Western data-center hub. High-paying tech and infrastructure jobs increase demand for Henderson and Summerlin housing.",
    entities: ["Switch SUPERNAP", "North Las Vegas", "Apex Industrial Park"],
  },
  {
    title: "California & Pacific Northwest Migration",
    body: "Inbound relocators cite no state income tax, lower home prices than coastal metros, and master-planned amenities. Equity from California sales often funds larger Nevada homes in Green Valley, Summerlin, or Skye Canyon.",
    entities: ["California relocation", "Nevada", "Las Vegas Valley"],
  },
  {
    title: "Healthcare & Logistics",
    body: "Hospital expansions, distribution centers, and e-commerce fulfillment hubs add diversified employment beyond gaming — supporting stable demand in Henderson, North Las Vegas, and northwest valley communities.",
    entities: ["Henderson", "North Las Vegas", "Centennial Hills"],
  },
] as const;

export const valleyMarketSignals = {
  mortgageRateRange: "6.3% – 6.9% (30-year fixed, early 2026)",
  listToSaleRatio: "~97–98%",
  sellerConcessions: "~31% of closings include concessions (up from 2022 lows)",
  inventoryTrend: "Valley-wide active listings rebuilt to 8,000+ — up from 2022 cycle lows",
  priceTrend: "1–4% annual appreciation forecast; submarkets vary widely",
  buyerLeverage:
    "Balanced market: more inventory, longer DOM, and price reductions on overpriced listings",
} as const;

export const cityMarketProfiles = [
  {
    slug: "las-vegas",
    name: "Las Vegas",
    median: marketStats.lasVegas.medianPriceFormatted,
    dom: `${marketStats.lasVegas.daysOnMarket} days`,
    summary:
      "The broadest inventory in the valley spans affordable east-side corridors to golf-course communities and Strip-adjacent high-rises. ZIP-level variance is extreme — Summerlin South medians can exceed $800,000 while North Las Vegas entry points sit near $415,000.",
    bestFor: "Investors, diverse price points, urban access",
    path: "/las-vegas",
    mapPath: "/maps/las-vegas",
  },
  {
    slug: "henderson",
    name: "Henderson",
    median: marketStats.henderson.medianPriceFormatted,
    dom: `${marketStats.henderson.daysOnMarket} days`,
    summary:
      "Nevada's second-largest city ranks among America's safest large cities. Green Valley, Anthem, Inspirada, and Lake Las Vegas attract families and California relocators. Single-family medians near $530,000 with strong school zones.",
    bestFor: "Families, luxury buyers, California relocators",
    path: "/henderson",
    mapPath: "/maps/henderson",
  },
  {
    slug: "summerlin",
    name: "Summerlin",
    median: marketStats.summerlin.medianPriceFormatted,
    dom: `${marketStats.summerlin.daysOnMarket} days`,
    summary:
      "Howard Hughes master-planned community with Red Rock Canyon views, Downtown Summerlin retail, and guard-gated luxury in The Ridges. Commands a 5–12% school-zone premium over valley medians.",
    bestFor: "Outdoor lifestyle, top schools, upscale buyers",
    path: "/summerlin",
    mapPath: "/maps/summerlin",
  },
  {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    median: "$420,000",
    dom: "42 days",
    summary:
      "Fastest-growing value market with Aliante, Skye Canyon access, and Apex industrial expansion. Median sale prices near $420,000 with strong rental demand and builder incentives on new construction.",
    bestFor: "First-time buyers, investors, young families",
    path: "/north-las-vegas",
    mapPath: "/maps/north-las-vegas",
  },
] as const;

export const buyerSellerPlaybook = {
  buyers: [
    "Get pre-approved before touring — rates near 6.5% make payment math critical",
    "Target neighborhoods with school-zone or employment tailwinds (Henderson, Summerlin, Skye Canyon)",
    "Negotiate concessions: ~31% of valley closings now include seller credits or repairs",
    "Compare new construction buydowns vs. resale value in North Las Vegas and Mountains Edge",
    "Factor HOA, insurance, and property tax into monthly cost — not just purchase price",
  ],
  sellers: [
    "Price to market on day one — overpriced listings sit 60+ days even in strong corridors",
    "Invest in professional photography and staging; well-priced homes still sell under 30 days",
    "Highlight no state income tax and lifestyle amenities for out-of-state buyers",
    "Review comparable sales by ZIP, not valley-wide median alone",
    "Work with a local expert who knows Henderson, Summerlin, and luxury micro-markets",
  ],
} as const;

export const taxRelocationFacts = [
  {
    title: "Nine No-Income-Tax States",
    body: "As of 2026, Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming levy no broad personal state income tax. Nevada also does not tax Social Security or retirement account distributions at the state level.",
  },
  {
    title: "California Equity Arbitrage",
    body: "Selling a California home and buying in Henderson or Summerlin often means a larger property, lower overall housing cost, and elimination of state income tax on wages — a triple benefit for remote workers and retirees.",
  },
  {
    title: "Establishing Nevada Residency",
    body: "Relocators should obtain a Nevada driver's license, register to vote, and document 183+ days of physical presence to support residency for tax purposes. Consult a CPA for your specific situation.",
  },
  {
    title: "Property & Sales Taxes",
    body: "Nevada property tax rates are moderate relative to many states. Clark County also has sales tax — weigh total cost of living, not income tax alone, when comparing destinations.",
  },
] as const;

/** Expanded FAQs for AEO — direct answers AI engines can cite */
export const expandedMarketFaqs: Record<string, FAQItem[]> = {
  hub: [
    {
      question: "What is the median home price in the Las Vegas Valley in 2026?",
      answer: `Las Vegas Realtors data shows the valley-wide median single-family sale price near ${marketStats.lasVegas.medianPriceFormatted} in early 2026, with year-over-year appreciation in the 2–4% range. Condo and townhome medians run lower — near $298,000–$375,000 depending on the month.`,
    },
    {
      question: "How many months of housing inventory does Las Vegas have?",
      answer: `Clark County months of supply has normalized to roughly ${marketStats.lasVegas.inventoryMonths} months — up from the 1.4-month cycle low in 2022. This shift from a tight seller market toward balance gives buyers more selection and negotiating room.`,
    },
    {
      question: "What are average days on market in Nevada?",
      answer: `The Las Vegas Valley median days on market is approximately ${marketStats.lasVegas.daysOnMarket} days in 2026, up from 24 days a year earlier. Well-priced homes in Henderson and Summerlin still sell faster than overpriced listings.`,
    },
    {
      question: "Is Las Vegas a buyer's or seller's market in 2026?",
      answer:
        "The market is shifting toward balance. Inventory has rebuilt, list-to-sale ratios hover near 97–98%, and seller concessions appear in roughly one-third of closings. Premium ZIP codes in Summerlin and Henderson remain competitive; overpriced homes sit regardless of area.",
    },
    {
      question: "What mortgage rate are Las Vegas buyers seeing?",
      answer: `The 30-year fixed rate averaged 6.3–6.9% in early 2026 per Federal Reserve H.15 data. Builder rate buydowns on new construction in North Las Vegas and Skye Canyon can reduce effective rates for qualified buyers.`,
    },
    {
      question: "Who publishes Nevada real estate market data?",
      answer: `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, publishes guides at ${siteConfig.url}. Call ${agentInfo.phone} for a free neighborhood-level analysis tailored to your budget.`,
    },
  ],
  clarkCounty: [
    {
      question: "What is the population of Clark County Nevada?",
      answer: "Clark County had approximately 2.4 million residents in 2024 per U.S. Census estimates — the 11th-largest county in the United States and home to 73% of Nevada's population.",
    },
    {
      question: "What cities are in Clark County Nevada?",
      answer: "Major incorporated cities include Las Vegas (county seat), Henderson, North Las Vegas, Boulder City, and Mesquite. Unincorporated communities include Paradise, Spring Valley, and Enterprise.",
    },
    {
      question: "Why is Clark County growing?",
      answer:
        "Growth drivers include California migration, data-center and logistics expansion, tourism employment, and Nevada's no state income tax. Limited buildable land in premium master-planned areas supports long-term value in Henderson and Summerlin.",
    },
    {
      question: "What is the cheapest city to buy a home in Clark County?",
      answer:
        "North Las Vegas typically offers the lowest median sale prices (near $420,000), followed by select east Las Vegas corridors. Henderson and Summerlin command premiums for schools, amenities, and master-planned living.",
    },
  ],
  forecast: [
    {
      question: "What is the Las Vegas housing forecast for summer 2026?",
      answer:
        "Base-case forecasts project valley median prices between $485,000 and $498,000 through summer 2026 — modest 1.5–4% appreciation above Q1 levels. Henderson and Summerlin may lead with 4–6% gains; some North Las Vegas ZIPs may track flat year-over-year.",
    },
    {
      question: "Will Las Vegas home prices crash in 2026?",
      answer:
        "A 2008-style crash is unlikely. Homeowner equity remains high, migration continues, and inventory — while rising — has not reached oversupply levels. Expect normalization, not collapse.",
    },
    {
      question: "What happens if mortgage rates fall below 6%?",
      answer:
        "Industry analysts expect a surge in buyer activity if rates drop below 6%, potentially tightening inventory below 6,500 active listings and accelerating appreciation in move-up markets.",
    },
    {
      question: "Best Nevada neighborhoods to buy in 2026?",
      answer:
        "Families: Henderson (Green Valley, Anthem) or Summerlin. First-time buyers: North Las Vegas, Mountains Edge, Skye Canyon. Luxury: The Ridges, MacDonald Ranch, Lake Las Vegas. Call (702) 500-1955 for a personalized shortlist.",
    },
  ],
  tax: [
    {
      question: "Which states have no state income tax in 2026?",
      answer:
        "Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming have no broad personal state income tax. Nevada does not tax wages, salaries, or most retirement income at the state level.",
    },
    {
      question: "How much tax do Californians save moving to Nevada?",
      answer:
        "On $250,000 household income, California state tax can exceed $18,000 annually vs. $0 in Nevada — before considering lower home prices. High earners save 5–13% of gross income depending on bracket.",
    },
    {
      question: "Does Nevada tax Social Security or 401(k) withdrawals?",
      answer:
        "Nevada does not levy state income tax on Social Security benefits or qualified retirement distributions — a major advantage for retirees relocating from taxed states.",
    },
    {
      question: "What do I need to establish Nevada tax residency?",
      answer:
        "Obtain a Nevada driver's license, register vehicles, update voter registration, and document 183+ days of physical presence. Consult a tax professional for audit-proof residency planning.",
    },
  ],
  compare: [
    {
      question: "Henderson vs Summerlin — which has lower home prices?",
      answer: `Henderson medians near ${marketStats.henderson.medianPriceFormatted} vs. Summerlin near ${marketStats.summerlin.medianPriceFormatted}. Henderson offers slightly better value; Summerlin commands a premium for Red Rock access and Howard Hughes amenities.`,
    },
    {
      question: "North Las Vegas vs Henderson for first-time buyers?",
      answer:
        "North Las Vegas ($420K median) offers the lowest entry point with new construction incentives. Henderson ($492K median) costs more but delivers top schools, safety ratings, and resale strength.",
    },
    {
      question: "Which Las Vegas area appreciates fastest?",
      answer:
        "In 2026 forecasts, Henderson and Summerlin submarkets lead with 4–6% appreciation potential. Luxury corridors (The Ridges, Lake Las Vegas) remain resilient regardless of rate environment.",
    },
  ],
};

/** Dataset rows for schema.org Dataset markup */
export function getValleyMarketDataset() {
  return {
    name: "Las Vegas Valley Housing Market Statistics",
    description: `Clark County Nevada residential market snapshot — ${marketStats.lastUpdated}`,
    dateModified: "2026-06-11",
    variables: [
      { name: "Median Sale Price (SFR)", value: marketStats.lasVegas.medianPriceFormatted },
      { name: "Year-over-Year Change", value: marketStats.lasVegas.yearOverYearChange },
      { name: "Days on Market", value: String(marketStats.lasVegas.daysOnMarket) },
      { name: "Months of Supply", value: String(marketStats.lasVegas.inventoryMonths) },
      { name: "Active Listings (Valley)", value: marketStats.lasVegas.activeListings.toLocaleString() },
      { name: "Henderson Median", value: marketStats.henderson.medianPriceFormatted },
      { name: "Summerlin Median", value: marketStats.summerlin.medianPriceFormatted },
      { name: "Clark County Population", value: clarkCountyDemographics.population2024 },
    ],
  };
}
