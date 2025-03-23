const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const orderRoutes = require("../routes/orderRoutes")
const { OrderModel } = require("../models/OrderModel")
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require("../controllers/orderController")

// Set up Express app and add order routes
const app = express()
app.use(express.json())
app.use("/api/orders", orderRoutes)

// Connect to test MongoDB database before all tests run
beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/order_test_db")
})

// Clear the orders collection before each test is run
beforeEach(async () => {
    await OrderModel.deleteMany()
})

// Close the database connection after all tests finish
afterAll(async () => {
    await mongoose.connection.close()
})

describe("Order Routes", () => {
    // Below are INTEGRATION TESTS using Supertest and order routes

    // Test - This should create a new order
    test("POST /api/orders creates a new order", async () => {
        const orderData = {
            name: "Sophie Moreau",
            email: "ella@email.com",
            address: "32 The Esplanade Cronulla",
            cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 1 }],
            total: 109.95
        }

        const response = await request(app)
            .post("/api/orders")
            .send(orderData)

        // Check order data  
        expect(response.statusCode).toBe(201)
        expect(response.body.name).toBe("Sophie Moreau")
        expect(response.body.cartItems.length).toBe(1)
    })

    // Test - This checks if all required fields are filled
    test("POST /api/orders returns 400 if fields are missing", async () => {
        const response = await request(app)
            .post("/api/orders")
            .send({ email: "bailey@email.com", cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 1 }], total: 109.95 })

        // Check correct response and message returned
        expect(response.statusCode).toBe(400)
        expect(response.body.message).toBe("All fields are required to be filled.")
    })
})

describe("Order Controller", () => {
    // Below are UNIT TESTS for the controller functions

    // Test - createOrder adds a new order to database
    test("createOrder saves order with correct data", async () => {
        const request = {
            body: {
                name: "Hannah Martin",
                email: "hannah@email.com",
                address: "44 Alexandra St Hunters Hill",
                cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 1 }],
                total: 109.95
            }
        }

        // Mock response to get returned data - need to include status
        let output
        const response = {
            status: () => ({
                json: (data) => {
                    output = data
                }
            })
        }

        await createOrder(request, response)

        // Check order is created in database
        const order = await OrderModel.findOne({ email: "hannah@email.com" })
        expect(order).not.toBeNull()
        expect(order.name).toBe("Hannah Martin")
        expect(order.cartItems.length).toBe(1)
    })

    // Test - getOrders returns all orders from database
    test("getOrders returns array of orders", async () => {
        await OrderModel.create({
            orderNumber: 2000,
            name: "Cloey Wells",
            email: "cloey@email.com",
            address: "14 Hastings St Noosa",
            cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 2 }],
            total: 219.90
        })

        // mock response 
        let output
        const response = {
            status: () => ({
                json: (data) => {
                    output = data
                }
            })
        }

        await getOrders({}, response)

        // Check orders returned (array with one order) 
        expect(output).toBeInstanceOf(Array)
        expect(output.length).toBe(1)
    })

    // Test - getOrderById returns a specific order by its Id
    test("getOrderById returns a specific order", async () => {
        const order = await OrderModel.create({
            orderNumber: 2001,
            name: "Freya Miller",
            email: "freya@email.com",
            address: "41 Raglan St Manly",
            cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 1 }],
            total: 109.95
        })

        const request = { params: { orderId: order._id } }

        // mock response
        let output
        const response = {
            json: (data) => {
                output = data
            }
        }

        await getOrderById(request, response)

        // Check that specific order is returned
        expect(output.name).toBe("Freya Miller")
        expect(output.orderNumber).toEqual(2001)
    })

    // Test - updateOrderStatus toggles an order's status between: "unfulfilled" (default) and "fulfilled"
    test("updateOrderStatus toggles order status", async () => {
        const order = await OrderModel.create({
            orderNumber: 2002,
            name: "McKenzie Williams",
            email: "mac@email.com",
            address: "124 Malley Way Bondi",
            cartItems: [{ title: "Rainbow Flower Kit", price: 109.95, quantity: 1 }],
            total: 109.95,
            status: "unfulfilled"
        })

        const request = { params: { id: order._id } }

        // Mock response, include status
        let output
        const response = {
            status: () => ({
                json: (data) => {
                    output = data
                }
            })
        }

        await updateOrderStatus(request, response)

        const updated = await OrderModel.findById(order._id)

        // Check if order status has changed from "unfulfilled" -> "fulfilled"
        expect(updated.status).toBe("fulfilled")
    })
})
