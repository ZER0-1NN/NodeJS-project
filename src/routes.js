const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.readAll);
routes.put('/products/:id', ProductController.update);
routes.get('/products/:id', ProductController.readOne);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;