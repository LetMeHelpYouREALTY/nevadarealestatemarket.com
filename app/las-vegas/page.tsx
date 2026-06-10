import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { lasVegasCommunities } from "@/lib/market-communities/las-vegas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Las Vegas NV Real Estate | Neighborhoods & Homes For Sale",
  description:
    "Las Vegas Nevada real estate expert Dr. Jan Duffy. Browse Centennial Hills, Spring Valley, Rhodes Ranch, Silverstone Ranch, Lone Mountain & Arts District listings.",
  alternates: { canonical: `${siteConfig.url}/las-vegas` },
};

export default function LasVegasPage() {
  return (
    <MarketAreaIndex
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
