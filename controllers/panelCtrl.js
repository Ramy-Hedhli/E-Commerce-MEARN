const panel = require("../models/panel")



exports.addOrder = async (req, res) => {
    try {
        const newOrder = new panel({ ...req.body, owner: req.user._id, product: res.product._id })
        await newOrder.save()
        res.status(200).send({ Msg: 'succes', newOrder })
    } catch (error) {
        res.status(500).send('could not add order')
    }
}

exports.ListOrders = async (req, res) => {
    try {
        const listord = await panel.find()
        res.status(200).send({ Msg: 'List of orders:', listord }).populate('owner', 'product')
    } catch (error) {
        res.status(500).send('could not found orderd')
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        await panel.findByIdAndDelete(id)
        res.status(200).send({ Msg: 'Order deleted succefully' })
    } catch (error) {
        res.status(500).send('could not delete order!')
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        await panel.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).send({ Msg: 'Order updated succefully' })
    } catch (error) {
        res.status(500).send('Could not updtate order')
    }
}

exports.oneOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await panel.findById(id)
        res.status(200).send({ Msg: 'order:', order })
    } catch (error) {
        res.status(500).send('Could not find order')
    }
}