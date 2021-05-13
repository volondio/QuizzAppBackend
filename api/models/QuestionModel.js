const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    quizId: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    text: [{
        type: mongoose.Types.ObjectId, ref: 'Answer',
        required: true
    }],
})
module.exports = new mongoose.model('Question', QuestionSchema);
