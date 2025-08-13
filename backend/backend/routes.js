const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/teste', (req, res) => {
  res.json({ mensagem: "API funcionando!" });
});

// Rotas de Produtos (serão implementadas depois)
router.get('/produtos', (req, res) => {
  res.send('Lista de produtos virá aqui.');
});

module.exports = router;
