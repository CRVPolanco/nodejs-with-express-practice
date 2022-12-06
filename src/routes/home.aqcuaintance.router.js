const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  console.log(req);
  res.send('Ruta princiapal');
});

homeRouter.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

module.exports = homeRouter;
