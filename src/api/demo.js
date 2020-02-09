const pool = require("../lib/pool");
module.exports=(router)=>{
    router.get("/api/demo/query",async ctx =>{
        const result = await pool.select("select * from account");
        ctx.body = JSON.stringify(result);
    })
}