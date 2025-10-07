const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        // required: true
    },
    orderItems: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
    }],
    orderDate: { type: Date, required: true, default: Date.now() },
    deliveryDate: { type: Date },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",   
    },
    paymentDetails: {
        paymentMethod: { type: String, required: true },
        transactionId: { type: String },
        paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
    },
    totalPrice: { type: Number, required: true },
    totalDiscountedPrice: { type: Number, required: true },
    discount: { type: Number, required: true},
    orderStatus: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    totalItem: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
    
    