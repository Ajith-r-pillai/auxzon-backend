const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-cart");
const productSchema = new mongoose.Schema({
    productId: {
    type: Number,
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
  }
 });

module.exports = mongoose.model("product", productSchema);