import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append' // or 'remove'
      }
    }
  },
  css: ['assets/css/main.css'],
  colorMode: { classSuffix: '' },
  content: {
    build: {
      markdown: {
        highlight: {
          // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
          theme: {
            dark: 'github-dark',
            default: 'github-light',
          },
        },
      },
    },
  },
  compatibilityDate: '2025-02-19',

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vite: { plugins: [tailwindcss() as any] },
})
