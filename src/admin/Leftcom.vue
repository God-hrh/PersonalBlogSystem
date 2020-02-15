<template>
    <div class="Leftcom">
    <div
      class="level-one"
      v-show="obj.level==1"
      v-for="obj in bar1"
      :key="obj.id"
    >个人空间管理
      <div
        class="level-two"
        v-show="obj1.parentId == obj.id "
        v-for="obj1 in bar1"
        :key="obj1.id"
      >{{obj1.title}}
        <div
          class="level-three"
          v-show="obj2.parentId == obj1.id"
          v-for="obj2 in bar1"
          :key="obj2.id"
        ><a :href="`admin#/main?id=${obj2.id}`"><span :class="selectNav(obj2.id)">{{obj2.title}}</span> </a></div>
      </div>
    </div>
  </div>
</template>
<script>
import "./css/leftcom.css"
export default {
   props:["bar1"],
  methods:{
      selectNav:function(id){
        let hash = window.location.hash||"";
        if(hash){
          hash = hash.substring(10);
          if(id === hash){
            return "select";
          }
        }else{
          hash = "22";
        }
        return "";
      }
  }
};
</script>
<style scoped>


</style>