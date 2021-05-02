const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    last_updated:
    {
        type: Date,
    }
});

module.exports = post = mongoose.model('post', postSchema);