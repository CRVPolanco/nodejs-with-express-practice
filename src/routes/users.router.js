const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parámetros')
  }
});
usersRouter.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    id: 696,
    body,
    message: 'Created succefully'
  })

})

module.exports = usersRouter;
