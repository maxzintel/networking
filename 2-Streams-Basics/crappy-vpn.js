const net = require('net');
const crypto = require('crypto');
const pw = 'abc123'
net.createServer((stream) => {
  stream // transform stream.
    .pipe(crypto.createDecipher('aes192',pw)) // we need to take the incoming data that is encrypted and decipher it. Standard symmetric cipher.
    // Note: echo server is now legacy. Does not support encryption. So we will pipe plaintext to it behind the vpn.
    // Then we need to encrypt the data on the way out.
    .pipe(net.connect(5000, 'localhost'))
    .pipe(crypto.createCipher('aes192',pw))
    .pipe(stream)
}).listen(5005);
// Test by running `node ex8-duplexStream.js` `node crappy-vpn.js` `node crappy-vpn-client.js` and inputting data to the client.
// Encrypts both ways on the boundary of the network (between vpn and client)
