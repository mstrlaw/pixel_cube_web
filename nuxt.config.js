const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'PixelCube - Track your time in a fun way',
    meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'Pixel Cube lets you track your time in a fun way' },
      { hid: 'author', name: 'author', content: 'pixelcube.xyz' },
      // Opengraph
      { hid: 'og:title', name: 'og:title', content: 'Pixel Cube lets you track your time in a fun way' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'PixelCube' },
      { hid: 'og:url', name: 'og:url', content: 'https://pixelcube.xyz' },
      
      //Microsoft favicon tiles
      { name:'msapplication-TileColor', content:'#00aba9' },
      { name:'msapplication-config', content:"/favicons/browfrconfig.xml" },
      { name:'theme-color', content:"#ffffff" }
    ],
    link:[
      /* Favicons */
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color:'#5bbad5'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      /* Fonts */
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
