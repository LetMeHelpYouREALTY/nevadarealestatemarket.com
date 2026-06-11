import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { lasVegasCommunities } from "@/lib/market-communities/las-vegas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Las Vegas NV Real Estate | Neighborhoods & Homes For Sale",
  description:
    "Las Vegas Nevada real estate market and neighborhood guides. Centennial Hills, Spring Valley, Rhodes Ranch & more. Dr. Jan Duffy · " +
    agentInfo.phone,
  path: "/las-vegas",
  keywords: ["Las Vegas real estate", "Las Vegas homes for sale", "Las Vegas housing market"],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Las Vegas", url: "/las-vegas" },
];

const faqs = [
  {
    question: "What is the Las Vegas median home price in 2026?",
    answer:
      "The Las Vegas Valley median home price is approximately $450,000 as of January 2026, with 28 average days on market and 2.1 months of inventory.",
  },
  {
    question: "Which Las Vegas neighborhoods are best for families?",
    answer:
      "Families often choose Summerlin, Henderson, Skye Canyon, Mountains Edge, and Centennial Hills for schools, parks, and master-planned amenities.",
  },
];

export default function LasVegasPage() {
  return (
    <MarketAreaIndex
      path="/las-vegas"
      seoTitle="Las Vegas NV Real Estate Market"
      seoDescription="Las Vegas neighborhood guides, median prices, and market trends."
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      hero={getHeroImageByKey("las-vegas")}
      title="Las Vegas, NV Real Estate"
      subtitle="From guard-gated golf communities to walkable urban living — every Las Vegas neighborhood has its own story."
      sectionTitle="Las Vegas Neighborhoods"
      sectionDescription="Each corridor has different price points, lifestyles, and appreciation patterns. Start with the community that matches your goals."
      areaPath="/las-vegas"
      communities={lasVegasCommunities}
      ctaTitle="Need Help Narrowing the Valley?"
      ctaDescription="Tell me your budget, commute, and lifestyle priorities — I'll shortlist the neighborhoods worth touring."
    />
  );
}
