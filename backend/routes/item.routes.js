const express = require("express");
const {
  createItem,
  deleteItemById,
  getItemsById,
  updateItem,
  getAllItems,
  SearchItem,
} = require("../controller/item.controller");

const router = express.Router();

router.route("/").post(createItem).get(getAllItems);

router.route("/all/:key").get(SearchItem);

router.route("/:id").delete(deleteItemById).get(getItemsById).put(updateItem);

module.exports = router;
