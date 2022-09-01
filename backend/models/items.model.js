const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    category: {
        type: String,
    },
    
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Item', itemSchema)