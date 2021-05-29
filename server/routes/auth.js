const express = require('express');
// const { body } = require('express-validator');
const authController = require('../controllers/authController');
const router = express.Router();
// const isAuth = require('../middleware/is-auth');
// require('dotenv/config');
router.post('/login', authController.login);
router.post('/signup', authController.signUp);
module.exports = router;