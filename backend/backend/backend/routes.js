const express = require('express');
const router = express.Router();
const ProdutoController = require('./controllers/ProdutoController');
const FornecedorController = require('./controllers/FornecedorController');

// Rotas de Produto
router.get('/produtos', ProdutoController.getAll);
router.post('/produtos', ProdutoController.create);

// Rotas de Fornecedor
router.get('/fornecedores', FornecedorController.getAll);
router.post('/fornecedores', FornecedorController.create);

module.exports = router;
