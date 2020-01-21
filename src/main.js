import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import { Table, Input } from 'buefy'
import VueFlashMessage from 'vue-flash-message'
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
