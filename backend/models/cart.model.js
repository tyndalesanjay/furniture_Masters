const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }
})

const Cart = mongoose.model('carts', cartSchema)
module.exports = Cart
