const express = require('express');
const app = express();
const port = 3006;

app.get('/', (req, res) =>{
  res.send('Hola servidor en express');
})
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
})
