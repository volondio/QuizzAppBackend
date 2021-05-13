'use strict';
module.exports = function (app) {
    const score = require('../controllers/scoreController')

    app.route('/scores')
        .get(score.get_all_scores)
        .get(score.get_score_by_quizId)
        .post(score.create_score);

    app.route('/scores/:quizId')
        .get(score.get_score_by_quizId);
}



