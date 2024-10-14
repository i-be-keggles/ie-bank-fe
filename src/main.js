import Vue from 'vue'

import App from './App.vue'
import Accounts from './components/AppAccounts.vue'
import Skull from './components/Skull.vue'

import router from './router'

//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";


Vue.config.productionTip = false

Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: App },
  { path: '/accounts', component: Accounts },
  { path: '/skull', component: Skull },
]

new Vue({
  router,
  routes,
  render: h => h(App)
}).$mount('#app')