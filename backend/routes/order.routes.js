const express = require("express");
const { getOrders, createOrder, getOrderById, updateOrder, deleteOrder } = require("../controller/order.controller");
const router = express.Router();

router.route('/')
    .get(getOrders)
    .post(createOrder);

router.route('/:id')
    .get(getOrderById)
    .put(updateOrder)
    .delete(deleteOrder)

module.exports = router