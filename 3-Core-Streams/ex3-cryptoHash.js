const createHash = require('crypto').createHash

process.stdin.pipe(createHash('sha512', {encoding: 'hex'})).pipe(process.stdout);

// test with `echo -n abcd | node ex3-cryptoHash.js; echo`
// should be = to `echo -n abcd | shasum -a 512`
