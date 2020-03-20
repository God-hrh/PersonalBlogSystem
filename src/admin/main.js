import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
Vue.config.productionTip = false

Vue.use(VueRouter);

import Leftcom from "./Leftcom.vue";
import blogclass from "./blogclasscom/blogclass.vue";
import title from "./modifyPerDatacom/title.vue";
import modifypsw from "./modifyAccount/modifypsw.vue"
import modifyemail from "./modifyAccount/modifyemail.vue"
import homepage from "./modifyAccount/homepage.vue"
import publishblog from "./writeblog/publishblog.vue"
import drafts from "./writeblog/drafts.vue"
const router = new VueRouter({
  routes: [
    { path: "/main", components:{"Leftcom":Leftcom,"blogclass":blogclass,"title":title ,"modifypsw":modifypsw,
          "modifyemail":modifyemail,"homepage":homepage,"publishblog":publishblog,"drafts":drafts
  
     } },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')