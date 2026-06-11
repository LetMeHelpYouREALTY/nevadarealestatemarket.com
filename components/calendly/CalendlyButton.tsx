"use client";

import { Calendar } from "lucide-react";
import { calendlyConfig } from "@/lib/calendly-config";
import { useCalendlyReady } from "./useCalendlyReady";
import "./types";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function CalendlyButton({
  url = calendlyConfig.url,
  text = calendlyConfig.badge.text,
  className = "inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors",
  children,
  showIcon = false,
}: CalendlyButtonProps) {
  const ready = useCalendlyReady();

  const openPopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button
      type="button"
      onClick={openPopup}
      className={className}
      disabled={!ready}
      aria-label={typeof children === "string" ? children : text}
    >
      {showIcon && <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />}
      {children || text}
    </button>
  );
}
