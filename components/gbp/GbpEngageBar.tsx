import Link from "next/link";
import { Phone, Navigation, Star, MapPin, Clock } from "lucide-react";
import { agentInfo, officeInfo, businessHours } from "@/lib/site-config";

type GbpEngageBarProps = {
  variant?: "light" | "dark" | "compact";
  className?: string;
};

/**
 * Visible NAP + Call / Directions / Google Reviews on every page.
 * Matches GBP name, address, phone, and hours for Maps prominence.
 */
export function GbpEngageBar({
  variant = "light",
  className = "",
}: GbpEngageBarProps) {
  const isDark = variant === "dark";
  const compact = variant === "compact";

  const wrap = isDark
    ? "bg-slate-900 text-white border-b border-slate-800"
    : compact
      ? "bg-slate-50 text-slate-900 border-y border-slate-200"
      : "bg-white text-slate-900 border border-slate-200 rounded-xl";

  const muted = isDark ? "text-slate-300" : "text-slate-600";
  const btnPrimary = isDark
    ? "bg-blue-600 hover:bg-blue-500 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";
  const btnGhost = isDark
    ? "border border-white/25 text-white hover:bg-white/10"
    : "border border-slate-300 text-slate-800 hover:bg-slate-50";

  return (
    <section
      aria-label="Office location, hours, and Google Maps actions"
      className={`${wrap} ${className}`.trim()}
    >
      <div
        className={`container mx-auto px-4 ${compact ? "py-3 md:py-4" : "py-5 md:py-6"}`}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 mb-1">
              Google Business Profile
            </p>
            <p className="font-semibold text-sm md:text-base leading-snug">
              {officeInfo.name}
            </p>
            <p className={`mt-1 flex items-start gap-2 text-sm ${muted}`}>
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
              <span>
                {officeInfo.address.street}, {officeInfo.address.city},{" "}
                {officeInfo.address.state} {officeInfo.address.zip}
              </span>
            </p>
            <p className={`mt-1 flex items-center gap-2 text-sm ${muted}`}>
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              <span>{businessHours.display}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center shrink-0">
            <a
              href={agentInfo.phoneTel}
              className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold no-underline hover:no-underline transition-colors ${btnPrimary}`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {agentInfo.phone}
            </a>
            <a
              href={officeInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold no-underline hover:no-underline transition-colors ${btnGhost}`}
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Directions
            </a>
            <a
              href={officeInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold no-underline hover:no-underline transition-colors ${btnGhost}`}
            >
              <Star className="h-4 w-4 text-yellow-500" aria-hidden />
              Google Reviews
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold no-underline hover:no-underline transition-colors ${btnGhost}`}
            >
              Visit office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
