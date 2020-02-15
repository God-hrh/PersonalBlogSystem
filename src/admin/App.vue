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
    <div v-if=" selectblog===true &&selectmodify === false">
      <router-view name="blogclass"
        @sonme="fatherme"
        :class="{mask:mask}"
      ></router-view>
    </div>
    <!-- 修改个人资料 -->
    <div v-if="selectblog===false && selectmodify === true">
      <router-view name="title"></router-view>
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
      selectmodify: false
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
        }
        if (hash === "10") {
          this.selectblog = false;
          this.selectmodify = true;
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