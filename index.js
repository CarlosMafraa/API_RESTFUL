const express = require('express');
const app = express();
app.use(express.json());

let contatos = [];
let idAtual = 1;

app.get('/contatos', (req, res) => {
    res.json(contatos);
});

app.post('/contatos', (req, res) => {
    const contato = {
        id: idAtual++,
        nome: req.body.nome,
        telefone: req.body.telefone
    };
    contatos.push(contato);
    res.status(201).json(contato);
});

app.get('/contatos/:id', (req, res) => {
    const id = Number(req.params.id);
    const contato = contatos.find(contato => contato.id === id);
    if (contato) {
        res.json(contato);
    } else {
        res.status(404).send('Contato não encontrado');
    }
});

app.put('/contatos/:id', (req, res) => {
    const id = Number(req.params.id);
    const novoContato = {
        id: id,
        nome: req.body.nome,
        telefone: req.body.telefone
    };

    let contatoExistente = contatos.find(contato => contato.id === id);
    if(contatoExistente) {
        contatos = contatos.map(contato => contato.id === id ? novoContato : contato);
        res.json(novoContato);
    } else {
        res.status(404).send('Contato não encontrado');
    }
});

app.delete('/contatos/:id', (req, res) => {
    const id = Number(req.params.id);
    contatos = contatos.filter(contato => contato.id !== id);
    res.status(200).send('Contato excluído!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
