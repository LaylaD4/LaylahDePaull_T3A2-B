const mongoose = require("mongoose");

// Create Order Schema Using Mongoose
const OrderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cartItems: [
        {
            title: String,
            price: Number,
            quantity: Number
        }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["unfulfilled", "fulfilled"], // enum only allows these two values
        default: "unfulfilled"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// Order Model based on schema
const OrderModel = mongoose.model("Order", OrderSchema);

// Export Order Model
module.exports = { OrderModel };