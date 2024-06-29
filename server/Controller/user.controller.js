
const express = require('express')
const User = require('../Model/user.model');
const Product = require('../Model/product.model');


exports.AddtoCart = async (req, res) => {
    const { currentuserid, productId, quantity } = req.body;

    try {
        const user = await User.findOne({ id: currentuserid });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const product = await Product.findOne({ productId: productId });
        if (!product) {
            return res.status(400).json({ message: 'Product not found' });
        }

        user.cart.push({ productId, quantity, price: product.productPrice });
        await user.save();

        const totalPrice = user.cart.reduce((total, item) => total + item.quantity * item.price, 0);

        res.status(200).json({ message: 'Item added to cart', cart: user.cart,totalPrice });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Remove from cart route
exports.RemoveCart= async (req, res) => {
    const {currentuserid, productId } = req.body;

    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        const user = await User.findOne({id:currentuserid});
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        user.cart = user.cart.filter(cartItem => cartItem.productId !== productId);
        await user.save();

        const totalPrice = user.cart.reduce((total, item) => total + item.quantity * item.price, 0);

        res.status(200).json({ message: 'Item removed from cart', cart: user.cart, totalPrice });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.GetAll=async (req, res) => {
    const userid = req.currentuserid

    try {
        const user = await User.findOne({ id:userid });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        let cartDetails = [];
        for (let i = 0; i < user.cart.length; i++) {
            const cartItem = user.cart[i];
            const product = await Product.findOne({productId:cartItem.productId});
            if (product) {
                cartDetails.push({
                    productId: cartItem.productId,
                    quantity: cartItem.quantity,
                    price: cartItem.price,
                    productDetails: product
                });
            }
        }

        res.status(200).json({ cart: cartDetails });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


