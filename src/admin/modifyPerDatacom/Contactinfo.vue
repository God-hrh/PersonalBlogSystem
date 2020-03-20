<template>
    <div id="Contactinfo">
        <form @submit="submit">
        <div class="content">
            <div class="head">联系电话</div>
            <input type="text" placeholder="请输入联系电话" class="phone" v-model="phone">
            <div>
            <input type="checkbox" class="cbox"><span>对外公开</span>
            </div>
            <div class="head">邮箱地址</div>
            <input type="text" placeholder="请输入邮箱地址" v-model="email">
            <div>
            <input type="checkbox" class="cbox"><span>对外公开  <a href="">使用跟帐号相同的Email地址</a></span>
            </div>
            <div class="head">QQ</div>
            <input type="text" placeholder="请输入QQ" class="QQ" v-model="qq">
            <div class="head">我的其他网站</div>
            <input type="text" placeholder="请输入网址" v-model="myotherwebsite">
            <div>
            <input type="submit" value="保存修改" class="confirm">
            </div>
        </div>
        </form>
    </div>
</template>
<script>

import "../css/Basic.css"
export default {
    data:function(){
        return{
            phone:"",
            email:"",
            qq:"",
            myotherwebsite:""
        }
    },
    methods:{
        submit:function(){
            fetch(`/userdatamodify/contact?id=1&phone=${this.phone}&email=${this.email}&qq=${this.qq}&myotherwebsite=${this.myotherwebsite}`)
        }
    }
}
</script>
<style scoped>
 a:visited{
      color: rgb(123,161,207);
  }
  span{
      font-size: 14px;
  }
  .cbox{
      padding: 0px;
      height: 15px;
      width: 20px;
      margin-top: 10px;
  }
  .phone,.QQ{
      width: 190px;
  }
</style>