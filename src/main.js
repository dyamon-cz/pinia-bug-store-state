import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { PiniaPlugin, createPinia } from "pinia";

Vue.use(VueCompositionAPI);
Vue.use(PiniaPlugin);

const pinia = createPinia();

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  pinia,
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
