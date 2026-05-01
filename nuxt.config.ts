// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-17',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo'],

  // === SITE CONFIG — dùng bởi @nuxtjs/seo ===
  site: {
    url: 'https://xkproduction.com',
    name: 'XKStudio — Phòng Thu Âm Chuyên Nghiệp',
    description: 'XKStudio — Phòng thu âm chuyên nghiệp tại Bình Phước & Đồng Nai. Hoà âm phối khí chuẩn quốc tế, Mix & Master Spotify-compliant, Thu âm chuyên nghiệp từ 350K, Quay MV/TVC, Cho thuê Sound & Lighting sự kiện. 7+ năm kinh nghiệm, 2000+ dự án thành công.',
    defaultLocale: 'vi',
    trailingSlash: false,
    indexable: true,
  },

  // === SEO MODULE CONFIG ===
  ogImage: { enabled: true },
  robots: {
    disallow: ['/cdn-cgi/'],
  },
  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      { loc: '/',          priority: 1,    changefreq: 'weekly'  },
      { loc: '/services',  priority: 0.9,  changefreq: 'weekly'  },
      { loc: '/courses',   priority: 0.9,  changefreq: 'monthly' },
      { loc: '/live-band', priority: 0.8,  changefreq: 'monthly' },
      { loc: '/products',  priority: 0.8,  changefreq: 'weekly'  },
      { loc: '/about',     priority: 0.7,  changefreq: 'monthly' },
      { loc: '/contact',   priority: 0.8,  changefreq: 'monthly' },
      { loc: '/faq',       priority: 0.7,  changefreq: 'monthly' },
      { loc: '/blog',      priority: 0.8,  changefreq: 'weekly'  },
      { loc: '/privacy',   priority: 0.3,  changefreq: 'yearly'  },
    ],
  },

  // === APP HEAD — Global Meta Tags ===
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'vi' },
      meta: [
        { name: 'theme-color', content: '#06080f' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:locale', content: 'vi_VN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'XKStudio' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@xkstudio29' },
        { name: 'twitter:creator', content: '@xkstudio29' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'XKStudio' },
        { name: 'application-name', content: 'XKStudio' },
        { name: 'msapplication-TileColor', content: '#06080f' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/xk-logo.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/xk-logo.png' },
        { rel: 'canonical', href: 'https://xkproduction.com' },
        // Preconnect — tăng tốc font và CDN
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://img.youtube.com', crossorigin: '' },
        // DNS prefetch for social
        { rel: 'dns-prefetch', href: 'https://www.facebook.com' },
        { rel: 'dns-prefetch', href: 'https://www.youtube.com' },
        { rel: 'dns-prefetch', href: 'https://formspree.io' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap',
          crossorigin: 'anonymous'
        },
        // Font Awesome
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
          crossorigin: 'anonymous',
          integrity: 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=='
        },
      ]
    }
  },

  // === CSS ===
  css: ['~/assets/css/style.css'],

  // === COMPONENTS (flat, no subdirectory prefix) ===
  components: [{ path: '~/components', pathPrefix: false }],

  // === NITRO: static output for Cloudflare Pages ===
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/services', '/products', '/live-band', '/courses', '/contact', '/faq', '/blog', '/privacy', '/sitemap.xml', '/robots.txt'],
    },
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        }
      }
    }
  },

  // === TYPESCRIPT ===
  typescript: { strict: true },
})
