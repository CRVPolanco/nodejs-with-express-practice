const express = require('express');
const { getOrderSchema, createOrderSchema, updateOrderSchema } = require('../schemas/orders.schema');
const OrderService = require('../services/orders.services');
const validatorHandler = require('../middlewares/validator.handler');
const ordersRouter = express.Router();
const service = new OrderService();

ordersRouter.get('/:id', validatorHandler(getOrderSchema, 'params'), async(req, res, next) => {
    try {
      const { id } = req.params;
      const findOrder = await service.findOrder(id);

      res.status(200).json(findOrder);
    } catch (error) {
        next(error);
    }
});

ordersRouter.post('/', validatorHandler(createOrderSchema, 'body'), async(req, res, next) => {

    try{
      const body = req.body;
      const id = service.createOrder(body);

      res.status(201).json({
          message: 'order created succefully',
          id,
      });
    }catch(err){
        next(err);
    }


});

ordersRouter.patch('/:id', validatorHandler(getOrderSchema, 'params'), validatorHandler(updateOrderSchema, 'body'), async(req, res, next) => {
    try{
        const { id } = req.params;
        const body = req.body;

        const order = await service.updateOrder(id, body);

        res.status(202).json(order);
    }catch(err){
        next(err);
    }
});

ordersRouter.delete('/:id', validatorHandler(getOrderSchema, 'params'), async(req, res, next) => {
    try{
        const { id } = req.params;

        const deletedId = await service.deleteOrder(id);

        res.json({ message: 'Order deleted', id: deletedId });
    }catch(err){
        next(err);
    }
});

module.exports = ordersRouter;
