const express = require("express");
const cartRouter = require("./routes/cartRoutes");
const pastOrderRouter = require("./routes/pastorderRoutes");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const productModel = require("./models/productModel");
const Product = require("./models/productModel");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) =>{
    res.send("E commerce api");
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log("Database connected\nServer started on port: " + PORT);
    });
})
.catch((error) => {
    console.log(error)
})


app.use(bodyParser.json());

//cart route
app.use("/cart", cartRouter)

//past order Route
app.use("/orders", pastOrderRouter)



//getallProducts
app.get('/getAllProducts', async (req, res) => {
    try {
        const AllProducts = await Product.find({});
        res.json(AllProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error retrieving products", error: err });
    }
});


