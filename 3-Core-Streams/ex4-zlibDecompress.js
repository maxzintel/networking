const zlib = require('zlib').createGunzip;
const createHash = require('crypto').createHash;
process.stdin // `< greetz.txt.gz` compressed input...
  .pipe(zlib.createGunzip()) //... becomes uncompressed output
  .pipe(createHash('sha512', {encoding: 'hex'})) // becomes hashed
  .pipe(process.stdout); // print resulting hash
