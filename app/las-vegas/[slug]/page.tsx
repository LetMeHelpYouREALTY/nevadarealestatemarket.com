import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getLasVegasCommunity,
  lasVegasCommunities,
} from "@/lib/market-communities/las-vegas";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return lasVegasCommunities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const community = getLasVegasCommunity(slug);
  if (!community) return {};

  return {
    title: `${community.name} Homes For Sale | Las Vegas NV Real Estate`,
    description: `${community.name} Las Vegas NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · 702-222-1964.`,
    alternates: { canonical: `${siteConfig.url}/las-vegas/${slug}` },
  };
}

export default async function LasVegasCommunityPage({ params }: Props) {
  const { slug } = params;
  const community = getLasVegasCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="Las Vegas, NV Neighborhoods"
      areaPath="/las-vegas"
    />
  );
}
