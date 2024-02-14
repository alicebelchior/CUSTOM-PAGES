const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const porta = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer");
});

app.get("/sendemail", async (req, res) => {
  //criação de rota padrão de transporte
  var transport = nodemailer.createTransport({
    //mailtrap.io
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e5414f8276ea04",
      pass: "d836888792a6d3",
    },
  });

  //criação mensagem
  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Mudança de senha",
    text: "Prezado(a), \n\nVocê tentou mudar sua senha. \n\nSe não foi você, favor desconsiderar. ",
    html: "<p>Prezado(a), <br><br> Você tentou mudar sua senha. <br><br>Se não foi você, favor desconsiderar.</p>",
  };

  //Criando transporte para envio de email
  transport.sendMail(message, function (err) {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: E-mail não enviado!",
      });
    else
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      });
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
