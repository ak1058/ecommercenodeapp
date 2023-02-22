const express = require("express");
const { getPastOrders, addToPastOrderList } = require("../controllers/pastOrderController");
const pastOrderRouter = express.Router();

pastOrderRouter.get("/pastOrders", getPastOrders);

pastOrderRouter.post("/pastOrders", addToPastOrderList);

module.exports = pastOrderRouter;
