import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
const vuetify = createVuetify({components, directives})

import Theme from 'vitepress/theme'
import Calculator from '../components/Calculator.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('calculator', Calculator)
  }
}