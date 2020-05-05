#!/usr/bin/env node

//dependencies.
var app = require('./www');
var express = require('express');
var debug = require('debug')('website3:server');
var mongo = require('mongoose');
var fs = require('fs');
var http = require('http');
var https = require('https');

var env = process.env.NODE_ENV || 'development';

//Create HTTPS server
if(env === 'production'){
	const privateKey = fs.readFileSync('/etc/letsencrypt/live/dannbonderff.fr/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/dannbonderff.fr/cert.pem', 'utf8');
	const ca = fs.readFileSync('/etc/letsencrypt/live/dannbonderff.fr/chain.pem', 'utf8');

	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	};

	var httpsPort = normalizePort(process.env.HTTPSPORT || '443');
	var httpsServer = https.createServer(credentials, app);
	httpsServer.listen(httpsPort);

	//Debug
	httpsServer.on('error', onError);
	httpsServer.on('listening', onListening);

	/* Set the HTTP SERVER */
	redirApp = express();
	
	//Routes
	//Serve acme-challenge file for https certification
	app.use(express.static(path.join(__dirname, '/.well-known')));
	app.get('/.well-known/*', (req,res) => {
		res.send(path.join(__dirname, req.url));
	});
	// Set up a route to redirect http to https
	redirApp.get('*', function(req, res) {  
		res.redirect('https://' + req.headers.host + req.url);
	})
	
	var server = http.createServer(redirApp);
	var httpPort = normalizePort(process.env.HTTPPORT || '80');
	server.listen(httpPort);
}
else{
	//Create HTTP server.
	var server = http.createServer(app);
	//Get port from environment and store in Express.
	var httpPort = normalizePort(process.env.HTTPPORT || '80');
	//Listen on provided port, on all network interfaces.
	server.listen(httpPort);

	//Debug
	server.on('error', onError);
	server.on('listening', onListening);
}

//Mongo Connection
mongo.connect('mongodb://localhost/website', {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log('mongo connection OK');
}).catch(err=>{
  console.warn('ERROR while mongo connection');
});

/*///////////////////////////////////////
* FUNCTIONS
///////////////////////////////////////*/
//Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
