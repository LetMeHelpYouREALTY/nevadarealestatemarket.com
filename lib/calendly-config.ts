import { calendlyUrl } from "./site-config";

/** Calendly scheduling — single source of truth for nevadarealestatemarket.com */

export const calendlyConfig = {
  url: calendlyUrl,
  badge: {
    text: "Schedule time with me",
    color: "#0069ff",
    textColor: "#ffffff",
    branding: false,
  },
  inline: {
    minWidth: "320px",
    height: "700px",
  },
} as const;
