var bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    Promise = require('bluebird'),
    router = require('./router.js');

app = express();
app.use(express.static(path.join(__dirname + '/public/')));
app.use(bodyParser.json());
app.use(router);
app.use('/bower_components', express.static('../simple-social/bower_components'));

var port = process.env.PORT || 7777;
app.listen(port);
console.log('Running on port: ' + port);

var mongoUri = process.env.mongoUri || 'mongodb://localhost';
console.log('Connecting to MongoDB at ' + mongoUri);
mongoose.Promise = Promise;
mongoose.connect(mongoUri);