const net = require('net');
const rpc = require('rpc-stream');

// duplex stream connection on tcp server.
// a.pipe(b).pipe(a)
// Every time a client connects that can speak the rpc stream protocol they can call 'hello' and the server responds with 'howdy name'.
net.createServer((stream) => {
  stream.pipe(rpc({
    hello: (name, cb) => {
      cb(nill, 'howdy' + name);
    }
  })).pipe(stream);
}).listen(5000);
