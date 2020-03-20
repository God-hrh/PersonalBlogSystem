<template >
  <div id="title">
    <div class="current_location">当前路径</div>
    <div class="nav">
      <ul>
        <li
          v-for="item in title"
          :key="item.id"
        ><a
            :href="'admin#/main?id='+item.id"
          > <span :class="isselect(item.id)">{{item.title}}</span> </a> </li>
      </ul>
    </div>
    <div class="upper">
      <div v-if="selectCon===false && selectITSkill===false && selectbasic === true">
        <basic></basic>
      </div>
      <div v-if="selectCon===true && selectITSkill===false &&selectbasic===false">
        <Con></Con>
      </div>
      <div v-if="selectCon===false && selectITSkill===true &&selectbasic===false">
        <ITSkill></ITSkill>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/title.css";
import Con from "./Contactinfo";
import ITSkill from "./ITSkill";
import basic from "./BasicData";
export default {
  methods: {
    isselect:function(id){
      let hash = window.location.hash;
      if (hash!="#/main?id=10") {
        hash = hash.substring(10);
        if(id===hash){
          return "selec"
        }
      }else{
          hash = "2020021401"
        }
        if(id===hash){
          return "selec"
        }
        return "";
    }
  },
  components: {
    Con,
    ITSkill,
    basic
  },
  watch:{
    $route(){
         let {id} =this.$route.query||"";
        if (id === "2020021402") {
          this.selectCon = true;
          this.selectITSkill = false;
          this.selectbasic = false;
        }
        if (id === "2020021403") {
          this.selectCon = false;
          this.selectITSkill = true;
          this.selectbasic = false;
        }
        if (id === "2020021401") {
          this.selectCon = false;
          this.selectITSkill = false;
          this.selectbasic = true;
        }
    }
  },
  data: function() {
    return {
      selectCon: false,
      selectITSkill: false,
      selectbasic: true,
      title: [
        {
          id: "2020021401",
          title: "基本资料"
        },
        {
          id: "2020021402",
          title: "联系信息"
        },
        {
          id: "2020021403",
          title: "IT职业技能"
        }
      ]
    };
  }
};
</script>
<style scoped>
.upper {
  position: absolute;
  top: -22px;
  left: -337px;
}
.selec{
  color: rgb(88,167,108);
}
</style>