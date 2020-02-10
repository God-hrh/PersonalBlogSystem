let captcha = require("svg-captcha")
module.exports=(router)=>{
    router.get("/captcha",ctx=>{
        let c = captcha.create({
            ignoreChars: '0o1ilLI',
            size:4
        });
        //验证的时候只需要输入验证码的小写字母
        ctx.session.captcha = c.text.toLowerCase();
        console.log("图片验证码："+ctx.session.captcha);
        ctx.response.type="image/svg+xml";
        ctx.body = c.data;
    })
    router.get("/getcaptcha",ctx=>{
        const {captcha} = ctx.request.query;
        console.log(ctx.session.captcha);
        if(captcha===ctx.session.captcha){
            ctx.body="验证成功！";
            delete ctx.session.captcha;
        }else{
            ctx.body = "验证失败！";
        }
    })
}

