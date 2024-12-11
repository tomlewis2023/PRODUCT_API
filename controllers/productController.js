const ProductData = require("../models/product");

//Get all products
const getProducts = async (req, res) => {
  try {
    const products = await ProductData.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get product based on id
const getProductbyId = async (req,res)=>{
    try {
        const productId  = req.params.id
        const product = await ProductData.findById(productId);
        if(!product) return res.status(404).json({message: 'Product not found'})
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

}

// Create  product
const createProduct = async (req,res) =>{

try {

  const {name, price, image,category} = req.body
  const newProduct = new ProductData({name,price,image,category})
  await newProduct.save()
  res.status(201).json(newProduct)
  
} catch (error) {
  res.status(500).json({ error: error.message });
  
}

}

//Update Product

const updateProduct = async (req,res)=>{
  try {
      const productId  = req.params.id
      const product = await ProductData.findByIdAndUpdate(productId,req.body,{new: true});
      if(!product) return res.status(404).json({message: 'Product not found'})
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

}

//Delete Product
const deleteProduct = async (req,res)=>{
  try {
      const productId  = req.params.id
      const product = await ProductData.findByIdAndDelete(productId);
      if(!product) return res.status(404).json({message: 'Product not found'})
      res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

}




module.exports = { getProducts,getProductbyId,createProduct,updateProduct,deleteProduct };
