'use strict';

const mongoose = require('mongoose'),
    Score = mongoose.model('Score');

exports.get_all_scores = function (req, res) {
    Score.find({}, function (err, score) {
        if(err)
            res.send(err);
        res.json(score)
    });
};

exports.create_score = function (req, res) {
    const new_score = new Score(req.body);
    new_score.save(function (err, score) {
        if(err)
            res.send(err)
        res.json(score)
    });
};

exports.get_score_by_quizId = function (req, res) {
    Score.findById(req.params.quizId, function (err, score) {
        if(err)
            res.send(err);
        res.json(score);
    });
};
