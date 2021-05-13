const express = require('express');
const router = express.Router();
const Score = require('../models/ScoreModel')

router.get('/', async (req, res) => {
    try {
        const scores = await Score.find();
        res.json(scores)
    } catch (e) {
        res.json(e)
    }
});

router.post('/', async (req, res) => {
    const score = new Score({
        quizId: req.body.quizId,
        username: req.body.username,
        record: req.body.record
    });
    try {
        const savedScore = await score.save();
        res.json(savedScore);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:quizId', async (req, res) => {
    console.log(req.params.quizId)
    try {
        const scores = await Score.find({quizId: req.params.quizId});
        res.json(scores)
    } catch (e) {
        res.json({message: e})
    }
})


module.exports = router;
