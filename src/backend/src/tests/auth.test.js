const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authRoutes = require("../routes/authRoutes")
const { UserModel } = require("../models/UserModel")
const { registerUser, loginUser } = require("../controllers/authController")

// Create mock JWT secret for testing
process.env.JWT_SECRET = "testsecret"

// Set up Express app
const app = express()
app.use(express.json())
app.use("/api/auth", authRoutes)

// Connect to test database before tests run
beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/user_test_db")
})

// Clear users before each test
beforeEach(async () => {
    await UserModel.deleteMany()
})

// Disconnect after all tests
afterAll(async () => {
    await mongoose.connection.close()
})

describe("Auth Routes", () => {
    // Below are INTEGRATION TESTS using Supertest and auth routes

    // Test - register first user (should become admin user)  
    test("POST /api/auth/register registers first user as an admin", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({ email: "elise@email.com", password: "testing123" })

        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("User registered successfully!")

        const user = await UserModel.findOne({ email: "elise@email.com" })
        expect(user.isAdmin).toBe(true)
    })

    // Test - just the first 2 users can only register an account, then registration is closed (no 3rd user).
    test("POST /api/auth/register allows only 2 users", async () => {
        await request(app).post("/api/auth/register").send({ email: "lucyFirst@email.com", password: "testing123" })
        await request(app).post("/api/auth/register").send({ email: "alexSecond@email.com", password: "testing456" })

        // Third user - not allowed
        const response = await request(app).post("/api/auth/register").send({ email: "bridgetThird@email.com", password: "testing789" })

        expect(response.statusCode).toBe(403)
        expect(response.body.message).toBe("Registration is closed. No new users can be created.")
    })

    // Test - when a registered user logs in, a token created and is returned when login credentials are correct
    test("POST /api/auth/login returns a token", async () => {
        const hashed = await bcrypt.hash("testing123", 10)
        await UserModel.create({ email: "lucyAdmin@email.com", password: hashed, isAdmin: true })

        const response = await request(app)
            .post("/api/auth/login")
            .send({ email: "lucyAdmin@email.com", password: "testing123" })

        // Check token is login is successful, and token created
        expect(response.statusCode).toBe(200)
        expect(response.body.token).toBeDefined()

        // Check token contains the correct data - isAdmin
        const decoded = jwt.verify(response.body.token, process.env.JWT_SECRET)
        expect(decoded.isAdmin).toBe(true)
    })

    // Test - that user login fails if password entered is incorrect
    test("POST /api/auth/login with incorrect password fails", async () => {

        // register user with email and password
        const hashed = await bcrypt.hash("test123", 10)
        await UserModel.create({ email: "lucyAdmin@email.com", password: hashed })

        // login with incorrect password ("testing456", instead of "testing123")
        const response = await request(app)
            .post("/api/auth/login")
            .send({ email: "lucyAdmin@email.com", password: "testing456" })

        expect(response.statusCode).toBe(400)
        expect(response.body.message).toBe("Invalid password.")
    })

    // Test - login fails when the user logging in is not found in database
    test("POST /api/auth/login with non-existant user fails", async () => {
        const response = await request(app)
            .post("/api/auth/login")
            .send({ email: "zoe@email.com", password: "testing123" })

        expect(response.statusCode).toBe(400)
        expect(response.body.message).toBe("Invalid credentials.")
    })
})

describe("Auth Controller", () => {
    // Below are UNIT TESTS for the controller functions

    // Test - registerUser saves user and hashes password
    test("registerUser adds new user and hashes password", async () => {
        const request = { body: { email: "henley@email.com", password: "test123" } }

        // Mock response to get newly registered user data
        let output
        const response = {
            status: () => ({
                json: (data) => {
                    output = data
                }
            })
        }



        await registerUser(request, response)

        // Check for newly created user
        const user = await UserModel.findOne({ email: "henley@email.com" })
        expect(user).not.toBeNull()
        const match = await bcrypt.compare("test123", user.password)
        expect(match).toBe(true)
        expect(user.isAdmin).toBe(true)
    })

    // Test - registerUser blocks any new users registering an account after 2 are already registered, (even when setting isAdmin: true)
    test("registerUser blocks registration after 2 users", async () => {
        await UserModel.create({ email: "lucyFirst@email.com", password: "testing123" })
        await UserModel.create({ email: "alexSecond@email.com", password: "testing456" })

        const request = { body: { email: "bridgetThird@email.com", password: "testing789", isAdmin: true } }

        // Need to mock response status().json() to prevent test crashing
        const response = {
            status: () => ({
                json: () => { }
            })
        }

        await registerUser(request, response)

        // user should not have been created in the database, therefore should return "null".
        const user = await UserModel.findOne({ email: "bridgetThird@email.com" })
        expect(user).toBeNull()
    })

    // Test - loginUser creates and returns a token when correctly logged in
    test("loginUser returns token for valid user", async () => {
        const hashed = await bcrypt.hash("testing123", 10)
        const user = await UserModel.create({ email: "darcyAdmin@email.com", password: hashed, isAdmin: true })

        const request = { body: { email: "darcyAdmin@email.com", password: "testing123" } }

        // Mock response to get the token
        let token
        const response = {
            json: (data) => {
                token = data.token
            }
        }

        await loginUser(request, response)

        // Check token is created, and isAdmin
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        expect(decoded.userId).toBe(user._id.toString())
        expect(decoded.isAdmin).toBe(true)

    })
})
