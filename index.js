const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`le serveur est actif dans le port ${PORT}`)
});