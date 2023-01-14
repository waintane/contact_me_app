const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const sendMail = require("./functions/sendMail");

const app = express()
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.on("sendEmail", () => sendMail("worked"));

app.get("/sendMail", (req,res) => {
    app.emit("sendEmail");
})

app.post("/", (req,res) => {

    const { parcel, email } = req.body
    console.log(email)

    if(!parcel) {
        return res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: "recieved"})
})

app.listen(PORT, () =>{
    console.log(`le serveur est actif dans le port ${PORT}`)
});