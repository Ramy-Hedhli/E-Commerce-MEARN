const express = require('express')
const { Register, SignIn, ListUser, UpdateUser, DeleteUser, UserProfile } = require('../controllers/User');
const IsAuth = require('../middleware/IsAuth');
const Isadmin = require('../middleware/authAdmin')
const { ValidRegister, Validator } = require('../middleware/Validator');

const UserRouter = express.Router()

UserRouter.post('/register', ValidRegister, Validator, Register)

UserRouter.post('/signIn', SignIn)

UserRouter.get('/Profile', IsAuth, (req, res) => { res.send(req.user) })

UserRouter.put('/UpdateUser/:id', UpdateUser)

UserRouter.delete('/deleteUser/:id', DeleteUser)

UserRouter.get('/Users', ListUser)

UserRouter.get(`/Userprofile/:id`, UserProfile)


module.exports = UserRouter