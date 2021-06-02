const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/', userController.getUser);
router.put('/edit_user', userController.editUser);
router.put('/edit_picture', userController.editPicture)
router.put('/submit_star', userController.submitStar)
router.put('/report_user', userController.reportUser)
module.exports = router;
