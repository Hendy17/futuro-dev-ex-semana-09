const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());


let users = [];

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (!user) {
        res.status(404).send('Usuário não encontrado');
    } else {
        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === userId);
    if (index === -1) {
        res.status(404).send('Usuário não encontrado');
    } else {
        users[index] = { ...users[index], ...updateUser };
        res.json(users[index]);
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    users = users.filter(user => user.id !== userId);
    res.send('Usuário excluído com sucesso');
});

app.listen(PORT, () => {
    console.log(`Servidor Express ouvindo na porta ${PORT}`);
});
