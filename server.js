const express = require('express');
const server = express();
const mongoose = require('mongoose');
port = process.env.PORT || 3000;
const scoresRoute = require('./api/routes/scoreRoute');
const quizRoute = require('./api/routes/quizRoute');


require('dotenv/config');
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use('/scores', scoresRoute);
server.use('/quizes', quizRoute);


server.get('/', (req, res) => {
    res.send('We are on Home');
});

//DB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }, () =>
        console.log('connected to DB')
);


server.listen(port);
console.log('QuizzApp RESTful API server started on: ' + port);
