module.exports = (router)=>{
// 通过url获取参数值 例如http://localhost:3000/user/get?username=heerh&psw=123
router.get("/users/getuser",ctx=>{
ctx.body=JSON.stringify(ctx.session.user);//读取session
});
// get请求时query是从url获取参数，post请求时从body获取参数

router.get("/users/add",ctx=>{
const userName = ctx.request.query.name;
const pwd = ctx.request.query.psw;
ctx.session.user={
    name : userName,
    psw:pwd 
}
ctx.body = "session 设置成功！";
});
//  router.get("/a",ctx=>{
//      ctx.body = JSON.stringify(ctx.request.query);
//  })
//  router.post("/a",ctx=>{
//      ctx.body = JSON.stringify(ctx.request.body);
//  })
}