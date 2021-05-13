const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    lernstoff: {
        type: String,
        required: true
    },
    questions: [{
        type: mongoose.Types.ObjectId,
        ref: 'Question',
    }],
    title: {
        type: String,
        required: true
    },
    last_change: {
        type: Date,
        default: Date.now
    }
})
module.exports = new mongoose.model('Quiz', QuizSchema);
