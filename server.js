// modules =================================================
let express        = require('express');
let app            = express();
let bodyParser     = require('body-parser');
let methodOverride = require('method-override');
let  mongoose      = require('mongoose');

// set our port
let port = process.env.PORT || 3000; 

// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect('mongodb://localhost:27017/MovieApp')
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.log("connections failed" , err));

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./server/routes/api')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;                         
