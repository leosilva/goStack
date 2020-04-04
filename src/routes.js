const express = require('express');
const routes = express.Router();

// controladores
const ProductController = require('./controllers/ProductController');

// rotas
routes.post('/product', ProductController.create);
routes.get('/product', ProductController.list);
routes.put('/product/:id', ProductController.update, ProductController.findById);
routes.get('/product/:id', ProductController.findById);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;