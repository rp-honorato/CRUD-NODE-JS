const express = require('express'); //importa o módulo express
const server = express();

//faz com que o express entenda JSON
server.use(express.json());

//cria rotas
server.get('/', function (req, res) {
    res.sendFile(__dirname + "/html/index.html"); //exibe arquivo HTML
});
server.get('/blog', (req, res) => {
    return res.json({ //retorna um JSON como resposta
    message: "Hello world" 
    });
});
server.get('/sobre', (req, res) =>{
    res.sendFile(__dirname + "/html/sobre.html")
});
//cria rota com parâmetro / AULA
server.get('/ola/:nome/:cargo/:cor', (req, res) => {
    res.send(
        "<h1>Olá, " + req.params.nome + "</h1>" + //HTML no meio da resposta
        "<h2>Seu cargo é: " + req.params.cargo+ "</h2>" +
        "<h3>Sua cor favorita é: " + req.params.cor+ "</h3>"
    );

})
//
server.get('/section/:noticia', (req, res) => {
    res.send(req.params)
})


//porta
server.listen(302, () => {
    console.log("Servidor rodando na URL http://localhost:302/")
})
