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



  if(id === '696'){
    console.log('Entro en el error');
    res.status(404).json({
      message: 'not found',
    });
  }else{
    res.status(200).json({
      id,
      name: 'prueba',
      price: 1499.99
    })
  }

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
