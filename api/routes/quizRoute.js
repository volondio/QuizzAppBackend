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

    try{
        const savedQuiz = await quiz.save();
        res.json(savedQuiz);
    }catch (err) {
        res.json(err)
    }
});

router.put('/update/:quizId', async (req, res) => {
    let update = {lernstoff: req.body.lernstoff};
    let reqDate =  req.body.last_change;



    console.log(reqDate)
   // console.log(dataBaseDate)

    Quiz.findOneAndUpdate({ _id: req.params.quizId }, update, { new: true })
        .then(updatedQuiz => res.json(updatedQuiz))
        .catch(err => res.status(400).json("Error: " + err))

})



module.exports = router;
