const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const Body = require('koa-body');
const session = require('koa-session');//添加session依赖
// const serve = require('koa-static');
// app.use(serve(__dirname+"/public"));
app.keys = ['youkeda'];//配置密钥信息
const CONFIG = {//配置config信息
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true, 
  httpOnly: true, 
  signed: true,
  rolling: false, 
  renew: false, 
};
app.use(session(CONFIG, app));
app.use(Body());
//静态require直接加载该文件
// require("./src/api/user")(router);
//join合并地址  __dirname就是当前文件所在的文件夹地址
const apiPath = require("path").join(__dirname, "/api");
require('fs').readdirSync(apiPath).forEach(function (file) {
  require("./api/" + file)(router);//file对应user名称
})

app
  .use(router.routes())//.use是koa引用插件的方式
  .use(router.allowedMethods());//把router的所有路由都添加到app这个中间件里面

app.listen(3000);//端口号