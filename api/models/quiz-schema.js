const mongoose = require('mongoose');


const answerSchema = new mongoose.Schema({

    answer: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        default: false
    },
})

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [answerSchema],
})


const quizSchema = new mongoose.Schema({
    lernstoff: {
        type: String,
        required: true
    },
    questions: [questionSchema],
    title: {
        type: String,
        required: true
    },
    last_change: {
        type: Date,
        default: Date.now
    }
})

module.exports =  mongoose.model('quizSchema', quizSchema);
