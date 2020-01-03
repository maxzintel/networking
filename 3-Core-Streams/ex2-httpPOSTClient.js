const http = require('http');

const req = http.request({
  method: 'POST',
  host: 'localhost',
  port: 5000,
  url: '/'}, (res) => {
  console.log(res.statusCode);
  res.pipe(process.stdout);
});

req.end('HELLO\n');
