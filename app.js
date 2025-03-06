const express = require('express');
const app = express();

// Servindo arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota de teste
app.get('/', (req, res) => {
    res.send('<h1>Servidor está rodando!</h1>');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:5500');
});
