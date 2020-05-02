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

app.use(express.static(path.join(__dirname, './public')));

// app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

module.exports = app;
