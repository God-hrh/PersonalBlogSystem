<template>
  <div id="modifypsw">
    <form @submit="submit">
    <top :subtitle=subtitle></top>
    <div class="con">
      <div class="head">旧的登陆密码</div>
      <input
        type="text"
        placeholder="请输入旧的登陆密码"
        v-model="oldpsw"
      ><a href="">忘记登陆密码？</a>
      <div class="head">新密码</div>
      <input
        type="text"
        placeholder="请输入新密码"
        v-model="newpsw"
      >
      <div class="head">确认新密码</div>
      <input
        type="text"
        placeholder="请再次输入新密码"
        v-model="confirmnewpsw"
      ><br>
      <input
        type="submit"
        value="修改密码"
        class="confirm"
      >
    </div>
    </form>
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
      subtitle: "修改登陆密码",
      oldpsw:"",
      newpsw:"",
      confirmnewpsw:""
    };
  },
  methods:{
    submit:function(){
      fetch(`/modifyaccount/psw?id=1&oldpsw=${this.oldpsw}&newpsw=${this.newpsw}`);
    }
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