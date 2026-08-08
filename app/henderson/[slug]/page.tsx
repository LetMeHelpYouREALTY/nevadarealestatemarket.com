import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getHendersonCommunity,
  hendersonCommunities,
} from "@/lib/market-communities/henderson";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return hendersonCommunities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const community = getHendersonCommunity(slug);
  if (!community) return {};

  return buildPageMetadata({
    title: `${community.name} Homes For Sale | Henderson NV Real Estate`,
    description: `${community.name} Henderson NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · ${agentInfo.phone}.`,
    path: `/henderson/${slug}`,
    keywords: [
      `${community.name} homes`,
      `${community.name} Henderson`,
      "Henderson real estate",
    ],
  });
}

export default async function HendersonCommunityPage({ params }: Props) {
  const { slug } = params;
  const community = getHendersonCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="Henderson, NV Communities"
      areaPath="/henderson"
      cityName="Henderson"
    />
  );
}
