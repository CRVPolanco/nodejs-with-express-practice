const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(40);
const price = Joi.number().integer().min(10).max(2500);
const description = Joi.string().alphanum().min(5).max(1250);

const getProductSchema = Joi.object({
    id: id.required(),
})
const createProductSchema = Joi.object({
    id,
    name: name.required(),
    price: price.required(),
    description: description.required(),
})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
    description: description,
})

const deleteProductSchema = Joi.object({
    id: id.required(),
})

module.exports = { getProductSchema, createProductSchema, updateProductSchema, deleteProductSchema };
