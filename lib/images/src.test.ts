import { afterEach, describe, expect, it, vi } from "vitest";

describe("siteImage", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("maps git paths to Cloudflare custom IDs without the extension", async () => {
    const { localPathToImageId } = await import("./src");
    expect(localPathToImageId("/images/hero/modern-nevada-home.jpg")).toBe(
      "images/hero/modern-nevada-home",
    );
  });

  it("serves git paths when the delivery hash is unset", async () => {
    vi.stubEnv("NEXT_PUBLIC_CF_IMAGES_HASH", "");
    vi.resetModules();
    const { siteImage, isCloudflareImagesEnabled } = await import("./src");
    expect(isCloudflareImagesEnabled()).toBe(false);
    expect(siteImage("/images/hero/modern-nevada-home.jpg")).toBe(
      "/images/hero/modern-nevada-home.jpg",
    );
  });

  it("serves imagedelivery.net when the delivery hash is set", async () => {
    vi.stubEnv("NEXT_PUBLIC_CF_IMAGES_HASH", "byE6BTe9lNqo21V57n4aPQ");
    vi.resetModules();
    const { siteImage } = await import("./src");
    expect(siteImage("/images/hero/modern-nevada-home.jpg")).toBe(
      "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/hero/modern-nevada-home/public",
    );
  });

  it("keeps Dr. Jan Duffy portraits on git even when the CDN is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_CF_IMAGES_HASH", "byE6BTe9lNqo21V57n4aPQ");
    vi.resetModules();
    const { siteImage } = await import("./src");
    expect(siteImage("/images/agent/dr-jan-duffy.jpg")).toBe(
      "/images/agent/dr-jan-duffy.jpg",
    );
    expect(siteImage("/images/dr-jan-duffy.jpg")).toBe(
      "/images/dr-jan-duffy.jpg",
    );
  });
});
