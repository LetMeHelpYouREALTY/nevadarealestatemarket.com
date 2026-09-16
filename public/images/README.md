# Image Assets Guide

## Storage

- **Git backup:** files in `/public/images/` (this repo)
- **Runtime CDN:** Cloudflare Images hosted storage at
  `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<id>/public`
  when `NEXT_PUBLIC_CF_IMAGES_HASH=byE6BTe9lNqo21V57n4aPQ`
- **Upload:** `pnpm images:upload` using `CLOUDFLARE_API_TOKEN`
  (Account.Cloudflare Images:Edit) and account `2cc579c1ec9e426ed585e933ebf4753b`
- **Portraits:** `/images/agent/` and `/images/dr-jan-duffy.jpg` stay on git

Do not orange-cloud the Vercel apex. Images CDN is a separate hostname.

## Folder Structure

```
images/
├── dr-jan-duffy.jpg          # Default OG / schema portrait (real photo)
├── og-home.jpg               # 1200×630 social share
├── hero/                     # Full-bleed page H1s (Nevada-accurate)
├── neighborhoods/            # Community-specific H1s and cards
├── sections/                 # H2/H3 photography
├── properties/               # Investment / area cards
├── agent/                    # Dr. Jan Duffy portraits — never AI-replace
├── testimonials/
└── logos/
```

## Hero keys

Route heroes: `lib/hero-images.ts`. Community slugs: `lib/images/community-images.ts`.
H2/H3 matching: `lib/images/section-images.ts` + `HeadingPhoto`.

CDN helper: `siteImage()` in `lib/images/src.ts`.

## Specs

| Folder         | Size        | Format | Notes              |
| -------------- | ----------- | ------ | ------------------ |
| hero/          | 1280×720    | JPG    | 16:9, edge-to-edge |
| neighborhoods/ | 1280×720    | JPG    | Community context  |
| sections/      | 4:3 or 16:9 | JPG    | Heading-matched    |
| agent/         | portrait    | JPG    | Real likeness only |

Always include location/service language in `alt` text.
