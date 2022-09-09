const express = require('express')
const user = require('../controller/user.controller')
const {
    createUser,
    updateUser,
    getAllUsers,
    getUsersById,
    deleteUserById
} = require('../controller/user.controller')

const router = express.Router();

router.route('/').post(createUser).get(getAllUsers);

router.route('/:id').delete(deleteUserById).get(getUsersById).put(updateUser)

module.exports = router;