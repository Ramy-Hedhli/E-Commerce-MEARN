const express = require('express')
const { getProducts, createProduct, deleteProduct, updateProduct, getOneProduct } = require('../controllers/productCtrl')
const authAdmin = require('../middleware/authAdmin')

const ProductRouter = express.Router()

ProductRouter.get('/ListProducts', getProducts)
ProductRouter.post('/AddProduct',/*authAdmin,*/ createProduct)
ProductRouter.delete('/deleteProducts/:id', /*authAdmin,*/ deleteProduct)
ProductRouter.put('/updateProducts/:id', /*authAdmin,*/ updateProduct)
ProductRouter.get('/oneProducts/:id',/*authAdmin,*/ getOneProduct)


module.exports = ProductRouter