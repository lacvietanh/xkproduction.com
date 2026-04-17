// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-17',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo'],

  site: {
    url: 'https://xkstudio.vn',
    name: 'XKStudio',
    description: 'XKStudio - Phòng thu âm & Sản xuất âm nhạc chuyên nghiệp tại Hà Nội',
    defaultLocale: 'vi',
  },

  // === SEO & HEAD ===
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'vi' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // === CSS ===
  css: [
    '~/assets/css/style.css',
    '~/assets/css/layout.css',
    '~/assets/css/responsive.css'
  ],

  // === COMPONENTS (flat, no subdirectory prefix) ===
  components: [
    { path: '~/components', pathPrefix: false }
  ],

  // === NITRO: static output for Cloudflare Pages ===
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/services', '/products', '/pricing', '/contact', '/faq']
    }
  },

  // === TYPESCRIPT ===
  typescript: {
    strict: true
  }
})
