const pool = require("../lib/pool");
module.exports=(router)=>{
    router.get("/api/giteeuser/query",async ctx =>{
        const {name} = ctx.request.query;
        const{psw} = ctx.request.query;
        const result = await pool.query(`select * from gitee_user where username = "${name}"and password = "${psw}"`);
        if(result !=""){
            //设置用户登陆session
            const id = await pool.query(`select id from gitee_user where username = "${name}"`);
            ctx.session.user={
                name : name,
                psw:psw,
                id:id
            }
            console.log(ctx.session.user.id);
            // ctx.body = "用户登陆成功！"
            //这里不能用response，带不了session
            ctx.response.redirect("http://localhost:8080/admin#/main");
            }else{
            ctx.body = "用户登陆失败！";
        }
    })
    router.post("/api/giteeuser/insert",async ctx=>{
        const {emailadress} = ctx.request.body;
        const {personadress} = ctx.request.body;
        const {psw} = ctx.request.body;
        const {name} = ctx.request.body;
        const {imagecode} = ctx.request.body;
        const {emailcode} = ctx.request.body;
        let sql = `insert into gitee_user (gmt_created,gmt_modified,username,password,email,personadress) values (now(),now(),"${name}","${psw}","${emailadress}","${personadress}")`;
        const result = await pool.query(sql);
        if(
            imagecode===ctx.session.captcha&&emailcode===ctx.session.email){
                if(result!=-1){
                    ctx.body = "用户注册成功！";
                }else{
                    ctx.body = "用户注册失败！";
                }
            delete ctx.session.captcha;
            delete ctx.session.email;
        }else{
            ctx.body="验证码验证失败！";
        }
        
        
    })
    router.post("/api/giteeuser/delete",async ctx=>{
        const {id} = ctx.request.body;
        let sql = `delete from account where id = "${id}"`;
        const result = await pool.query(sql);
        ctx.body = JSON.stringify(result);
    })
    // router.get("/api/giteeuser/updateperdata",async ctx=>{
    //     const {id} = ctx.session.user;
    //     const result = await pool.query(sql);
    //     ctx.body = JSON.stringify(result);
    // })
}