const http = require("http");
const porta = 443;
const formidavel = require("formidable");
const fs = require("fs");

const servidor = http.createServer((req, res) =>{
    if (req.url != "enviodearquivo"){
        //criação de form para envio de arquivo
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<form action = "enviodearquivo" method = "post" enctype = "multipart/form-data');
        res.write('<input type = "file" name = "filetoupload"><br>');
        res.write('<input type = "submit" value = "Enviar">');
        res.write('</form>');
        return res.end();
    } else {
        //formidable vai nos ajudar a procurar o arquivo e manipulá-lo com o fs
        const form = new formidavel.IncomingForm();
        form.parse(req, (erro, campos, arquivos) =>{
            const urlAntiga = arquivos.filetoupload[0].filepath;
            const urlNova = "./enviodearquivo/" + arquivos.filetoupload[0].originalFilename;
            
            //aqui o rawData vai pegar o caminho antigo para ler esse arquivo 
            var rawData = fs.readFileSync(urlAntiga);
            //e vai mandar (subir) para o caminho novo
            fs.writeFile(urlNova, rawData, function(err) {
                if(err) console.log(err)
                res.write("Arquivo enviado com sucesso!");
                res.end();
            })
        })
    }
})

servidor.listen(porta, () =>{
    console.log("Servidor rodando");
})