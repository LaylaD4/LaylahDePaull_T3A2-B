const { connectDB, disconnectDB, dbDrop } = require("./database");

// Fuction to drop entire database and disconnect from the database
async function drop() {
    await dbDrop();
    await disconnectDB();
    console.log("Disconnected from database!");
}

// Connect, then drop the entire database, then disconnect from the database
connectDB().then(() => {
    console.log("Connected to the Database. Dropping now...");
    drop();
});