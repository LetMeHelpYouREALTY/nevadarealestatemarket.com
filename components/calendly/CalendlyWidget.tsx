"use client";

import { useEffect, useRef } from "react";
import { calendlyConfig } from "@/lib/calendly-config";
import { useCalendlyReady } from "./useCalendlyReady";
import "./types";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url = calendlyConfig.url,
  minWidth = calendlyConfig.inline.minWidth,
  height = calendlyConfig.inline.height,
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const ready = useCalendlyReady();

  useEffect(() => {
    if (!ready || !widgetRef.current || !window.Calendly) return;

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
  }, [ready, url, minWidth, height]);

  return (
    <div
      ref={widgetRef}
      style={{ minWidth, height, width: "100%" }}
      aria-label="Schedule an appointment with Dr. Jan Duffy"
    />
  );
}
