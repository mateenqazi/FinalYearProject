const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.signUp = async (req, res, next) => {
    console.log('here')
    const errors = validationResult(req);
    console.log('errors', errors)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 401;
        error.data = errors.array();
        throw error;
    }
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        error = 'User Already Exists.';
        return res.status(400).json(error);
    }
    await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err)
                throw err;
            else {
                const user = await User.create({ email: req.body.email, user_name: req.body.user_name, password: hash, contact_number: req.body.contact_number })
                return res.send(user)
            }
        })
    })
};



//this function login both user shipper and driver according to their email
exports.test = (req, res, next) => {
    console.log('req', req.body);
};

exports.login = async (req, res, next) => {
    console.log('here 2')
    const email = req.body.email;
    const password = req.body.password;

    //declaring variable for further use
    let loadedUser;
    console.log('CONFIRMATION_LINK_EXPIRY', process.env.CONFIRMATION_LINK_EXPIRY)
    const user = await User.findOne({ email: email })
    let error
    if (!user) {
        console.log('hllo')
        error = 'Invalid Credentials';
        return res.status(400).json(error);
    }
    else {
        bcrypt
            .compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    const token = jwt.sign(
                        {
                            userId: user._id.toString(),
                            email: user.email,
                            user_name: user.user_name,
                            contact_number: user.contact_number,
                        }, process.env.JWT_SECRET_KEY,
                        { expiresIn: '24h' },
                    );
                    return res.send(token)
                }
                else {
                    error = 'Password does not match';
                    return res.status(400).json(error);
                }
            })
    }
};


exports.editUser = async (req, res) => {

    // const { email, user_name, password, contact_number } = req.body
    // const saltRounds = 10;

    // const user = await userTable.findOne({ email: email })
    // if (user) {
    //     return res.send(user)
    // }
    // else {
    //     bcrypt.genSalt(saltRounds, function (err, salt) {
    //         bcrypt.hash(password, salt, function (err, hash) {
    //         });
    //     });

    //     await bcrypt.genSalt(10, (err, salt) => {

    //         bcrypt.hash(password, salt, async (err, hash) => {
    //             if (err)
    //                 throw err;
    //             else {
    //                 const user = await userTable.findOneAndUpdate({ email: email }, { user_name: user_name, password: hash, contact_number: contact_number })
    //                 return res.send(user)
    //             }
    //         })
    //     })
    // }
}