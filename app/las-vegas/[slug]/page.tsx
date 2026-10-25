import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getLasVegasCommunity,
  lasVegasCommunities,
} from "@/lib/market-communities/las-vegas";
import { agentInfo } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return lasVegasCommunities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const community = getLasVegasCommunity(slug);
  if (!community) return {};

  return buildPageMetadata({
    title: `${community.name} Homes For Sale | Las Vegas NV Real Estate`,
    description: `${community.name} Las Vegas NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · ${agentInfo.phone}.`,
    path: `/las-vegas/${slug}`,
    keywords: [
      `${community.name} homes`,
      `${community.name} Las Vegas`,
      "Las Vegas real estate",
    ],
  });
}

export default async function LasVegasCommunityPage(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const community = getLasVegasCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="Las Vegas, NV Neighborhoods"
      areaPath="/las-vegas"
      cityName="Las Vegas"
    />
  );
}
