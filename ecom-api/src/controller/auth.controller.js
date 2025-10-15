const userService = require('../services/user.service');
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require('bcrypt');
const cartService = require('../services/cart.service');

const registerUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        // await cartService.createCart(user);

        return res.status(200).json({ jwt, message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getUserByEmail({email});
        if (!user) {
            return res.status(404).send({ message: "user not found with email :",email });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }
        const jwt = jwtProvider.generateToken(user._id);
        
        return res.status(200).json({ jwt, message: "User logged in successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    registerUser,
    login
}