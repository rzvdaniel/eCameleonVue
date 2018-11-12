var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var formidable = require('formidable');

// Mongoose
mongoose.Promise = global.Promise

const db = 'mongodb://localhost/eCameleon'
var promise = mongoose.connect(db, {
  useMongoClient: true,
  /* other options */
})

promise.then(function (db) {
  /* Use `db`, for instance `db.model()` */
})

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var queryRouter = require('./routes/queryRoutes')()
var uploadRouter = require('./routes/uploadRoutes')()
app.use('/api/queries', queryRouter);
app.use('/api/upload', uploadRouter);

app.use(function (err, req, res, next) {
  // TODO! Log the server error to the database
})

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.listen(port, function () {
  console.log('Gulp is running the app on PORT: ' + port);
});

