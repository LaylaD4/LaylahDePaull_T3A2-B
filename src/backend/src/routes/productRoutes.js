const express = require("express");
const { getProducts, getProductById } = require("../controllers/productController");

// Create a router to define product routes
const router = express.Router()

// GET /api/products - route to get all products
router.get("/", getProducts);

// GET /api/products/:id - route to get a specific product by it's ID
router.get("/:id", getProductById);


module.exports = router;