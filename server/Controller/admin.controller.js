const Product = require('../Model/product.model');
const uuid = require('uuid');  


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addProduct = async (req, res) => {
    const { productName, productPrice, productDetails } = req.body;
  
    try {
        const newProductId = uuid.v4().slice(0, 3);
      const newProduct = new Product({
        productId: newProductId,
        productName,
        productPrice,
        productDetails,
        productImage: req.file ? req.file.path : null,
      });
      
      await newProduct.save();
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const getProductById = async (req, res) => {
    const productId = req.params.id; 
    console.log(productId);// Assuming the product ID is passed as a route parameter
  
  
      const product = await Product.findOne({productId});
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    
  };

module.exports = {
    getAllProducts,addProduct,getProductById
};
