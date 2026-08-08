"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import "@/components/calendly/types";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

/**
 * Loads Calendly CSS/JS only on pages that mount this widget (not sitewide).
 * Keeps homepage PageSpeed free of render-blocking Calendly CSS.
 */
export default function CalendlyWidget({
  url = "https://calendly.com/drjanduffy/showing",
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  const initWidget = () => {
    if (typeof window === "undefined" || !window.Calendly || !widgetRef.current) {
      return;
    }

    widgetRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "calendly-inline-widget";
    widgetDiv.setAttribute("data-url", url);
    widgetDiv.style.minWidth = minWidth;
    widgetDiv.style.height = height;
    widgetDiv.style.width = "100%";

    widgetRef.current.appendChild(widgetDiv);

    window.Calendly.initInlineWidget({
      url,
      parentElement: widgetDiv,
    });
  };

  useEffect(() => {
    if (window.Calendly) {
      initWidget();
      return;
    }

    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
        initWidget();
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(checkCalendly), 10000);
    return () => {
      clearInterval(checkCalendly);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-init when schedule URL/size changes
  }, [url, minWidth, height]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initWidget}
      />
      <div ref={widgetRef} style={{ minWidth, height, width: "100%" }} />
    </>
  );
}
