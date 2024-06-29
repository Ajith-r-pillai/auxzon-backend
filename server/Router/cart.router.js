
const express = require('express');
const router = express.Router();
const authentication = require('../auth/authentication')
const adminContoller = require('../Controller/admin.controller')
const userContoller = require('../Controller/user.controller')
const verifyToken = require('../Middleware/jwt.middleware')


// auth
router.post('/userLogin', authentication.Login)
router.post('/register', authentication.signup)

// admin
router.get('/Allproducts',verifyToken, adminContoller.getAllProducts)
router.post('/Addproduct', verifyToken,adminContoller.addProduct)

// user
router.post('/AddCart',verifyToken, userContoller.AddtoCart)
router.post('/RemoveFromCart',verifyToken, userContoller.RemoveCart)
router.get('/GetAllCart',verifyToken, userContoller.GetAll)




module.exports = router;
