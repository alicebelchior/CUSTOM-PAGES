const express = require("express");
const rotas = require("./rotas.js");
const porta = 443;
const app = express();

app.use("/", rotas);
app.listen(porta, () => {
  console.log("Servidor rodando");
});
