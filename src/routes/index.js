const express = require('express');
const principalApiRouter = require('./principal.api.router');

function routerApi(app){

  principalApiRouter(app);

}

module.exports = routerApi;
