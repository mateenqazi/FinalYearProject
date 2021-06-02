const User = require('../models/User');
const { validationResult } = require('express-validator');
var path = require('path');

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

    console.log(req.body)
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


exports.editPicture = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }

    console.log(req.files)
    const file = req.files.file
    const newFileName = `pp-uid-${req.body.id}${path.extname(file.name)}`;
    file.mv(
        `./uploads/${newFileName}`,
        err => {
            if (err) {
                return res.status(500).send(err);
            }
        }
    );
    User.findById(req.body.id)
        .then(profile => {
            profile.picture = newFileName;
            profile
                .save()
                .then(profile1 => res.json(profile1));
        });

}

exports.submitStar = async (req, res, next) => {
    console.log('hehe', req.body)
    const user = await User.findById(req.body.id)
    let count = user.rating_record.length
    if (count >= 1) {
        user.rating = (parseInt(req.body.star) + (user.rating * count)) / (count + 1)
        user.rating_record.push(req.body.user_id)
    }
    else {
        user.rating = parseInt(req.body.star)
        user.rating_record.push(req.body.user_id)
    }
    user.save()
        .then(result => { res.send(result) })
}

exports.reportUser = async (req, res, next) => {
    console.log('hehe', req.body)
    const user = await User.findById(req.body.id)
    user.report = user.report + 1
    user.report_record.push(req.body.user_id)
    user.save()
        .then(result => { res.send(result) })
}