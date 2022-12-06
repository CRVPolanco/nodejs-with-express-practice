const express = require('express');
const categoriesRouter = express.Router();

categoriesRouter.get('/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id,
    productId,
  })
});

module.exports = categoriesRouter;
