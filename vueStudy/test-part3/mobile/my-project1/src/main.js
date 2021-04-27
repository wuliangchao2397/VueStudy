// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './MyApp.vue'

Vue.config.productionTip = false

import './assets/reset.css'

new Vue({
  render: h => h(App)
}).$mount('#app')
