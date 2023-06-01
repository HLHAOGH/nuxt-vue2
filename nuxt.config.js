export default {
  // 渲染模式 true服务端渲染； false 为单页面spa渲染
  ssr: true,
  // 服务端渲染部署：server， 静态化站点部署：static
  target: 'server', 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // 开发还是生产环境
  dev: process.env.NODE_ENV !== 'production',
  // 该配置项用于定义应用客户端和服务端的环境变量
  /* 请注意，Nuxt 使用 webpack 的 definePlugin 来定义环境变量。这意味着 Node.js 中的process或process.env既不可用也不能定义。
   * nuxt.config.js 中定义的每个 env 属性都单独映射到process.env.xxxx并在编译期间进行转换编译
   */
  env: {
    baseUrl: process.env.BASE_URL
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy',
  ],
  // axios代理配置
  axios: {
    // 是否开启代理
    proxy: process.env.NODE_ENV !== 'production',
    // 代理前缀
    prefix: '/api',
    // 跨域携带凭证
    credentials: true
  },
  proxy: {
    // '/api': {
    //   target: 'https://10.0.5.210',
    //   changeOrigin: true,
    //   secure: false,
    //   pathRewrite: {
    //     '^/api': ''
    //   },
    // }
  },
  // router路由配置
  router: {
    base: '/',
    mode: 'history' // 基于服务端渲染特性，不建议修改此项默认值
  },
  // 启用server.timing选项会添加一个中间件来测量服务器端渲染过程中经过的时间
  timing: {
    total: true, // 跟踪服务器端渲染所花费的全部时间
  },
  
  // 开发环境配置
  server: {
    port: 2023, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // 进行webpack-bundle-analyzer打包模块分析
    analyze: false,
  },
}
