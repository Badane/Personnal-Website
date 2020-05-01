var express = require('express');
var Picture = require('../models/Picture.js');

var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(4000);

// socket io
io.on('connection', function (socket) {
    socket.on('newdata', function (data) {
        io.emit('new-data', { data: data });
    });
    socket.on('updatedata', function (data) {
      io.emit('update-data', { data: data });
    });
});

// get MongoDB pictures info
router.get('/', function(req, res) {
    Picture.find(function (err, pictures) {
        if (err) return next(err);
        res.json(pictures);
    });
});



module.exports = router;