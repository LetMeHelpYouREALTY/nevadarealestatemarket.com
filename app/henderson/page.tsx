import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { hendersonCommunities } from "@/lib/market-communities/henderson";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Henderson NV Real Estate | Communities & Homes For Sale",
  description:
    "Henderson Nevada real estate expert Dr. Jan Duffy. Browse Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem & Inspirada listings.",
  alternates: { canonical: `${siteConfig.url}/henderson` },
};

export default function HendersonPage() {
  return (
    <MarketAreaIndex
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
