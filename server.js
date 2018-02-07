const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const session = require('express-session');
const passport = require('passport');
const errorhandler = require('errorhandler');
const methods = require('methods');
const mongoose = require('mongoose');

//get our API routes 
const api = require('./server/routes/api');

const app = express();

//middleware
app.use(cors());
//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//point static to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our api routes
app.use('/api', api);

//set up our db api routes 

//catch all other routes and return the index file
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set up port 
const port = process.env.PORT || '3000';
app.set('port', port);

//create http server
const server = http.createServer(app);

//listen to provided port on all netword interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));