const express = require('express')
const { getCategories, createCategory, deleteCategory, updateCategory } = require('../controllers/categoryCtrl')
const authAdmin = require('../middleware/authAdmin')

const CategoryRouter = express.Router()

CategoryRouter.get('/categoryList', getCategories)
CategoryRouter.post('/categoryAdd', createCategory)

CategoryRouter.delete('/categoryDelete/:id', deleteCategory)
CategoryRouter.put('/categoryUpdate/:id', updateCategory)


module.exports = CategoryRouter