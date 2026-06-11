import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import {
  siteConfig,
  agentInfo,
  officeInfo,
  businessHours,
  socialProfiles,
} from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">{siteConfig.name}</h3>
            <p className="text-slate-300 mb-4 text-sm">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Dr. Jan Duffy on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Dr. Jan Duffy on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Dr. Jan Duffy on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Dr. Jan Duffy on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  All Properties
                </a>
              </li>
              <li>
                <Link
                  href="/nevada-real-estate-market"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Nevada Real Estate Market
                </Link>
              </li>
              <li>
                <Link
                  href="/henderson"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Henderson Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/henderson"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Henderson Neighborhood Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/maps"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Real Estate Maps
                </Link>
              </li>
              <li>
                <Link
                  href="/directions"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Office Directions
                </Link>
              </li>
              <li>
                <Link
                  href="/google-business"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes & Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Custom Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/home-valuation"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/clark-county-housing-market"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Clark County Housing
                </Link>
              </li>
              <li>
                <Link
                  href="/compare-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Compare Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/nevada-housing-forecast"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  2026 Housing Forecast
                </Link>
              </li>
              <li>
                <Link
                  href="/market-insights"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP (Name, Address, Phone) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {officeInfo.address.street}
                  <br />
                  {officeInfo.address.city}, {officeInfo.address.state}{" "}
                  {officeInfo.address.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={agentInfo.phoneTel}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${agentInfo.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.email}
                </Link>
              </li>
              <li className="text-slate-400 text-xs">
                {businessHours.display}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {officeInfo.name}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/faq"
                className="text-slate-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {agentInfo.name}, {agentInfo.title} | License {agentInfo.license} |{" "}
            {agentInfo.brokerage}
          </p>
        </div>
      </div>
    </footer>
  );
}
