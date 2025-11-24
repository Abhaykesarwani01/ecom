const orderService = require('../services/order.service');

const createOrder = async (req, res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.createOrder(user._id, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const findOrderById = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = await orderService.findOrderById(orderId);
        return res.status(200).send(order);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const userOrderHistory = async (req, res) => {
    const user = req.user;
    try {
        const orders = await orderService.userOrderHistory(user._id);
        return res.status(200).send(orders);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createOrder,
    findOrderById,
    userOrderHistory
};