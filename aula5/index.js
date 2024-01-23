const express = require("express");
const app = express();
const porta = 443;

app.get("/", function (req, res) {
    res.send("Olá mundo, estou usando o Express");
})

app.listen(porta, () =>{
    console.log("App rodando");
})