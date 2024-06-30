
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

exports.RemoveCart = async (req, res) => {
    const { currentuserid, productId } = req.body;

    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        const user = await User.findOne({ id: currentuserid });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Convert productId to number if it is a string
        // const productIdNumber = parseInt(productId, 10);

        user.cart = user.cart.filter(cartItem => cartItem.productId !== productId);
        await user.save();

        const totalPrice = user.cart.reduce((total, item) => total + item.quantity * item.price, 0);

        res.status(200).json({ message: 'Item removed from cart', cart: user.cart, totalPrice });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addQuantity = async (req, res) => {
    const { currentuserid, productId } = req.body;

    try {
        const user = await User.findOne({ id: currentuserid });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const cartItem = user.cart.find(item => item.productId === productId);
        if (!cartItem) {
            return res.status(400).json({ message: 'Product not found in cart' });
        }

        cartItem.quantity += 1;
        await user.save();

        res.status(200).json({ message: 'Quantity updated successfully', cart: user.cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.removeQuantity = async (req, res) => {
    const { currentuserid, productId } = req.body;

    try {
        const user = await User.findOne({ id: currentuserid });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const cartItem = user.cart.find(item => item.productId === productId);
        if (!cartItem) {
            return res.status(400).json({ message: 'Product not found in cart' });
        }

        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            // Optionally, you can remove the product entirely if quantity is 0
            user.cart = user.cart.filter(item => item.productId !== productId);
        }
        await user.save();

        res.status(200).json({ message: 'Quantity updated successfully', cart: user.cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.GetAll=async (req, res) => {
    const userid = req.params.id
console.log(userid)
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


