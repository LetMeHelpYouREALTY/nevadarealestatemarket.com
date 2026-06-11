import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapSeoPage } from "@/components/maps/MapSeoPage";
import { getMapLocation, mapLocations } from "@/lib/map-locations";
import { buildPageMetadata } from "@/lib/seo/metadata";
type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return mapLocations
    .filter((loc) => loc.slug !== "office")
    .map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getMapLocation(params.slug);
  if (!location || location.slug === "office") return {};

  return buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/maps/${location.slug}`,
    keywords: [
      `${location.name} real estate map`,
      `${location.name} homes for sale map`,
      "Nevada real estate map",
    ],
  });
}

export default function MapSlugPage({ params }: Props) {
  const location = getMapLocation(params.slug);
  if (!location || location.slug === "office") notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Maps", url: "/maps" },
    { name: location.name, url: `/maps/${location.slug}` },
  ];

  return <MapSeoPage location={location} breadcrumbs={breadcrumbs} />;
}
