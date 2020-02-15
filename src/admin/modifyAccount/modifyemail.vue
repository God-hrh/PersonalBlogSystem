<template>
    <div id="modifyemail">
        <top :subtitle="subtitle"></top>
        <div class="con">
            <div class="head">当前邮箱</div>
            <input type="text" placeholder="尚未绑定邮箱">
            <div class="head">登陆密码</div>
            <input type="text" placeholder="请输入登陆密码">
            <div class="head">新邮箱</div>
            <input type="text" placeholder="请输入新邮箱">
            <div class="head">验证码</div>
            <input type="text" placeholder="请输入验证码" class="imgcode">
            <a href=""  @click="reloadCaptcha"><img src="/captcha" id="imgcode" ></a>
            
            <div class="explain">
                <ul>
                    <li>系统将向新邮箱发送一封验证邮件， 请点击邮件中的激活链接即可完成修改。</li>
                    <li>如没收到邮件，请确认邮箱地址是否正确，或者在垃圾箱里检查是否误投。</li>
                </ul>
            </div>
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
            subtitle:"修改登陆邮箱"
        }
    },
    methods:{
        reloadCaptcha:function(){
            let img = document.getElementById("imgcode");
            img.src = "/captcha?time="+(new Date()).getTime;
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
.explain{
    border: 1px solid rgb(174,130,44);
    background-color: rgb(254,248,222);
        width: 252px;
    height: 75px;
    padding: 20px 30px;
    margin-top: 20px;
}
.explain ul li{
    font-size: 13px;
    color: rgb(174,130,44);
    list-style-type: initial;
}
#imgcode{
    margin-bottom: -6px;
}
.imgcode{
    width: 185px;
}
</style>