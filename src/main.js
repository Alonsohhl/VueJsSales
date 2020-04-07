import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import 'animate.css/animate.min.css'

// import 'animate.css/source/attention_seekers/bounce.css'

import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import { Table, Input } from 'buefy'
import VueFlashMessage from 'vue-flash-message'
import moment from 'moment'
moment.locale('es-PE')
// import 'buefy/dist/buefy.css'

require('dotenv').config()

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}
Vue.use(VCalendar, {
  // componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
})

require('vue-flash-message/dist/vue-flash-message.min.css')
Vue.use(VueFlashMessage)
Vue.use(Table)
Vue.use(Input)
// Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.filter('toMomentJs', function (value) {
  if (!value) return ''
  if (moment(value).isBefore(moment.now(), 'day')) return moment(value).format('YYYY/MM/DD')

  return moment(value).startOf('hour').fromNow()
})

Vue.filter('toDate', function (value) {
  return moment(value).format('YYYY/MM/DD')
})

Vue.filter('toCurrency', function (value) {
  if (typeof value !== 'number') {
    return value
  }
  var formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  })
  return formatter.format(value)
})

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
