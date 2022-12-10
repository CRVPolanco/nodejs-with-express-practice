const Joi = require('joi');

const categoryName = Joi.string().min(3).max(20);
const id = Joi.string().uuid();

const getCategorySchema = Joi.object({
    id: id.required(),
});

const createCategorySchema = Joi.object({
    categoryName: categoryName.required(),
})

const updateCategorySchema = Joi.object({
    categoryName: categoryName,
})

module.exports = { getCategorySchema, createCategorySchema, updateCategorySchema };
