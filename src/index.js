const express = require('express');
const app = express();
const port = 3006;

app.get('/', (req, res) =>{
  res.send('Hola servidor en express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});
app.get('/products', (req, res) => {
  res.send('Products');
});
app.get('/give-json', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 49.99,
  })
});
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
})
