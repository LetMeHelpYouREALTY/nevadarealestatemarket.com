import type { Metadata } from "next";
import { MapSeoPage } from "@/components/maps/MapSeoPage";
import { getOfficeLocation } from "@/lib/map-locations";
import { buildPageMetadata } from "@/lib/seo/metadata";

const office = getOfficeLocation();

export const metadata: Metadata = buildPageMetadata({
  title: office.metaTitle,
  description: office.metaDescription,
  path: "/directions",
  keywords: [
    "Dr Jan Duffy office directions",
    "Henderson real estate office",
    "Berkshire Hathaway Henderson NV",
    "3185 St Rose Pkwy directions",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Maps", url: "/maps" },
  { name: "Directions", url: "/directions" },
];

export default function DirectionsPage() {
  return <MapSeoPage location={office} breadcrumbs={breadcrumbs} />;
}
