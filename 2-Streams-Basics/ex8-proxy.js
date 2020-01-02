// Echo proxy.
// With echo server running on port 5000, this echo proxy on 5005 will forward...
// ...incoming connections to our proxy server and then back out again.
const net = require('net');
net.createServer((stream) => {
  stream.pipe(net.connect(5000, 'localhost')).pipe(stream)
}).listen(5005);
// test via running `nc localhost 5005`
