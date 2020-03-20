<template>
    <div id="homepage">
        <form @submit="submit">
        <top :subtitle="subtitle"></top>
        <div class="con">
            <div class="head">我的网址</div>
            <input type="text" placeholder="请输入个性网址" v-model="mainpage"> <a href="">设置后不能修改，请妥善填写。</a>
            <div class="head">网页标题</div>
            <input type="text" v-model="mainpageheader">
            <br>
            <input type="submit" value="保存修改" class="confirm">
        </div>
        </form>
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
            subtitle:"个人主页设置",
            mainpage:"",
            mainpageheader:""
        }
    },
    methods:{
        submit:function(){
            fetch(`/modifyaccount/homepage?id=1&mainpage=${this.mainpage}&mainpageheader=${this.mainpageheader}`);
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