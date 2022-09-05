const express = require("express");
const login = require("../controller/index.controller");
const router = express.Router();

const { authMiddleware } = require("../controller/user.controller");

router.post("/register", login.register);
router.post("/login", login.login);

module.exports = router;
