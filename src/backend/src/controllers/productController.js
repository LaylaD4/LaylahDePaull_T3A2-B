const { ProductModel } = require("../models/ProductModel")

// Create a product for seeding
async function createProductSeed(title, price, description, image, videoURL) {
    let product = await ProductModel.create({
        title: title,
        price: price,
        description: description,
        image: image,
        videoURL: videoURL,
    });

    return product;
}

// Get all products
const getProducts = async (request, response) => {
    try {
        // Get all products from collection
        const products = await ProductModel.find();

        if (!products.length) {
            console.log("No products found in the database!")
        }
        // Return products
        response.json(products);

    } catch (error) {
        response
        .status(500)
        .json({ message: error.message})
    }
}

// Get one product by ID
const getProductById = async (request, response) => {
    try {
        // Find product in the database by ID from request params
        const product = await ProductModel.findById(request.params.id);
        
        // Make sure product exists
        if (!product) {
            return response
            .status(404)
            .json({ message: "Product Not Found" })
        }
        // Return Product
        response.json(product);
        
    } catch (error) {
        response
        .status(500)
        .json({ message: error.message})
    }
}

module.exports = {
    createProductSeed,
    getProducts,
    getProductById
}