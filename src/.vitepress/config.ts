import {defineConfig} from "vitepress"

export default defineConfig({
  title: "Industria Solares",
  base: '/page/',
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  }
})