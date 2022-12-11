const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(40);
const price = Joi.number().integer().min(10).max(2500);
const description = Joi.string().min(5).max(1250);
const image = Joi.string().uri();

const getProductSchema = Joi.object({
    id: id.required(),
})
const createProductSchema = Joi.object({
    id,
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    description: description,
    image: image,
})

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
