import fs from 'fs';

fs.createReadStream('greetz.txt').pipe(process.stdout);