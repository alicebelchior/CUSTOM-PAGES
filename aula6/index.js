const express = require("express");
//a constante ‘app’ irá receber a execução do módulo ‘express()’.
const app = express();
const porta = 443;

app.get("/", function(req,res) {
    res.send("Bem vindo ao Servidor Web utilizando o Express");
})

app.listen(porta, () =>{
    console.log("Servidor rodando");
})