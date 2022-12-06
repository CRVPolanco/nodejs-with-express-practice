const categoriesRouter = require("./categories.router");
const homeRouter = require("./home.aqcuaintance.router");
const productsRouter = require("./products.router");
const usersRouter = require('./users.router');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouter)
  app.use('/categories', categoriesRouter);
  app.use('/home', homeRouter);
}

module.exports = routerApi;
