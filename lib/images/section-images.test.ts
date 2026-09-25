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
  it("matches privacy and security policy headings to unique office photos", () => {
    const privacy = getSectionImage("Information we collect");
    const security = getSectionImage("Reporting Security Vulnerabilities");
    expect(privacy.src).toBe("/images/hero/privacy-policy.jpg");
    expect(security.src).toBe("/images/hero/security-policy.jpg");
    expect(privacy.src).not.toBe(security.src);
  });
});

describe("unique community heroes", () => {
  it("gives Sun City Anthem a different H1 photo than the 55+ index", () => {
    const anthem = getCommunityHeroImage("sun-city-anthem");
    const index = getHeroImageByKey("55-plus-communities");
    expect(anthem?.src).toBe("/images/neighborhoods/sun-city-anthem.jpg");
    expect(anthem?.src).not.toBe(index.src);
  });

  it("gives Green Valley Ranch a different H1 photo than Green Valley", () => {
    const gvr = getCommunityHeroImage("green-valley-ranch");
    const gv = getCommunityHeroImage("green-valley");
    expect(gvr?.src).toBe("/images/neighborhoods/green-valley-ranch.jpg");
    expect(gv?.src).toBe("/images/neighborhoods/green-valley.jpg");
    expect(gvr?.src).not.toBe(gv?.src);
  });

  it("gives Del Webb Lake Las Vegas a different H1 than Lake Las Vegas", () => {
    const delWebb = getCommunityHeroImage("del-webb-lake-las-vegas");
    const lake = getCommunityHeroImage("lake-las-vegas");
    expect(delWebb?.src).toBe(
      "/images/neighborhoods/del-webb-lake-las-vegas.jpg",
    );
    expect(lake?.src).toBe("/images/neighborhoods/lake-las-vegas.jpg");
    expect(delWebb?.src).not.toBe(lake?.src);
  });
});

describe("unique page heroes", () => {
  it("does not reuse contact office photo for privacy or security", () => {
    const contact = getHeroImageByKey("contact");
    const privacy = getHeroImageByKey("privacy-policy");
    const security = getHeroImageByKey("security-policy");
    expect(privacy.src).toBe("/images/hero/privacy-policy.jpg");
    expect(security.src).toBe("/images/hero/security-policy.jpg");
    expect(privacy.src).not.toBe(contact.src);
    expect(security.src).not.toBe(contact.src);
    expect(privacy.src).not.toBe(security.src);
  });

  it("does not reuse neighborhoods photo for compare-communities", () => {
    const compare = getHeroImageByKey("compare-communities");
    const neighborhoods = getHeroImageByKey("neighborhoods");
    expect(compare.src).toBe("/images/hero/compare-communities.jpg");
    expect(compare.src).not.toBe(neighborhoods.src);
  });

  it("gives leftover hubs unique H1 photos", () => {
    expect(getHeroImageByKey("sellers-relocation").src).toBe(
      "/images/hero/sellers-relocation.jpg",
    );
    expect(getHeroImageByKey("las-vegas-real-estate").src).toBe(
      "/images/hero/las-vegas-real-estate.jpg",
    );
    expect(getHeroImageByKey("market-report").src).not.toBe(
      getHeroImageByKey("market-update").src,
    );
    expect(getHeroImageByKey("nevada-buyers-guide").src).toBe(
      "/images/hero/buyers-guide.jpg",
    );
    expect(getHeroImageByKey("no-state-income-tax").src).toBe(
      "/images/hero/no-state-income-tax.jpg",
    );
    expect(
      getHeroImageByKey(
        "william-lyon-homes-las-vegas-now-part-of-taylor-morrison",
      ).src,
    ).toBe("/images/hero/taylor-morrison.jpg");
    expect(getCommunityHeroImage("lone-mountain")?.src).toBe(
      "/images/neighborhoods/lone-mountain.jpg",
    );
  });
});
