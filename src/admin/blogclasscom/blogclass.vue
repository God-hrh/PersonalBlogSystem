<template>
  <div class="blogclass">
    <div class="current_location">当前路径</div>
    <div class="func"><span>博客分类管理</span><button @click="add" >＋添加分类 </button> </div>
    <div class="tab">
        <table border="1px soild black">
            <tr >
                <th class="tab_id" >序号</th>
                <th class="tab_class">分类名称</th>
                <th class="tab_num">文章数</th>
                <th class="tab_opt">操作</th>
            </tr>
            <tr v-for="(item,count) in news" :key="item.id">
                <td>{{count+1}}</td>
                <td>{{item.addblogname}}</td>
                <td>{{item.ordervalue}}</td>
                <td>
                     <span @click="senddata(item.id)"><button @click="ismodify=true,isadd=false" class="btn btn-info" >修改</button></span>
                     <!-- 注意：这里拼接参数和其他不一样 -->
                    <a :href="'http://localhost:3000/api/blogclassify/delete?id='+item.id"><button class="btn btn-danger">删除</button></a>
                </td>
            </tr>
        </table>
    </div>
    <addclass v-show="isadd" @cancle="cancleadd"></addclass>
    <modifyclass v-show="ismodify" :modifyid="modifyid" @cancle="canclemodify"> </modifyclass>
  </div>
</template>
<script>
import addclass from "./addclass"
import modifyclass from "./modifyclass"
import "../css/blogclass.css"
export default {
    data:function(){
        return{
            modifyid:"0",
            index:-199,
            isadd:false,
            ismodify:false,
            news:[
            ]
        }
    },
    mounted(){
        fetch("/api/blogclassify/query").then(res=>res.json()).then(res=>{
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
        },
        senddata:function(id){
           this.modifyid = id;
        },
        canclemodify:function(data){
            this.ismodify = data;
        },
        cancleadd:function(data){
            this.isadd = data;
        }
    }
};
</script>
<style scoped>
th{
    text-align: center;
}
</style>