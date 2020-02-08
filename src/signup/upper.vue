    
<template>
  <div class="upper">
    <div class="top-nav">
      <div class="register"><i class="iconfont icon-denglu"></i> 注册</div>
      <div class="login"> 已有账号？<a href="">登陆</a></div>
    </div>
    <form
      action="http://localhost:3000/users/signup"
      method="get"
    >
      <div class="body">
        邮箱 <input
          type="text"
          placeholder="请输入工作邮箱"
          class="kuang"
          name="emailadress"
          id="emailadress"
        > <br>
        验证码 <input
          type="text"
          class="kuang"
          name="imagecode"
        >
        <a href="" @click="reloadCaptcha"><img src="http://localhost:3000/captcha" id="imgcode"></a>
        <br>

        邮箱验证 <input
          type="text"
          placeholder="请输入邮箱验证码"
          style="width: 150px;height: 20px; background: rgb(250, 247, 247);
  color: gray;"
          name="emailcode"
        > <input
          type="button"
          value="获取验证码"
          class="yanzhengma"
          @click="sendmail"
        ><a href="">收不到邮件？</a><br>
        姓名<input
          type="text"
          class="kuang"
          name="name"
        ><br>
        个人域名 <input
          type="text"
          class="kuang"
          name="personadress"
        ><br>
        密码 <input
          type="text"
          placeholder="密码不少于6位"
          class="kuang"
          name="psw"
        ><br>
        <input
          type="checkbox"
          name=""
          id=""
        >已阅读并同意 <a href="">使用条款</a>以及<a href="">非活跃账号处理规范</a><br>
        <input
          type="submit"
          value="注册"
          style=" width: 270px;
            height: 30px;
            font-size: 15px;
            color: white;
            background-color: rgb(243, 180, 64);margin-left: 70px;"
        ><br>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    reloadCaptcha: function() {
      const imgcode = document.getElementById("imagecode");
      imgcode.src = "http://localhost:3000/captcha?t="+(new Date()).getTime;
      },
    sendmail:function () {
      const emailadress = document.getElementById("emailadress").value;
      fetch("http://localhost:3000/sendmail?adress="+emailadress);
    }
  }
};
</script>

<style scoped>
.upper {
  height: 70%;
  width: 100%;
}
.register {
  margin-left: 50px;
  float: left;
}
.register > .iconfont {
  font-size: 18px;
}
.login {
  margin-top: 20px;
  margin-left: 300px;
  margin-bottom: 20px;
}
.body {
  margin-left: 20px;
}
input {
  margin-bottom: 10px;
}
.kuang {
  width: 200px;
  height: 20px;
  background: rgb(250, 247, 247);
  color: gray;
}
</style>