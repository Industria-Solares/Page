import 'vuetify/styles'
import { defineClientConfig } from '@vuepress/client'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Calculator from './components/Calculator.vue'

const vuetify = createVuetify({ components, directives, ssr: true })

export default defineClientConfig({
  enhance({ app }) {
    app.use(vuetify)
    app.component('calculator', Calculator)
  },
  setup() {},
  rootComponents: [],
})