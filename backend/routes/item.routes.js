const express = require("express");
const {
  createItem,
  deleteItemById,
  getItemsbyId,
  updateItem,
  getAllItems,
  SearchItem,
} = require("../controller/item.controller");

const router = express.Router();

router.route("/").post(createItem).get(getAllItems);

router.get("/search/:key", SearchItem);

router.route("/:id").delete(deleteItemById).get(getItemsbyId).put(updateItem);

module.exports = router;
