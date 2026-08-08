import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getSummerlinCommunity,
  summerlinCommunities,
} from "@/lib/market-communities/summerlin";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return summerlinCommunities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const community = getSummerlinCommunity(slug);
  if (!community) return {};

  return buildPageMetadata({
    title: `${community.name} Homes For Sale | Summerlin NV Real Estate`,
    description: `${community.name} Summerlin NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · ${agentInfo.phone}.`,
    path: `/summerlin/${slug}`,
    keywords: [
      `${community.name} homes`,
      `${community.name} Summerlin`,
      "Summerlin real estate",
    ],
  });
}

export default async function SummerlinCommunityPage({ params }: Props) {
  const { slug } = params;
  const community = getSummerlinCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="Summerlin, NV Communities"
      areaPath="/summerlin"
      cityName="Summerlin"
    />
  );
}
