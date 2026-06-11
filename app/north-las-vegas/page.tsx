import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { northLasVegasCommunities } from "@/lib/market-communities/north-las-vegas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "North Las Vegas Real Estate | Affordable Homes & New Construction",
  description:
    "North Las Vegas housing market — median around $385K. New construction, first-time buyer programs, investor opportunities. Dr. Jan Duffy · " +
    agentInfo.phone,
  path: "/north-las-vegas",
  keywords: [
    "North Las Vegas real estate",
    "North Las Vegas homes for sale",
    "affordable homes Las Vegas",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "North Las Vegas", url: "/north-las-vegas" },
];

const faqs = [
  {
    question: "Is North Las Vegas a good place to buy a home?",
    answer:
      "North Las Vegas offers the valley's most affordable entry points, strong new construction inventory, and solid rental demand — ideal for first-time buyers and investors.",
  },
  {
    question: "What is the median home price in North Las Vegas?",
    answer:
      "The North Las Vegas median is approximately $385,000 as of January 2026, with many new-build communities offering incentives for buyers.",
  },
];

export default function NorthLasVegasPage() {
  return (
    <MarketAreaIndex
      path="/north-las-vegas"
      seoTitle="North Las Vegas Real Estate Market"
      seoDescription="North Las Vegas community guides, affordable homes, and investor insights."
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      hero={getHeroImageByKey("north-las-vegas")}
      title="North Las Vegas Real Estate"
      subtitle="Value, new construction, and growth — the valley's most accessible entry point for homeownership."
      sectionTitle="North Las Vegas Communities"
      sectionDescription="Explore master-planned neighborhoods with modern amenities at approachable price points."
      areaPath="/north-las-vegas"
      communities={northLasVegasCommunities}
      ctaTitle="First-Time Buyer or Investor?"
      ctaDescription="I'll help you compare new construction incentives, rental yields, and the neighborhoods with the best long-term appreciation."
    />
  );
}
