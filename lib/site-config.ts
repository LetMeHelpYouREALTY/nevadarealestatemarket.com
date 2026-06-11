// Site Configuration - nevadarealestatemarket.com
// NAP aligned with Google Business Profile: Henderson MacDonald Highlands Real Estate

export const siteConfig = {
  name: "Henderson MacDonald Highlands Real Estate",
  fullName:
    "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy",
  tagline: "Luxury Henderson Real Estate | Dr. Jan Duffy, REALTOR®",
  brandLine:
    "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy | BHHS Nevada",
  brandName: "Berkshire Hathaway HomeServices",
  shortName: "BHHS",
  url: "https://www.nevadarealestatemarket.com",
  description:
    "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada, specializes in luxury homes and estates in Henderson, Nevada. Serving Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, and Anthem. Ranked in Nevada's Top 1%.",
  gbpDescription:
    "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializes in luxury homes and estates in Henderson, Nevada. Serving prestigious communities like Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, and Anthem, Dr. Duffy provides expert representation for luxury properties, custom builds, and estates. Ranked in Nevada's Top 1%, she offers private showings, personalized consultations, and market insights tailored to buyers and sellers seeking premier real estate in Henderson.",
  foundingDate: "2013-09-19",
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 500-1955",
  phoneFormatted: "(702) 500-1955",
  phoneTel: "tel:+17025001955",
  smsTel: "sms:+17025001955",
  email: "homes@heyberkshire.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy",
  address: {
    street: "3185 St Rose Pkwy, Suite 101",
    city: "Henderson",
    state: "NV",
    zip: "89052",
    full: "3185 St Rose Pkwy, Suite 101, Henderson, NV 89052",
  },
  coordinates: {
    lat: 36.0017,
    lng: -115.117,
  },
  phone: "(702) 500-1955",
  phoneTel: "tel:+17025001955",
  googleMapsUrl:
    "https://www.google.com/maps/dir//3185+St+Rose+Pkwy+Suite+101,+Henderson,+NV+89052",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=3185+St+Rose+Pkwy+Suite+101,+Henderson,+NV+89052&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Henderson+MacDonald+Highlands+Real+Estate+Dr+Jan+Duffy",
};

/** Business hours — matches GBP: 6:00 AM–9:00 PM daily */
export const businessHours = {
  monday: "06:00-21:00",
  tuesday: "06:00-21:00",
  wednesday: "06:00-21:00",
  thursday: "06:00-21:00",
  friday: "06:00-21:00",
  saturday: "06:00-21:00",
  sunday: "06:00-21:00",
  display: "Monday – Sunday: 6:00 AM – 9:00 PM",
  dayDisplay: "6:00 AM – 9:00 PM",
  opens: "06:00",
  closes: "21:00",
};

/** GBP special hours — closed dates */
export const specialHours = [
  {
    date: "2026-07-03",
    label: "4th of July (Observed)",
    status: "closed" as const,
  },
  {
    date: "2026-07-04",
    label: "4th of July",
    status: "closed" as const,
  },
];

/** GBP service areas — Henderson neighborhoods */
export const hendersonServiceAreas = [
  "Nevada, USA",
  "Midway, Henderson, NV",
  "Pittmann, Henderson, NV",
  "Townsite, Henderson, NV",
  "Seven Hills, Henderson, NV",
  "Anthem, Henderson, NV 89052",
  "Calico Ridge, Henderson, NV",
  "Mission Hills, Henderson, NV",
  "Whitney Ranch, Henderson, NV",
  "Black Mountain, Henderson, NV",
  "Gibson Springs, Henderson, NV",
  "Paradise Hills, Henderson, NV",
  "River Mountain, Henderson, NV",
  "Foothills, Henderson, NV 89015",
  "MacDonald Ranch, Henderson, NV",
  "Silverado Ranch, Henderson, NV",
  "McCullough Hills, Henderson, NV",
  "Green Valley North, Henderson, NV",
  "Green Valley Ranch, Henderson, NV",
  "Lake Las Vegas, Henderson, NV 89011",
];

/** GBP categories */
export const businessCategories = {
  primary: "Real Estate Agent",
  secondary: [
    "Real Estate Agency",
    "Real Estate Consultant",
    "Property Management Company",
  ],
};

/** GBP social profiles — sameAs for schema */
export const socialProfiles = {
  youtube: "https://www.youtube.com/@DrDuffy",
  tiktok: "https://www.tiktok.com/@drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy/",
  twitter: "https://x.com/drjanduffy",
  linkedin:
    "https://www.linkedin.com/company/dr-jan-duffy-realtor-berkshire-hathaway-homeservices-henderson/",
  facebook: "https://www.facebook.com/DrJanDuffyRealtorHenderson/",
  pinterest: "https://www.pinterest.com/DrJanDuffy/",
};

export const socialProfileUrls = Object.values(socialProfiles);

/** GBP business attributes */
export const businessAttributes = {
  fromTheBusiness: ["Identifies as women-owned", "Identifies as veteran-owned"],
  accessibility: [
    "Has wheelchair accessible entrance",
    "Has wheelchair accessible parking lot",
    "Has wheelchair accessible seating",
    "Has wheelchair accessible restroom",
  ],
  amenities: ["Has gender-neutral restroom"],
  crowd: ["LGBTQ+ friendly", "Transgender safespace"],
  parking: [
    "On-site parking",
    "Free parking lot",
    "Free street parking",
    "Free parking garage",
  ],
  planning: ["Appointment not required"],
  serviceOptions: ["Onsite services available", "Offers online appointments"],
};

// Market Statistics (Updated January 2026)
export const marketStats = {
  lastUpdated: "January 2026",
  lasVegas: {
    medianPrice: 450000,
    medianPriceFormatted: "$450,000",
    yearOverYearChange: "+4.2%",
    daysOnMarket: 28,
    activeListings: 4850,
    closedSales: 2340,
    inventoryMonths: 2.1,
  },
  henderson: {
    medianPrice: 485000,
    medianPriceFormatted: "$485,000",
    yearOverYearChange: "+5.1%",
    daysOnMarket: 24,
    activeListings: 1280,
  },
  summerlin: {
    medianPrice: 625000,
    medianPriceFormatted: "$625,000",
    yearOverYearChange: "+6.8%",
    daysOnMarket: 22,
    luxuryMedian: 1200000,
    luxuryMedianFormatted: "$1.2M",
  },
  luxury: {
    medianPrice: 1200000,
    medianPriceFormatted: "$1.2M",
    activeListings: 890,
    daysOnMarket: 45,
    pricePerSqFt: 385,
  },
};

// Agent Stats
export const agentStats = {
  servingSince: 2013,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
  ranking: "Nevada's Top 1%",
};

// Value Propositions
export const valuePropositions = {
  main: "When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength—the same principles that built Warren Buffett's empire.",
  trust:
    "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents.",
  expertise:
    "Serving Henderson luxury real estate since 2013 with $127M+ in closed transactions, Dr. Jan Duffy combines deep local market knowledge with the resources of a global brand. Ranked in Nevada's Top 1%.",
};

// Neighborhoods served
export const neighborhoods = [
  {
    name: "Lake Las Vegas",
    slug: "lake-las-vegas",
    description:
      "Resort-style lakefront living with championship golf and luxury estates",
    medianPrice: "$750,000",
    highlights: [
      "Lakefront estates",
      "Championship golf",
      "Resort amenities",
      "Custom builds",
    ],
  },
  {
    name: "MacDonald Ranch",
    slug: "macdonald-ranch",
    description:
      "Prestigious Henderson community near MacDonald Highlands luxury corridor",
    medianPrice: "$650,000",
    highlights: [
      "Golf course living",
      "Custom homes",
      "Mature landscaping",
      "Top schools",
    ],
  },
  {
    name: "Green Valley Ranch",
    slug: "green-valley-ranch",
    description:
      "Established Henderson master-planned community with resort-style amenities",
    medianPrice: "$520,000",
    highlights: ["Golf courses", "Walking trails", "Shopping", "Parks"],
  },
  {
    name: "Seven Hills",
    slug: "seven-hills",
    description: "Hillside Henderson community with panoramic valley views",
    medianPrice: "$580,000",
    highlights: [
      "Mountain views",
      "Custom homes",
      "Gated sections",
      "Golf access",
    ],
  },
  {
    name: "Anthem",
    slug: "anthem",
    description:
      "Master-planned Henderson community with parks, trails, and 55+ options",
    medianPrice: "$495,000",
    highlights: [
      "Parks and trails",
      "55+ communities",
      "Family-friendly",
      "Great schools",
    ],
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned community with parks, trails, and top-rated schools",
    medianPrice: "$625,000",
    highlights: ["Red Rock views", "150+ parks", "Top schools", "Golf courses"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Ultra-luxury guard-gated community in Summerlin",
    medianPrice: "$2.5M",
    highlights: [
      "Celebrity homes",
      "Custom estates",
      "Bear's Best Golf",
      "Strip views",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Master-planned luxury community with championship golf",
    medianPrice: "$750,000",
    highlights: [
      "Golf community",
      "Guard-gated",
      "Mountain views",
      "Luxury amenities",
    ],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master-planned community with resort-style living",
    medianPrice: "$525,000",
    highlights: [
      "Resort pools",
      "Walking trails",
      "New construction",
      "Great schools",
    ],
  },
];

// Services offered
export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description:
      "Expert guidance through every step of the home buying process",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing and negotiation",
    icon: "TrendingUp",
  },
  {
    name: "Luxury Homes",
    slug: "luxury-homes",
    description:
      "Specialized expertise in Henderson luxury real estate and estates",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description: "Free buyer representation for new home purchases",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Strategic consulting for rental and investment opportunities",
    icon: "DollarSign",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "Comprehensive relocation assistance for moves to Henderson",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "Free property valuations using current market data",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "In-depth Henderson real estate market insights",
    icon: "BarChart",
  },
];

// Expert quotes from Dr. Jan Duffy
export const expertQuotes = {
  market: `"The Henderson luxury market remains strong heading into 2026. Communities like MacDonald Ranch, Seven Hills, and Lake Las Vegas continue to attract discerning buyers seeking premier estates and custom builds."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost hundreds of thousands of dollars."`,
  investment: `"Henderson rental yields are among the best in Southern Nevada. But you need to know which neighborhoods are appreciating and which have peaked."`,
  relocation: `"Moving to Henderson is about finding the right community fit—whether that's Lake Las Vegas waterfront living, Seven Hills views, or Green Valley Ranch family amenities."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting a global network of 50,000 agents, world-class marketing, and a brand that's synonymous with trust."`,
};

// Common FAQs — AEO/GEO optimized for Henderson luxury real estate
export const commonFAQs = {
  general: [
    {
      question:
        "Who is Dr. Jan Duffy and what areas does she serve in Henderson?",
      answer:
        "Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, ranked in Nevada's Top 1%. She specializes in luxury homes and estates in Henderson, serving Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem, and surrounding Henderson communities. Call (702) 500-1955 for a consultation.",
    },
    {
      question:
        "Why choose a Berkshire Hathaway HomeServices agent in Henderson?",
      answer:
        "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
    },
    {
      question: "What is the average home price in Henderson in 2026?",
      answer:
        "As of January 2026, the Henderson median home price is $485,000, up 5.1% year-over-year. Luxury communities like Lake Las Vegas and MacDonald Ranch command higher price points. Contact Dr. Jan Duffy at (702) 500-1955 for current market data in your target neighborhood.",
    },
    {
      question: "What is Dr. Jan Duffy's experience in Henderson real estate?",
      answer:
        "Dr. Jan Duffy has served Henderson since 2013, with $127M+ in closed transactions and 500+ satisfied clients. Her expertise spans luxury estates, custom builds, and premier Henderson communities. She is ranked in Nevada's Top 1% of REALTORS®.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Henderson?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and other contingencies.",
    },
    {
      question: "Do I need a pre-approval before looking at Henderson homes?",
      answer:
        "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
    },
    {
      question:
        "Does Dr. Jan offer private showings for luxury Henderson homes?",
      answer:
        "Yes. Dr. Jan Duffy offers private showings and personalized consultations for luxury properties, custom builds, and estates in Henderson's premier communities. Call or text (702) 500-1955 to schedule.",
    },
  ],
  selling: [
    {
      question: "What is my Henderson home worth in today's market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive home valuations using current MLS data and her expertise serving Henderson since 2013.",
    },
    {
      question: "How long will it take to sell my Henderson home?",
      answer:
        "Currently, well-priced homes in Henderson are selling in an average of 24 days. Luxury homes may take longer (45+ days). Pricing strategy is crucial—overpriced homes can sit for months.",
    },
    {
      question: "What do I need to do to prepare my Henderson home for sale?",
      answer:
        "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
    },
  ],
};
