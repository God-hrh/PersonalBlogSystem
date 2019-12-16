<template>
  <div id="app">
    <upper></upper>
    <lower></lower>
  </div>
</template>
  
<script>
 import upper from "../signup/upper";
 import lower from "../signup/lower"
export default {
  name: 'app',
  components:{
    upper,lower
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