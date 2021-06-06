export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Notes App",
    htmlAttrs: {
      lang: "pt-br"
    },
    bodyAttrs: {
      class: "bg-light"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Sem lojas e instalações. Crie suas anotações mesmo offline"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/icon.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/pwa"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: "https://localhost:4443"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post" },
          user: { url: "usuario", method: "get", propertyName: false },
          logout: false
        }
      }
    }
  },

  pwa: {
    icon: {
      source: "icon.png"
    },
    meta: {
      theme_color: "#FCC344",
      appleStatusBarStyle: "black-translucent"
    },
    manifest: {
      name: "Notes App TADS",
      short_name: "Notes App",
      description: "Aplicativo para anotações do curso de TADS",
      lang: "pt-br"
    }
  }
};
