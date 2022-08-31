const express = require('express')
const {
    createUser,
    updateUser,
    getAllUsers,
    getUsersbyId,
    deleteUserById
} = require('../controller/user.controller')

const router = express.Router();

router.route('/').post(createUser).get(getAllUsers);

router.route('/users/:id').delete(deleteUserById).get(getUsersbyId).patch(updateUser)

module.exports = router;