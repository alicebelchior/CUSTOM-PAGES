const express = require("express");
const app = express();
const porta = 443;

/*
método "app.get()"" especifica uma função de retorno de
chamada que será invocada sempre que existir uma solicitação
HTTP GET com um caminho ('/') relativo à raiz do site (servidor web) 
*/
app.get("/contato", function(req,res){
    //"send()"" é chamado para retornar a string “Contato”
    res.send("Contato");
})
app.get("/sobre", function(req,res){
    res.send("Sobre");
})

//para o servidor Node abrir a requisição do "app.get"
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.listen(porta, function(){
    console.log("Servidor rodando");
})