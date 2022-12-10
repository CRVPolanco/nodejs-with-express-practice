const Joi = require('joi');

const customer_who_has_ordered = Joi.string().min(3).max(35);
const money_expensed = Joi.number().integer().min(10).max(2500);
const bought_date = Joi.string();
const products_ordered = Joi.array();
const id = Joi.string().uuid();

const getOrderSchema = Joi.object({
    id: id.required(),
})
const createOrderSchema = Joi.object({
    customer_who_has_ordered: customer_who_has_ordered.required(),
    money_expensed: money_expensed.required(),
    bought_date: bought_date.required(),
    products_ordered: products_ordered.required(),
});
const updateOrderSchema = Joi.object({
    id: id.required(),
    customer_who_has_ordered: customer_who_has_ordered,
    money_expensed: money_expensed,
    bought_date: bought_date,
    products_ordered: products_ordered,
})

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema };
