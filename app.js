const express = require('express');
const { frutas, buscarFruta } = require('./public/index');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Método: ${req.method}, URL: ${req.url}, Horário: ${new Date()}`);
  next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Olá, mundo');
});

app.get('/sobre', (req, res) => {
  res.send('Bem-vindo à página!');
});

app.get('/contato', (req, res) => {
  res.send('Você pode nos contatar em ######');
});

app.get('/produto/:id', buscarFruta);

app.listen(PORT, () => {
  console.log(`Servidor Express ouvindo na porta ${PORT}`);
});
