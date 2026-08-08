# Image Assets Guide

## Folder Structure

```
images/
├── dr-jan-duffy.jpg          # Default OG / schema portrait
├── og-default.jpg            # 1200×630 social share
├── hero/                     # Full-bleed page heroes (Unsplash)
├── agent/                    # Dr. Jan Duffy portraits (favicon source)
├── properties/               # Listing / property photos
├── neighborhoods/            # Area photos
├── testimonials/             # Client headshots (optional)
└── logos/                    # Brand assets
```

## Agent portraits (live)

| File | Use |
|------|-----|
| `agent/dr-jan-duffy.jpg` | About, schema, OG |
| `agent/dr-jan-duffy-on-call.jpg` | Contact, Why Choose Us, favicon source |
| `agent/dr-jan-duffy-portrait.jpg` | Alternate portrait |

Favicon set generated from the on-call portrait: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`.

## Hero keys

Route heroes are registered in `lib/hero-images.ts` and rendered via `PageHero` / `SitePage`.

## Specs

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | JPG/WebP | 16:9, edge-to-edge |
| agent/ | 720x720+ | JPG | Face-forward portraits |
| properties/ | 1200x800+ | JPG/WebP | Landscape |
| neighborhoods/ | 1200x800+ | JPG/WebP | Community context |

Always include location/service language in `alt` text for SEO and AEO.
