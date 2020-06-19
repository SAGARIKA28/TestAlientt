import Vue from "vue";
import App from "./App.vue";
import Search from "./components/Search.vue";

Vue.config.productionTip = false;
Vue.component("Search", Search);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
