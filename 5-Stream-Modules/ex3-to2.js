// Creates a writable stream with a write and flush function.
// For if you're using through2 but not piping it anywhere.
// Can pipe into but not out of. Only the writable side of through2.
const from = require('to2');
const split = require('split2');

process.stdin.pipe(split()).pipe(to((buf, next) => {
  console.log(buf.length);
  next();
}));
