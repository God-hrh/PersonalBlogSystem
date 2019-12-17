module.exports = (router)=>{//将router作为参数传递进来
    //get请求在path里面动态地转化为参数
router.get('/users/:id', (ctx) => {   //执行get请求，请求路径是/   请求的回调函数是执行{}里的逻辑  ctx是koa上下文 next是可以执行下一个  =>是ES函数
console.log(ctx.params.id);//打印数据到控制台
ctx.body =JSON.stringify(ctx.params.id);
});
//通过url获取参数值 例如http://localhost:3000/user/get?username=heerh&psw=123
router.get("/user/getuser",ctx=>{
console.log(ctx.request.query);
ctx.body=JSON.stringify(ctx.session.user);//读取session
});
router.post("/user/add",ctx=>{
const userName = ctx.request.body.name;
const pwd = ctx.request.body.pwd;
ctx.session.user={   //给user赋值，{}里面是一个对象  写入session
    name : userName  //session不适合放安全性比较高的文件 比如psw  容易泄露
};
console.log(ctx.request.body);
ctx.body = JSON.stringify(ctx.session.user)//从session里设置body信息
});
}