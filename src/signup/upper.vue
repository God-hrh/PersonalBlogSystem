    
<template>
  <div class="upper">
    <div class="top-nav">
      <div class="register"><i class="iconfont icon-denglu"></i> 注册</div>
      <div class="login"> 已有账号？<a href="">登陆</a></div>
    </div>
    <div class="body">
      邮箱 <input
        type="text"
        placeholder="请输入工作邮箱"
        class="kuang"
      > <br>
      验证码 <input
        type="text"
        class="kuang"
      ><br>

      邮箱验证 <input
        type="text"
        placeholder="请输入邮箱验证码"
        style="width: 150px;height: 20px; background: rgb(250, 247, 247);
  color: gray;"
      > <input
        type="button"
        value="获取验证码"
        class="yanzhengma"
      ><a href="">收不到邮件？</a><br>
      姓名<input
        type="text"
        class="kuang"
      ><br>
      个人域名 <input
        type="text"
        class="kuang"
      ><br>
      密码 <input
        type="text"
        placeholder="密码不少于6位"
        class="kuang"
      ><br>
      <input
        type="checkbox"
        name=""
        id=""
      >已阅读并同意 <a href="">使用条款</a>以及<a href="">非活跃账号处理规范</a><br>
      <input
        type="button"
        value="注册"
        style=" width: 270px;
  height: 30px;
  font-size: 15px;
  color: white;
  background-color: rgb(243, 180, 64);margin-left: 70px;"
      ><br>
    </div>
  </div>
</template>

<script>
export default {};
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