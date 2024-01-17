const http = require("http");
const porta = 443;

const servidor = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type":"text/plain"}); //200 = servidor ok, vai funcionar
    res.write("Meu primeiro servidor Node");
    res.end();
})

servidor.listen(porta, () =>{
    console.log("Servidor rodando!");
})