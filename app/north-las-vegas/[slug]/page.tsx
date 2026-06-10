import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getNorthLasVegasCommunity,
  northLasVegasCommunities,
} from "@/lib/market-communities/north-las-vegas";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return northLasVegasCommunities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const community = getNorthLasVegasCommunity(slug);
  if (!community) return {};

  return {
    title: `${community.name} Homes For Sale | North Las Vegas NV Real Estate`,
    description: `${community.name} North Las Vegas NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · 702-222-1964.`,
    alternates: { canonical: `${siteConfig.url}/north-las-vegas/${slug}` },
  };
}

export default async function NorthLasVegasCommunityPage({ params }: Props) {
  const { slug } = params;
  const community = getNorthLasVegasCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="North Las Vegas, NV Communities"
      areaPath="/north-las-vegas"
    />
  );
}
