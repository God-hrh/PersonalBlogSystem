module.exports = (router)=>{

router.post("/users/signup",ctx=>{
    const {imagecode} = ctx.request.body;
    const {emailcode} = ctx.request.body;
    const {personadress} = ctx.request.body;
    const {name} = ctx.request.body;
    const {psw} = ctx.request.body;
    console.log("检测的时候："+ctx.session.email)
    if(
        imagecode===ctx.session.captcha&&emailcode===ctx.session.email){
        ctx.body = "用户注册成功！";
        delete ctx.session.captcha;
        delete ctx.session.email;
    }else{
        ctx.body="验证码验证失败！";
    }
    
})

}