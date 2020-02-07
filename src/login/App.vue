<template>
  <div id="app">
    <top></top>
    <lower></lower>
  </div>
</template>

<script>
 import top from "../login/upper";
 import lower from "../login/lower"
export default {
  name: 'app',
  data:function(){
return{
  user:{}
}
  },
  components:{
    top,lower
  },
  mounted:function(){
    // fetch("/users/getuser").then(function(response){
    //   return response.json();
    // }).then((data)=>{
    //   this.user = data;
    // })
  }
}
</script>

<style>
@import url("//at.alicdn.com/t/font_1539657_lp63sfpgcn.css");
#app{
  height: 550px;
  width: 450px;
  border: 1px solid rgb(196, 194, 194);
  margin: 50px auto;
}
</style>