import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/animate.min.css";
import "./assets/css/styles.css";
import "./assets/fonts-icon/themify-icons-font/themify-icons/themify-icons.css";
import vWow from "v-wow";

Vue.config.productionTip = false;
Vue.use(vWow);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
