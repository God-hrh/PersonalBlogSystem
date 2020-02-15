import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter);

import Leftcom from "./Leftcom.vue";
import blogclass from "./blogclasscom/blogclass.vue";
import title from "./modifyPerDatacom/title.vue";
import modifypsw from "./modifyAccount/modifypsw.vue"
import modifyemail from "./modifyAccount/modifyemail.vue"
import homepage from "./modifyAccount/homepage.vue"
const router = new VueRouter({
  routes: [
    { path: "/main", components:{"Leftcom":Leftcom,"blogclass":blogclass,"title":title ,"modifypsw":modifypsw,
          "modifyemail":modifyemail,"homepage":homepage
  
     } },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')