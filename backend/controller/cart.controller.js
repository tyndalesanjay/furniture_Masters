const Cart = require("../models/cart.model");

// Get all products in the cart
exports.getAllItem = async (req, res, next) => {
  try {
    let get_All = await Cart.find().populate("productID");
    res.status(200).json({
      status: "Success",
      length: get_All.length,
      results: get_All,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
};
// Create a new cart.
exports.AddToCart = async (req, res) => {
  try {
    const create_Item = await Cart.create(req.body);
    res.status(200).json({
      status: "Success",
      length: create_Item.length,
      results: create_Item,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.getItemsById = async (req, res) => {
  try {
    const items = await Cart.findById(req.params.id);
    JSONResponse.success(res, "Success", items, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Delete an item from the cart
exports.DeleteFromCart = async (req, res) => {
  try {
    const delete_item = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      length: delete_item.length,
      results: delete_item,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
};
// Delete all items in the cart.
exports.deleteAll = async (req, res) => {
  try {
    const delete_all = await Cart.deleteMany();
    res.status(200).json({
      status: "Success",
      length: delete_all.length,
      results: delete_all,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error,
    });
  }
};
