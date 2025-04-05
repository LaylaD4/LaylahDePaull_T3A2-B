const mongoose = require("mongoose");

// Create User Schema Using Mongoose
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false // Default users are not admins
    }
});

// User Model based on schema
const UserModel = mongoose.model("User", UserSchema);

// Export User Model
module.exports = { UserModel };