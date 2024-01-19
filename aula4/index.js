const http = require("http");
const fs = require("fs");
const porta = 443;

const servidor = http.createServer((req,res) =>{
    fs.appendFile("teste.txt", "Casos do acaso bem marcado em cartas de tarô, ô-ô", (erro) =>{
        if(erro) throw erro
        console.log("Arquivo criado");
        res.end();
    })
})

servidor.listen(porta, () =>{
    console.log("Servidor rodando")
})