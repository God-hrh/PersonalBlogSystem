const mysql = require("promise-mysql");
let pool;
async function initPool(){
    pool = await mysql.createPool({
    host: "rm-bp1s8wez9j4hw42oemo.mysql.rds.aliyuncs.com",
    port: 3306,
    user: "dizi",
    password: "Dizi1234",
    database: "dizi-01"
    })
}
initPool();
module.exports = {
    query: async (sql,data) => {
        try {
            const result = await pool.query(sql,data);
            return result;
        } catch (error) {
            console.error(error);
        }
       return null;
    }
}