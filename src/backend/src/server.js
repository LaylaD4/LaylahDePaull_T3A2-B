const express = require("express");
const app = express();

// Middleware to parse json
app.use(express.json());

// Test Route
app.get("/", (request, response) => {
    response.json({ message: "Hello World!"});
});

module.exports = { app };
