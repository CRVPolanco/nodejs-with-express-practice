const express = require('express');
const { logTracker, errorHandler } = require('./middlewares/error.handler');
const routerApi = require('./routes');
const app = express();
const port = 3006;

app.use(express.json());

routerApi(app);

app.use(logTracker);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Corriendo en el puerto: ${port}`);
});
