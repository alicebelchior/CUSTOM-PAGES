const http = require("http");
const porta = 443;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });

  // a requisição no servidor for  pagina raiz,
  if ((req.url = "/")) {
    // sera gerado uma resposta
    res.write("<h1>Seja bem vindo!</h1>");
  }
  //Outro caminho (rota)
  else if ((req.url = "/server")) {
    res.write("<h1>Servidor</h1>");
  } else if ((req.url = "/server/node")) {
    res.write("<h1>Servidor Web no Node</h1>");
  } else {
    res.write("<h1>PADRÃO</h1>");
  }

  res.end
});

servidor.listen(porta, () => {
  console.log("Servidor rodando");
});
