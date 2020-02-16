<template>
  <div id="app">
    <!-- 左边导航 -->
      <router-view
        name="Leftcom"
        :class="{mask:mask}"
        :bar1=bar1
      ></router-view>
    <!-- 博客分类管理 -->
    <div v-if=" selectblog===true &&selectmodify === false &&selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false &&selectpublishblog==false &&selectdrafts==false">
      <router-view name="blogclass"
        @sonme="fatherme"
        :class="{mask:mask}"
      ></router-view>
    </div>
    <!-- 修改个人资料 -->
    <div v-if="selectblog===false && selectmodify === true  &&selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false &&selectpublishblog==false &&selectdrafts==false">
      <router-view name="title"></router-view>
    </div>
    <!-- 修改登陆密码 -->
    <div v-if="selectmodifypsw === true && selectmodifyemail===false && selecthomepage === false&& selectblog===false && selectmodify === false &&selectpublishblog==false &&selectdrafts==false">
      <router-view name="modifypsw"></router-view>
    </div>
    <!-- 修改登陆邮箱 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===true && selecthomepage === false&& selectblog===false && selectmodify === false &&selectpublishblog==false &&selectdrafts==false">
      <router-view name="modifyemail"></router-view>
    </div> 
    <!-- 个人主页设置 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===false && selecthomepage === true&& selectblog===false && selectmodify === false &&selectpublishblog==false &&selectdrafts==false">
      <router-view name="homepage"></router-view>
    </div>
    <!-- 发表博客 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false&& selectblog===false && selectmodify === false &&selectpublishblog==true &&selectdrafts==false">
      <router-view name="publishblog"></router-view>
    </div>
    <!-- 草稿箱 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false&& selectblog===false && selectmodify === false &&selectpublishblog==false &&selectdrafts==true">
      <router-view name="drafts"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      mask: false,
      bar1: [],
      selectblog: true,
      selectmodify: false,
      selectmodifypsw:false,
      selectmodifyemail:false,
      selecthomepage:false,
      selectpublishblog:false,
      selectdrafts:false
    };
  },
  methods: {
    fatherme: function(data) {
      this.mask = data;
    },
    selectNav: function() {
    }
  },
  mounted() {
    fetch("/bar1.json")
      .then(res => res.json())
      .then(res => {
        this.bar1 = res;
      })
  },
  watch:{
    //监听路径参数变化
    $route(){
       let {id} =this.$route.query||"";
      if (id) {
        if (id === "22") {
          this.selectblog = true;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
          this.selectpublishblog=false;
          this.selectdrafts=false;
        }
        if (id === "10") {
          this.selectblog = false;
          this.selectmodify = true;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
          this.selectpublishblog=false;
          this.selectdrafts=false;
        }
        if(id === "11"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = true;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
          this.selectpublishblog=false;
          this.selectdrafts=false;
        }
        if(id === "12"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=true;
          this.selecthomepage = false;
          this.selectpublishblog=false;
          this.selectdrafts=false;
        }
        if(id === "13"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = true;
          this.selectpublishblog=false;
          this.selectdrafts=false;
        }if(id==="19"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
          this.selectpublishblog=true;
          this.selectdrafts=false;
        }if(id==="20"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
          this.selectpublishblog=false;
          this.selectdrafts=true;
        }
      } 
    }
  }
};
</script>

<style >
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
.mask {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>