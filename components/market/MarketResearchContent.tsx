import Link from "next/link";
import {
  researchMeta,
  speakableSummaries,
  economicDriversDetail,
  cityMarketProfiles,
  valleyMarketSignals,
  buyerSellerPlaybook,
  taxRelocationFacts,
  clarkCountyDemographics,
} from "@/lib/nevada-market-research";
import { agentInfo } from "@/lib/site-config";
import { ArrowRight, ExternalLink, MapPin, TrendingUp } from "lucide-react";

type MarketResearchContentProps = {
  variant: "hub" | "clarkCounty" | "forecast" | "tax" | "compare" | "sources";
};

/** AEO speakable summary block */
export function SpeakableMarketBlock({ text }: { text: string }) {
  return (
    <section className="mb-16 max-w-3xl">
      <p className="speakable-summary text-lg text-slate-600 leading-relaxed" data-speakable>
        {text}
      </p>
    </section>
  );
}

/** Economic drivers with entity-rich prose for GEO */
export function EconomicDriversSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        What Drives the Nevada Real Estate Market?
      </h2>
      <p className="text-slate-600 mb-8 max-w-3xl">
        Clark County housing demand is tied to more than tourism. These economic
        pillars shape where buyers search and which neighborhoods appreciate
        fastest in 2026.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {economicDriversDetail.map((driver) => (
          <article
            key={driver.title}
            className="rounded-xl border border-slate-200 p-6"
          >
            <h3 className="font-bold text-lg text-slate-900 mb-2">{driver.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">{driver.body}</p>
            <p className="text-xs text-slate-400">
              Related: {driver.entities.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** City deep-dives with internal links */
export function CityMarketProfilesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Las Vegas Valley Cities — Market Profiles
      </h2>
      <div className="space-y-6">
        {cityMarketProfiles.map((city) => (
          <article
            key={city.slug}
            className="rounded-xl border p-6 hover:border-blue-200 transition"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
              <h3 className="text-xl font-bold text-slate-900">{city.name}</h3>
              <div className="flex gap-4 text-sm">
                <span className="text-blue-600 font-semibold">{city.median} median</span>
                <span className="text-slate-500">{city.dom} DOM</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{city.summary}</p>
            <p className="text-xs text-slate-500 mb-4">Best for: {city.bestFor}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={city.path} className="text-blue-600 font-medium inline-flex items-center hover:underline">
                {city.name} guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              <Link href={city.mapPath} className="text-slate-600 inline-flex items-center hover:text-blue-600">
                <MapPin className="h-4 w-4 mr-1" /> Area map
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Market signals grid — factual AEO blocks */
export function MarketSignalsSection() {
  const signals = [
    { label: "Mortgage Rates", value: valleyMarketSignals.mortgageRateRange },
    { label: "List-to-Sale Ratio", value: valleyMarketSignals.listToSaleRatio },
    { label: "Seller Concessions", value: valleyMarketSignals.sellerConcessions },
    { label: "Price Forecast", value: valleyMarketSignals.priceTrend },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        2026 Market Signals
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {signals.map((s) => (
          <div key={s.label} className="rounded-lg bg-slate-50 border p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              {s.label}
            </p>
            <p className="text-sm text-slate-800 font-medium">{s.value}</p>
          </div>
        ))}
      </div>
      <p className="text-slate-600 text-sm max-w-3xl">
        <TrendingUp className="h-4 w-4 inline text-blue-600 mr-1" />
        {valleyMarketSignals.buyerLeverage}. {valleyMarketSignals.inventoryTrend}.
      </p>
    </section>
  );
}

/** Buyer/seller playbook */
export function BuyerSellerPlaybookSection() {
  return (
    <section className="mb-16 grid md:grid-cols-2 gap-8">
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Buyer Playbook 2026</h2>
        <ul className="space-y-2">
          {buyerSellerPlaybook.buyers.map((tip) => (
            <li key={tip} className="text-sm text-slate-700 flex gap-2">
              <span className="text-blue-600 shrink-0">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Seller Playbook 2026</h2>
        <ul className="space-y-2">
          {buyerSellerPlaybook.sellers.map((tip) => (
            <li key={tip} className="text-sm text-slate-700 flex gap-2">
              <span className="text-slate-500 shrink-0">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Clark County demographics for GEO entity linking */
export function ClarkCountyDemographicsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Clark County at a Glance
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="speakable-summary text-slate-600 leading-relaxed mb-6" data-speakable>
            {speakableSummaries.clarkCounty}
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            {clarkCountyDemographics.demographics.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-blue-600">•</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">City</th>
                <th className="px-4 py-3 text-left font-semibold">Population</th>
              </tr>
            </thead>
            <tbody>
              {clarkCountyDemographics.cities.map((city) => (
                <tr key={city.name} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{city.name}</td>
                  <td className="px-4 py-3 text-slate-600">{city.population}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** Tax relocation facts */
export function TaxRelocationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Nevada Tax Advantages for Homebuyers
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {taxRelocationFacts.map((fact) => (
          <article key={fact.title} className="rounded-xl border p-6">
            <h3 className="font-bold text-slate-900 mb-2">{fact.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{fact.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** E-E-A-T research sources footer */
export function ResearchSourcesSection() {
  return (
    <section className="mb-8 rounded-xl bg-slate-50 border p-6">
      <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
        Data Sources & Methodology
      </h2>
      <p className="text-xs text-slate-500 mb-4">
        Researched {researchMeta.lastResearched}. {researchMeta.methodology}
      </p>
      <ul className="space-y-2">
        {researchMeta.sources.map((source) => (
          <li key={source.url} className="text-sm">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              {source.name}
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-slate-500 text-xs ml-2">— {source.note}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-4">
        Market analysis by Dr. Jan Duffy, REALTOR® — call{" "}
        <a href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
          {agentInfo.phone}
        </a>{" "}
        for personalized guidance.
      </p>
    </section>
  );
}

/** Compose sections by page variant */
export function MarketResearchContent({ variant }: MarketResearchContentProps) {
  switch (variant) {
    case "hub":
      return (
        <>
          <SpeakableMarketBlock text={speakableSummaries.hub} />
          <MarketSignalsSection />
          <EconomicDriversSection />
          <BuyerSellerPlaybookSection />
        </>
      );
    case "sources":
      return <ResearchSourcesSection />;
    case "clarkCounty":
      return (
        <>
          <ClarkCountyDemographicsSection />
          <EconomicDriversSection />
          <CityMarketProfilesSection />
          <ResearchSourcesSection />
        </>
      );
    case "forecast":
      return (
        <>
          <SpeakableMarketBlock text={speakableSummaries.forecast} />
          <MarketSignalsSection />
          <BuyerSellerPlaybookSection />
          <ResearchSourcesSection />
        </>
      );
    case "tax":
      return (
        <>
          <SpeakableMarketBlock text={speakableSummaries.tax} />
          <TaxRelocationSection />
          <ResearchSourcesSection />
        </>
      );
    case "compare":
      return (
        <>
          <CityMarketProfilesSection />
          <ResearchSourcesSection />
        </>
      );
    default:
      return null;
  }
}
