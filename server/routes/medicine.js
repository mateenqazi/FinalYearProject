const express = require('express');
const medicineController = require('../controllers/medicineController');
const router = express.Router();
router.post('/add', medicineController.postMedicine);
module.exports = router;
