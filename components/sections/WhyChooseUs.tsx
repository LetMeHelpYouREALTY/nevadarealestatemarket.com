import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
  Home,
  Phone,
} from "lucide-react";
import { AgentPhoto } from "@/components/sections/AgentPhoto";
import { HeadingPhoto } from "@/components/sections/SectionImage";
import { agentInfo, agentStats } from "@/lib/site-config";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: `Serving Las Vegas and Henderson since ${agentStats.servingSince} with proven results.`,
  },
  {
    icon: TrendingUp,
    title: "Market Knowledge",
    description:
      "Live Nevada market data — valley medians near $482K, inventory, and neighborhood comps.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Dedicated attention to every client with customized solutions.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "500+ successful transactions and satisfied clients.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description: "Same-day responses and clear communication through closing.",
  },
  {
    icon: Home,
    title: "Full Service",
    description: "Complete support from search to closing and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Dr. Jan Duffy, REALTOR®
            </p>
            <h2 className="mb-4 text-3xl font-bold text-pretty text-slate-900 md:text-4xl lg:text-5xl">
              Why Choose Us
            </h2>
            <HeadingPhoto heading="Why Choose Us" />
            <p className="mb-6 text-xl text-slate-600">
              Local Nevada market expertise with Berkshire Hathaway HomeServices
              resources — one agent who answers the phone.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {agentInfo.phone}
            </a>
          </div>
          <AgentPhoto
            variant="on-call"
            frameClassName="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-lg bg-slate-100"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-lg p-6 text-center transition-colors hover:bg-slate-50"
              >
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
