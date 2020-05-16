import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import config from '../config.json'
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCCnDP91XS-TV1l8zRq3aP7W1kJj6v3aGg",
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
