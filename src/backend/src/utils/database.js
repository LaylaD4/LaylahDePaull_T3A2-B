const mongoose = require("mongoose");

// To connect to the database
async function connectDB() {
    let databaseUrl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/backend";

    try {
        await mongoose.connect(databaseUrl);
        console.log(databaseUrl);
        // Using ternary operator to check whether database is connected to Atlas or locally.
        console.log(`Connected to MongoDB: ${databaseUrl.includes("mongodb+srv") ? "Atlas" : "Local"}`);
    } catch (error) {
        console.error("Error connecting to MongoDB!: ", error);
        process.exit(1);
    }

}

// To drop the entire database
async function dbDrop() {
    try {
        await mongoose.connection.db.dropDatabase();
        console.log("Entire Database dropped!");
    } catch (error) {
        console.error("Error when dropping entire database:", error);
    }
}

// To disconnect from the database
async function disconnectDB() {
    try {
        await mongoose.connection.close();
        console.log("Disconnected from the MongoDB!");
    } catch (error) {
        console.error("Error disconnecting from MongoDB: ", error);
    }
}

module.exports = { 
    connectDB,
    dbDrop,
    disconnectDB
 }