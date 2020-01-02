import fs from 'fs';
import through from 'through2';

fs.createReadStream('greetz.txt')
  .pipe(through(toUpper)) // Transforms each CHUNK. Meaning, it does not necessarily stream the whole file at once.
  .pipe(process.stdout);

function toUpper (buf, enc, next) { // buffer=binary rep of data, encoding=can probably ignore, next=what to call the next piece of data.
  next(null, buf.toString().toUpperCase()) // next(<err>, <piece we want to send out.>)
  // So we convert the binary toString, then toUpperCase.
}