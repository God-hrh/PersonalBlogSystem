<template>
    <div id="drafts">
        <div class="current_location">当前路径</div>
        <div class="head title">草稿箱</div>
        <div class="draft">
            <div class="header">草稿的标题</div>
            <div class="con">草稿的内容</div>
            <div class="opt">
                <div style="float:left">草稿修改时间</div>
                <div style="float:left;margin-left: 10px;">  <button>编辑</button> </div>
                <div style="float:left;margin-left: 10px;"> <button>删除</button> </div>
            </div>
        </div>
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
.draft{
    border: 1px solid black;
    width: 100%;
    height: 110px;
}
.header{
    border: 1px solid black;
    padding-top: 5px;
    font-weight: bolder;
    width: 100%;
    height: 30px;
}
.con{
    border: 1px solid black;
    width: 100%;
    height: 50px;
}
.opt{
    border: 1px solid black;
    width: 100%;
    height: 30px;
}
.opt::after{
    content: "";
    clear: both;
    display: block;
}
</style>