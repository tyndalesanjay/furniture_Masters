const express = require('express')
const {
    createUser,
    updateUser,
    getAllUsers,
    getUsersById,
    deleteUserById
} = require('../controller/user.controller')

const router = express.Router();

router.route('/').post(createUser).get(getAllUsers);

router.route('/users/:id').delete(deleteUserById).get(getUsersById).patch(updateUser)

module.exports = router;