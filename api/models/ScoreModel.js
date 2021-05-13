const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    Created_date: {
        type: Date,
        default: Date.now
    },
    quizId: {
        type: Number,
        required: 'QuizId is required'
    },
    username: {
        type: String,
        required: 'Username is missing'
    },
    record:{
        type: Number,
        required: 'record is missing'
    }
})

module.exports = mongoose.model('Score', ScoreSchema);
