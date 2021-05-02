const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

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
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     console.log('errors', errors.errors[0].msg);
    //     const error = new Error(errors.errors[0].msg);
    //     error.statusCode = 401;
    //     error.data = errors.array();
    //     throw error;
    // }

    // //extracting data from request
    const email = req.body.email;
    const password = req.body.password;

    // //declaring variable for further use
    // let loadedUser;

    // console.log('req', req.body);


    // //we need exactly one field that why i used findOne and comparing by their email cause email will always different
    // User.findOne({ email: email })
    //     .then(user => {
    //         loadedUser = user;
    //         if (!user) {
    //             const error = new Error('Invalid Credentials');
    //             error.statusCode = 404;
    //             throw error;
    //         }
    //         //comparing encrypted password
    //         return bcrypt.compare(password, user.password)
    //     })
    //     .then(isEqual => {
    //         console.log('isEqual: ', isEqual);
    //         //throw invalid credentials
    //         if (!isEqual) {
    //             const error = new Error('Invalid Credentials');
    //             error.statusCode = 404;
    //             throw error;
    //         }
    //         let avatar = '';
    //         //generating token
    //         const token = jwt.sign(
    //             {
    //                 userId: loadedUser._id.toString(),
    //                 type: loadedUser.userType,
    //                 user: loadedUser.companyName,
    //                 online: loadedUser.online,
    //                 avatar: avatar,
    //                 availableSlot: loadedUser.availableSlot
    //             },
    //             process.env.PRIVATE_KEY
    //         );
    //         //sending response
    //         res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    //     })
    //     .catch(err => {

    //         //catiching password and changing its status code
    //         if (!err.statusCode) {
    //             err.statusCode = 500;
    //         }

    //         //then using next error handing function which is in app file
    //         next(err);
    //     });
    const user = await User.findOne({ email: email })
    let error
    console.log('user', user)
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
                    return res.send({ user: user, isAuth: true })
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