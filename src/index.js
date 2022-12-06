const express = require('express');
const faker = require('faker');
const app = express();
const port = 3006;

app.get('/', (req, res) => {
  console.log(req);
  res.send('Ruta princiapal');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});
app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('Soy un filtro, y al estar antes del products/:id yo soy específico y el otro es dinámico')
})
app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `Product ${id}`,
    price: 29.99
  })
});


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parámetros')
  }
})
app.get('/categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id,
    productId,
  })
});

app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
});
