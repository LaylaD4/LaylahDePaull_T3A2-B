const { OrderModel } = require("../models/OrderModel");

// Create an Order (For Customers)
const createOrder = async (request, response) => {
    try {
        const { name, email, address, cartItems, total } = request.body;

        // Ensure all required fields are filled in; name, email, address, & at least one item in the shopping cart
        if (!name || !email || !address || !cartItems.length) {
            return response
                .status(400)
                .json({ message: "All fields are required to be filled." });
        }

        // Get the last order in the database (to create a new order number)
        const lastOrder = await OrderModel.findOne().sort({ orderNumber: -1 });

        // If there's an existing order (lastOrder), increment that order number by 1 for new order. Otherwise, start from order# 2000.
        const newOrderNumber = lastOrder ? lastOrder.orderNumber + 1 : 2000;

        // Create an order 
        const order = new OrderModel({
            orderNumber: newOrderNumber,
            name,
            email,
            address,
            cartItems,
            total
        });

        // Save the new order to the database
        await order.save();

        response
            .status(201)
            .json(order);

    } catch (error) {
        response
            .status(500)
            .json({ error: error.message });
    }
};

// ADMIN ONLY ROUTES BELOW - will use middleware to verify admin access by getting isAdmin from the token created during login.

// Get all orders (Admin only) 
async function getOrders(request, response) {
    try {
        // Get all orders from the database, starting with the newest first
        const orders = await OrderModel.find().sort({ createdAt: -1 });
        response
            .status(200)
            .json(orders);
    } catch (error) {
        response
            .status(500)
            .json({ message: error.message });
    }
}

// Get a single order by ID (Admin only)
const getOrderById = async (request, response) => {
    try {
        // Get order ID from URL request params
        const { orderId } = request.params;
        
        // Now find the order by with that ID
        const order = await OrderModel.findById(orderId);

        if (!order) {
            return response
            .status(404)
            .json({ message: "Order not found" });
        }
        // Return the order 
        response.json(order);

    } catch (error) {
        response
        .status(500)
        .json({ message: error.message });
    }
};

// Toggle order status between "unfulfilled" and "fulfilled" (Admin only)
async function updateOrderStatus(request, response) {
    try {
        // To find order, get the Id from URL request params
        const order = await OrderModel.findById(request.params.id);
        
        if (!order) {
            return response
            .status(404)
            .json({ message: "Order not found" });
        }

        // Toggle (change) the orders status by using a ternary operator
        order.status = order.status === "unfulfilled" ? "fulfilled" : "unfulfilled";
        
        // Save the updated order status
        await order.save();

        // Return updated order
        response
        .status(200)
        .json(order);

    } catch (error) {
        response
        .status(500)
        .json({ message: error.message });
    }
}



module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus
};
