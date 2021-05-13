const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    _quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    question: {
        type: String,
        required: true
    },
    answers: [{
        type: mongoose.Types.ObjectId, ref: 'Answer',
        required: true
    }],
})
module.exports = new mongoose.model('Question', QuestionSchema);
