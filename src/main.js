import Vue from 'vue';
import App from './App.vue';

import router from "./router/index.js";
import store from "./store/index.js";

import toast from "./components/common/toast/index.js";

require("./assets/font/iconfont.js");

import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(toast);

Vue.use(VueLazyLoad, {
  loading: require("./assets/imgs/common/timg.gif")
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
