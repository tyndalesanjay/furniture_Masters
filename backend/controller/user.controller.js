const User = require("../models/user.model");
const { JSONResponse } = require("../lib/helper");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

exports.getUsersbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    JSONResponse.success(res, "Success", user, 200);
  } catch (error) {
    console.log(error);
    JSONResponse.error(res, "Failure handling item model", error, 500);
  }
};

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
