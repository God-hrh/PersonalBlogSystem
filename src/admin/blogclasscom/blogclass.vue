<template>
  <div class="blogclass">
    <div class="current_location">当前路径</div>
    <div class="func"><span>博客分类管理</span><button @click="add" >＋添加分类 </button> </div>
    <div class="tab">
        <table border="1px soild black">
            <tr>
                <th class="tab_id">序号</th>
                <th class="tab_class">分类名称</th>
                <th class="tab_num">文章数</th>
                <th class="tab_opt">操作</th>
            </tr>
            <tr v-for="item in news" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.cover}}</td>
                <td>
                    <button @click="ismodify=true,isadd=false">修改</button>
                    <button >删除</button>
                </td>
            </tr>
        </table>
    </div>
    <addclass v-show="isadd" :title="title"></addclass>
    <modifyclass v-show="ismodify"></modifyclass>
  </div>
</template>
<script>
import addclass from "./addclass"
import modifyclass from "./modifyclass"
import "../css/blogclass.css"
export default {
    data:function(){
        return{
            isadd:false,
            ismodify:false,
            title:"添加分类",
            news:[]
        }
    },
    mounted(){
        fetch("/new.json").then(res=>res.json()).then(res=>{
                this.news=res;
        });
    },
    components:{
        addclass,
    modifyclass
    },
    methods:{
        add:function(){
            this.isadd=true,
            this.ismodify=false
            this.$emit("sonme",true);
        }
    }
};
</script>
<style scoped>

</style>