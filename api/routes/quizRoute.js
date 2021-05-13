const express = require('express');
const router = express.Router();
const Quiz = require('../models/QuizModel')


router.get('/', async (req, res) => {
    try {
        const quizes = await Quiz.find();
        res.json(quizes)
    } catch (e) {
        res.json(e)
    }
});

router.post('/', async (req, res) => {
    const quiz = new Quiz({
        lernstoff: req.body.lernstoff,
        title: req.body.title,
        record: req.body.record
    });
    try {
        const savedquiz = await quiz.save();
        res.json(savedquiz);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;
