const pool = require("../lib/Pool");
const fs = require("fs");
module.exports=(router)=>{
    router.get("/api/blogclassify/insert",async ctx=>{
        const {addblogname} = ctx.request.query;
        const {ordervalue} =  ctx.request.query;
        const sql = `insert into blogclassify (gmt_created,gmt_modified,addblogname,ordervalue) values (now(),now(),"${addblogname}","${ordervalue}")`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })
    router.get("/api/blogclassify/update",async ctx=>{
        const {addblogname} = ctx.request.query;
        const {ordervalue} =  ctx.request.query;
        const {id} =  ctx.request.query;
        let sql = `update blogclassify set addblogname="${addblogname}",ordervalue="${ordervalue}" where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("/admin#/main");
        }
    })
    router.get("/api/blogclassify/query",async ctx=>{
        const {addblogname} = ctx.request.query;
        const {ordervalue} =  ctx.request.query;
        const {id} =  ctx.request.query;
        const sql = `select * from blogclassify`;
        let result = await pool.query(sql);
        result = JSON.stringify(result);
        ctx.body=result;
    })
    router.get("/api/blogclassify/delete",async ctx=>{
        const {id} =  ctx.request.query;
        const sql = `delete  from  blogclassify where id = "${id}"`;
        const result = await pool.query(sql);
        if(result!=0){
            ctx.response.redirect("http://localhost:8080/admin#/main");
        }
    })
    router.get("/qqq",ctx=>{
        const {id} =  ctx.request.query;
        console.log(id);
        console.log(typeof(id))
        console.log(typeof(id)=="undefined")
        if(id===null){
            ctx.body = "null"
        }if(typeof(id)=="undefined"){
            ctx.body = "un"
           
        }
        ctx.body = "1"
    })
}