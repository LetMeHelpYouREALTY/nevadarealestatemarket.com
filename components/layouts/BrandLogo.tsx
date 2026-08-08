import Image from "next/image";
import Link from "next/link";
import { agentInfo, siteConfig } from "@/lib/site-config";

type BrandLogoProps = {
  /** Nav (light) or footer (dark) */
  variant?: "light" | "dark";
  /** Show agent circular portrait — strengthens brand recognition sitewide */
  showPortrait?: boolean;
  className?: string;
};

/**
 * Sitewide brand lockup: Dr. Jan portrait + Nevada Real Estate Market name.
 * Primary brand signal for nav/footer (not only BHHS wordmark).
 */
export function BrandLogo({
  variant = "light",
  showPortrait = true,
  className = "",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 no-underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md ${className}`.trim()}
    >
      {showPortrait && (
        <span
          className={`relative h-11 w-11 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500 shadow-sm transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none ${
            isDark ? "ring-offset-2 ring-offset-slate-950" : "ring-offset-2 ring-offset-white"
          }`}
        >
          <Image
            src={agentInfo.imageOnCall}
            alt=""
            fill
            sizes="48px"
            className="object-cover object-top"
          />
        </span>
      )}
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`truncate text-base font-bold tracking-tight md:text-lg ${
            isDark ? "text-white" : "text-slate-900"
          } group-hover:text-blue-600 transition-colors`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`truncate text-[11px] md:text-xs ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Dr. Jan Duffy · BHHS Nevada · {agentInfo.phone}
        </span>
      </span>
    </Link>
  );
}
