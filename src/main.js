import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
var VueScrollTo = require("vue-scrollto");
import AOS from "aos";
import "aos/dist/aos.css";
export const EventBus = new Vue();
Vue.config.productionTip = false;
Vue.use(VueScrollTo);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
