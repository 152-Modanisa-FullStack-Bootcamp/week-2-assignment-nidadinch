import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import axios from "axios";
import {store} from './store/store';

Vue.use(axios);
Vue.config.productionTip = false;

new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
