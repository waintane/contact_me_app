const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const sendMail = require("./functions/sendMail");

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.on("sendEmail", () => sendMail("worked"));

app.get("/sendMail", (req,res) => {
    console.log("dude")
    app.emit("sendEmail");
})




app.listen(PORT, () =>{
    console.log(`le serveur est actif dans le port ${PORT}`)
});