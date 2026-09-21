import { describe, expect, it } from "vitest";
import { getSectionImage } from "./section-images";
import { getCommunityHeroImage } from "./community-images";
import { getHeroImageByKey } from "@/lib/hero-images";

describe("getSectionImage", () => {
  it("matches named 55+ community headings to unique community photos", () => {
    const anthem = getSectionImage("About Sun City Anthem");
    const summerlin = getSectionImage("About Sun City Summerlin");
    expect(anthem.src).toBe("/images/neighborhoods/sun-city-anthem.jpg");
    expect(summerlin.src).toBe("/images/neighborhoods/sun-city-summerlin.jpg");
    expect(anthem.src).not.toBe(summerlin.src);
  });

  it("does not use the generic communities photo for named-school headings", () => {
    const match = getSectionImage("Named Schools Near Popular Communities");
    expect(match.src).toBe("/images/sections/section-named-schools.jpg");
  });

  it("matches service and specialization headings", () => {
    expect(getSectionImage("Core Real Estate Services").src).toBe(
      "/images/sections/section-services.jpg",
    );
    expect(getSectionImage("Areas We Serve").src).toBe(
      "/images/sections/section-service-areas.jpg",
    );
    expect(getSectionImage("Areas of Specialization").src).toBe(
      "/images/sections/section-specialization.jpg",
    );
  });
});

describe("unique community heroes", () => {
  it("gives Sun City Anthem a different H1 photo than the 55+ index", () => {
    const anthem = getCommunityHeroImage("sun-city-anthem");
    const index = getHeroImageByKey("55-plus-communities");
    expect(anthem?.src).toBe("/images/neighborhoods/sun-city-anthem.jpg");
    expect(anthem?.src).not.toBe(index.src);
  });
});
