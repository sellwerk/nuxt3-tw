import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/reset.css",
    "@fontsource/barlow",
    "@fontsource/barlow/100.css",
    "@fontsource/barlow/200.css",
    "@fontsource/barlow/300.css",
    "@fontsource/barlow/400.css",
    "@fontsource/barlow/500.css",
    "@fontsource/barlow/600.css",
    "@fontsource/barlow/700.css",
    "@fontsource/barlow/800.css",
    "@fontsource/barlow/900.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
