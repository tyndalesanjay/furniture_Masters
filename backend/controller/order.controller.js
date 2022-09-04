const Order = require("../models/order.models");
const { JSONResponse } = require("../lib/helper");

exports.getOrders = async (req, res) => {
  try {
    let orders = await Order.find().populate('products');
    res.status(200).json({
      status: "Success",
      length: orders.length,
      results: orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    let finalOrder = await Order.create({
      customername: req.body.customername,
      ordernumber: req.body.ordernumber,
      orderTotal: req.body.orderTotal,
      products: req.body.products,
    });
    JSONResponse.success(res, "Success", finalOrder, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling Order model", error, 500);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    let order = await Order.findById(req.params.id).populate('products');
    res.status(200).json({
      status: "Success",
      length: order.length,
      results: order,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
}

exports.updateOrder = async (req, res) => {
  try {
    let order = await Order.findByIdAndUpdate(req.params.id, req.body)
    JSONResponse.success(res, "Success", order, 200)
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure Handling Order model")
  }
}

exports.deleteOrder =  async (req, res) => {
  try {
    let order = await Order.findByIdAndDelete(req.params.id)
    JSONResponse.success(res, "Success", order, 200)
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure Handling Order model")
  }
}
