import en from './locales/en.json'
import ro from './locales/ro.json'

const meta = {
  name: 'Asociatia Community',
  title: 'Asociatia Community - powered by DLOT',
  description: 'Non-profit organization focused on environmental cleanup and education. Promoting environment friendly behaviours.',
  image: 'https://asociatiacommunity.ro/og-community-home.jpg'
}

export default {
  target: 'static',
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s - ' + meta.name,
    title: meta.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { hid: 'og:description', property: 'og:description', content: meta.description },
      { hid: 'og:site_name', property: 'og:site_name', content: meta.name },
      { hid: 'og:title', property: 'og:title', content: meta.title },
      { hid: 'og:url', property: 'og:url', content: 'https://communitypoweredbydlot.github.io' },
      { hid: 'og:image', property: 'og:image', content: meta.image },
      { hid: 'og:image:width', property: 'og:image:width', content: '900' },
      { hid: 'og:image:height', property: 'og:image:height', content: '580' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: meta.name },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:image', name: 'twitter:image', content: meta.image },
      { hid: 'twitter:title', name: 'twitter:title', content: meta.title },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:description', name: 'twitter:description', content: meta.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [
    '@/plugins/global-components.ts',
    '@/plugins/on-click-outside.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@aceforth/nuxt-optimized-images'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-clipboard2'
  ],
  content: {},
  router: {
    linkExactActiveClass: 'text-dlot-teal'
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'ro',
        iso: 'ro',
        name: 'Română'
      }
    ],
    defaultLocale: 'ro',
    seo: false,
    vueI18n: {
      fallbackLocale: 'ro',
      messages: {
        en,
        ro
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: [200, 300, 400, 500, 600, 700],
      Comfortaa: [300, 400, 500, 600, 700]
    },
    display: 'swap',
    download: true,
    overwriting: true
  },
  sitemap: {
    hostname: 'https://asociatiacommunity.ro',
    gzip: true,
    i18n: {
      locales: ['ro', 'en'],
      routesNameSeparator: '___'
    }
  },
  googleAnalytics: {
    id: 'UA-179251811-1',
    autoTracking: {
      screenview: true
    }
  },
  build: {
    babel: {
      presets ({ _isServer }) {
        return [
          [
            '@nuxt/babel-preset-app', { loose: true }
          ]
        ]
      }
    }
  }
}
