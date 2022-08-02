const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.post('/users/login', usersController.userLoginV1)
router.post('/users', usersController.createUserV1)
router.get('/users/:userid', usersController.getUserV1)
router.put('/users/:userid', usersController.updateUserV1)
router.delete('/users/:userid', usersController.deleteUserV1)

module.exports = router;
