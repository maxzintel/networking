const wsock = require('websocket-stream');
const stream = wsock('ws://' + location.host);
// websocket command line client.
process.stdin.pipe(stream).pipe(process.stdout);