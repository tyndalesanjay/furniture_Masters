const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creates a new Order Schema with field containing objects.
let orderSchema = new Schema(
  {
    customername: {
      type: String,
      required: true,
    },
    ordernumber: {
      type: String,
      required: true,
    },
    orderTotal: {
      type: Number,
      required: true,
    },
    // Returns an Array of products.
    products: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    status: {
      type: String,
      default: "Unpaid",
    },
  },
  {
    timestamps: true,
  }
);
// Sets the order model.
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
