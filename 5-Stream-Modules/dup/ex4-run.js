var log = require('./ex4-api');

var stream = log();
var n = 0;
var iv = setInterval(() => {
  stream.write(Date.now() + '\n');
  if (n++ === 5) {
    clearInterval(iv);
    stream.end();
  }
}, 100);
