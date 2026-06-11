import { MapPin, Navigation, Star } from "lucide-react";
import type { MapLocation } from "@/lib/map-locations";

type GoogleMapEmbedProps = {
  location: MapLocation;
  height?: number;
  showActions?: boolean;
};

/**
 * Lazy-loaded Google Maps embed with directions and reviews CTAs (GBP-aligned).
 */
export function GoogleMapEmbed({
  location,
  height = 400,
  showActions = true,
}: GoogleMapEmbedProps) {
  const title = location.address
    ? `${location.name} — ${location.address.full}`
    : `${location.name} real estate map`;

  return (
    <div className="space-y-4">
      <div className="rounded-xl overflow-hidden shadow-md border border-slate-200">
        <iframe
          src={location.embedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full"
        />
      </div>

      {showActions && (
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={location.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
          {location.slug === "office" && (
            <a
              href={location.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-3 rounded-lg font-medium transition-colors"
            >
              <Star className="h-4 w-4 text-yellow-500" />
              Google Reviews
            </a>
          )}
        </div>
      )}
    </div>
  );
}
