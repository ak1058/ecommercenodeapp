const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    id : {
        type: Number,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    }
    
}, {timestamps: true});

module.exports = mongoose.model("Cart", cartSchema);