const express = require("express")
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require("../controllers/orderController");
const { validateToken, adminAuth } = require("../middleware/authMiddleware");

// Create a router to define order routes
const router = express.Router();

// POST /api/orders - route to create an order (customer)
router.post("/", createOrder);

// ADMIN ONLY ROUTES BELOW - MIDDLEWARE ADDED TO PROTECTED ROUTES 

// GET /api/orders - route to get all orders (Added middleware)
router.get("/", validateToken, adminAuth, getOrders);

// GET /api/order/:orderId - route to get a specific order by it's ID (Added middleware)
router.get("/orderId", validateToken, adminAuth, getOrderById);

// PATCH /api/orders/:id/status - route to update an orders status to either "fulfilled" or "unfulfilled" (Added middleware)
router.patch("/:id/status", validateToken, adminAuth, updateOrderStatus);

module.exports = router;
