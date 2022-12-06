const express = require('express');
const faker = require('faker');

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  const products = [];

  const { size } = req.query;
  const limit = size ?? 100;

  for(let i=0; i<limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
      id: i+1,
    })
  }

  res.json(products);
});
productsRouter.get('/filter', (req, res) => {
  res.send('Soy un filtro, y al estar antes del products/:id yo soy específico y el otro es dinámico')
})
productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `Product ${id}`,
    price: 29.99
  })
});

module.exports = productsRouter;
