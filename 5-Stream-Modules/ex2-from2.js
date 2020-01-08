// Creates a readable stream with a pull function.
const from = require('from2');
const messages = ['hello', ' world\n', null];
// Downstream consumer triggers next.
from((size, next) => {
  next(null, messages.shift())
}).pipe(process.stdout);
