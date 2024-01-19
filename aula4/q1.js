const http = require('http')
const porta = 443

const servidor = http.createServer((req, res) => {
fs.appendFile('texte.txt', 'Frase criada pelo appendFile diretamente no txt', (err) => {
if (err) throw err
console.log('Arquivo criado!')
res.end()
})
})

