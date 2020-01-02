const net = require('net'); // for tcp connections
net.createServer((stream) => { // net takes this stream arg as a default.
  // Each incoming tcp connection takes a stream. A duplex stream, in particular.
  stream.pipe(stream) // Not an infinite loop since input and output are decoupled. Instead this acts as an echo server.
}).listen(5000); // TCP server on port 5000.

// test by running `nc localhost 5000`
