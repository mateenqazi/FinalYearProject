const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
    },
    dob: { type: Date },
    picture: {
        type: String
    },
    bio: {
        type: String
    },
    gender: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0
    },
    rating_record: {
        type: Array,
        default: []
    },
    report: {
        type: Number,
        default: 0
    },
    report_record: {
        type: Array,
        default: []
    }
});

module.exports = User = mongoose.model('users', UserSchema);
