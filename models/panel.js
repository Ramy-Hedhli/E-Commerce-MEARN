const mongoose = require('mongoose')


const PanelSchema = new mongoose.Schema({
    Qte: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    Owner: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true,
        trim: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("Panel", PanelSchema)