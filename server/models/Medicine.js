const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicineSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    create_at:
    {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    expire_date: {
        type: Date,
        required: true
    }
});

module.exports = medicine = mongoose.model('medicine', medicineSchema);