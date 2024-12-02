const express = require('express'); //importa o módulo express
const server = express();


//escuta uma determinada
server.listen(302)

//faz com que o express entenda JSON
server.use(express.json());


//cria rota /teste, /admin, /geeks
server.get('/teste', (req, res) => {
    return res.json( { //retorna um JSON como resposta
        message: "Hello world" 
    });
});

server.get('/admin', (req, res) => {
    return res.json({
        message: "Você acessou a rota /admin"
    });
});
