//dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./config/passport');

//express routes
// var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');

//express middlewares
var cors = require('cors');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
//passport initialization as middleware
app.use(passport.initialize());

//Set backend routes
app.use('/api', apiRouter);
app.use('/auth', authRouter);

//Serve acme-challenge file for https certification
app.use(express.static(path.join(__dirname, '/.well-known')));
app.get('/.well-known/*', (req,res) => {
    res.sendFile(path.join(__dirname, req.url));
});

//Serve angular build project as static ressource - front end
app.use(express.static(path.join(__dirname, '../client/dist/client')));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});

module.exports = app;
