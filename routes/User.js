const {
    Register,
    Login,
    getAllUsers,
  } = require('../controllers/userControllers')

  const {
    registerValidator,
    loginValidator,
    validation,
  } = require('../middleware/UserValidator')

  const express = require('express')
  const isAuth = require('../middleware/isAuth')
  const router = express.Router()


  // testing route
  router.get('/', (req, res) => {
    res.send({ message: 'you are in the users router'})
  })
  // register
  router.post('/register', registerValidator(), validation, Register)
  
  //login
  router.post('/login', loginValidator(), validation, Login)
  
  //get all users
  router.get('/allusers', getAllUsers)
  
  //current
  router.get('/current', isAuth, (req, res) => {
    res.send({ message: 'authorized', user: req.user })
  })
  
  module.exports = router
  
