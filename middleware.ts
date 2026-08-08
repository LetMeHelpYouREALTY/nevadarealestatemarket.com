import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Legacy WordPress probe paths → 301 home.
 * Note: Vercel WAF may still deny some /wp-* requests before middleware.
 * Pair with Firewall redirect rules (see scripts/gsc-wp-firewall-redirect.sh).
 */
function redirectLegacyWordpress(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  const isWpPath =
    pathname.startsWith("/wp-content") ||
    pathname.startsWith("/wp-admin") ||
    pathname.startsWith("/wp-includes") ||
    pathname.startsWith("/wp-login") ||
    pathname.startsWith("/wp-cron") ||
    pathname === "/xmlrpc.php" ||
    /^\/wp-.*\.php$/i.test(pathname);

  if (!isWpPath) return null;

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url, 301);
}

/**
 * WordPress query soft-duplicates (`?p=`, `?page_id=`) serve the homepage as 200.
 * Cache-buster `?swcfpc=1` creates alternate URLs Google crawls then skips.
 * Collapse all of these with 301s so GSC “Crawled – not indexed” junk drops.
 */
function redirectWordpressQueryParams(
  request: NextRequest,
): NextResponse | null {
  const url = request.nextUrl.clone();
  const { searchParams } = url;

  if (searchParams.has("p") || searchParams.has("page_id")) {
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  if (searchParams.has("swcfpc")) {
    searchParams.delete("swcfpc");
    url.search = searchParams.toString() ? `?${searchParams.toString()}` : "";
    return NextResponse.redirect(url, 301);
  }

  return null;
}

export function middleware(request: NextRequest) {
  const wpRedirect = redirectLegacyWordpress(request);
  if (wpRedirect) return wpRedirect;

  const queryRedirect = redirectWordpressQueryParams(request);
  if (queryRedirect) return queryRedirect;

  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();
  // Pass hostname to pages via header so server components can read it
  response.headers.set("x-domain", hostname);
  return response;
}

export const config = {
  // Exclude static SEO assets + Google HTML verification files (google*.html)
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap|google).*)",
  ],
};
