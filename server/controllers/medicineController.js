const Medicine = require('../models/Medicine');
const { validationResult } = require('express-validator');
var path = require('path');

exports.postMedicine = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }
    const medicine = await Medicine.create({ user_id: req.body.id, name: req.body.name, price: req.body.price, expire_date: req.body.expire_date, quantity: req.body.qty, type: req.body.type, category: req.body.category })
    return res.send(medicine)
};
