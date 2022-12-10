const express = require('express');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getUserSchema, createUserSchema, updateUserSchema } = require('../schemas/users.schema');
const UserService = require('../services/users.service');
const usersRouter = express.Router();
const service = new UserService();

usersRouter.get('/', async (req, res) => {

  const getUsers = await service.find();
  res.json(getUsers);
});

usersRouter.get('/:id', validatorHandler(getUserSchema, 'params'), async(req, res, next) => {
  try{
    const { id } = req.params;
    const getUser = await service.findUser(id);

    res.status(200).json(getUser);
  } catch(err) {

    next(err);
  }
});

usersRouter.post('/', validatorHandler(createUserSchema, 'body'), async(req, res, next) => {
  try {
    const body = req.body;
    const createdId = await service.createUser(body);

    res.status(201).json({
      message: "Created succefully",
      id: createdId,
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.patch('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'),
 async(req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newData = await service.update(id, data);

    res.status(202).json({ id, ...newData });
  } catch (error) {
    next(error);
  }
});

usersRouter.delete('/:id', validatorHandler(getUserSchema, 'params'), async(req, res, next) => {
  try{
    const { id } = req.params;
    const deletedId = await service.delete(id);

    res.status(203).json({ message: 'User deleted', id: deletedId.id });
  }catch(error){
    next(error);
  }
})

module.exports = usersRouter;
