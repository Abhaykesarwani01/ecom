const ratingService = require('../services/rating.service');

const createRating = async (req, res) => {
    const user = req.user; // Assuming user info is attached to req object after authentication middleware
    try {
        const rating = await ratingService.createRating(req.body, user);
        res.status(201).send(rating);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const getAllRatings = async (req, res) => { 
    const productId = req.params.productId;
    try {
        const ratings = await ratingService.getAllRatings(productId);
        res.status(200).send(ratings);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createRating,
    getAllRatings,
}