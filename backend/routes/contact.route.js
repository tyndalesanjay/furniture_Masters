const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact-us.controller')

router.route('/')
    .get(contactController.getAll)
    .post(contactController.createMessage)

router.route('/:id')
    .get(contactController.getById)
    .put(contactController.updateMessage)
    .delete(contactController.deleteMessage)
    
module.exports = router
