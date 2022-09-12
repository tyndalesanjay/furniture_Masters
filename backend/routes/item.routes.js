const express = require("express");
const item = require("../controller/item.controller");

const router = express.Router();

router.route("/").post(item.createItem).get(item.getAllItems);

router.route("/all/:key").get(item.SearchItem);

router.route("/:id").delete(item.deleteItemById).get(item.getItemsById).put(item.updateItem);

module.exports = router;
