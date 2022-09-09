const express = require('express');
const router = express.Router();
const contact = require('../controller/contact-us.controller')

router.route('/')
    .get(contact.getAll)
    .post(contact.createMessage)

router.route('/:id')
    .get(contact.getById)
    .put(contact.updateMessage)
    .delete(contact.deleteMessage)
    
module.exports = router
