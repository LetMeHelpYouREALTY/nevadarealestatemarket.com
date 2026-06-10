import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { summerlinCommunities } from "@/lib/market-communities/summerlin";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Summerlin NV Real Estate | Luxury Communities & Homes For Sale",
  description:
    "Summerlin Nevada real estate expert Dr. Jan Duffy. Browse The Ridges, The Summit Club, Red Rock Country Club, Stonebridge, Heritage, The Vistas & Skye Canyon.",
  alternates: { canonical: `${siteConfig.url}/summerlin` },
};

export default function SummerlinPage() {
  return (
    <MarketAreaIndex
      title="Summerlin, NV Real Estate"
      subtitle="Las Vegas's premier master-planned community. Seven distinct villages — one expert who knows every sale."
      sectionTitle="Summerlin Communities"
      sectionDescription="From ultra-luxury guard-gated estates to active adult communities and new construction — Summerlin has a village for every lifestyle."
      areaPath="/summerlin"
      communities={summerlinCommunities}
      ctaTitle="Which Summerlin Village Fits Your Lifestyle?"
      ctaDescription="I've sold in every Summerlin village. Let me match you with the right community, price point, and floor plan."
    />
  );
}
