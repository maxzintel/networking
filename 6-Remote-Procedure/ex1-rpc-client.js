const net = require('net');
const rpc = require('rpc-stream');

var client = rpc();
client.pipe(net.connect(5000, 'localhost')).pipe(client); // a.pipe(b).pipe(a) again.
const remote = client.wrap(['hello']);

remote.hello(process.env.USER, (err, msg) => {
  if (err) return console.error(err);
  console.log(msg);
  client.end();
});
