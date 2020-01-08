const onend = require('end-of-stream');
const net = require('net');

var server = net.createServer((stream) => {
  var iv = setInterval(() => {
    stream.write(Date.now() + '\n');
  }, 1000)
  onend(stream, () => {
    clearInterval(iv);
  });
});
server.listen(5000);
