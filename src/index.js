const express = require('express');
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
  res.json(
  [
    {
      name: 'Product 1',
      price: 49.99,
    },
    {
      name: 'Product 2',
      price: 34.99
    }
  ]
  );
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `Product ${id}`,
    price: 29.99
  })
});

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
