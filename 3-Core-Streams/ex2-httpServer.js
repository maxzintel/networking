const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(process.stdout);
    req.once('end', () => {
      res.end('ok\n');
    });
  } else {
    res.setHeader('content-type', 'text/plain');
    fs.createReadStream('../2-Streams-Basics/greetz.txt').pipe(res);
  };
});
server.listen(5000);
