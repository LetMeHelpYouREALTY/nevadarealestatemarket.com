import type { Metadata } from "next";
import { agentInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Security Policy",
  description: `Security policy and responsible disclosure information for ${siteConfig.url.replace("https://", "")}`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Security Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment to Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Berkshire Hathaway HomeServices Nevada Properties, we take the
              security of our systems and the privacy of our clients seriously.
              This page outlines our security practices and provides information
              for security researchers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Reporting Security Vulnerabilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you&apos;ve discovered a security vulnerability, we appreciate
              your help in disclosing it to us responsibly.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h3 className="font-semibold text-blue-900 mb-3">How to Report</h3>
              <ul className="space-y-2 text-blue-800">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={agentInfo.emailMailto} className="underline">
                    {agentInfo.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={agentInfo.phoneTel} className="underline">
                    {agentInfo.phone}
                  </a>
                </li>
                <li>
                  <strong>Response Time:</strong> Within 48 hours during business
                  hours
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What to Include
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact assessment</li>
              <li>Any proof-of-concept code (if applicable)</li>
              <li>Your contact information for follow-up</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Security Measures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect our
              website and client data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>HTTPS encryption for all traffic</li>
              <li>Content Security Policy (CSP) headers</li>
              <li>Rate limiting on form submissions and API endpoints</li>
              <li>Cloudflare Turnstile bot protection</li>
              <li>Regular dependency updates and vulnerability scanning</li>
              <li>Secure handling of lead data via encrypted CRM integration</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Responsible Disclosure Guidelines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We ask security researchers to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Give us reasonable time to investigate and fix issues</li>
              <li>Not access or modify data belonging to other users</li>
              <li>Not perform denial-of-service attacks</li>
              <li>Not publicly disclose vulnerabilities before we&apos;ve addressed them</li>
              <li>Act in good faith to avoid privacy violations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Phishing Awareness
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To protect yourself from phishing attempts:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Ensure you&apos;re on the correct domain:{" "}
                <strong>www.nevadarealestatemarket.com</strong>
              </li>
              <li>Verify the SSL certificate (padlock icon in browser)</li>
              <li>Don&apos;t share sensitive information via unsolicited email</li>
              <li>Contact us directly if you receive suspicious communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For security concerns or general inquiries:
            </p>
            <ul className="list-none pl-0 text-gray-700 space-y-2 mt-4">
              <li>
                Email:{" "}
                <a href={agentInfo.emailMailto} className="text-blue-600 underline">
                  {agentInfo.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={agentInfo.phoneTel} className="text-blue-600 underline">
                  {agentInfo.phone}
                </a>
              </li>
              <li>
                Website:{" "}
                <a href={siteConfig.url} className="text-blue-600 underline">
                  {siteConfig.url}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
