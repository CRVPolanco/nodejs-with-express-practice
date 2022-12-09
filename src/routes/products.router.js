const express = require('express');
const ProductService = require('../services/products.services');
const service = new ProductService();

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {



  res.json(service.find());
});

productsRouter.get('/filter', (req, res) => {
  res.send('Soy un filtro, y al estar antes del products/:id yo soy específico y el otro es dinámico')
});

productsRouter.get('/:id', (req, res) => {

  const { id } = req.params;

  const findOneProduct = service.findOne(id);

  !!findOneProduct ? res.status(200).json(findOneProduct) : res.status(404).json({ message: 'resource not found' });

});
productsRouter.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'created',
    data: body
  });

})
productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;

  res.json({
    message: 'created',
    data: body,
    id,
  });
});
productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'product deleted',
    id,
  });
});

module.exports = productsRouter;
