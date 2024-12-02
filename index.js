const express = require('express'); //importa o módulo express
const server = express();

//faz com que o express entenda JSON
server.use(express.json());

//cria rotas
server.get('/', function (req, res) {
    res.send("Bem vindo ao meu servidor!");
});
server.get('/blog', (req, res) => {
    return res.json({ //retorna um JSON como resposta
    message: "Hello world" 
    });
});
server.get('/sobre', (req, res) =>{
    return res.send('Minha página sobre')
});
//cria rota com parâmetro / AULA
server.get('/ola/:nome/:cargo', (req, res) => {
    res.send(req.params)
})
//
server.get('/section/:noticia', (req, res) => {
    res.send(req.params)
})


//porta
server.listen(302, () => {
    console.log("Servidor rodando na URL http://localhost:302/")
})
