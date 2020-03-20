<template>
  <div id="BasicData">
    <form @submit="commit">
    <div class="content">
      <div class="head">登陆账号</div>
      <div class="remark">尚未绑定邮箱，部分功能可能受限，请<a href="">绑定邮箱</a> </div>
      <div class="head">昵称</div>
      <input
        type="text"
        class="nickname"
        v-model="nickname"
      ><span class="remark"> 2~20个字符</span>
      <div class="head">性别</div>
      <input
        type="radio"
        v-model="sex"
        class="cbox"
        value="male"
      ><span class="remark sex">男</span>
      <input
        type="radio"
        v-model="sex"
        class="cbox"
        value="female"
      > <span class="remark sex">女</span> <span class="remark">性别不可修改</span>
      <div class="head">出生日期</div>
      <input
        type="date"
        placeholder="请选择出生日期"
        class="birthday"
        v-model="birthday"
      >
      <div class="head">居住地区</div>
      <select class="sec" v-model="province">
        <option
          value=""
          disabled
          selected
        >省份</option>
        <option value="河南">河南</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
      </select>
      <select class="sec" v-model="adress">
        <option
          value=""
          disabled
          selected
        >地区</option>
        <option value="郑州">郑州</option>
        <option value="朝阳区">朝阳区</option>
        <option value="黄浦区">黄浦区</option>
      </select>
      <div class="head">个性签名<span class="remark">（不超过100字）</span> </div>
      <textarea
        v-model="signature"
        cols="80"
        rows="5"
        placeholder="请输入个性签名"
      ></textarea>
      <div class="head">
        <input
          type="checkbox"
          name="subscribe"
          class="cbox"
        >邮件订阅每周精粹
      </div>
      <div class="head">
        <input
          type="checkbox"
          name="repiy"
          class="cbox"
        >有回复或者关注软件的新闻发布时邮件提醒我
      </div>
      <button
        type="submit"
        value="保存修改"
        class="confirm"
      />
    </div>
    </form>
  </div>
</template>
<script>
import "../css/Basic.css";
export default {
  data:function(){
    return {
      nickname : "",
      sex:"",
      birthday:"",
      adress:"",
      province:"",
      signature:"",
    }
  },
  methods:{
    commit:function(){
      //注意字符串没有引号
      fetch(`/userdatamodify/persondata?id=1&nickname=${this.nickname}&sex=${this.sex}&birthday=${this.birthday}&adress=${this.adress}&signature=${this.signature}&province=${this.province}`);
    }
  }
};
</script>
<style scoped>
.nickname {
  height: 40px;
  width: 400px;
  font-size: 20px;
  padding-left: 10px;
}
a:visited {
  color: rgb(123, 161, 207);
}
.sex {
  margin-left: 5px;
  margin-right: 5px;
}
.birthday {
  height: 25px;
  width: 200px;
}
.sec {
  height: 30px;
  width: 100px;
  margin-right: 10px;
}
</style>