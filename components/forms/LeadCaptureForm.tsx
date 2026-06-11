/**
 * Lead capture — routes visitors to Calendly scheduling.
 * Replaces legacy FUB form; Calendly handles intake and notifications.
 */

"use client";

import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { Calendar } from "lucide-react";

export interface LeadCaptureFormProps {
  source?: string;
  stage?: string;
  defaultTags?: string[];
  formType?: "contact" | "property-search" | "home-valuation" | "newsletter";
  onSuccess?: () => void;
  onError?: (error: string) => void;
  title?: string;
  description?: string;
  height?: string;
}

const formTypeCopy: Record<
  NonNullable<LeadCaptureFormProps["formType"]>,
  { title: string; description: string }
> = {
  contact: {
    title: "Schedule a Private Conversation",
    description:
      "Book a 15-minute call with Dr. Jan Duffy. No forms — pick a time that works for you.",
  },
  "property-search": {
    title: "Start Your Home Search",
    description:
      "Schedule a consultation to discuss neighborhoods, budget, and listings tailored to you.",
  },
  "home-valuation": {
    title: "Schedule Your Free Valuation",
    description:
      "Book a consultation for a professional market analysis of your Las Vegas or Henderson home.",
  },
  newsletter: {
    title: "Get Market Insights",
    description:
      "Schedule a quick call to discuss weekly market updates and how they affect your goals.",
  },
};

export function LeadCaptureForm({
  formType = "contact",
  title,
  description,
  height = "700px",
}: LeadCaptureFormProps) {
  const copy = formTypeCopy[formType];

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="bg-blue-600 text-white p-6 text-center">
        <Calendar className="h-10 w-10 mx-auto mb-3" aria-hidden="true" />
        <h2 className="text-2xl font-bold mb-2">{title ?? copy.title}</h2>
        <p className="text-blue-100">{description ?? copy.description}</p>
      </div>
      <CalendlyWidget height={height} />
    </div>
  );
}
