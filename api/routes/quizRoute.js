const express = require('express');
const router = express.Router();

const Quiz = require('../models/quiz-schema')

/*

*/

// Get all Quizzes
router.get('/', async (req, res) => {
    try {
        const quizes = await Quiz.find();
        res.json(quizes)
    } catch (e) {
        res.json(e)
    }
});

// Get Quiz by QuizId
router.get('/:quizId', async (req, res) => {
    try {
        const quizes = await Quiz.findById(req.params.quizId);
        res.json(quizes)
    } catch (e) {
        res.json(e)
    }
});

// Create a Quiz
router.post('/', async (req, res) => {
    const quiz = new Quiz(req.body);

    try {
        const savedQuiz = await quiz.save();
        res.json(savedQuiz);
    } catch (err) {
        res.json(err)
    }
});

// Update Lernstoff by QuizId and collision handling
router.put('/update/:quizId', async (req, res) => {
    let update = {
        lernstoff: req.body.lernstoff,
        last_change: Date.now()
    };
    let reqDate = new Date(req.body.last_change);

    Quiz.findById(req.params.quizId).then((latestQuiz) => {
        console.log('DATABASEDATE: ', latestQuiz.last_change.getTime())
        console.log('Zulu Date: ', latestQuiz.last_change)
        console.log('Local Date: ', latestQuiz.last_change.toLocaleString())
        console.log('REQUESTDATE: ', reqDate.getTime())
        const dataBaseDate = latestQuiz.last_change;

        if (dataBaseDate.getTime() <= reqDate.getTime()) {
            console.log('UPDATE ERFOLGREICH')
            Quiz.findOneAndUpdate({_id: req.params.quizId}, update, {new: true})
                .then(updatedQuiz => res.status(200).json({
                    message: 'UPDATE ERFOLGREICH',
                    updatedQuiz
                }))
                .catch(err => res.status(400).json("Error: " + err));
        } else {
            console.log('UPDATE FEHLGESCHLAGEN')
            res.json({
                message: 'UPDATE FEHLGESCHLAGEN!!! Jemand hat erst kürzlich diesen Lernstoff bearbeitet!',
                latestQuiz
            })
        }

    }).catch(error => {
        console.log(error)
    });


})


module.exports = router;
