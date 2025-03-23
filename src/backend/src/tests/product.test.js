const request = require("supertest") // Used for testing routes
const express = require("express") // Create test app
const mongoose = require("mongoose") // To Connect to MongoDB
const productRoutes = require("../routes/productRoutes") // Import product routes
const { ProductModel } = require("../models/ProductModel") // Import Product model
const { getProducts, getProductById, createProductSeed } = require("../controllers/productController") // Import Controller functions

// Set up Express app and add product routes
const app = express()
app.use(express.json())
app.use("/api/products", productRoutes)

// Connect to test MongoDB database before all tests run
beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/product_test_db")
})

// Clear the products collection before each test is run
beforeEach(async () => {
  await ProductModel.deleteMany()
})

// Close the database connection after all tests finish
afterAll(async () => {
  await mongoose.connection.close()
})

describe("Product Routes", () => {
  // Below are INTEGRATION TESTS using Supertest and product routes

  // Test - GET all products in an Array that is empty (should return [])
  test("GET /api/products returns 200 and empty array", async () => {
    const response = await request(app).get("/api/products")
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([])
  })

  // Test - GET a specific product by its ID
  test("GET /api/products/:id returns a product", async () => {
    // First create a product in the database
    const product = await ProductModel.create({
      title: "Rainbow Flower Kit",
      price: 109.95,
      description: "A beautiful kit for creating flowers...",
      image: "/rainbow-flower.png",
      videoURL: "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    })

    // Make a request for that product's by its ID
    const response = await request(app).get(`/api/products/${product._id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.title).toBe("Rainbow Flower Kit")
  })

  // Test - GET a product that doesn't exist (should return status code 404, and message)
  test("GET /api/products/:id returns 404 if not found", async () => {
    const id = new mongoose.Types.ObjectId() // Note: This new objects ID does not match any product
    const response = await request(app).get(`/api/products/${id}`)
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe("Product Not Found")
  })
})

describe("Product Controller", () => {
  // Below are UNIT TESTS for the controller functions

  // Test - getProducts returns an array of products
  test("getProducts returns an array of products", async () => {
    // Add one product to the database
    await ProductModel.create({
      title: "Rainbow Flower Kit",
      price: 109.95,
      description: "A beautiful kit for creating flowers...",
      image: "/rainbow-flower.png",
      videoURL: "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    })

    // Need to create a mock response to get returned product data
    let output
    const response = {
      json: (data) => {
        output = data
      }
    }

    await getProducts({}, response)
    expect(output).toBeInstanceOf(Array)
    expect(output.length).toBe(1)
  })

  // Test - getProductById returns a single product
  test("getProductById returns a product object", async () => {
    // Create a product
    const product = await ProductModel.create({
      title: "Rainbow Flower Kit",
      price: 109.95,
      description: "A beautiful kit for creating flowers...",
      image: "/rainbow-flower.png",
      videoURL: "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    })

    // Create a mock request and response
    let output
    const request = { params: { id: product._id } }
    const response = {
      json: (data) => {
        output = data
      }
    }

    await getProductById(request, response)
    expect(output.title).toBe("Rainbow Flower Kit")
  })

  // Test - createProductSeed adds a new product to the database
  test("createProductSeed creates a new product", async () => {
    const product = await createProductSeed(
      "Rainbow Flower Kit",
      109.95,
      "A beautiful kit for creating flowers...",
      "/rainbow-flower.png",
      "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    )

    expect(product.price).toEqual(109.95)

    // Check it was saved to the database
    const found = await ProductModel.findById(product._id)
    expect(found).not.toBeNull()
  })
})



