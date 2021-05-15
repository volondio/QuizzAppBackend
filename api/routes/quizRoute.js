const express = require('express');
const router = express.Router();

const Quiz = require('../models/quiz-schema')

/*

*/

router.get('/', async (req, res) => {
    try {
        const quizes = await Quiz.find();
        res.json(quizes)
    } catch (e) {
        res.json(e)
    }
});

router.get('/:quizId', async (req, res) => {
    try {
        const quizes = await Quiz.findById(req);
        res.json(quizes)
    } catch (e) {
        res.json(e)
    }
});

router.post('/', async (req, res) => {
    const quiz = new Quiz(req.body);

    try {
        const savedQuiz = await quiz.save();
        res.json(savedQuiz);
    } catch (err) {
        res.json(err)
    }
});

router.put('/update/:quizId', async (req, res) => {
    let update = {
        lernstoff: req.body.lernstoff,
        last_change: Date.now()
    };
    let reqDate = new Date(req.body.last_change);

    Quiz.findById(req.params.quizId).then((oldQuiz) => {
        console.log('DATABASEDATE: ', oldQuiz.last_change.getTime())
        console.log('ZUlu Date: ', oldQuiz.last_change)
        console.log('Local Date: ', oldQuiz.last_change.toLocaleString())
        console.log('REQUESTDATE: ', reqDate.getTime())
        const dataBaseDate = oldQuiz.last_change;

        if (dataBaseDate.getTime() < reqDate.getTime()) {
            console.log('UPDATE ERFOLGREICH')
            Quiz.findOneAndUpdate({_id: req.params.quizId}, update, {new: true})
                .then(updatedQuiz => res.json({
                    message: 'UPDATE ERFOLGREICH',
                    updatedQuiz
                }))
                .catch(err => res.status(400).json("Error: " + err));
        } else {
            console.log('UPDATE FEHLGESCHLAGEN')
            res.json({
                message: 'UPDATE FEHLGESCHLAGEN!!! Jemand hat erst kürzlich diesen Lernstoff bearbeitet!',
                oldQuiz
            })
        }

    }).catch(error => {
        console.log(error)
    });


})


module.exports = router;
