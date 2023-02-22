const express = require("express");
const { getItemsFromCart, deleteItemsFromCart, addItemToCart } = require("../controllers/cartController");
const cartRouter = express.Router();

cartRouter.post("/product", addItemToCart );

cartRouter.get("/product", getItemsFromCart);

cartRouter.delete("/product/:id", deleteItemsFromCart);

module.exports = cartRouter;