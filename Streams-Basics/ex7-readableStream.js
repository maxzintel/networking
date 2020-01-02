const fs = require('fs');
const r = fs.createReadStream(process.argv[2]);
r.pipe(process.stdout);
// test with `node ex7-readableStream.js ex7-readableStream.js` and it will print out the content of this file.
