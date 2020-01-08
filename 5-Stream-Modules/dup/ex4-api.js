const duplexify = require('duplexify');
const mkdirp = require('mkdirp'); // unix command, mkdir -p
const fs = require('fs');

// Logger.
// Take a log 'name' and return a stream that consumers can write their log data to in a log dir.
module.exports = (name) => {
  const d = duplexify()
  mkdirp('logs', (err) => {
    const w = fs.createWriteStream('logs/' + name + '.log');
    d.setWritable(w);
  });
  return d
};
