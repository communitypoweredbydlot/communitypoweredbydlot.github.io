import en from './locales/en.json'
import ro from './locales/ro.json'

const meta = {
  name: 'Asociația Community',
  title: 'Asociația Community - powered by DLOT',
  description: 'Non-profit organization focused on environmental cleanup and education. Promoting environment friendly behaviours.',
  image: 'https://asociatiacommunity.ro/og_home.jpg'
}

export default {
  target: 'static',
  generate: {
    fallback: true
  },
  pwa: {
    meta: {
      name: meta.name,
      theme_color: '#17a097'
    },
    manifest: {
      name: meta.name,
      short_name: 'Community',
      description: meta.description
    },
    workbox: {
      clientsClaim: false
    }
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
      { hid: 'og:url', property: 'og:url', content: 'https://asociatiacommunity.ro' },
      { hid: 'og:image', property: 'og:image', content: meta.image },
      { hid: 'og:image:width', property: 'og:image:width', content: '1890' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1080' },
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
    ],
    script: [
      {
        src: 'https://sdk.paylike.io/3.js',
        defer: true
      }
    ]
  },
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [
    '@/plugins/global-components.ts',
    '@/plugins/on-click-outside.ts',
    '@/plugins/analytics.client.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxt-clipboard2'
  ],
  router: {
    linkExactActiveClass: 'text-dlot-teal'
  },
  i18n: {
    baseUrl: 'https://www.asociatiacommunity.ro',
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
    hostname: 'https://wwww.asociatiacommunity.ro',
    gzip: true,
    i18n: {
      locales: ['ro', 'en'],
      routesNameSeparator: '___'
    }
  },
  image: {
    ipx: {
      dir: '~/assets/img',
      sharp: {
        quality: 75
      }
    },
    sizes: [
      300,
      360,
      425,
      768,
      896,
      1080,
      1280
    ]
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  publicRuntimeConfig: {
    analytics: {
      config: {
        id: 'UA-179251811-1',
        params: {
          send_page_view: false
        }
      },
      bootstrap: false
    },
    paylike: {
      publicKey: 'beba541f-e7cb-4e85-a873-02a52e6f3fae'
    }
  }
}
