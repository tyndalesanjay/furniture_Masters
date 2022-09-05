const User = require("../models/user.model");
const { JSONResponse } = require("../lib/helper");

// Get a list of users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Get a user by id
exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Creates a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Updates a user.
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

// Deletes an item model
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) user.delete();
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};
