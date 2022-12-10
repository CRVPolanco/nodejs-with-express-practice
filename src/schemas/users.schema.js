const Joi = require('joi');

const name = Joi.string().min(3).max(35);
const username = Joi.string().min(2).max(15);
const email = Joi.string().email();
const address = Joi.string().min(10).max(100);
const date = Joi.string();
const id = Joi.integer();

const getUserSchema = Joi.object({
    id: id.required(),
});
const createUserSchema = Joi.object({
    name: name.required(),
    username: username.required(),
    email: email.required(),
    address: address.required(),
    date: date.required()
});

const updateUserSchema = Joi.object({
    name: name,
    username: username,
    email: email,
    address: address,
    date: date,
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
