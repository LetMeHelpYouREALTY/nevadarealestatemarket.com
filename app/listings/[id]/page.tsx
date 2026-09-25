import { SitePage } from "@/components/layouts/SitePage";
import { HeadingPhoto } from "@/components/sections/SectionImage";
import { getHeroImageByKey } from "@/lib/hero-images";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo, businessHours, officeInfo } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  return buildPageMetadata({
    title: `Las Vegas Valley Listings | Search ${id} | Dr. Jan Duffy`,
    description: `Search live MLS listings with Dr. Jan Duffy. RealScout (native Follow Up Boss) is the source of truth — listing IDs change daily. Call ${agentInfo.phone}.`,
    path: `/listings/${id}`,
  });
}

/**
 * Do not invent address, price, or beds for a URL slug.
 * RealScout is the live listing source (native FUB integration).
 */
export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;

  return (
    <SitePage
      path={`/listings/${id}`}
      seoTitle={`Las Vegas Valley Listings | ${id}`}
      seoDescription={`Search live MLS listings with Dr. Jan Duffy. Call ${agentInfo.phone}.`}
      hero={getHeroImageByKey("listings")}
      heroBadge="Live MLS search"
      heroTitle="Search Las Vegas Valley listings"
      heroSubtitle="RealScout is the live inventory source. URL slugs are not a listed address or price."
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Listings", url: "/listings" },
        { name: "Search", url: `/listings/${id}` },
      ]}
    >
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
          Popular property searches in Las Vegas
        </h2>
        <HeadingPhoto heading="Popular Property Searches in Las Vegas" />
        <p className="mb-4 text-slate-700 leading-relaxed">
          Reference <span className="font-mono text-sm">{id}</span> is not a
          live MLS address. Inventory moves daily — search below or call{" "}
          <a className="font-semibold text-blue-700" href="tel:+17025001955">
            {agentInfo.phone}
          </a>
          .
        </p>
        <p className="mb-8 text-slate-700 leading-relaxed">
          {officeInfo.address.full}. Hours {businessHours.display}.{" "}
          <Link href="/listings" className="text-blue-700 underline">
            All listings
          </Link>
          {" · "}
          <Link href="/contact" className="text-blue-700 underline">
            Contact
          </Link>
          {" · "}
          <Link href="/directions" className="text-blue-700 underline">
            Directions
          </Link>
        </p>
      </main>
    </SitePage>
  );
}
