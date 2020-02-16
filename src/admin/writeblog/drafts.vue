<template>
    <div id="drafts">
        <div class="current_location">当前路径</div>
        <div class="head title" >草稿箱</div>
        <div>每个草稿的内容</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.current_location {
    border: 1px solid black;
    height: 20px;
    width: 100%;
  }
  #drafts{
    height: 620px;
    width: 850px;
    position: absolute;
    margin-left: 335px;
}
.title{
    margin-top: 10px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
}
</style>