const express = require('express')
const app = express();
const cors = require('cors');

const cartRouter = require('./Router/cart.router');

app.use(cors({orgin:'http://localhost:3000'}));
app.use(express.json());

app.use("/cart",cartRouter)

app.listen(8000, ()=>{
    console.log("server running...");
});

