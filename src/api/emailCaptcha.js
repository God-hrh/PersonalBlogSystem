const email = require("../lib/Email");
module.exports=(router)=>{
    router.get("/sendmail",async ctx =>{
        let emailcode = Math.random().toFixed(4).slice(-4);
        ctx.session.email = emailcode;
        console.log("发送的时候："+ctx.session.email)
        // let {adress} = ctx.request.query;
        // const a = email.send(`${adress}`,"验证码",`${emailcode}`);
        ctx.body = "发送验证码！";
    })
    router.get("/getmail",ctx=>{
        const {email} = ctx.session;
        const {mail} = ctx.request.query;
        console.log("e="+email);
        if(email===mail){
            ctx.body = "验证成功";
            delete ctx.session.email;
        }else{
            ctx.body = "验证失败";
        }
    })
}