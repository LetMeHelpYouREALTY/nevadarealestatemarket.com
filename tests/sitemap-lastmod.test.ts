import sitemap from "@/app/sitemap";

describe("sitemap lastmod", () => {
  it("omits lastModified on every URL", () => {
    const entries = sitemap();

    expect(entries.length).toBeGreaterThan(0);
    for (const entry of entries) {
      expect(entry).not.toHaveProperty("lastModified");
    }
  });

  it("returns the same URLs on every call", () => {
    expect(sitemap()).toEqual(sitemap());
  });
});
