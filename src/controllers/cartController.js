const cartModel = require("../models/cart");

const addItemToCart = async (req, res) => {
    const { userId, id, title, price, description, category, image } = req.body;

    const newItem = new cartModel ({
        userId: userId,
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image

    });

    try {
      const savedCartItem = await newItem.save();
      res.status(200).json({ message: "Item added to cart", newItem: savedCartItem });
    } catch (err) {
      res.status(500).json({ message: "Error adding item to cart", error: err });
    }
  };

  const getItemsFromCart = async (req, res) => {
    try {
      const userId = req.body.userId;
      const cartItems = await cartModel.find({ userId: userId });
      res.status(200).json(cartItems);
    } catch (err) {
      res.status(500).json({ message: "Error getting cart items", error: err });
    }
  };

  const deleteItemsFromCart = async (req, res) => {
    const userId = req.body.userId;
    const itemId = req.params.id;
  
    try {
      const deletedItem = await cartModel.deleteOne({ userId: userId, id: itemId });
      res.status(200).json({
        message: "Item deleted successfully",
        deletedItem: deletedItem
      });
    } catch (err) {
      res.status(500).json({
        message: "Error deleting item from cart",
        error: err
      });
    }
  };

module.exports = {addItemToCart, getItemsFromCart, deleteItemsFromCart};