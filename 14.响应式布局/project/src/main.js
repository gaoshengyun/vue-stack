import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
