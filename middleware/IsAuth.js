const User = require("../models/userModel")
var jwt = require('jsonwebtoken');

const IsAuth = async (req, res, next) => {
    try {
        const token = req.header('Auth')
        var decoded = jwt.verify(token, process.env.privetKey)
        if (!decoded) {
            return res.status(400).send({ errors: [{ Msg: 'Invalid token' }] })
        }
        const found = await User.findById(decoded.id)
        req.user = found
        next()

    } catch (error) {
        res.status(500).send({ errors: [{ Msg: 'please Log In' }] })
    }
}
module.exports = IsAuth