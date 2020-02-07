const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');//require是Node.js里面提供的依赖语句
const router = new Router();
const Body = require('koa-body');
const session = require('koa-session');//添加session依赖
// const serve = require('koa-static');
// app.use(serve(__dirname+"/public"));
app.keys = ['youkeda'];//配置密钥信息
const CONFIG = {//配置config信息
  key: 'koa:sess',
  maxAge: 5,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));

app.use(Body());
router.get('/', (ctx) => {   //执行get请求，请求路径是/   请求的回调函数是执行{}里的逻辑  ctx是koa上下文 next是可以执行下一个  =>是ES函数
  ctx.body = "Hello koa"
});
// require("./src/api/user")(router);//静态require直接加载该文件
const apiPath = require("path").join(__dirname, "/api");//join合并地址  __dirname就是读取index.js当前所在的文件夹目录
require('fs').readdirSync(apiPath).forEach(function (file) {//Sync同步方法  forEach是fs自带的循环方法
  require("./api/" + file)(router);//file对应user名称
})

app
  .use(router.routes())//.use是koa引用插件的方式
  .use(router.allowedMethods());//把router的所有路由都添加到app这个中间件里面

app.listen(3000);//端口号