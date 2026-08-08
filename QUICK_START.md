# Quick Start - GitHub & Vercel Optimizations

## ⚡ 5-Minute Setup

### 1. Install Dependencies (1 min)

```bash
npm install --save-dev @lhci/cli webpack-bundle-analyzer
```

### 2. Add GitHub Secrets (2 min)

Go to: **Your Repo → Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

```
Name: VERCEL_TOKEN
Value: [Get from https://vercel.com/account/tokens]

Name: VERCEL_ORG_ID  
Value: team_EIbjFXaDDtGMTweb5Hvo3CG3

Name: VERCEL_PROJECT_ID
Value: prj_QfkncbvHOhOiWUYkAljCmx7v89M7 (Vercel project: nevada-real-estate-market — serves www.nevadarealestatemarket.com)
```

### 3. Test Locally (2 min)

```bash
# Test accessibility fixes
npm run dev
# Press Tab to navigate, test Services dropdown with Enter/Escape

# Test performance tools
npm run analyze
```

### 4. Deploy (Push to GitHub)

```bash
git add .
git commit -m "Add GitHub and Vercel optimizations"
git push
```

---

## ✅ What You'll Get

### On Every Pull Request:

1. **Vercel Preview URL** - Test changes before merging
2. **Lighthouse Scores** - Performance, Accessibility, SEO, Best Practices
3. **Bundle Size** - Track JavaScript bundle growth
4. **Automated Checks** - Type check, lint, format, build

### Immediate Improvements:

- ✅ Faster CI builds (caching enabled)
- ✅ Better accessibility (keyboard navigation)
- ✅ Animated content respects user preferences
- ✅ Optimized images (AVIF/WebP)
- ✅ Enhanced security headers
- ✅ Performance monitoring

---

## 🎯 Files Changed

### Created:
- `hooks/useReducedMotion.ts` - Accessibility hook
- `.github/workflows/vercel-preview.yml` - Preview deployments
- `vercel.json` - Vercel config
- `.lighthouserc.json` - Performance budgets

### Modified:
- `components/sections/HeroSection.tsx` - Reduced motion support
- `components/layouts/Navbar.tsx` - Keyboard navigation
- `app/layout.tsx` - Color scheme meta
- `.github/workflows/pr-review.yml` - Added caching
- `next.config.js` - Image optimization
- `package.json` - New scripts

---

## 📊 Quick Commands

```bash
# Performance
npm run analyze          # Bundle size analysis
npm run lighthouse       # Performance audit
npm run perf            # Both

# Development
npm run dev             # Start dev server
npm run build          # Production build
npm run validate       # Check everything

# Vercel
npm run vercel:build   # Build with Vercel CLI
npm run vercel:deploy  # Deploy preview
```

---

## 🔍 Verify It Works

1. **Create a PR** - Workflows will run automatically
2. **Check for comments** - Bot posts preview URL + Lighthouse scores
3. **Click preview URL** - Test your changes live
4. **Review scores** - Aim for 90+ on all Lighthouse metrics

---

## 📖 Full Details

- `OPTIMIZATION_REPORT.md` - Complete audit and findings
- `IMPLEMENTATION_GUIDE.md` - Detailed setup instructions
- `README.md` - Project documentation

---

**That's it!** 🎉

Your site is now optimized for performance, accessibility, and automated testing.

## Google Search Console (5 min)

Property: `https://www.nevadarealestatemarket.com/`

1. Open [Google Search Console](https://search.google.com/search-console) → **Add property** → **URL prefix** → `https://www.nevadarealestatemarket.com/`
2. Choose **HTML tag** verification. Copy the `content` value only.
3. In Vercel → Project **nevada-real-estate-market** → Settings → Environment Variables:
   - `GOOGLE_SITE_VERIFICATION` = *(paste content value)*
   - Apply to Production (and Preview if you want)
4. Redeploy Production, then click **Verify** in GSC.
5. After verified → **Sitemaps** → submit:
   - `https://www.nevadarealestatemarket.com/sitemap.xml`
6. Confirm crawl access:
   - `https://www.nevadarealestatemarket.com/robots.txt` lists the sitemap
   - URL Inspection on `/` → Request indexing

**Domain property (optional, stronger):** add the DNS TXT record Google shows for `nevadarealestatemarket.com` (Cloudflare DNS-only / gray cloud).

**HTML file method (alternative):** drop Google’s `googleXXXXXXXX.html` into `/public/` and redeploy — no env var needed.

## GSC: WordPress paths returning 403

Google still crawls old WordPress URLs (`/wp-content/*`, `/wp-*.php`). Vercel’s edge WAF returns **403** (`x-vercel-mitigated: deny`) *before* Next.js redirects run.

**Code already added:** 301 redirects in `next.config.js` / `vercel.json` / middleware, and `robots.txt` disallows those paths.

**Finish in Vercel (required for Validate fix):**

```bash
npx vercel login
npx vercel link   # project: nevada-real-estate-market
bash scripts/gsc-wp-firewall-redirect.sh
npx vercel firewall diff
npx vercel firewall publish --yes
```

Or in Dashboard → Project → **Firewall** → Custom Rule:
- If path starts with `/wp-content` or `/wp-admin` or matches `^/wp-.*\.php$` → **Redirect** to `/` (301)
- Put these rules **above** any deny rules for the same paths

Then GSC → **Blocked due to access forbidden (403)** → Validate fix.

## GSC: Crawled – currently not indexed

Google crawled the URL and **chose not to index** it. This report mixes keep-pages and junk.

| Keep (index after deploy) | Action |
| --- | --- |
| `/no-state-income-tax`, `/contact`, `/market-insights`, `/privacy-policy` | Self-canonical + Request indexing |

| Drop (should leave the index) | 301 target |
| --- | --- |
| `/?p=*`, `/?page_id=*` | `/` |
| `?swcfpc=1` cache busters | clean path (middleware) |
| `/learn-page` | `/nevada-buyers-guide` |
| `/homepage` | `/` |
| `/luxury-homes-henderson-nv` | Henderson luxury expert page |
| `/retiring-soon-…` | `/sellers/downsizing` |
| `/news-blog/page/*`, categories, trashed landing | `/news` or specific article |
| `/wp-includes/*` | `/` (Firewall + redirects) |
| `/contact-us` | `/contact` |

After deploy: Request indexing on the **Keep** URLs only. Junk should move to “Page with redirect” / drop out — do not request indexing on those.

## GSC: Discovered – currently not indexed

**Meaning:** Google saw the URL (usually via `sitemap.xml`) but has **not crawled it yet** (`Last crawled: N/A`). This is crawl *scheduling*, not a broken page.

**Already in code (merge PR #18 first):**
- Self-referencing canonicals (production still pointing many pages at `/` until deploy)
- HTML crawl hub at `/site-map` (footer “Site Map”) linking every sitemap URL
- Stronger footer internal links to buyers, about, listings, 55+, maps, etc.

**What to do in GSC after production deploy:**
1. **Sitemaps** → resubmit `sitemap.xml` (or leave it; confirm “Success”)
2. **URL Inspection** on priority hubs → **Request indexing** (start with `/about`, `/buyers`, `/henderson`, `/55-plus-communities`, `/site-map`)
3. Do **not** expect “Validate fix” to clear this report overnight — Google crawls on its own schedule
4. After a URL shows a crawl date, if it still isn’t indexed, check that report’s new status (often fixed by the canonical PR)
