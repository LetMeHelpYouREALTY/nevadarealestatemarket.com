import { ImageResponse } from "next/og";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const alt =
  "Nevada Real Estate Market — Henderson office of Dr. Jan Duffy, BHHS Nevada Properties";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph card with GBP-matching NAP.
 * Per Next.js App Router docs (2026): ImageResponse from next/og, Node runtime.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1e293b 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: 18,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Henderson MacDonald Highlands Real Estate
          </div>
          <div style={{ fontSize: 28, color: "#dbeafe", marginTop: 16 }}>
            Homes by {agentInfo.name} · {agentInfo.brokerage}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#e2e8f0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div>{officeInfo.address.full}</div>
            <div>
              {agentInfo.phone} · Open daily 6:00 AM – 9:00 PM
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#93c5fd" }}>License {agentInfo.license}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
