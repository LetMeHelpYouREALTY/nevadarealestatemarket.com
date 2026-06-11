import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHero } from "@/components/sections/PageHero";
import { GoogleMapEmbed } from "@/components/maps/GoogleMapEmbed";
import SchemaScript from "@/components/SchemaScript";
import type { MapLocation } from "@/lib/map-locations";
import { getHeroImageByKey } from "@/lib/hero-images";
import { agentInfo, officeInfo, businessHours, siteConfig } from "@/lib/site-config";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

type MapSeoPageProps = {
  location: MapLocation;
  breadcrumbs: Array<{ name: string; url: string }>;
};

function buildPlaceSchema(location: MapLocation) {
  const basePath = location.slug === "office" ? "/directions" : `/maps/${location.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${siteConfig.url}${basePath}#place`,
    name: location.name,
    description: location.description,
    url: `${siteConfig.url}${basePath}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    ...(location.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address.street,
        addressLocality: location.address.city,
        addressRegion: location.address.state,
        postalCode: location.address.zip,
        addressCountry: "US",
      },
    }),
    hasMap: location.directionsUrl,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  };
}

export function MapSeoPage({ location, breadcrumbs }: MapSeoPageProps) {
  const path = location.slug === "office" ? "/directions" : `/maps/${location.slug}`;
  const hero = getHeroImageByKey(location.heroKey);

  const placeSchema = buildPlaceSchema(location);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const mapGraphSchema = combineSchemas(placeSchema, breadcrumbSchema);

  return (
    <>
      <PageSeo
        name={location.metaTitle}
        description={location.metaDescription}
        path={path}
        breadcrumbs={breadcrumbs}
        faqs={location.faqs}
        speakable
      />
      <SchemaScript schema={mapGraphSchema} id="map-place-schema" />
      <Navbar />
      <PageHero
        hero={hero}
        badge="Interactive Map"
        title={location.headline}
        subtitle={location.description}
        className="pt-24"
      />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          <nav className="max-w-6xl mx-auto mb-8 text-sm text-slate-500">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i > 0 && " / "}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.url} className="hover:text-blue-600">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-slate-900">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <GoogleMapEmbed location={location} height={450} />
            </div>

            <aside className="space-y-6">
              {location.address && (
                <div className="rounded-xl border p-6 bg-white">
                  <h2 className="font-bold text-lg text-slate-900 mb-4">Office NAP</h2>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>
                        {location.address.street}
                        <br />
                        {location.address.city}, {location.address.state}{" "}
                        {location.address.zip}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                      <a href={agentInfo.phoneTel} className="hover:text-blue-600 font-medium">
                        {agentInfo.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                      {businessHours.display}
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-xl border p-6 bg-blue-50">
                <h2 className="font-bold text-lg text-slate-900 mb-3">
                  {location.slug === "office" ? "Service Areas" : "Featured Areas"}
                </h2>
                <ul className="space-y-2">
                  {location.neighborhoods.map((n) => (
                    <li key={n} className="text-sm text-slate-700 flex items-center gap-2">
                      <span className="text-blue-600">•</span> {n}
                    </li>
                  ))}
                </ul>
                <Link
                  href={location.relatedPath}
                  className="inline-flex items-center mt-4 text-blue-600 font-medium text-sm hover:underline"
                >
                  View {location.name} guide
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <Link
                href="/contact"
                className="block text-center rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition"
              >
                Schedule Consultation
              </Link>
            </aside>
          </div>

          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">FAQ</h2>
            <div className="space-y-4">
              {location.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border bg-white p-5 group"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex justify-between">
                    {faq.question}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
