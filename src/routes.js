const express = require('express');
const routes = express.Router();

// controladores
const ProductController = require('./controllers/ProductController');

// rotas
routes.post('/product', ProductController.create);
routes.get('/product', ProductController.list);

module.exports = routes;