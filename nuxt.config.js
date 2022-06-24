export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Media Saboq',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   name: 'google-site-verification',
      //   content: 'yHd2FeAWrjudp-3y-c-TU13AKyo8AXALT3QRxLa9Nf4',
      // },
      // {
      //   name: 'yandex-verification',
      //   content: 'd548d1b7ec3ef544',
      // },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'googlebot',
        name: 'googlebot',
        content: 'index, follow',
      },
      {
        hid: 'yandex',
        name: 'yandex',
        content: 'index, follow',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "MediaSaboq.uz - Badiiy, ilmiy maqolalar va  ma'lumotlarni o'z ichiga olgan web-sahifa bo'lib, yurtimizda kitobxonlar qatlamini yaratish, yoshlarning  ilm-fanga bo'lgan rag'batini oshirish, rivojlantirishni maqsad qilgan ijtimoiy loyiha.",
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Mediasaboq, Yangiliklar, Maqolalar, Kitoblar, Mualliflar, Loyihalar',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'og_title',
        property: 'og:title',
        content: 'mediasaboq',
      },
      {
        property: 'og:site_name',
        content: 'mediasaboq',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content:
          "MediaSaboq.uz - Badiiy, ilmiy maqolalar va  ma'lumotlarni o'z ichiga olgan web-sahifa bo'lib, yurtimizda kitobxonlar qatlamini yaratish, yoshlarning  ilm-fanga bo'lgan rag'batini oshirish, rivojlantirishni maqsad qilgan ijtimoiy loyiha.",
      },
      {
        hid: 'og_type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: 'https://mediasaboq.uz',
      },
      {
        hid: 'og_image',
        property: 'og:image',
        content: 'https://mediasaboq.uz/images/logo/2022-06-24-19-09-00-134.png',
      },
      {
        hid: 'og_image_width',
        property: 'og:image:width',
        content: '200',
      },
      {
        hid: 'og_image_height',
        property: 'og:image:height',
        content: '200',
      },
      {
        name: 'twitter:image',
        content: 'https://mediasaboq.uz/images/logo/2022-06-24-19-09-00-134.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  env: {
    baseUrl: process.env.BASE_URL || 'https://mediasaboq.uz/api/v1'
  }
}
