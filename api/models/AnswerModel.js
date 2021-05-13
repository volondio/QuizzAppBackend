const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    answer: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    },
})
module.exports = new mongoose.model('Answer', AnswerSchema);
