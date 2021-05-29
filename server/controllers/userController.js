const User = require('../models/User');
const { validationResult } = require('express-validator');
exports.getUser = async (req, res, next) => {
    const errors = validationResult(req);
    console.log('errors', errors)
    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }
    const user = await User.findById(req.query.id)
    return res.send(user)
};

