<template>
  <div id="modifypsw">
    <top :subtitle=subtitle></top>
    <div class="con">
      <div class="head">旧的登陆密码</div>
      <input
        type="text"
        placeholder="请输入旧的登陆密码"
      ><a href="">忘记登陆密码？</a>
      <div class="head">新密码</div>
      <input
        type="text"
        placeholder="请输入新密码"
      >
      <div class="head">确认新密码</div>
      <input
        type="text"
        placeholder="请再次输入新密码"
      ><br>
      <input
        type="submit"
        value="修改密码"
        class="confirm"
      >
    </div>
  </div>
</template>
<script>
import top from "./title";
import "../css/Basic.css";
export default {
  components: {
    top
  },
  data: function() {
    return {
      subtitle: "修改登陆密码"
    };
  }
};
</script>
<style scoped>
.con {
  position: absolute;
  top: 80px;
  left: 345px;
}
</style>