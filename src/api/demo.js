const pool = require("../lib/pool");
module.exports=(router)=>{
    router.get("/api/demo/query",async ctx =>{
        const result = await pool.query("select * from demo");
        ctx.body = JSON.stringify(result);
    })
}