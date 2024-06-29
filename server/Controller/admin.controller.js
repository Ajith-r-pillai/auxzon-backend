const Product = require('../Model/product.model');


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addProduct = async (req, res) => {
    const { productId, productName, productPrice, productDetails } = req.body;

    try {
        const newProduct = new Product({ productId, productName, productPrice, productDetails });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllProducts,addProduct
};
