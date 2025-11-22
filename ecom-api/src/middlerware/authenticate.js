const jwtProvider = require('../config/jwtProvider');
const userService = require('../services/user.service');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(404).send({ error: 'No token provided' });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = userService.findUserById(userId);
        rec.user = user; // Attach user to request object
    } catch (error) {
        return res.status(401).send({ error: 'Invalid token' });
    }
    next();
}

module.exports = authenticate;

        