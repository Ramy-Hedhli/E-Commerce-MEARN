const express = require('express')
const authAdmin = require('../middleware/authAdmin')
const { getPayments, createPayment } = require('../controllers/paymentCtrl')

const PaymentRouter = express.Router()

PaymentRouter.get('/getPayement'/**authAdmin, */, getPayments)
PaymentRouter.post('/pay', createPayment)


module.exports = PaymentRouter
