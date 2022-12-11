const express = require('express');
const cors = require('cors');
const { logTracker, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const routerApi = require('./routes');
const app = express();
const port = 3000;

const whiteList = ["http://127.0.0.1:5500", "https://google.com"];
const options = {
  origin: (origin, callback) => {
    whiteList.includes(origin) ? callback(null, true) : callback(new Error("Your origin doesn't have access"), false);
  }
}

app.use(express.json());
app.use(cors(options));

routerApi(app);

app.use(logTracker);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port);
