import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCommunityDetail } from "@/components/market/MarketCommunityDetail";
import {
  getNorthLasVegasCommunity,
  northLasVegasCommunities,
} from "@/lib/market-communities/north-las-vegas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";

type Props = {
  params: { slug: string };
};

/** Dedicated page owns this slug (richer unique content + self-canonical). */
const DEDICATED_SLUGS = new Set(["del-webb-north-ranch"]);

export async function generateStaticParams() {
  return northLasVegasCommunities
    .filter((community) => !DEDICATED_SLUGS.has(community.slug))
    .map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  if (DEDICATED_SLUGS.has(slug)) return {};
  const community = getNorthLasVegasCommunity(slug);
  if (!community) return {};

  return buildPageMetadata({
    title: `${community.name} Homes For Sale | North Las Vegas NV Real Estate`,
    description: `${community.name} North Las Vegas NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · ${agentInfo.phone}.`,
    path: `/north-las-vegas/${slug}`,
    keywords: [
      `${community.name} homes`,
      `${community.name} North Las Vegas`,
      "North Las Vegas real estate",
    ],
  });
}

export default async function NorthLasVegasCommunityPage({ params }: Props) {
  const { slug } = params;
  if (DEDICATED_SLUGS.has(slug)) notFound();
  const community = getNorthLasVegasCommunity(slug);
  if (!community) notFound();

  return (
    <MarketCommunityDetail
      community={community}
      areaLabel="North Las Vegas, NV Communities"
      areaPath="/north-las-vegas"
      cityName="North Las Vegas"
    />
  );
}
