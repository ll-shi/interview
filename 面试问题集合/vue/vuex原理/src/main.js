import Vue from 'vue'
import app from './app.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false;
let appView = new Vue({
  router,
  store,
  render: h=>h(app),
}).$mount("#app");
console.log(appView)
