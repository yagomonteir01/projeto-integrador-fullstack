const express = require('express');
const routes = require('./routes');  // Importa as rotas

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);  // Usa as rotas definidas

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
