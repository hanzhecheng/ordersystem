import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import './assets/css/normalize.scss'
import './assets/css/base.scss'
import '@/assets/icons' // icon图标组件
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");