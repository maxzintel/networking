const http = require('http');
const ecstatic = require('ecstatic');
const wsock = require('websocket-stream');
const through = require('through2');

// let ecstatic take care of the http serving.
var server = http.createServer(ecstatic(__dirname + '/public'));
server.listen(5000);

// Just like creating a TCP server with .createServer. Duplex Stream.
wsock.createServer({server: server}, function (stream) {
  stream.pipe(louder()).pipe(stream);
});

function louder () {
  return through ((buf, enc, next) => {
    next(null, buf.toString().toUpperCase());
  });
};