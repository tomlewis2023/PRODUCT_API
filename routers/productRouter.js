const express = require('express')
const ProductRouter = express.Router()
const {getProducts,getProductbyId,createProduct,updateProduct,deleteProduct} = require('../controllers/productController')

//localhost:3000/products
ProductRouter.get('/', getProducts)

//localhost:3000/products/id
ProductRouter.get('/:id',getProductbyId)

//Create product 

ProductRouter.post('/', createProduct)

// Update product
ProductRouter.patch('/:id',updateProduct)

//Delete product

ProductRouter.delete('/:id',deleteProduct)

module.exports = ProductRouter