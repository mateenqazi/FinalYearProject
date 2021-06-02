const express = require('express');
const medicineController = require('../controllers/medicineController');
const router = express.Router();
router.post('/add', medicineController.postMedicine);
router.get("/all", medicineController.getAllMedicine)
router.get("/single", medicineController.getSingleMedicine)
module.exports = router;
