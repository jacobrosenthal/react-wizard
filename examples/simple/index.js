var beefy = require('beefy'),
http = require('http');

var handler = beefy('examples/simple/simple.js');

var port = 8080;
http.createServer(handler).listen(port);
console.log('open your web browser to http://localhost:' + port);