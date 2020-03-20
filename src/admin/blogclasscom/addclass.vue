<template>
  <div class="addclass">
    <form @submit="add">
    <div class="title"> <span>添加分类</span> </div>
    <div class="content">
      <div class="classname"> <span>分类名称</span>
        <div>
          <input
            type="text"
            placeholder="请输入分类名称"
            name="addblogname"
          >
        </div>
      </div>
      <div class="ordervalue"> <span>排序值</span>
        <div>
          <input type="text" name="ordervalue">
        </div>
      </div>
    </div>
    <div class="opt">
      <button type="button" @click="cancle">取消</button>
      <button class="yes" type="submit">确定</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
   methods:{
     add:function(){
       fetch(`/api/blogclassify/insert?id=${this.modifyid}&ordervalue=${this.ordervalue}&addblogname=${this.addblogname}`);
     },
     cancle:function(){
       this.$emit("cancle",false);
     }
   }
};
</script>
<style scoped>
.addclass {
  height: 300px;
  width: 300px;
  position: absolute;
  top: 150px;
  right: 360px;
  background-color: #fff;
}
.title {
  width: 280px;
  height: 60px;
  line-height: 100px;
  padding: 0px 0px 0px 20px;
  font-weight: bolder;
}
.content {
  width: 280px;
  height: 180px;
  padding: 0px 0px 0px 20px;
  display: block;
  margin: 0px;
}
.content span {
  font-size: 13px;
  font-weight: bold;
}
.opt {
  width: 300px;
  height: 56px;
  text-align: right;
  position: absolute;
  bottom: 0px;
}
.classname,
.ordervalue {
  height: 60px;
  margin-top: 15px;
}
input {
  margin-top: 5px;
  height: 30px;
  width: 260px;
  border: 1px solid gray;
  border-radius: 2px;
  outline-style: none;
  font-size: 18px;
  padding-left: 10px;
}
input:focus {
  border-color: rgb(81, 167, 80);
  border: 2px rgb(81, 167, 80) solid;
}
button {
  margin: 0px 15px 15px 0px;
  padding: 5px;
  height: 40px;
  width: 70px;
  background: rgb(240, 240, 240);
  border: none;
  border-radius: 2px;
  color: gray;
  font-size: 15px;
}
.yes {
  background-color: rgb(88, 167, 108);
  color: whitesmoke;
}
</style>