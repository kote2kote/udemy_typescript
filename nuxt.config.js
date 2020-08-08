require('dotenv').config()
const { DEV_HOST, DEV_PORT, HOST, PORT } = process.env
module.exports = {
  mode: 'universal',
  env: [
    {
      INITIAL_URL:
        process.env.NODE_ENV === 'production'
          ? 'https://kote2.tokyo'
          : 'https://10.0.0.8:5009',
      DEV_HOST,
      DEV_PORT,
      HOST,
      PORT
    }
  ],
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || "",
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | kote2.tokyo` : 'kote2.tokyo'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: ``
      },
      { property: 'og:image', content: `` },
      { property: 'og:site_name', content: '' },
      { property: 'fb:app_id', content: '' },
      { name: 'twitter:card', content: `` },
      { name: 'twitter:site', content: '' },
      { property: 'og:image:secure_url', content: `` },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '764' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // {
      //   rel: 'stylesheet',
      //   href: '//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap',
      // },
    ],
    script: [
      { src: '//kit.fontawesome.com/7432b48064.js' },
      {
        src: '//polyfill.io/v3/polyfill.min.js?features=es6'
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.js'
      },
      // { src: '/assets/vender/js/swiper/swiper.js' },
      { src: '//cdn.jsdelivr.net/npm/fitie@1.0.0/dist/fitie.js' }
    ]
  },
  pwa: {
    manifest: {
      name: 'site-name',
      title: 'site-title',
      description: '',
      lang: 'ja',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      theme_color: '#000',
      background_color: '#fff'
      // iconは static/icon.png(512x512)を置いておけばよろしくやってくれる
      // icons: [
      //   {
      //     src: '/favicons/apple-touch-icon.png',
      //     sizes: '180x180',
      //     type: 'image/png',
      //   },
      //   {
      //     src: '/favicons/icon-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      // ],
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'

    // 以下は必要な時インストール

    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-xxx',
    //   },
    // ],
    // [
    //   '@nuxtjs/google-adsense',
    //   {
    //     id: 'ca-pub-xxxx',
    //   },
    // ],
    // [
    //   '@nuxtjs/google-tag-manager',
    //   {
    //     id: 'GTM-xxx',
    //   },
    // ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // analyze: true,
    // transpile: ['vee-validate/dist/rules'],
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    },
    terser: {
      // 本番はconsoleを消す
      terserOptions: {
        compress: { drop_console: true }
      }
    },
    extend(config, ctx) {}
  },
  router: {
    base: process.env.BASE_DIR || '/',
    linkActiveClass: 'is-active'
  },
  server: {
    port:
      process.env.NODE_ENV === 'production'
        ? process.env.PORT
        : process.env.DEV_PORT,
    host:
      process.env.NODE_ENV === 'production'
        ? process.env.HOST
        : process.env.DEV_HOST
  }
}
