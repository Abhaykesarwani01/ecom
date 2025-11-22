const userService = require('../services/user.service');
const CartItem = require('../models/cartItem.model');

async function updateCartItem(userId, cartItemId, cartItemData){ 
    try {
        const item = await findCartItemById(cartItemId);
        if(!item){
            throw new Error("CartItem not found with id : ",cartItemId);
        }
        const user = await userService.findUserById(item.userId);
        if(!user){
            throw new Error("User not found with id : ",userId);
        }
        if(user._id.toString()===userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const UpdateCartItem = await item.save();
            return UpdateCartItem;
        }else{
            throw new Error("You can't update this cart item");
        }
    }catch (error) {
        throw new Error("Error updating cart item: " + error.message);
    }
}
async function removeCartItem(userId, cartItemId){
    try {
        const cartItem = await findCartItemById(cartItemId);
        const user = await userService.findUserById(cartItem.userId);
        
        if(user._id.toString()===cartItem.userId.toString()){
            await CartItem.findByIdAndDelete(cartItemId);
        }
    }catch (error) {
        throw new Error("you can't remove another user's cart item: " + error.message);
    }
}

async function findCartItemById(cartItemId){
    try {
        const cartItem =  await CartItem.findById(cartItemId);
        if(cartItem){
            return cartItem;
        }else{
            throw new Error("CartItem not found with id : ",cartItemId);
        }
    } catch (error) {
        throw new Error("Error finding cart item: " + error.message);
    }
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}