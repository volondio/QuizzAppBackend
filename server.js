const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Score = require('./api/models/ScoreModel'),
    bodyParser = require('body-parser');


require('dotenv/config')



//DB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log('connected to DB')
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/scoreRoute');
routes(app);

app.listen(port);
console.log('QuizzApp RESTful API server started on: ' + port);
