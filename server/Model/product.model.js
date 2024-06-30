// models/product.model.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-cart');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: false, 
  },
});

module.exports = mongoose.model('product', productSchema);
