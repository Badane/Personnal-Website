//dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//express routes
// var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

//express middlewares
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, './public')));

// app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
