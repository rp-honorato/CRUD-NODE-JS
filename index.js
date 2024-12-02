const express = require('express'); //importa o módulo express
const server = express();

//faz com que o express entenda JSON
server.use(express.json());

//cria rotas
server.get('/', function (req, res) {
    res.send("Olá mundo");
});

server.get('/teste', (req, res) => {
    return res.json({ //retorna um JSON como resposta
        message: "Hello world" 
    });
});

server.get('/admin', (req, res) => {
    return res.json({
        message: "Você acessou a rota /admin"
    });
});

//porta
server.listen(302, () => {
    console.log("Servidor rodando na URL http://localhost:302/")
})