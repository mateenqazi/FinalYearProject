const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    user_id: {
        type: String,
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