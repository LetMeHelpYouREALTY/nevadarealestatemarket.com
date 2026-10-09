import { readFileSync } from "node:fs";
import path from "node:path";

const sectionFiles = [
  "components/sections/FeaturedProperties.tsx",
  "components/sections/ReviewsSection.tsx",
];

const clientDirective = /^\s*["']use client["']/m;

describe("homepage server sections", () => {
  it.each(sectionFiles)("%s stays a Server Component", (relativePath) => {
    const source = readFileSync(path.join(process.cwd(), relativePath), "utf8");

    expect(source).not.toMatch(clientDirective);
    expect(source).not.toContain("useState");
    expect(source).not.toContain("useEffect");
    expect(source).not.toContain("onClick");
  });
});
