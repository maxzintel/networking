const net = require('net');
const multiplex = require('multiplex');
const rpc = require('rpc-stream');

var plex = multiplex((stream, id) => { // sets up duplex connection with tcp socket listening to the server.
  // whenever createStream is used on the other end, this function fires.
  if (/^file-/.test(id)) {
    console.log('RECEIVED FILE ' + id.replace(/^file-/, ''));
    stream.pipe(process.stdout);
  };
});
plex.pipe(net.connect(5000)).pipe(plex);

var client = rpc();
client.pipe(plex.createSharedStream('rpc')).pipe(client);

var remote = client.wrap(['read']);
remote.read(process.argv[2], (err) => {
  if (err) console.error(err);
});
