import fs from 'fs';
const Transform = require('readable-stream').Transform;

fs.createReadStream('greetz.txt')
  .pipe(through(toUpper)) // Transforms each CHUNK. Meaning, it does not necessarily stream the whole file at once.
  .pipe(process.stdout);

var toUpper = new Transform({
  transform: function (buf, enc, next) {
    next(null, buf.toString().toUpperCase())
    // NOTE: line 10 does the same thing as the following 2 lines...
    // this.push(null, buf.toString().toUpperCase())
    // next()
  }
});
