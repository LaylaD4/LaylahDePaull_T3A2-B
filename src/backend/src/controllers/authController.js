require("dotenv").config(); // To load .env variables (JWT_SECRET)
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 

// Register a new user
async function registerUser(request, response) {
    const { email, password } = request.body;

    // Check if the users email is already in the database
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
        return response
        .status(400)
        .json({ message: "User already exists!" });
    }

    // Encrypt the user's password using bcrypt (hash with salt)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Count the number of registered users in the database (users collection) using mongoose method: countDocuments()
    const userCount = await UserModel.countDocuments();

    // Allow only the first two users to register, and be admins.
    if (userCount >= 2) {
        return response
        .status(403) 
        .json({ message: "Registration is closed. No new users can be created." });
    }

    // Create a new user in the database
    const user = await UserModel.create({
        email,
        password: hashedPassword,
        isAdmin: userCount < 2 // isAdmin set to true for the first 2 registtered users, then false
    });

    response
    .status(201)
    .json({ message: "User registered successfully!" });
}


// Login a user and return a JWT token
async function loginUser(request, response) {
    const { email, password } = request.body;

    // Check if the user already exists in the database using email entered
    const user = await UserModel.findOne({ email });

    if (!user) {
        return response
        .status(400)
        .json({ message: "Invalid credentials." });
    }

    // Compare the password entered with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return response
        .status(400)
        .json({ message: "Invalid password." });
    }

    // Create a JWT token for authentication (valid for just 1 hour) 
    const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin }, // Store user ID & admin status in token
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    // Return the JWT token for frontend authentication
    response.json({ token });
}

module.exports = {
    registerUser,
    loginUser
};


