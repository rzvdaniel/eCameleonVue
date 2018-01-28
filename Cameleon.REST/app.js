var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

// Mongoose
mongoose.Promise = global.Promise

const db = 'mongodb://localhost/eCameleon'
var promise = mongoose.connect(db, {
  useMongoClient: true,
  /* other options */
})

promise.then(function(db) {
  /* Use `db`, for instance `db.model()` */
})

var appSchema = require('./schemas/appSchema');
var userSchema = require('./schemas/userSchema');
var entitySchema = require('./schemas/entitySchema');
var activitySchema = require('./schemas/activitySchema');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

var appRouter = require('./routes/appRoutes')(appSchema);
var userRouter = require('./routes/userRoutes')(userSchema);
var entityRouter = require('./routes/entityRoutes')(entitySchema);
var activityRouter = require('./routes/activityRoutes')(activitySchema);

app.use('/api/apps', appRouter);
app.use('/api/entities', entityRouter);
app.use('/api/activities', activityRouter);
app.use('/api/users', userRouter);

app.use(function (err, req, res, next) {
  // TODO! Log the server error to the database
})

app.get('/', function(req, res) {
  res.send('Welcome!');
});

app.listen(port, function(){
  console.log('Gulp is running the app on PORT: ' + port);
});

