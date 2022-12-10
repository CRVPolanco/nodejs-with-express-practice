const express = require('express');
const ProductService = require('../services/products.services');
const service = new ProductService();

const productsRouter = express.Router();

productsRouter.get('/', async (req, res, err) => {

  try{

    const products = await service.find();
    res.json(products);

  }catch(err){
    next(err)
  }

});

productsRouter.get('/:id', async (req, res, next) => {
  try {

    const { id } = req.params;
    const findOneProduct = await service.findOne(id);

    res.status(200).json(findOneProduct);
  } catch (error) {

    next(error);
  }

});
productsRouter.post('/', async (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'created',
    data: body
  });

})
productsRouter.patch('/:id', async (req, res, next) => {

  try{
    const { id } = req.params
    const body = req.body;
    const findProduct = await service.update(id, body);

    res.status(202).json(findProduct);
  }catch(err){
    next(err)
  }
});
productsRouter.delete('/:id', async (req, res) => {

  const { id } = req.params;
  const productDeleted = await service.delete(id);

  res.json({
    message: 'product deleted',
    id: productDeleted.id,
  });
});

module.exports = productsRouter;
