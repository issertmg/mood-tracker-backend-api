const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')
const auth = require('../middlewares/auth')

router.post('/login', usersController.loginV1)
router.post('/users', usersController.createUserV1)
router.get('/users/:userid', auth, usersController.getUserV1)
router.put('/users/:userid', auth, usersController.updateUserV1)
router.delete('/users/:userid', auth, usersController.deleteUserV1)

module.exports = router;
