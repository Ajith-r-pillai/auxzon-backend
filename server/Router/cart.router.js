// routes/api.routes.js

const express = require('express');
const router = express.Router();
const authentication = require('../auth/authentication');
const adminContoller = require('../Controller/admin.controller');
const userContoller = require('../Controller/user.controller');
const verifyToken = require('../Middleware/jwt.middleware');
const upload = require('../Middleware/Multer');
// auth
router.post('/userLogin', authentication.Login);
router.post('/register', upload.single('profilePic'),authentication.signup);

// admin
router.post('/Addproduct',  upload.single('productImage'), adminContoller.addProduct);
router.get('/Getproducts',  adminContoller.getAllProducts);
router.get('/product/:id', adminContoller.getProductById);

// user
router.post('/AddCart',  userContoller.AddtoCart);
router.post('/RemoveFromCart', verifyToken, userContoller.RemoveCart);
router.get('/GetAllCart/:id', userContoller.GetAll);
router.post('/RemoveCart',  userContoller.removeQuantity);
router.post('/addQuantity', userContoller.addQuantity);

module.exports = router;

