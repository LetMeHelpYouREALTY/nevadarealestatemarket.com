import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { HeadingPhoto } from "@/components/sections/SectionImage";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-pretty md:text-4xl lg:text-5xl">
            Ready to Find Your Next Nevada Home?
          </h2>
          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-xl">
            <HeadingPhoto
              heading="Ready to Find Your Next Nevada Home?"
              src="/images/hero/buyer-new-home.jpg"
              alt="New Nevada home with desert landscaping ready for Las Vegas Valley buyers"
              className="mb-0"
            />
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Get expert guidance, a clear plan, and results that match the data —
            not a generic slogan.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Home className="h-5 w-5" aria-hidden />
                Browse Properties
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden />
                Send a Message
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href={agentInfo.phoneTel} className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden />
                Call {agentInfo.phone}
              </a>
            </Button>
          </div>

          <p className="text-sm text-blue-100">
            {officeInfo.name} · {officeInfo.address.full} · {agentInfo.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
