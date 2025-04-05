const { app } = require("./server.js");
const { connectDB } = require("./utils/database.js");
require("dotenv").config();

// Get the PORT 
const PORT = process.env.PORT || 8008;

app.listen(PORT, async () => {
    await connectDB(); // Connect to MongoDB atlas or local
    console.log(`Server is running on port: ${PORT}`); // Connect to PORT (5000) or 8008
});
