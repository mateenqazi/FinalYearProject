const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TestimonialsSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image:
    {
        type: String,
    }
});

module.exports = post = mongoose.model('testimonials', TestimonialsSchema);