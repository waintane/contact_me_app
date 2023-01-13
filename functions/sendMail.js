const nodemailer = require("nodemailer");

const sendMail = (message) => {
    console.log(message)
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"test.dev.9840@gmail.com",
                pass:"yqpojorflnmnhsrm"
            }
        }) 
        const mail_configs = {
            from: "test.dev.9840@gmail.com",
            to:"olitarpar@hotmail.com",
            subject:"Testing coding 101 email",
            text: "Just checking if this email will be sent"
        }
        transporter.sendMail(mail_configs, (err, data) => {
            if(err) throw err;
            return resolve(console.log("email sent"))
        })
    })
}

module.exports = sendMail;

