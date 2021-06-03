const Medicine = require('../models/Medicine');
const { validationResult } = require('express-validator');
var path = require('path');
const { spawn } = require('child_process');
const { stdout } = require('process');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { resolve } = require('path');
exports.postMedicine = async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Permission Denied.');
        error.statusCode = 403;
        error.data = errors.array();
        throw error;
    }

    const medicine = await Medicine.create({ user_id: req.body.id, name: req.body.name, price: req.body.price, expire_date: req.body.expire_date, quantity: req.body.qty, type: req.body.type, category: req.body.category })
    await this.scrapeMedicine(medicine._id, medicine.name, medicine.category, medicine.type)

    return res.send(medicine)
};

exports.scrapeMedicine = async (id, name, category, type) => {

    let result = await Medicine.findById(id)
    console.log('result', result)
    console.log(__dirname)
    const childPython = await spawn('python', [__dirname + '/scraping.py', name, category, type]);

    let price, side_effects, uses, image;

    childPython.stdout.on('data', async (data) => {

        info = data.toString()
        price = info.split('\n')[0]
        side_effects = info.split('\n')[1]
        uses = info.split('\n')[2]
        image_link = info.split('\n')[3]
        console.log(price)
        console.log(side_effects)
        console.log(uses)
        console.log(image_link)
        price = price
        side_effects = side_effects
        uses = uses
        image = image_link

        if (result.type !== "free" && parseFloat(result.price) > parseFloat(price)) {
            console.log("-------------------")
            result.price = price
        }

        result.side_effects = side_effects
        result.uses = uses
        result.image = image_link
        await result.save()

        // console.log("saved1")
    });

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childPython.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}

exports.getAllMedicine = async (req, res, next) => {
    const post = await Medicine.find().sort({ 'name': '1' })
    console.log('heeheheh', post)
    return res.send(post)
}
exports.getSingleMedicine = async (req, res, next) => {
    const post = await Medicine.findById(req.query.id)
    console.log('heeheheh', post)
    return res.send(post)
}
