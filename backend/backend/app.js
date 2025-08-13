// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

// Configuração do servidor
const app = express();
app.use(cors()); // Permite conexões de outros domínios (ex: frontend)
app.use(bodyParser.json()); // Habilita leitura de JSON nas requisições

// Rotas da API
app.use(routes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
