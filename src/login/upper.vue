<template>
  <div class="body">
   <form action="http://localhost:3000/api/giteeuser/query" method="get">
      <div class="top-nav">
        <div class="login"> <i class="iconfont icon-denglu"></i> 登陆</div>
        <div class="register"> 注册</div>
      </div>
      <div class="low">
        <br>
        <input
          type="text"
          placeholder=" 手机/邮箱/个人域名"
          class="username"
          name="name"
          ref="name"
        > <br>
        <input
          type="text"
          placeholder=" 请输入密码"
          class="username"
          name="psw"
          ref="psw"
        > <br>
        <input
          type="checkbox"
          name=""
          id="checkbox"
        >记住我
        <a href="">忘记密码</a><br>
        <input
          type="submit"
          value="登  陆"
          class="submit"
        >
      </div>
      </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
     
    };
  },
  
  mounted:function(){
    // fetch("/user/add").then(function(response){
    //   return response.json();
    // }).then (function(data){
    //   alert(data)
    // })
  }
};
</script>

<style scoped>
.body {
  height: 50%;
  width: 100%;

  text-align: center;
}
.login {
  float: left;
  margin-left: 40px;
}
.submit {
  width: 270px;
  height: 30px;
  font-size: 15px;
  color: white;
  background-color: rgb(243, 180, 64);
}
.login > .iconfont {
  font-size: 20px;
  line-height: 20px;
}
.register {
  margin-top: 10px;
  margin-left: 350px;
  color: rgba(250, 184, 3, 0.795);
}
a {
  text-decoration: none;
}
.low {
  margin-left: 20px;
}
input {
  margin-top: 10px;
  margin-bottom: 10px;
}
.username {
  width: 270px;
  height: 30px;
  background: rgb(250, 247, 247);
  color: gray;
}
</style>