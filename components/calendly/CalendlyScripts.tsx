"use client";

import Script from "next/script";

export default function CalendlyScripts() {
  return (
    <Script
      id="calendly-widget-js"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event("calendly-loaded"));
      }}
    />
  );
}
