<template>
  <div id="app">
    <!-- 左边导航 -->
    <div @click="selectNav">
      <router-view
        name="Leftcom"
        :class="{mask:mask}"
        :bar1=bar1
      ></router-view>
    </div>
    <!-- 博客分类管理 -->
    <div v-if=" selectblog===true &&selectmodify === false &&selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false">
      <router-view name="blogclass"
        @sonme="fatherme"
        :class="{mask:mask}"
      ></router-view>
    </div>
    <!-- 修改个人资料 -->
    <div v-if="selectblog===false && selectmodify === true  &&selectmodifypsw === false && selectmodifyemail===false && selecthomepage === false">
      <router-view name="title"></router-view>
    </div>
    <!-- 修改登陆密码 -->
    <div v-if="selectmodifypsw === true && selectmodifyemail===false && selecthomepage === false&& selectblog===false && selectmodify === false">
      <router-view name="modifypsw"></router-view>
    </div>
    <!-- 修改登陆邮箱 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===true && selecthomepage === false&& selectblog===false && selectmodify === false">
      <router-view name="modifyemail"></router-view>
    </div> 
    <!-- 个人主页设置 -->
    <div v-if="selectmodifypsw === false && selectmodifyemail===false && selecthomepage === true&& selectblog===false && selectmodify === false">
      <router-view name="homepage"></router-view>
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
      selecthomepage:false
    };
  },
  methods: {
    fatherme: function(data) {
      this.mask = data;
    },
    selectNav: function() {
      let hash = window.location.hash || "";
      if (hash) {
        hash = hash.substring(10);
        if (hash === "22") {
          this.selectblog = true;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
        }
        if (hash === "10") {
          this.selectblog = false;
          this.selectmodify = true;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
        }
        if(hash === "11"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = true;
          this.selectmodifyemail=false;
          this.selecthomepage = false;
        }
        if(hash === "12"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=true;
          this.selecthomepage = false;
        }
        if(hash === "13"){
          this.selectblog = false;
          this.selectmodify = false;
          this.selectmodifypsw = false;
          this.selectmodifyemail=false;
          this.selecthomepage = true;
        }
      } else {
        hash = "22";
      }
    }
  },
  mounted() {
    fetch("/bar1.json")
      .then(res => res.json())
      .then(res => {
        this.bar1 = res;
      });
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