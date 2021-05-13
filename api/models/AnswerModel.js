const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    questionId: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
})
module.exports = new mongoose.model('Answer', AnswerSchema);
