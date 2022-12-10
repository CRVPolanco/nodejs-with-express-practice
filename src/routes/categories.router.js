const express = require('express');
const CategorieService = require('../services/categories.services');
const categoriesRouter = express.Router();
const service = new CategorieService();

categoriesRouter.get('/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id,
    productId,
  })
});
categoriesRouter.post('/', (req, res) => {
  const body = req.body;

  const newCategory = service.createCategory(body);

  if(!!newCategory){
    res.status(201).json({
      message: 'Created succefully',
      id: newCategory,
    })
  }
})
categoriesRouter.patch('/:id', (req, res) => {

  const { id } = req.params;
  const body = req.body;

  const findCategory = service.findCategory(id);
  const updatedProduct = service.updateCategory(findCategory, body);

  if(!!updatedProduct){

    res.status(202).json({
      message: 'category updated!',
      id
    })
  }else{
    res.status(404).json({
      message: 'category not found',
      id
    })
  }
});
categoriesRouter.delete('/:id', (req, res) => {

  const { id } = req.params;
  const isDeleted = service.deleteCategory(id);

  if(!!isDeleted){
    res.status(203).json({
      message: 'Category deleted succefully!',
      id
    });
  }else{
    res.status(404).json({
      message: 'category does not exist',
      id
    });
  }
});

module.exports = categoriesRouter;
