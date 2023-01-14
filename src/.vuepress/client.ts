import { defineClientConfig } from '@vuepress/client'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Calculator from './components/Calculator.vue'

const vuetify = createVuetify({ components, directives, ssr: true })

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(vuetify)
    app.component('calculator', Calculator)
  },
  setup() {},
  rootComponents: [],
})