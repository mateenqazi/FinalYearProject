const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/', userController.getUser);
router.put('/edit_user', userController.editUser);
module.exports = router;
