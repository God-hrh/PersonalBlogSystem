module.exports = (router)=>{
// 通过url获取参数值 例如http://localhost:3000/user/get?username=heerh&psw=123
router.get("/users/getuser",ctx=>{
ctx.body=JSON.stringify(ctx.session.user);//读取session
});
// get请求时query是从url获取参数，post请求时从body获取参数

router.get("/users/login",ctx=>{
const userName = ctx.request.query.name;
const pwd = ctx.request.query.psw;
ctx.session.user={
    name : userName,
    psw:pwd 
}
ctx.body = "session 设置成功！";
});
router.post("/users/signup",ctx=>{
    const {imagecode} = ctx.request.body;
    const {emailcode} = ctx.request.body;
    const {personadress} = ctx.request.body;
    const {name} = ctx.request.body;
    const {psw} = ctx.request.body;
    console.log("检测的时候："+ctx.session.youxiangyanzhengma)
    if(
        imagecode===ctx.session.captcha&&emailcode===ctx.session.youxiangyanzhengma){
        ctx.body = "用户注册成功！";
        delete ctx.session.captcha;
        delete ctx.session.email;
    }else{
        ctx.body="验证码验证失败！";
    }
    
})

}