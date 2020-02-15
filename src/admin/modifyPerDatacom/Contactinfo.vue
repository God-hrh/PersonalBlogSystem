<template>
    <div id="Contactinfo">

        <div class="content">
            <div class="head">联系电话</div>
            <input type="text" placeholder="请输入联系电话" class="phone">
            <div>
            <input type="checkbox" class="cbox"><span>对外公开</span>
            </div>
            <div class="head">邮箱地址</div>
            <input type="text" placeholder="请输入邮箱地址">
            <div>
            <input type="checkbox" class="cbox"><span>对外公开  <a href="">使用跟帐号相同的Email地址</a></span>
            </div>
            <div class="head">QQ</div>
            <input type="text" placeholder="请输入QQ" class="QQ">
            <div class="head">我的其他网站</div>
            <input type="text" placeholder="请输入网址">
            <div>
            <input type="submit" value="保存修改" class="confirm">
            </div>
        </div>
    </div>
</template>
<script>

import "../css/Basic.css"
export default {}
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