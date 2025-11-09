const cartService = require('../services/cart.service');

async function createOrder(user, shipAddress){
    let address;
    if(shipAddress._id){
        let existAddress = await Address.findById(shipAddress._id);
        address = existAddress;
    }else{
        address = new Address(shipAddress);
        address.user = user;
        await address.save();

        user.addresses.push(address);
        await user.save();
    }
    
    const cart = await cartService.findUserByCart(user._id);
    const orderItems = [];
    for(cont item of cart.cartItems){
        const orderItem = new orderItems({
            price: item.price,
            product: item.product._id,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice,
        });
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem);
    }

    const order = new Order({