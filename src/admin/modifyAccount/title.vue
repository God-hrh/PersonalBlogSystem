<template>
    <div id="title">
        <div class="current_location">当前路径</div>
        <div class="subtitle">{{subtitle}}</div>
    </div>
</template>
<script>
export default {
    props:["subtitle"],
    data:function(){
        return{
        }
    }
}
</script>
<style scoped>
 .current_location {
    border: 1px solid black;
    height: 20px;
    width: 100%;
  }
  .subtitle{
    border-bottom: 1px solid gray;
    padding-top: 15px;
    height: 20px;
    font-weight: 700;
    width: 100%;
  }
</style>