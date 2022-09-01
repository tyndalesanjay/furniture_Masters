const express = require("express");
const { getOrders, createOrder } = require("../controller/order.controller");
const router = express.Router();

router.route('/').get(getOrders).post(createOrder);

module.exports = router