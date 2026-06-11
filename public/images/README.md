# Image Assets Guide

## Folder Structure

```
images/
├── gbp/            # Google Business Profile gallery (sync with GBP uploads)
│   ├── office/     # St Rose Pkwy office, headshots, team
│   ├── neighborhoods/  # Lake Las Vegas, MacDonald Ranch, Seven Hills, etc.
│   ├── luxury/     # Estate interiors, custom builds
│   └── closings/   # Sold signs, key handoffs (with consent)
├── hero/           # Homepage hero backgrounds
├── agent/          # Dr. Jan Duffy photos
├── properties/     # Listing photos
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots
└── logos/          # Brand assets
```

## GBP Photo Sync (Henderson MacDonald Highlands)

When uploading to **Google Business Profile** → *Add photos and videos*, use the same files here:

1. Save optimized WebP/JPG to the matching `gbp/` subfolder
2. Add an entry in `lib/gbp-media.ts` → `gbpPhotos` array
3. Photos appear automatically on `/google-business#photos`

**GBP posting name:** Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy

| GBP category | Local folder | Examples |
|--------------|--------------|----------|
| At work / Team | `gbp/office/` | Office exterior, Dr. Jan headshot |
| Exterior / Neighborhood | `gbp/neighborhoods/` | Lake Las Vegas, MacDonald Ranch, Anthem |
| Inside / Products | `gbp/luxury/` | Luxury kitchens, pools, estates |
| At work | `gbp/closings/` | SOLD signs, closing day (with consent) |

**Videos:** Upload short tours to GBP directly, or add YouTube video IDs in `lib/gbp-media.ts` → `gbpVideos`.

## Recommended Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | WebP, JPG | 16:9 ratio, compress <200KB |
| agent/ | 400x400+ | WebP, JPG | Square, professional headshot |
| properties/ | 1200x800+ | WebP, JPG | Landscape, MLS-quality |
| neighborhoods/ | 1200x800+ | WebP, JPG | Scenic community shots |
| testimonials/ | 200x200 | WebP, JPG | Square, optional |
| logos/ | Various | PNG, SVG | Transparent background |

## Naming Conventions

- Use lowercase with hyphens: `summerlin-aerial.webp`
- Be descriptive: `dr-jan-duffy-headshot.jpg`
- Include size if multiple: `hero-desktop.webp`, `hero-mobile.webp`

## Image Optimization

Before uploading, optimize images:

1. **Online tools**: [Squoosh](https://squoosh.app), [TinyPNG](https://tinypng.com)
2. **CLI**: `npx @squoosh/cli --webp '{"quality":80}' image.jpg`
3. **Target**: <200KB for hero, <100KB for thumbnails

## Usage in Code

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/las-vegas-skyline.webp"
  alt="Las Vegas skyline at sunset"
  width={1920}
  height={1080}
  priority // for above-fold images
/>
```

## Notes

- Next.js auto-optimizes images via `next/image`
- WebP preferred for web (30% smaller than JPEG)
- Always include descriptive alt text for SEO/accessibility
