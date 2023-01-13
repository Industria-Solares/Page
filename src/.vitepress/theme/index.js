import Theme from 'vitepress/theme'
import Calculator from '../components/Calculator.vue'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('calculator', Calculator)
  }
}