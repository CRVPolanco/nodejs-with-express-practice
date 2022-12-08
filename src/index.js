const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3006;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`Corriendo en el puerto: ${port}`);
});
