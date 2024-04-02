// Objeto contendo informações sobre diferentes frutas
const frutas = {
  1: { nome: 'Maçã', cor: 'Vermelha', sabor: 'Doce' },
  2: { nome: 'Banana', cor: 'Amarela', sabor: 'Doce' },
  3: { nome: 'Laranja', cor: 'Laranja', sabor: 'Ácido' }
};

const buscarFruta = (req, res) => {
  const frutaId = req.params.id;

    if (frutas[frutaId]) {
    const fruta = frutas[frutaId];
    res.send(`Informações sobre a fruta com o ID ${frutaId}: Nome: ${fruta.nome}, Cor: ${fruta.cor}, Sabor: ${fruta.sabor}`);
  } else {
    
    res.send('Nenhuma fruta encontrada com o ID fornecido');
  }
};

module.exports = { frutas, buscarFruta };
