import type { Metadata } from "next";
import { MarketAreaIndex } from "@/components/market/MarketAreaIndex";
import { northLasVegasCommunities } from "@/lib/market-communities/north-las-vegas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "North Las Vegas NV Real Estate | Communities & Homes For Sale",
  description:
    "North Las Vegas Nevada real estate expert Dr. Jan Duffy. Browse Aliante, Del Webb North Ranch, Tule Springs, Eldorado & Villages of Tule Springs listings.",
  alternates: { canonical: `${siteConfig.url}/north-las-vegas` },
};

export default function NorthLasVegasPage() {
  return (
    <MarketAreaIndex
      title="North Las Vegas, NV Real Estate"
      subtitle="The valley's fastest-growing city — master-planned communities, new construction, and 55+ living at unbeatable value."
      sectionTitle="North Las Vegas Communities"
      sectionDescription="Strong value, new construction, and 55+ options — North Las Vegas offers more square footage per dollar than most of the valley."
      areaPath="/north-las-vegas"
      communities={northLasVegasCommunities}
      ctaTitle="Compare North Las Vegas Communities"
      ctaDescription="I'll help you weigh builder incentives, HOA costs, and resale trends before you tour a single model home."
    />
  );
}
