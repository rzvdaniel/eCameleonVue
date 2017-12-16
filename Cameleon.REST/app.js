var express = require('express')
    mongoose = require('mongoose')
    bodyParser = require('body-parser')
    cors = require('cors');

var db = mongoose.connect('mongodb://localhost/eCameleon');
var appSchema = require('./schemas/appSchema');
var userSchema = require('./schemas/userSchema');
var entitySchema = require('./schemas/entitySchema');
var activitySchema = require('./schemas/activitySchema');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

appRouter = require('./routes/appRoutes')(appSchema);
userRouter = require('./routes/userRoutes')(userSchema);
entityRouter = require('./routes/entityRoutes')(entitySchema);
activityRouter = require('./routes/activityRoutes')(activitySchema);

app.use('/api/apps', appRouter);
app.use('/api/entities', entityRouter);
app.use('/api/activities', activityRouter);
app.use('/api/users', userRouter);

app.get('/', function(req, res) {
    res.send('Welcome!');
});

app.listen(port, function(){
    console.log('Gulp is running the app on PORT: ' + port);
});

