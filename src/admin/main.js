import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter);

import Leftcom from "./Leftcom.vue";
import blogclass from "./blogclasscom/blogclass.vue";
import BasicData from "./modifyPerDatacom/BasicData.vue";
import Contactinfo from "./modifyPerDatacom/Contactinfo.vue";
import ITSkill from "./modifyPerDatacom/ITSkill.vue";
import title from "./modifyPerDatacom/title.vue"
const router = new VueRouter({
  routes: [
    { path: "/main", components:{"Leftcom":Leftcom,"blogclass":blogclass,"BasicData":BasicData,"Contactinfo":Contactinfo,"ITSkill":ITSkill,"title":title} },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')