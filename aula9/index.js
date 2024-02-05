const http = require("http");
const porta = 443;
const url = require("url");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  // as informações que forem inseridas na url serão exportadas diretamente para a página do servidor
  res.write(req.url);
  //criando rotas
  /*
  Com esse recurso do módulo URL, é possível trabalhar conteúdos não somente como rotas, mas sim como parâmetros (entrada – req)
  Da nossa constante ‘url’ criada (req.url), transformaremos o URL em query string (consulta de string), utilizando o comando ‘parse()’.
  O arse vai pegar as strings da requisição da url
  */
  const parametro = url.parse(req.url, true).query;
  res.write("<br/>" + parametro.nome);
  res.write("<br/>" + parametro.sobrenome);
  res.write("<br/>" + parametro.cidade);

  res.end();
});

servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});
