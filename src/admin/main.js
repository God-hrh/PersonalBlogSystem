import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter);

import Leftcom from "./Leftcom.vue";
import blogclass from "./blogclasscom/blogclass.vue";

const router = new VueRouter({
  routes: [
    { path: "/main", components:{"Leftcom":Leftcom,"blogclass":blogclass} },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')