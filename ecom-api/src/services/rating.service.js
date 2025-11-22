const Rating = require('../models/rating.model');
const productService = require('./product.service');

async function createRating(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: reqData.rating,
        createdAt: new Date(),
    });

    await product.save();
    return await rating.save();
}

async function getAllRatings(productId) {
    const product = await productService.findProductById(productId);
    return await Rating.find({ product: productId }).populate('user');
}

module.exports = {
    createRating,
    getAllRatings,
};