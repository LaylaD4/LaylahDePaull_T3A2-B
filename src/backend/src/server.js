const express = require("express");
const app = express();

// Middleware to parse json
app.use(express.json());

// Access static images from the public folder for seeding
app.use(express.static("public"));

// Test Route
app.get("/", (request, response) => {
    response.json({ message: "Hello World!"});
});

module.exports = { app };
