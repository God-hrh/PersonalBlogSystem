const pool = require("../lib/pool");
module.exports=(router)=>{
    router.get("/api/demo/query",async ctx =>{
        const result = await pool.query("select * from account");
        ctx.body = JSON.stringify(result);
    })
    router.post("/api/demo/insert",async ctx=>{
        const {recordType} = ctx.request.body;
        // const {category} = ctx.request.body;
        // const {time} = ctx.request.body;
        // const {describe} = ctx.request.body;
        // const {amount} = ctx.request.body;
        let sql = `insert into account (gmd_created,gmd_modified,record_type) values (now(),now(),"${recordType}")`;
        const result = await pool.query(sql);
        ctx.body = JSON.stringify(result);
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