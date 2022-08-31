const express = require('express');
const router = express.Router();
const cart = require('../controller/cart.controller')

router
    .get('/', cart.getAllItem)
    .post('/', cart.AddToCart)
    .delete('/delete', cart.deleteAll)
    .delete('/:id', cart.DeleteFromCart)

module.exports = router