const express = require('express');
const categoriesRouter = require("./categories.router");
const homeRouter = require("./home.aqcuaintance.router");
const ordersRouter = require('./orders.router');
const productsRouter = require("./products.router");
const usersRouter = require('./users.router');

const principalApiRouter = (app) => {

    const apiVersionsRouter = express.Router();
    app.use('/api/v1', apiVersionsRouter);

    apiVersionsRouter.use('/home', homeRouter);
    apiVersionsRouter.use('/products', productsRouter);
    apiVersionsRouter.use('/users', usersRouter)
    apiVersionsRouter.use('/categories', categoriesRouter);
    apiVersionsRouter.use('/orders', ordersRouter);

}

module.exports = principalApiRouter;
