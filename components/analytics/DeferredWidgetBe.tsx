"use client";

import { useEffect } from "react";

const WIDGET_SRC = "https://widgetbe.com/agent";
const WIDGET_ID = "WT-XQHVYQWW";
const LOAD_DELAY_MS = 8_000;

declare global {
  interface Window {
    WidgetTrackerObject?: string;
    widgetTracker?: ((...args: unknown[]) => void) & {
      q?: unknown[];
      ds?: number;
    };
  }
}

function injectWidgetBe(): void {
  if (typeof window === "undefined") return;
  if (document.querySelector(`script[data-widgetbe="1"]`)) return;

  window.WidgetTrackerObject = "widgetTracker";
  window.widgetTracker =
    window.widgetTracker ||
    function widgetTracker(...args: unknown[]) {
      (window.widgetTracker!.q = window.widgetTracker!.q || []).push(args);
    };
  window.widgetTracker.ds = Date.now();

  const script = document.createElement("script");
  script.async = true;
  script.src = WIDGET_SRC;
  script.dataset.widgetbe = "1";
  document.body.appendChild(script);

  window.widgetTracker("create", WIDGET_ID);
  window.widgetTracker("send", "pageview");
}

/**
 * Loads WidgetBe after idle + delay (or first interaction) so it
 * does not compete with LCP / inflate mobile unused-JS on first paint.
 */
export function DeferredWidgetBe() {
  useEffect(() => {
    let loaded = false;
    let timeoutId = 0;
    let idleId: number | undefined;

    const loadOnce = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      injectWidgetBe();
    };

    const onInteract = () => loadOnce();

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
    };

    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    const schedule = () => {
      timeoutId = window.setTimeout(loadOnce, LOAD_DELAY_MS);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(schedule, { timeout: 4_000 });
    } else {
      schedule();
    }

    return cleanup;
  }, []);

  return null;
}
