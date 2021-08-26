var app = require('../app');
var debug = require('debug');
var http = require('http');
let config = require('../config');

/**
 * Get port from environment and store in Express.
 */

app.set('env', config.NODE_ENV);
app.set('port', process.env.PORT || 3000);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen( app.get('port'), '0.0.0.0', () => {
  console.log('Server is up and running on port number '+ app.get('port'));
});
