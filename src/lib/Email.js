const nodemailer = require("nodemailer");
//创建email对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
        user: "2237202251@qq.com",
        pass: "zzjsqaewdzxwebda"
    }
});
module.exports = {
    send: async (to, subject, text) => {
        //发送email
        let info = {
            from: "2237202251@qq.com",
            to: to,
            subject: subject,
            text: text
        }
        const result = await transporter.sendMail(info);
        return result;
    }
}