const express = require('express');
const login = require('../controller/index.controller');
const router = express.Router();

const { authMiddleware } = require('../controller/user.controller');

// router.get('/', user.getAllUser)

router.post('/register', login.register)
router.post('/login', login.login)
// router.get('/profile', authMiddleware, function (req, res) {
//   res.json({ 'access': true })
// })

module.exports = router;