const express = require('express');
const { getCategorySchema, createCategorySchema, updateCategorySchema } = require('../schemas/categories.schema');
const CategorieService = require('../services/categories.services');
const categoriesRouter = express.Router();
const service = new CategorieService();
const { validatorHandler } = require('../middlewares/validator.handler');

categoriesRouter.get('/', async(req, res, next) => {

  const getAll = await service.find();
  res.status(200).json(getAll);

})
categoriesRouter.get('/:id', validatorHandler(getCategorySchema, 'params'), async(req, res, next) => {
  try{

    const { id } = req.params;
    const findCategory = await service.findCategory(id);

    res.status(200).json(findCategory);

  }catch(err){
    next(err);
  }
})
categoriesRouter.post('/', validatorHandler(createCategorySchema, 'body'), async(req, res, next) => {
  try{
    const body = req.body;
    const category = await service.createCategory(body);

    res.status(201).json({ id: category.id, message: 'created category' })
  }catch(err){
    next(err);
  }
})
categoriesRouter.patch('/:id', validatorHandler(getCategorySchema, 'params'), validatorHandler(updateCategorySchema, 'body'), async(req, res, next) => {
  try{

    const { id } = req.params;
    const body = req.body;

    const updated = await service.updateCategory(id, body);

    res.status(202).json(updated)

  }catch(err){
    next(err);
  }
});
categoriesRouter.delete('/:id', validatorHandler(getCategorySchema, 'params'), async(req, res, next) => {
  try{

    const { id } = req.params;

    const deleted = await service.deleteCategory(id);

    res.status(203).json({ message: 'deleted succefully', id: deleted.id });

  }catch(err){
    next(err);
  }
});

module.exports = categoriesRouter;
