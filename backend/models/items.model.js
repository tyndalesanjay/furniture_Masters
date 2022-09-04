// Creates a mongoose schema for Items Schema.
const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    // Creates a required type and trims it.
    name: {
      type: String,
      required: true,
      trim: true,
    },
    // Returns the image url for an image.
    imageUrl: {
      type: String,
      required: true,
    },
    // Defines a description for the required flag.
    description: {
      type: String,
      required: true,
    },
    // The required flag is true if the category is required.
    category: {
      type: String,
      required: true,
    },
    // Creates a quantity.
    quantity: {
      type: Number,
      required: true,
    },
    // Creates a price.
    price: {
      type: Number,
      required: true,
    },
  },
  // Returns a timestamp.
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Item", itemSchema);
