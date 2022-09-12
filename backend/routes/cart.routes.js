const express = require("express");
const router = express.Router();
const cart = require("../controller/cart.controller");

router
  .route("/")
  .get(cart.getAllItem)
  .post(cart.AddToCart)
  .delete(cart.deleteAll)

router.route("/:id")
  .get(cart.getItemsById)
  .delete(cart.DeleteFromCart);

module.exports = router;
