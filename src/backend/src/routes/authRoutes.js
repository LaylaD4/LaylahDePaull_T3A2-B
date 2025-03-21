const express = require("express")
const { registerUser, loginUser } = require("../controllers/authController");

// Create a router to define auth routes
const router = express.Router();

// POST /api/auth/register - route to register a new admin user
router.post("/register", registerUser);

// POST /api/auth/login - route to login an admin user
router.post("/login", loginUser);

module.exports = router;