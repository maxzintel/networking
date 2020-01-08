// Takes lines of JSON from stdin, turn them to objects, and collect them all in one big array.
const collect = require('collect-stream');
const split = require('split2');

const sp = process.stdin.pipe(split(JSON.parse));
collect(sp, (err, rows) => {
  if (err) console.error(err)
  else console.log(rows)
});
