<template>
  <div id="ITSkill">
    <form @submit="submit">
    <div class="content">
      <div>
        <div
          class="head"
          id="station1"
        >我是一名
          <div>
            <select
             v-model="position"
              id=""
              class="sec"
            >
              <option
                value=""
                disabled
                selected
              >职位</option>
              <option value="攻城狮">攻城狮</option>
              <option value="程序猿">程序猿</option>
              <option value="大头兵">大头兵</option>
            </select>
          </div>
        </div>
        <div
       
          class="head"
          id="station2"
        >工作年限
          <div>
            <select
              v-model="workyears"
              id=""
              class="sec workyears"
            >
              <option
                value=""
                disabled
                selected
              >工作年限</option>
              <option value="one">1年以下</option>
              <option value="two">1~3年</option>
              <option value="three">3年以上</option>
            </select>
          </div>
        </div>
      </div>
      <div class="head">目前状态</div>
      <input
        type="radio"
        class="cbox"
        v-model="status"
        value="在职"
      ><span>在职</span>
      <input
        type="radio"
        class="cbox"
        value="学生"
        v-model="status"
      ><span>学生</span>
      <input
        type="radio"
        class="cbox"
        value="找工作中"
        v-model="status"
      ><span>找工作中</span>
      <div class="head">工作单位</div>
      <input
        type="text"
        placeholder="请输入工作单位"
        v-model="workadress"
      >
      <div class="head">熟悉的开发平台 <span>（最多选5个）</span></div>
      <div
        class="patlform"
        v-for="item in patlform"
        :key="item.id"
      >
       <!-- 注意此时获取value值的写法 -->
        <input
          type="checkbox"
          v-model="exploreplatform"
          class="cbox"
          :value="`${item.subject}`"
          :id="`${item.id}`"
        > <label :for="`${item.id}`">{{item.subject}}</label> 
      </div>
      <div class="head">专长领域<span>（最多选3个）</span></div>
      <div>
        <div
          class="strong"
          v-for="item in strong"
          :key="item.id"
        >
          <input
            type="checkbox"
            v-model="skill"
            class="cbox"
            :value="`${item.area}`"
            :id="`${item.id}`"
          ><label :for="`${item.id}`">{{item.area}}</label> 
        </div>
      </div>

      <input
        type="submit"
        class="confirm"
        value="保存修改"
      >
    </div>
    </form>
  </div>
</template>
<script>
import "../css/Basic.css";
export default {
  data: function() {
    return {
      patlform: [],
      strong: [],
      position:"",
      workyears:"",
      status:"",
      workadress:"",
      exploreplatform:[],
      skill:[]
    };
  },
  mounted() {
    fetch("/platform.json")
      .then(ctx => ctx.json())
      .then(ctx => {
        this.patlform = ctx;
      }),
      fetch("/strong.json")
        .then(ctx => ctx.json())
        .then(ctx => {
          this.strong = ctx;
        });
  },
  methods:{
    submit:function(){
      fetch(`/userdatamodify/itskill?id=1&position=${this.position}&workyears=${this.workyears}&status=${this.status}&workadress=${this.workadress}&exploreplatform=${this.exploreplatform}&strong=${this.skill}`);
    }
  }
};
</script>
<style scoped>
#station1,
#station2 {
  display: inline-block;
}
.sec {
  height: 30px;
  width: 200px;
  margin-right: 20px;
}
.workyears {
  width: 160px;
}
span {
  margin-left: 5px;
  margin-right: 5px;
}
.patlform,
.strong {
  display: inline-block;
  width: 207px;
}
</style>