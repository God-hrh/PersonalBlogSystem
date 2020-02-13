<template>
  <div id="app" >
    <router-view name="Leftcom" :class="{mask:mask}" :bar1 = bar1></router-view>
    <router-view name="blogclass"  @sonme = "fatherme" :class="{mask:mask}"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      mask : false,
      bar1:[]
    };
  },
  methods:{
    fatherme:function(data){
      this.mask = data;
    }
  },
  mounted(){
    // let {id} = this.$route.query;
    fetch("/bar1.json").then(res=>res.json()).then(res=>{
      this.bar1 = res;
    })
  }
};
</script>

<style >
*{
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
.mask{
  background-color: rgba(0, 0, 0, 0.3);
}
</style>