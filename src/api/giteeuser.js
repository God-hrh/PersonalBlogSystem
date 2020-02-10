const pool = require("../lib/pool");
module.exports=(router)=>{
    router.get("/api/demo/query",async ctx =>{
        const {name} = ctx.request.query;
        const{psw} = ctx.request.query;
        const result = await pool.query(`select * from gitee_user where username = "${name}"and password = "${psw}"`);
        if(result !=""){
            //设置用户登陆session
            ctx.session.user={
                name : name,
                psw:psw 
            }
            ctx.body = "用户登陆成功！";
        }else{
            ctx.body = "用户登陆失败！";
        }
    })
    router.post("/api/demo/insert",async ctx=>{
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
    router.post("/api/demo/delete",async ctx=>{
        const {id} = ctx.request.body;
        let sql = `delete from account where id = "${id}"`;
        const result = await pool.query(sql);
        ctx.body = JSON.stringify(result);
    })
    router.post("/api/demo/update",async ctx=>{
        const {recordType} = ctx.request.body;
        const {id} = ctx.request.body;
        // const {time} = ctx.request.body;
        // const {describe} = ctx.request.body;
        // const {amount} = ctx.request.body;
        let sql = `update account set record_type = "${recordType}" where id = "${id}"`;
        const result = await pool.query(sql);
        ctx.body = JSON.stringify(result);
    })
}