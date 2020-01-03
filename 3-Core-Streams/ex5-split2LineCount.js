const split = require('split2');
const through = require('through2');

var count = 0;
process.stdin.pipe(split())
  .pipe(through(write, end));

function write (buf, enc, next) {
  count++;
  next();
};

function end () {
  console.log(count);
};
