const express = require("express");
const app = express();
const cors = require("cors");

const productRoutes = require("./routes/productRoutes")
const videoRoutes = require("./routes/videoRoutes")
const orderRoutes = require("./routes/orderRoutes")
const authRoutes = require("./routes/authRoutes")

// Middleware to parse json
app.use(express.json());

// Need cors to allow requests from the frontend
app.use(cors());


// Access static images from the public folder for seeding
app.use(express.static("public"));

// Test Route
app.get("/", (request, response) => {
    response.json({ message: "Hello World!"});
});

// API Routes for products, videos, orders, and auth (admin register/login)
app.use("/api/products", productRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

module.exports = { app };
