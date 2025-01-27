const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-cart");

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  productId: { type: Number, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  userpassword: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  cart: [CartItemSchema],
  usertype: { type: String },
});

module.exports = mongoose.model("User", userSchema);
