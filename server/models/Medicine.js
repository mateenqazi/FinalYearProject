const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicineSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
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
        //required: true
    },
    image: {
        type: String
    },
    side_effects: {
        type: String
    },
    uses: {
        type: String
    },
    price: {
        type: String
    }
});

module.exports = medicine = mongoose.model('medicine', medicineSchema);