const express = require('express')
const { addOrder, ListOrders, deleteOrder, updateOrder, oneOrder } = require('../controllers/panelCtrl')
const authAdmin = require('../middleware/authAdmin')

const PanelRouter = express.Router()

PanelRouter.get('/ListOrders', ListOrders)
PanelRouter.post('/AddOrder', addOrder)
PanelRouter.delete('/deleteOrder/:id', deleteOrder)
PanelRouter.put('/updateOrder/:id', updateOrder)
PanelRouter.get('/oneOrder/:id', oneOrder)


module.exports = PanelRouter