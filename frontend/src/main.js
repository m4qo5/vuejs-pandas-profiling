import Vue from 'vue'
import store from '@/store'
import router from '@/router'


import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'






import App from '@/App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false







new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
