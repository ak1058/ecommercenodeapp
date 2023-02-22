const pastOrderModel = require("../models/pastOrder");

const addToPastOrderList = async (req, res) => {
    const { userId, name, address, id, title, price, description, category, image } = req.body;

    const newItem = new pastOrderModel ({
        userId: userId,
        name: name,
        address: address,
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image

    });

    try {
      const savedOrder = await newItem.save();
      res.status(200).json({ message: "Item added to pastOrderList", newItem: savedOrder });
    } catch (err) {
      res.status(500).json({ message: "Error adding item to cart", error: err });
    }
  };

const getPastOrders = async (req, res) => {
    try {
      const userId = req.body.userId;
      const savedItems = await pastOrderModel.find({ userId: userId });
      res.status(200).json(savedItems);
    } catch (err) {
      res.status(500).json({ message: "Error getting past orders items", error: err });
    }
  };

  module.exports = {addToPastOrderList, getPastOrders};