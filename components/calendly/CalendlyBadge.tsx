"use client";

import { useEffect } from "react";
import { calendlyConfig } from "@/lib/calendly-config";
import { useCalendlyReady } from "./useCalendlyReady";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

export default function CalendlyBadge({
  url = calendlyConfig.url,
  text = calendlyConfig.badge.text,
  color = calendlyConfig.badge.color,
  textColor = calendlyConfig.badge.textColor,
  branding = calendlyConfig.badge.branding,
}: CalendlyBadgeProps) {
  const ready = useCalendlyReady();

  useEffect(() => {
    if (!ready || !window.Calendly) return;

    window.Calendly.initBadgeWidget({
      url,
      text,
      color,
      textColor,
      branding,
    });
  }, [ready, url, text, color, textColor, branding]);

  return null;
}
