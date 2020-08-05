import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
