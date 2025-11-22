const express = require('express');
const router = express.Router();
const CartItemController = require('../controller/cartItem.controller');
const authenticate = require('../middlerware/authenticate');

router.put('/:id', authenticate, CartItemController.updateCartItem);
router.delete('/:id', authenticate, CartItemController.removeCartItem);

module.exports = router;