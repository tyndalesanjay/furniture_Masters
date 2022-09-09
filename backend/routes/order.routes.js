const express = require("express");
const order = require('../controller/order.controller')
const router = express.Router();

router.route("/").get(order.getOrders).post(order.createOrder);

router.route("/:id").get(order.getOrderById).put(order.updateOrder).delete(order.deleteOrder);

module.exports = router;
