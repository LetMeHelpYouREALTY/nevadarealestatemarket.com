import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHero } from "@/components/sections/PageHero";
import { getHeroImageByKey } from "@/lib/hero-images";
import { mapLocations } from "@/lib/map-locations";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Nevada Real Estate Maps | Las Vegas Valley Neighborhood Guides",
  description:
    "Interactive Google Maps for Las Vegas, Henderson, Summerlin, North Las Vegas, and Clark County real estate. Directions to Dr. Jan Duffy's office. (702) 500-1955.",
  path: "/maps",
  keywords: [
    "Las Vegas real estate map",
    "Henderson homes map",
    "Summerlin map",
    "Clark County housing map",
    "Dr Jan Duffy office directions",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Maps", url: "/maps" },
];

const areaMaps = mapLocations.filter((loc) => loc.slug !== "office");

export default function MapsIndexPage() {
  return (
    <>
      <PageSeo
        name="Nevada Real Estate Maps"
        description="Interactive maps for Las Vegas Valley real estate markets and office directions."
        path="/maps"
        breadcrumbs={breadcrumbs}
        faqs={[
          {
            question: "Where does Dr. Jan Duffy serve in Nevada?",
            answer:
              "Dr. Jan Duffy serves Clark County including Las Vegas, Henderson, Summerlin, North Las Vegas, and surrounding communities. Office: 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052.",
          },
        ]}
      />
      <Navbar />
      <PageHero
        hero={getHeroImageByKey("nevada-real-estate-market")}
        badge="Local SEO Maps"
        title="Nevada Real Estate Maps"
        subtitle="Interactive Google Maps for every major Las Vegas Valley market — plus directions to our Henderson office."
        className="pt-24"
      />
      <main className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/directions"
            className="mb-10 flex items-center justify-between rounded-xl border-2 border-blue-200 bg-blue-50 p-6 hover:border-blue-400 transition group"
          >
            <div className="flex items-center gap-4">
              <Navigation className="h-10 w-10 text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">
                  Office Directions & Map
                </h2>
                <p className="text-slate-600 text-sm">
                  3185 St Rose Pkwy, Suite 101, Henderson, NV 89052
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-blue-600" />
          </Link>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Market Area Maps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaMaps.map((loc) => (
              <Link
                key={loc.slug}
                href={`/maps/${loc.slug}`}
                className="rounded-xl border p-6 hover:border-blue-300 hover:shadow-md transition group"
              >
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                  {loc.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {loc.description}
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  View map <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
