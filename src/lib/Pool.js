const mysql = require("promise-mysql");
const pool = mysql.createPool({
    host: "rm-bp1s8wez9j4hw42oemo.mysql.rds.aliyuncs.com",
    port: 3306,
    user: "t001",
    password: "Bmatch123",
    database: "t001"
});
module.exports = {
    query: async (sql, data) => {
        try {
            const result = await pool.query(sql, data);
            return result;
        } catch (error) {
            console.error(error);
        }
        return null;
    }
};