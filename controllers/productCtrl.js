const Products = require('../models/productModel')
var cloudinary = require('cloudinary').v2;


//will upload image on cloudinary
require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).send({ Msg: 'List of products', products })

    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
},
    exports.createProduct = async (req, res) => {

        try {
            console.log(req.files.imageP.tempFilePath)
            const savedImage = await cloudinary.uploader.upload(req.files.imageP.tempFilePath)
            const newProduct = new Products({ ...req.body, imageP: { public_id: savedImage.public_id, imgUrl: savedImage.url } })
            const found = await Products.findOne({ product_id: req.body.product_id })

            if (found) {
                return res.status(400).send('Product already existe!')
            }
            await newProduct.save()
            res.status(200).send({ msg: "Product succefully created" })

        } catch (err) {
            return res.status(500).send({ msg: err.message })
        }
    },
    exports.deleteProduct = async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.status(200).send({ msg: "Product deleted" })
        } catch (err) {
            return res.status(500).send({ msg: err.message })
        }
    },
    exports.updateProduct = async (req, res) => {
        try {
            const { id } = req.params
            await Products.findByIdAndUpdate(id, { $set: req.body })
            res.status(200).send({ msg: "Product updated succesfully " })

        } catch (err) {
            return res.status(500).send({ msg: err.message })
        }
    }

exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params
        const oneProduct = await Products.findById(id)
        res.status(200).send({ Msg: 'Product detailed:', oneProduct })

    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}
