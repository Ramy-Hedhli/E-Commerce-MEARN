const Category = require('../models/categoryModel')
const Products = require('../models/productModel')


exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).send({ Msg: 'List of Categories:', categories })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}
exports.createCategory = async (req, res) => {
    try {
        // if user have role = 1 ---> admin
        // only admin can create , delete and update category
        const { name } = req.body;
        const category = await Category.findOne({ name })
        if (category) return res.status(400).json({ msg: "This category already exists." })

        const newCategory = new Category({ name })

        await newCategory.save()
        res.status(200).send({ msg: "Created a category", newCategory })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const products = await Products.findOne({ category: req.params.id })
        if (products) return res.status(400).send({
            msg: "Please delete all products with a relationship."
        })

        await Category.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: "Category succesfully deleted" })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        await Category.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).send({ Msg: 'Category succesfully updated' })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

