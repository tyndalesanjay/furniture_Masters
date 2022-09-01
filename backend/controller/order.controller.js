const Order = require("../models/order.models");
const { JSONResponse } = require("../lib/helper");

exports.getOrders = async (req, res) => {
  try {
    let orders = await Order.find().populate('products');
    JSONResponse.success(res, "Success", orders, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling Order model", error, 500);
  }
};

exports.createOrder = async (req, res) => {
  try {
    let finalOrder = await Order.create({
        customername: req.body.customername,
        ordernumber: req.body.ordernumber,
        products:  req.body.products
    });
    JSONResponse.success(res, "Success", finalOrder, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling Order model", error, 500);
  }
};
