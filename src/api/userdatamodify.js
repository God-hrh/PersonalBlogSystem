const pool = require("../lib/Pool");
module.exports = (router) => {
    router.get("/userdatamodify/persondata", async ctx => {
        const { id } = ctx.request.query;
        const { nickname } = ctx.request.query || "";
        const { sex } = ctx.request.query || "";
        const { birthday } = ctx.request.query || "";
        const { adress } = ctx.request.query || "";
        const { signature } = ctx.request.query || "";
        const { province } = ctx.request.query || "";
        const sql = `update gitee_user_basic set username = "${nickname}",sex = "${sex}",birthday="${birthday}",adress="${adress}",personsign="${signature}",province="${province}" where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })


    router.get("/userdatamodify/contact", async ctx => {
        const { id } = ctx.request.query;
        const {phone} = ctx.request.query||"";
        const {email} = ctx.request.query||"";
        const {qq} = ctx.request.query||"";
        const {myotherwebsite} = ctx.request.query||"";
        const sql = `update gitee_user_contact set phone = "${phone}",email = "${email}",qq="${qq}",myotherwebsite="${myotherwebsite}"where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })
    router.get("/userdatamodify/itskill", async ctx => {
        const { id } = ctx.request.query;
        const {position} = ctx.request.query||"";
        const {workyears} = ctx.request.query||"";
        const {status} = ctx.request.query||"";
        const {workadress} = ctx.request.query||"";
        const {exploreplatform} = ctx.request.query||"";
        const {strong} = ctx.request.query||"";
        const sql = `update gitee_user_itskill set position = "${position}",workyears = "${workyears}",status="${status}",workadress="${workadress}",platform="${exploreplatform}",skill="${strong}" where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })
    router.get("/modifyaccount/psw",async ctx=>{
        const { id } = ctx.request.query;
        const {oldpsw} = ctx.request.query||"";
        const {newpsw} = ctx.request.query||"";
        // let sql = `select password from gitee_user where id = 1`;
        // let result = await pool.query(sql);
        // result= JSON.stringify(result).password;
        //如何获取json里的指定项的值
        let sql = `update gitee_user set password = "${newpsw}" where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })
    router.get("/modifyaccount/email",async ctx=>{
        const { id } = ctx.request.query;
        const {oldemail} = ctx.request.query||"";
        const {newemail} = ctx.request.query||"";
        const {psw} = ctx.request.query||"";
        const {captcha} = ctx.request.query||"";
        if(captcha === ctx.session.captcha){
            let sql =`update gitee_user set email = "${newemail}" where id = "${id}"`;
            const result = await pool.query(sql);
            if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
            console.log("修改邮箱成功");
            }
        }else{
            console.log("验证码错误，修改邮箱失败");
        }
    })
    router.get("/modifyaccount/homepage",async ctx=>{
        const { id } = ctx.request.query;
        const {mainpage} = ctx.request.query||"";
        const {mainpageheader} = ctx.request.query||"";
        const sql = `update gitee_user set mainpage = "${mainpage}",mainpageheader="${mainpageheader}" where id = "${id}"`
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
            console.log("修改主页成功");
            }
    })
    // router.get("/userdatamodify/persondata", async ctx => {
    //     const { id } = ctx.session.user;
    // })
}