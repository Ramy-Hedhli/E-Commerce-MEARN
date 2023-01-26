const { body, validationResult } = require('express-validator');

exports.ValidRegister = [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter Strong Password').isLength({ min: 8 })
]
exports.Validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}
