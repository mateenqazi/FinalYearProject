const User = require('../models/User');
const { validationResult } = require('express-validator');
exports.getUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }
    const user = await User.findById(req.query.id)
    return res.send(user)
};


exports.editUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }
    console.log('id', req.body)
    User.findById(req.body.id)
        .then(profile => {

            profile.gender = req.body.gender;
            profile.bio = req.body.bio;
            profile.dob = req.body.dob;
            profile.contact_number = req.body.contact_number;
            console.log('profile', profile)
            profile
                .save()
                .then(profile1 => res.json(profile1));
        });

}
