import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { summerlinCommunities } from "@/lib/market-communities/summerlin";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo, marketStats } from "@/lib/site-config";
import { getHeroImageByKey } from "@/lib/hero-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Summerlin NV Real Estate | Communities & Luxury Homes",
  description:
    `Summerlin Nevada real estate — median ${marketStats.summerlin.medianPriceFormatted}. The Ridges, Red Rock, guard-gated luxury. Dr. Jan Duffy · ${agentInfo.phone}`,
  path: "/summerlin",
  keywords: ["Summerlin real estate", "Summerlin homes for sale", "The Ridges Summerlin"],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Nevada Market", url: "/nevada-real-estate-market" },
  { name: "Summerlin", url: "/summerlin" },
];

const faqs = [
  {
    question: "What is the median home price in Summerlin?",
    answer: `Summerlin's median home price is approximately ${marketStats.summerlin.medianPriceFormatted} as of January 2026, with luxury communities like The Ridges commanding significantly higher price points.`,
  },
  {
    question: "Why do buyers choose Summerlin over other Las Vegas areas?",
    answer:
      "Summerlin offers Red Rock Canyon access, 150+ parks, top-rated schools, Downtown Summerlin shopping, and guard-gated luxury options — making it one of Nevada's most desirable master-planned communities.",
  },
];

export default function SummerlinPage() {
  return (
    <MarketAreaIndex
      path="/summerlin"
      seoTitle="Summerlin NV Real Estate Market"
      seoDescription="Summerlin community guides, luxury homes, and market statistics."
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      hero={getHeroImageByKey("summerlin")}
      title="Summerlin, NV Real Estate"
      subtitle="Master-planned living with Red Rock views, top schools, and world-class amenities."
      sectionTitle="Summerlin Communities"
      sectionDescription="From family-friendly villages to ultra-luxury guard-gated estates — explore every Summerlin corridor."
      areaPath="/summerlin"
      communities={summerlinCommunities}
      ctaTitle="Find Your Summerlin Home"
      ctaDescription="Whether it's a golf villa or a custom estate in The Ridges, I'll match you with the right community and negotiate on your behalf."
    />
  );
}
