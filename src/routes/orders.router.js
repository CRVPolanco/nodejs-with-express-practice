const express = require('express');
const OrderService = require('../services/orders.services');
const ordersRouter = express.Router();
const service = new OrderService();

ordersRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    const findOrder = service.findOrder(id);

    if(!!findOrder){

        res.status(200).json(findOrder);
        return;
    }

    res.status(404).json({
        message: 'Resource not found'
    });

});
ordersRouter.post('/', (req, res) => {

    const body = req.body;

    const id = service.createOrder(body);

    res.status(201).json({
        message: 'order created succefully',
        id,
    });
})
ordersRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const getOrder = service.findOrder(id);

    if(!!getOrder){
        const updatedOrder = service.updateOrder(getOrder, body);

        res.status(202).json({
            message: 'Order updated',
            id,
            order: updatedOrder,
        });
    }else{
        res.status(404).json({
            message: 'order not found',
            id,
        });
    }
})
ordersRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    const deletedOrder = service.deleteOrder(id);

    if(!!deletedOrder){
        res.status(203).json({
            message: 'order deleted',
            id,
        });
    }else{
        res.status(404).json({
            message: 'order not found',
            id,
        })
    }
})
module.exports = ordersRouter;
