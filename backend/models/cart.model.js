const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the schema for the let cart.
let cartSchema = new Schema({
    productID: {
        type: Schema.Types.ObjectId,
        // Item Schema reference.
        ref: 'Item',
        required: true
    }
})

// Creates a mongoose cart model.
const Cart = mongoose.model('carts', cartSchema)
module.exports = Cart
