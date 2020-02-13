<template>
  <div class="addclass">
    <div class="title"> <span>{{title}}</span> </div>
    <div class="content">
      <div class="classname"> <span>分类名称</span>
        <div>
          <input
            type="text"
            placeholder="请输入分类名称"
          >
        </div>
      </div>
      <div class="ordervalue"> <span>排序值</span>
        <div>
          <input type="text">
        </div>
      </div>
    </div>
    <div class="opt">
      <button class="cancel" @click="confirm">取消</button>
      <button class="yes">确定</button>
    </div>
  </div>
</template>
<script>
export default {
    props:["title"],
    methods:{
      confirm:function(){
        return "";
      }
    }
};
</script>
<style scoped>
.addclass {
  height: 300px;
  width: 300px;
  border: 1px solid black;
  position: absolute;
  top: 150px;
  right: 360px;
  background-color: #fff;
}
.title {
  width: 280px;
  height: 60px;
  line-height: 100px;
  border: 1px solid black;
  padding: 0px 0px 0px 20px;
  font-weight: bolder;
}
.content {
  width: 280px;
  height: 180px;
  border: 1px solid black;
  padding: 0px 0px 0px 20px;
}
.content span {
  font-size: 13px;
  font-weight: bold;
}
.opt {
  width: 300px;
  height: 56px;
  border: 1px solid black;
  text-align: right;
}
.classname,
.ordervalue {
  height: 60px;
  border: 1px solid black;
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