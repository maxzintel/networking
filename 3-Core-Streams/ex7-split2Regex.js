const split = require('split2');
const through = require('through2');

process.stdin
  .pipe(split(/\s+/))
  .pipe(through((buf, enc, next) => {
    console.log('word=' + buf.toString());
    next();
  }));
// Splits the stream over each whitespace.
