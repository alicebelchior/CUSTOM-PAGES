const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const porta = 443;

//Autenticando usuario, criando uma sessão com validação
app.use(session({
    secret: "1234567890"
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

var login = "admin";
var senha = "1234";

//Renderização de código com EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

//rota para a raíz
app.get("/", (req, res) =>{
    //se o requisito for login
    if(req.session.login){
        res.render("logado"); //a resposta será uma página "logada"
        console.log("Usuário logado: " + req.session.login);
    }
    else {
        res.render("home");
    }
})

//comando para fazer a autenticação
app.post("/", (req, res) =>{
    if(req.body.password == senha && req.body.login == login){ //se login e senha forem iguais aos exigidos, a pagina logado é carregado
        req.session.login = login;
        res.render("logado");
    }
    else {
        res.render("home"); //senao a home de novo pra tentar logar mais uma vez
    }
})

app.listen(porta, () =>{
    console.log("Servidor rodando");
})