const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

const cartRouter = require('./Router/cart.router');

app.use(cors({orgin:'http://localhost:3000'}));
app.use(express.json());
app.use('/uploads/products', express.static(path.join(__dirname, 'uploads/products')));
app.use('/uploads/profile', express.static(path.join(__dirname, 'uploads/profile')));
app.use("/cart",cartRouter)

app.listen(8000, ()=>{
    console.log("server running...");
});

