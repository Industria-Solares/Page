import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'

export default defineUserConfig({
  lang: 'de-DE',
  title: 'Industria Solares',
  description: 'Awesome Solar Power',
  base: '/page/',
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['vuetify']
      }
    }
  }),
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Kalkulator', link: '/calculator/' },
    ],
  })
})