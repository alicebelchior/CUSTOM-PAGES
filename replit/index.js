const http = require("http");
const fs = require("fs");
const porta = 443;

const readline = require("readline");

const servidor = http.createServer((req, res) => {
  fs.appendFile(
    "texto.txt",
    `Mauris dictum felis id justo efficitur condimentum. Nullam vitae scelerisque est. Duis varius metus consectetur erat ullamcorper, non tempor massa efficitur. Nulla facilisi. Aliquam nec ultricies nunc. Aenean libero nunc, finibus mollis lorem rutrum, ultricies bibendum nibh. Sed et neque massa. 
    Integer molestie efficitur auctor. Curabitur eu vulputate purus. Nunc hendrerit nunc vitae metus auctor, a lobortis felis sagittis. Phasellus massa mauris, luctus vel imperdiet eget, varius a velit. Cras facilisis purus bibendum, condimentum purus quis, lacinia eros. Sed ut libero quis risus porttitor posuere. Aliquam erat volutpat. Vivamus metus mi, dictum cursus sagittis consectetur, feugiat eu elit. Duis in nibh et nulla posuere semper quis id sapien. Nulla non mattis ex. Aliquam posuere, augue dapibus iaculis aliquet, eros nibh placerat mi, a tincidunt erat arcu et dolor. Sed est erat, tempor nec rutrum a, vulputate sit amet nisi. Aliquam eu quam a quam feugiat consectetur ac at mi. Integer sed lectus ultrices, scelerisque quam in, dignissim lectus. Proin sit amet viverra dui.`,
    (err) => {
      if (err) throw err;
      console.log("Arquivo criado!");
      res.end();
    }
  );
  fs.readFile("pagina.html", (err, arquivo) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(arquivo);
    res.end();
  });
});

servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine("texto.txt");
