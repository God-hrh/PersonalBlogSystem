const email = require("../lib/Email");
module.exports=(router)=>{
    router.get("/sendmail",async ctx=>{
        const emailcode = Math.random().toFixed(3).slice(3);
        const a = email.send("2237202251@qq.com","验证码",{emailcode});
        ctx.session.email = emailcode;
        ctx.body = "发送验证码！";
    })
    router.get("/getmail",cyx=>{
        const {email} = ctx.session;
        const {mail} = ctx.request.query;
        if(email===mail){
            ctx.body = "验证成功";
            delete ctx.session.email;
        }else{
            ctx.body = "验证失败";
        }

    })
}