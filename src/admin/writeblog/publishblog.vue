<template>
  <div id="publishblog">
      <div class="current_location">当前路径</div>
      <div class="opt">
          <div class="head">文章标题 *<br>
              <input type="text" placeholder="文章标题，字数控制在100个字以内" class="title">
          </div>
          <div class="head ">文章分类 ＋<br>
              <select name="" id="" class="classify">
                  <option value="" disabled selected>请选择</option>
                  <option :value="`${item.addblogname}`" v-for="item in articleclassify" :key="item.id">{{item.addblogname}}</option>
              </select>
          </div>
      </div>
      <!-- 编辑器名称 -->
      <div class="editorname">
          <a href=""> HTML编辑器</a>
      </div>
    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>
    <!-- 编辑器容器 -->
    <div id="editor">
       <p> This is the initial editor content.</p>
    </div>
    <!-- 系统分类 -->
    <div class="head">系统分类*
        <select name="" id="">
            <option value="" disabled selected>请选择</option>
            <option :value="`${item.con}`" v-for="item in systemclassify" :key="item.id">{{item.con}}</option>
        </select>
            <input type="checkbox" name="" id="" class="cbox original">原创
            <input type="checkbox" name="" id="" class="cbox">置顶
            <input type="checkbox" name="" id="" class="cbox">仅自己可见
            <input type="checkbox" name="" id="" class="cbox">禁止评论
    </div> <br>
    <input type="submit" name="" id="" class="confirm" value="发表文章">
    <input type="submit" name="" id="" class="cancel" value="保存草稿">
  </div>
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
export default {
  data() {
    return {
      editor: null, //编辑器实例
      systemclassify:[],
      articleclassify:[],
      
    };
  },
  mounted() {
    this.initCKEditor(),
    fetch("/systemclassify.json").then(ctx=>ctx.json()).then(ctx=>{
      this.systemclassify = ctx;
    }),
    fetch("/api/blogclassify/query").then(ctx=>ctx.json()).then(ctx=>{
      this.articleclassify = ctx;
    });
  },
  methods: {
    initCKEditor() {
      CKEditor.create(document.querySelector("#editor"), {
        ckfinder: {
          uploadUrl: "/admin/Upload/uploadUrl"
          //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
        }
      })
        .then(editor => {
          const toolbarContainer = document.querySelector("#toolbar-container");
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor; //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
<style scoped>
#publishblog{
    height: 620px;
    width: 850px;
    position: absolute;
    margin-left: 335px;
}
.current_location {
    border: 1px solid black;
    height: 20px;
    width: 100%;
  }
  .head{
      display: inline-block;
  }
  .title{
      width:  600px;
      margin-right: 50px;
  }
  .classify{
      height: 30px;
      margin: 3px;
      width: 180px;
  }
  .editorname{
      margin: 10px 0px;
  }
  .original{
      margin-left: 20px;
  }
  .cancel{
      margin: 20px 10px 0px 0px;
  padding: 5px 10px;
  height: 30px;
  width: 100px;
  background: rgb(240, 240, 240);
  border: none;
  border-radius: 2px;
  color: gray;
  font-size: 15px;
  }
  #editor{
      border: 1px solid #b3b3b3;;
      height: 330px;
  }
</style>