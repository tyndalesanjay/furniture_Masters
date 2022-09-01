const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
        customername: {
            type: String,
            required: true
        },
        ordernumber: {
            type: String,
            required: true
        },
        products: [
            {   type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
        status: {
            type: String,
            default: 'Unpaid'
        }
})

const Order = mongoose.model('orders', orderSchema)
module.exports = Order
