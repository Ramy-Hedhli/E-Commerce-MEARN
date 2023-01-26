const User = require('../models/userModel')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');


exports.Register = async (req, res) => {
    try {
        const { email, password } = req.body
        const found = await User.findOne({ email })
        if (found) {
            return res.status(400).send({ errors: [{ Msg: 'email already used!' }] })
        }
        const newUser = new User(req.body)
        const salt = 10
        const passHash = bcrypt.hashSync(password, salt);
        newUser.password = passHash
        await newUser.save()
        const payload = { id: newUser._id }
        var token = jwt.sign(payload, process.env.privetKey);
        res.status(200).send({ Msg: 'User succefully registred!', newUser, token })
    } catch (error) {
        res.status(500).send({ errors: [{ Msg: 'could not add user!' }] })
    }
}

exports.SignIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const found = await User.findOne({ email })
        if (!found) {
            return res.status(400).send({ errors: [{ Msg: 'bad email or password' }] })
        }
        const pass = bcrypt.compareSync(password, found.password);
        if (!pass) {
            return res.status(400).send({ errors: [{ Msg: 'bad email or password' }] })
        }

        const payload = { id: found._id }
        var token = jwt.sign(payload, process.env.privetKey);
        res.status(200).send({ Msg: 'Logged IN', found, token })
    } catch (error) {
        res.status(500).send({ errors: [{ Msg: 'could not sign In!' }] })
    }
}

exports.ListUser = async (req, res) => {
    try {
        const ListU = await User.find()
        res.status(200).send({ Msg: 'List of Users:', ListU })
    } catch (error) {
        res.status(500).send('could not found Users')
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).send({ Msg: 'User updated succefully' })
    } catch (error) {
        res.status(500).send('Could not updtate user')
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({ Msg: 'User deleted succefully' })
    } catch (error) {
        res.status(500).send('could not delete user!')
    }
}

exports.UserProfile = async (req, res) => {
    try {
        const { id } = req.params
        const usr = await User.findById(id)
        res.status(200).send({ Msg: 'User detailed:', usr })
    } catch (error) {
        res.status(500).send('Could not find User')
    }
}