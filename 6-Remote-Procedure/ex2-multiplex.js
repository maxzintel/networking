const net = require('net');
const multiplex = require('multiplex');
const rpc = require('rpc-stream');
const fs = require('fs');

// TCP server with duplex stream.
// plex == duplex stream.
net.createServer((stream) => {
  var plex = multiplex();
  stream.pipe(plex).pipe(stream); // a.pipe(b).pipe(a) again.
  var client = rpc({ // creates more streams inside.
    read: (name, cb) => {
      if (!/^[\w-]+$/.test(name)) {
        return cb(new Error('file not allowed')); // if the name has weird chars, bail.
      }
      var r = fs.createReadStream('files/' + name); // create read stream from files in the files/ dir. If files/ dne, err.
      r.on('error', cb);
      r.pipe(plex.createStream('file-' + name)).pipe(r);
      cb(null);
    }
  });
  client.pipe(plex.createSharedStream('rpc').pipe(client));
}).listen(5000);
