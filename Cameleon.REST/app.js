var express = require('express')
    mongoose = require('mongoose')
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/eCameleon');
var templateSchema = require('./schemas/templateSchema');
var userSchema = require('./schemas/userSchema');
var activitySchema = require('./schemas/activitySchema');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

templateRouter = require('./routes/templateRoutes')(templateSchema);
userRouter = require('./routes/userRoutes')(userSchema);
activityRouter = require('./routes/activityRoutes')(activitySchema);

app.use('/api/templates', templateRouter);
app.use('/api/users', userRouter);
app.use('/api/activities', activityRouter);

app.get('/', function(req, res) {
    res.send('Welcome!');
});

app.listen(port, function(){
    console.log('Gulp is running the app on PORT: ' + port);
});

