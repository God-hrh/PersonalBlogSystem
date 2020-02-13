<template>
    <div class="modifyclass">
        <add :title="title"></add>
    </div>
</template>
<script>
import add from "./addclass"
export default {
    components:{
        add
    },
    data:function(){
        return{
            title:"修改分类"
        }
    }
}
</script>
<style scoped>
.modifyclass{
    /* position: absolute;
    top: 100px;
    right: 100px; */
}
</style>