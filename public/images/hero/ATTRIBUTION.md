# Hero and section image sources

Photography is generated to match each page H1 and section H2/H3 (Southern Nevada
architecture, Mojave landscape). Git copies live under `/public/images/` as the
backup. Cloudflare Images is the runtime CDN when `NEXT_PUBLIC_CF_IMAGES_HASH`
is set.

Upload: `pnpm images:upload` (requires `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`).

| Folder           | Use                                                 |
| ---------------- | --------------------------------------------------- |
| `hero/`          | Full-bleed page H1s                                 |
| `neighborhoods/` | Community / area H1s and cards                      |
| `sections/`      | H2/H3 photography                                   |
| `properties/`    | Investment / listing-adjacent visuals               |
| `agent/`         | Real portraits of Dr. Jan Duffy (never AI-replaced) |

Prior Unsplash placeholders (Mediterranean villa, Strip tourist night shot) were
replaced so heroes match Las Vegas Valley housing, not generic stock.
