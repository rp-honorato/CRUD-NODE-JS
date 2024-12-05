import express from 'express';
const server = express();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

});
//
server.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
});
server.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data:{
            email: req.body.email,   
            name: req.body.name,    
            age: req.body.age
        }
    })

    res.status(201).json(req.body) //responde com um status

});
//put
server.put('/usuarios/:id', async (req, res) => {

    console.log(req) //retorna dados da requisição de PUT
    // await prisma.user.update({
    //     where: {
    //         id: req.body.id
    //     },
    //     data:{
    //         email: req.body.email,   
    //         name: req.body.name,    
    //         age: req.body.age
    //     }
    // })

    res.status(200).json({ message: "Usuário atualizado com sucesso" });
    
});

//porta
server.listen(302, () => {
    console.log("Servidor rodando na URL http://localhost:302/")
})