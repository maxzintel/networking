const net = require('net');
const pump = require('pump');
const crypto = require('crypto');
const pw = 'abc123'
net.createServer((stream) => {
  pump(
  stream, // transform stream.
    crypto.createDecipher('aes192',pw),
    net.connect(5000, 'localhost'),
    crypto.createCipher('aes192',pw),
    stream,
    (err) => {
      console.error(err);
    }
  )
}).listen(5005);
