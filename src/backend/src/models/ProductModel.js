const mongoose = require("mongoose");

// Create Product Schema Using Mongoose
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    videoURL: {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Product Model based on schema
const ProductModel = mongoose.model("Product", ProductSchema)

// Export Product Model
module.exports = { ProductModel }