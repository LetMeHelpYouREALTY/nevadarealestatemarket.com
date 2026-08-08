import { SeoArticlePage } from "@/components/sections/SeoArticlePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo, marketStats } from "@/lib/site-config";

const path = "/las-vegas-real-estate";

export const metadata = buildPageMetadata({
  title: "Las Vegas Real Estate | Homes, Markets & Guides | Dr. Jan Duffy",
  description:
    "Las Vegas real estate hub: valley prices, Henderson, Summerlin, North Las Vegas, buyers & sellers guides. Expert help from Dr. Jan Duffy. Call (702) 500-1955.",
  path,
  keywords: [
    "Las Vegas real estate",
    "Las Vegas homes for sale",
    "Clark County real estate",
    "Henderson Summerlin real estate",
    "Dr Jan Duffy Las Vegas realtor",
  ],
});

const faqs = [
  {
    question: "What is the Las Vegas median home price in 2026?",
    answer:
      `Valley median single-family prices have recently tracked near ${marketStats.lasVegas.medianPriceFormatted} (${marketStats.lastUpdated} market data). Neighborhood medians vary widely — Summerlin and luxury pockets trade higher; North Las Vegas offers lower entry points.`,
  },
  {
    question: "Where should I start looking in Las Vegas?",
    answer:
      "Define commute, lot size, HOA tolerance, and budget — then compare Henderson, Summerlin, Las Vegas, and North Las Vegas. Use our community guides or call Dr. Jan for a personalized shortlist.",
  },
  {
    question: "Who should I contact for Las Vegas real estate help?",
    answer:
      `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Call or text ${agentInfo.phone}.`,
  },
];

export default function LasVegasRealEstatePage() {
  return (
    <SeoArticlePage
      path={path}
      title={metadata.title as string}
      description={metadata.description as string}
      hero={getHeroImageByKey("las-vegas")}
      heroBadge="Las Vegas Valley"
      heroTitle="Las Vegas Real Estate"
      heroSubtitle="One hub for valley markets, community guides, and representation with Dr. Jan Duffy."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Las Vegas Real Estate", url: path },
      ]}
      faqs={faqs}
      intro={[
        "“Las Vegas real estate” covers more than the Strip — it includes Henderson, Summerlin, North Las Vegas, and dozens of master-planned communities across Clark County.",
        `Current valley snapshot (${marketStats.lastUpdated}): median near ${marketStats.lasVegas.medianPriceFormatted}, roughly ${marketStats.lasVegas.daysOnMarket} average days on market, and about ${marketStats.lasVegas.inventoryMonths} months of supply. Use the links below to go deeper.`,
      ]}
      sections={[
        {
          heading: "Explore by city",
          body: ["Start with the submarket that matches your commute and housing type:"],
          bullets: [
            "Las Vegas city neighborhoods & Centennial Hills",
            "Henderson — Green Valley, Anthem, Lake Las Vegas",
            "Summerlin — Red Rock access & master-planned amenities",
            "North Las Vegas — value and new construction",
          ],
        },
        {
          heading: "Buyers and sellers",
          body: [
            "Buyers: get pre-approved, then tour with alerts. Sellers: price with a CMA tied to your ZIP, not a valley average. Dr. Jan handles both sides with clear communication.",
          ],
        },
      ]}
      relatedLinks={[
        { href: "/las-vegas", label: "Las Vegas communities" },
        { href: "/henderson", label: "Henderson communities" },
        { href: "/summerlin", label: "Summerlin communities" },
        { href: "/north-las-vegas", label: "North Las Vegas communities" },
        { href: "/nevada-real-estate-market", label: "Nevada market data hub" },
        { href: "/buyers", label: "Buyers" },
        { href: "/sellers", label: "Sellers" },
      ]}
    />
  );
}
