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

module.exports = {
    createProductSeed
}