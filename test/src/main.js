import Vue from "vue";
import App from "./App.vue";
import Search from "./components/Search.vue";
import texteditor from "./components/texteditor.vue";
import dotenv from "dotenv";
dotenv.config();
Vue.config.productionTip = false;
Vue.component("Search", Search);
Vue.component("texteditor", texteditor);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
