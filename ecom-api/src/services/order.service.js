const cartService = require('../services/cart.service');
const Address = require('../models/address.model');
const Order = require('../models/order.model');
const OrderItem = require('../models/orderItems.model');

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
    
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for(const item of cart.cartItems){
        const orderItem = new OrderItem({
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

    const createdOrder = new Order({   
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount:cart.discount,
        totalItems: cart.totalItems,
        shippingAddress: address,
    })
    const savedOrder = await createdOrder.save();
    return savedOrder;
}

async function findOrderById(orderId){

    const order = await Order.findById(orderId)
    .populate('user')
    .populate({path:'orderItems', populate:{path:'product'}})
    .populate('shippingAddress');

    if(!order){
        throw new Error("Order not found with id : ",orderId);
    }
    return order;
}

async function userOrderHistory(userId){
    try {
        const orders = await Order.find({user:userId,orderStatus:'placed'})
        .populate({path:'orderItems', populate:{path:'product'}}).lean();

        return orders;
    }catch (error) {
        throw new Error("Error fetching user order history: " + error.message);
    }
}

async function getAllOrders(){
    return await Order.find()
    .populate({path:'orderItems', populate:{path:'product'}}).lean()
}

async function deleteOrder(orderId){
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
}

async function PlaceOrder(orderId){
    const order = await findOrderById(orderId);
    order.status = 'Placed';
    order.paymentDetails.status = 'completed';

    return await order.save();
}

async function confirmOrder(orderId){
    const order = await findOrderById(orderId);
    order.status = 'Confirmed';
    
    return await order.save();
}

async function shipOrder(orderId){
    const order = await findOrderById(orderId);
    order.status = 'Shipped';
    
    return await order.save();
}

async function deliverOrder(orderId){
    const order = await findOrderById(orderId);
    order.status = 'Delivered';
    
    return await order.save();
}   

async function cancelOrder(orderId){
    const order = await findOrderById(orderId);
    order.status = 'Cancelled';
    
    return await order.save();
}

module.exports = {
    createOrder,
    findOrderById,
    userOrderHistory,
    getAllOrders,
    deleteOrder,
    PlaceOrder,
    confirmOrder,
    shipOrder,
    deliverOrder,
    cancelOrder
}