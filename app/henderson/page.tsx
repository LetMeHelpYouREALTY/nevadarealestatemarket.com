import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { hendersonCommunities } from "@/lib/market-communities/henderson";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Henderson NV Real Estate | Communities & Homes For Sale",
  description:
    "Henderson Nevada real estate market data and community guides. Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills & Anthem. Dr. Jan Duffy · " +
    agentInfo.phone,
  path: "/henderson",
  keywords: [
    "Henderson NV real estate",
    "Henderson homes for sale",
    "Henderson housing market",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Henderson", url: "/henderson" },
];

const faqs = [
  {
    question: "What is the median home price in Henderson, NV?",
    answer:
      "As of January 2026, the Henderson median home price is approximately $485,000, up 5.1% year-over-year. Luxury corridors like Lake Las Vegas and MacDonald Ranch trade higher.",
  },
  {
    question: "What are the best Henderson communities to buy in?",
    answer:
      "Top Henderson communities include Green Valley Ranch, Anthem, Inspirada, Seven Hills, MacDonald Ranch, and Lake Las Vegas — each offering different price points and lifestyles.",
  },
];

export default function HendersonPage() {
  return (
    <MarketAreaIndex
      path="/henderson"
      seoTitle="Henderson NV Real Estate Market"
      seoDescription="Henderson Nevada communities, median prices, and homes for sale guides."
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      hero={getHeroImageByKey("henderson")}
      title="Henderson, NV Real Estate"
      subtitle="Six master-planned communities. One local expert who knows every sale."
      sectionTitle="Henderson Communities"
      sectionDescription="Each neighborhood has its own personality — and its own price points. Here's what to expect in every one."
      areaPath="/henderson"
      communities={hendersonCommunities}
      ctaTitle="Not Sure Which Community Fits?"
      ctaDescription="35+ years in Henderson means I know which street has the view and which builder finishes hold up. Let's find your match."
    />
  );
}
