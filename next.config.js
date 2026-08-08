/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for Docker/Vercel optimization
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cap at 1920 — mobile PageSpeed was generating unused 3840w candidates
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Performance optimizations
  swcMinify: true,

  // Redirects: apex→www, legacy WordPress/GSC 404 recovery
  async redirects() {
    return [
      // Legacy WordPress paths — 301 away from Vercel WAF 403s (GSC “access forbidden”)
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-cron.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-:file.php',
        destination: '/',
        permanent: true,
      },
      // Alternate Del Webb naming → canonical community URL (GSC duplicate recovery)
      {
        source: '/north-las-vegas/del-webb-at-north-ranch',
        destination: '/north-las-vegas/del-webb-north-ranch',
        permanent: true,
      },
      {
        source: '/north-las-vegas/del-webb-at-north-ranch/',
        destination: '/north-las-vegas/del-webb-north-ranch',
        permanent: true,
      },
      // Legacy WordPress + soft-404 URLs → live Next.js routes (GSC recovery)
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/news-blog',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news-blog/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news-blog/page/:page',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news-blog/page/:page/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/privacy-policy-2',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy-policy-2/',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/homepage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/homepage/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/learn-page',
        destination: '/nevada-buyers-guide',
        permanent: true,
      },
      {
        source: '/learn-page/',
        destination: '/nevada-buyers-guide',
        permanent: true,
      },
      {
        source: '/luxury-homes-henderson-nv',
        destination: '/your-trusted-henderson-luxury-real-estate-expert',
        permanent: true,
      },
      {
        source: '/luxury-homes-henderson-nv/',
        destination: '/your-trusted-henderson-luxury-real-estate-expert',
        permanent: true,
      },
      {
        source: '/retiring-soon-why-moving-might-be-the-perfect-next-step',
        destination: '/sellers/downsizing',
        permanent: true,
      },
      {
        source: '/retiring-soon-why-moving-might-be-the-perfect-next-step/',
        destination: '/sellers/downsizing',
        permanent: true,
      },
      {
        source:
          '/landing-page__trashed-2/william-lyon-homes-las-vegas-now-part-of-taylor-morrison',
        destination: '/william-lyon-homes-las-vegas-now-part-of-taylor-morrison',
        permanent: true,
      },
      {
        source:
          '/landing-page__trashed-2/william-lyon-homes-las-vegas-now-part-of-taylor-morrison/',
        destination: '/william-lyon-homes-las-vegas-now-part-of-taylor-morrison',
        permanent: true,
      },
      {
        source: '/landing-page__trashed-2/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/landing-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/landing-page/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/for-buyers',
        destination: '/buyers',
        permanent: true,
      },
      {
        source: '/category/for-buyers/',
        destination: '/buyers',
        permanent: true,
      },
      {
        source: '/category/for-buyers/page/:page',
        destination: '/buyers',
        permanent: true,
      },
      {
        source: '/category/for-buyers/page/:page/',
        destination: '/buyers',
        permanent: true,
      },
      // WordPress category archives → buyers/news hubs (clears GSC noindex-on-404)
      {
        source: '/category/:slug',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/category/:slug/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/category/:slug/page/:page',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/category/:slug/page/:page/',
        destination: '/news',
        permanent: true,
      },
      // WordPress author archives → About (GSC “Excluded by noindex” on 404)
      {
        source: '/author/drduffybhhsnv-com',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/drduffybhhsnv-com/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/drduffyblog',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/drduffyblog/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/:slug/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/tag/:slug/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/the-secret-to-being-a-fashionable-teen',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/the-secret-to-being-a-fashionable-teen/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/cdn-cgi/l/email-protection',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/cdn-cgi/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nevadarealestatemarket.com',
          },
        ],
        destination: 'https://www.nevadarealestatemarket.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'heyberkshire.com',
          },
        ],
        destination: 'https://www.heyberkshire.com/:path*',
        permanent: true,
      },
    ]
  },

  // Python API rewrites
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },

  // Enhanced security headers including CSP for RealScout widget
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // CSP for RealScout widget
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://widgetbe.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' data: https://assets.calendly.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://openrouter.ai https://api.openai.com https://calendly.com https://widgetbe.com https://www.google-analytics.com https://analytics.google.com https://*.ingest.sentry.io",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com",
              "worker-src 'self' blob:",
            ].join('; '),
          },
          // Additional security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },

  // Bundle analyzer (when ANALYZE=true)
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze.html',
          openAnalyzer: false,
        })
      )
    }
    return config
  },
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // IE11 transpile bloats unused JS on modern mobile (PageSpeed)
    transpileClientSDK: false,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
