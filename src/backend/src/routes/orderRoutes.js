const express = require("express")
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require("../controllers/orderController");

// Create a router to define order routes
const router = express.Router();

// POST /api/orders - route to create an order (customer)
router.post("/", createOrder);

// ADMIN ONLY ROUTES BELOW - WILL ADD MIDDLEWARE TO PROTECT ROUTES 

// GET /api/orders - route to get all orders
router.get("/", getOrders);

// GET /api/order/:orderId - route to get a specific order by it's ID
router.get("/orderId", getOrderById);

// PATCH /api/orders/:id/status - route to update an orders status to either "fulfilled" or "unfulfilled"
router.patch("/:id/status", updateOrderStatus);

module.exports = router;
