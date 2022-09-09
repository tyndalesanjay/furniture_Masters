const { JSONResponse } = require("../lib/helper");
const Items = require("../models/items.model");
// Get all items/products from the database
exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    JSONResponse.success(res, "Success", items, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};
// Searches for items/products by name and category.
exports.SearchItem = async (req, res, next) => {
  try {
    let items = await Items.find({
      $or: [{ name: { $regex: req.params.key, $options: "i" } }],
      $or: [{ category: { $regex: req.params.key, $options: "i" } }],
    });
    res.status(200).json({
      status: "Success",
      length: items.length,
      results: items,
    });
  } catch (error) {
    res.status({
      status: "Fail",
      message: error,
    });
  }
  next();
};

// Get items/products by id
exports.getItemsById = async (req, res) => {
  try {
    const items = await Items.findById(req.params.id);
    JSONResponse.success(res, "Success", items, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Create a new item/product
exports.createItem = async (req, res) => {
  try {
    const item = await Items.create(req.body);
    JSONResponse.success(res, "Success", item, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Updates an existing item/product by id
exports.updateItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    JSONResponse.success(res, "Success", item, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Delete an item
exports.deleteItemById = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (item) await item.delete();
    JSONResponse.success(res, "Success", item, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};
