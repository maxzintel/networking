// import concat from 'concat-stream';
const concat = require('concat-stream');

process.stdin.pipe(concat((body) => {
  console.log(body.length)
}));
// test by running node <filename> and entering some text. Then ^D. Should output a count of the body.length.
