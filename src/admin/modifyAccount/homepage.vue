<template>
    <div id="homepage">
        <top :subtitle="subtitle"></top>
        <div class="con">
            <div class="head">我的网址</div>
            <input type="text" placeholder="请输入个性网址"> <a href="">设置后不能修改，请妥善填写。</a>
            <div class="head">网页标题</div>
            <input type="text">
            <br>
            <input type="submit" value="保存修改" class="confirm">
        </div>
    </div>
</template>
<script>
import top from "./title"
export default {
    components:{
        top
    },
    data:function(){
        return{
            subtitle:"个人主页设置"
        }
    }
}
</script>
<style scoped>
.con {
  position: absolute;
  top: 80px;
  left: 345px;
}
</style>