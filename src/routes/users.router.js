const express = require('express');
const UserService = require('../services/users.service');
const usersRouter = express.Router();
const service = new UserService();

usersRouter.get('/', (req, res) => {

  res.status(200).json(service.find());

});
usersRouter.get('/:id', (req, res) => {

  const { id } = req.params;

  const getUser = service.findUser(id);

  if(!!getUser){
    res.status(200).json(getUser);
  }else{
    res.status(404).json({ message: "User not found" });
  }

});
usersRouter.post('/', (req, res) => {

  const body = req.body;

  if(!!body){

    const createdId = service.createUser(body);

    res.status(201).json({
      message: "Created succefully",
      id: createdId,
    });
  }

});
usersRouter.patch('/:id', (req, res) => {

  const { id } = req.params;
  const data = req.body;

  const findUser = service.findUser(id);

  if(!!findUser){
    const newData = service.update(findUser, data);

    res.status(202).json({
      message: 'User updated',
      user: newData
    });
  }

});

usersRouter.delete('/:id', (req, res) => {

  const { id } = req.params;

  const userExists = service.find().some(u => u.id);

  if(!!userExists){

    service.delete(id);

    res.status(203).json({
      message: 'Deleted user',
      id
    })
  }
})

module.exports = usersRouter;
