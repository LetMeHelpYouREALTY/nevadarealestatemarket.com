import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { agentInfo } from "@/lib/site-config";

/**
 * True 404s stay noindex (correct for GSC).
 * Legacy WordPress URLs must 301 in next.config.js — not land here.
 */
export const metadata: Metadata = {
  title: "Page Not Found | Nevada Real Estate Market",
  description:
    "This page was not found. Browse Las Vegas Valley real estate guides or contact Dr. Jan Duffy.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 container mx-auto px-4 max-w-2xl text-center">
        <p className="text-sm font-semibold text-blue-700 mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page not found
        </h1>
        <p className="text-slate-600 mb-8">
          The link may be from an older version of this site. Try one of these
          pages, or call {agentInfo.phone}.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Home
          </Link>
          <Link
            href="/las-vegas-real-estate"
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50"
          >
            Las Vegas real estate
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50"
          >
            About Dr. Jan
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
